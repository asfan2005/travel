import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Admin() {
  const [activeMenu, setActiveMenu] = useState('settings')
  const [orders, setOrders] = useState([])
  const [individualTours, setIndividualTours] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [bookings, setBookings] = useState([])
  
  const [selectedTour, setSelectedTour] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Settings state
  const [settings, setSettings] = useState({
    companyName: 'Travel Agency',
    contactEmail: 'info@travelagency.com',
    phoneNumber: '+998 XX XXX XX XX',
    address: 'Toshkent sh., Yunusobod tumani',
    socialMedia: {
      telegram: '',
      instagram: '',
      facebook: ''
    },
    language: 'uz',
    theme: 'light'
  })

  const menuItems = [
    { id: 'settings', label: 'Sozlamalar', icon: '⚙️' },
    { id: 'orders', label: 'Buyurtmalar', icon: '🛒' },
    { id: 'individual', label: 'Individual Turlar', icon: '🌍' },
    { id: 'bron', label: 'Bron Qilish', icon: '📅' }
  ]

  // Buyurtmalarni olish funksiyasi
  const fetchOrders = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:8080/buyurtma')
      setOrders(response.data)
      setError(null)
    } catch (err) {
      setError('Buyurtmalarni olishda xatolik yuz berdi')
      console.error('Xatolik:', err)
    } finally {
      setLoading(false)
    }
  }

  // Individual turlarni olish funksiyasi
  const fetchIndividualTours = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:8080/individual')
      setIndividualTours(response.data)
      setError(null)
    } catch (err) {
      setError('Individual turlarni olishda xatolik yuz berdi')
      console.error('Xatolik:', err)
    } finally {
      setLoading(false)
    }
  }

  // Bron qilishlarni olish funksiyasi
  const fetchBookings = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:8080/bronQilish')
      setBookings(response.data)
      setError(null)
    } catch (err) {
      setError('Bron qilishlarni olishda xatolik yuz berdi')
      console.error('Xatolik:', err)
    } finally {
      setLoading(false)
    }
  }

  // Menyu o'zgarganda ma'lumotlarni yuklab olish
  useEffect(() => {
    if (activeMenu === 'orders') {
      fetchOrders()
    } else if (activeMenu === 'individual') {
      fetchIndividualTours()
    } else if (activeMenu === 'bron') {
      fetchBookings()
    }
  }, [activeMenu])

  // Function to open modal with tour details
  const openTourDetailsModal = (tour) => {
    setSelectedTour(tour)
    setIsModalOpen(true)
  }

  // Function to close modal
  const closeTourDetailsModal = () => {
    setSelectedTour(null)
    setIsModalOpen(false)
  }

  // Modal component for tour details
  const TourDetailsModal = () => {
    if (!selectedTour) return null

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
        onClick={closeTourDetailsModal}
      >
        <div 
          className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Individual Tur Tafsilotlari
            </h2>
            <button 
              onClick={closeTourDetailsModal}
              className="text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(selectedTour).map(([key, value]) => (
              <div key={key}>
                <p className="font-semibold text-gray-700 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                </p>
                <p className="text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Settings update handler
  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested social media fields
    if (name.startsWith('socialMedia.')) {
      const socialMediaKey = name.split('.')[1];
      setSettings(prev => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [socialMediaKey]: value
        }
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }

  // Save settings handler
  const saveSettings = () => {
    try {
      // Here you would typically send the settings to a backend API
      localStorage.setItem('appSettings', JSON.stringify(settings));
      alert('Sozlamalar muvaffaqiyatli saqlandi!');
    } catch (error) {
      console.error('Sozlamalarni saqlashda xatolik:', error);
      alert('Sozlamalarni saqlashda xatolik yuz berdi.');
    }
  }

  // Modified renderContent method with card-based mobile view
  const renderContent = () => {
    const renderCardView = (items, type) => {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.length === 0 ? (
            <div className="col-span-full text-center p-4 text-gray-500">
              {type === 'orders' && 'Buyurtmalar mavjud emas'}
              {type === 'individual' && 'Individual turlar mavjud emas'}
              {type === 'bron' && 'Bron qilishlar mavjud emas'}
            </div>
          ) : (
            items.map(item => (
              <div 
                key={item.id} 
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
              >
                {type === 'orders' && (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-blue-600">#{item.id}</span>
                    </div>
                    <div className="space-y-2">
                      <p><strong>Ism:</strong> {item.name}</p>
                      <p><strong>Telefon Raqam:</strong> {item.phoneNumber}</p>
                      <p className="text-gray-600">
                        <strong>Xabar:</strong> 
                        {item.message.length > 100 
                          ? `${item.message.substring(0, 100)}...` 
                          : item.message}
                      </p>
                    </div>
                  </>
                )}

                {type === 'individual' && (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-blue-600">#{item.id}</span>
                      <button 
                        className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
                        onClick={() => openTourDetailsModal(item)}
                      >
                        Batafsil
                      </button>
                    </div>
                    <div className="space-y-2">
                      <p><strong>Ism:</strong> {item.firstName} {item.lastName}</p>
                      <p><strong>Email:</strong> {item.email}</p>
                      <p><strong>Telefon:</strong> {item.phone}</p>
                    </div>
                  </>
                )}

                {type === 'bron' && (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-blue-600">#{item.id}</span>
                    </div>
                    <div className="space-y-2">
                      <p><strong>To'liq Ism:</strong> {item.fullName}</p>
                      <p><strong>Sana:</strong> {item.date}</p>
                      <p><strong>Email:</strong> {item.email}</p>
                      <p><strong>Telefon:</strong> {item.phone}</p>
                      <p className="text-gray-600">
                        <strong>Xabar:</strong> 
                        {item.message.length > 100 
                          ? `${item.message.substring(0, 100)}...` 
                          : item.message}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      );
    };

    switch(activeMenu) {
      case 'settings':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sozlamalar</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Asosiy ma'lumotlar */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Asosiy Ma'lumotlar</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Kompaniya Nomi</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={settings.companyName}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Kontakt Email</label>
                    <input 
                      type="email" 
                      name="contactEmail"
                      value={settings.contactEmail}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Telefon Raqam</label>
                    <input 
                      type="text" 
                      name="phoneNumber"
                      value={settings.phoneNumber}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Qo'shimcha sozlamalar */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Qo'shimcha Sozlamalar</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Manzil</label>
                    <input 
                      type="text" 
                      name="address"
                      value={settings.address}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Telegram Kanal</label>
                    <input 
                      type="text" 
                      name="socialMedia.telegram"
                      value={settings.socialMedia.telegram}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Instagram Sahifasi</label>
                    <input 
                      type="text" 
                      name="socialMedia.instagram"
                      value={settings.socialMedia.instagram}
                      onChange={handleSettingsChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Til va tema sozlamalari */}
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Til</label>
                <select 
                  name="language"
                  value={settings.language}
                  onChange={handleSettingsChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="uz">O'zbekcha</option>
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Tema</label>
                <select 
                  name="theme"
                  value={settings.theme}
                  onChange={handleSettingsChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="light">Och rang</option>
                  <option value="dark">Qora rang</option>
                </select>
              </div>
            </div>

            {/* Saqlash tugmasi */}
            <div className="mt-6 flex justify-end">
              <button 
                onClick={saveSettings}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Sozlamalarni Saqlash
              </button>
            </div>
          </div>
        )
      
      case 'orders':
        return (
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Buyurtmalar</h2>
            {loading ? (
              <div className="text-center text-gray-500">Yuklanmoqda...</div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 text-left">ID</th>
                        <th className="border p-3 text-left">Ism</th>
                        <th className="border p-3 text-left">Telefon Raqam</th>
                        <th className="border p-3 text-left">Xabar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="text-center p-4 text-gray-500">
                            Buyurtmalar mavjud emas
                          </td>
                        </tr>
                      ) : (
                        orders.map(order => (
                          <tr 
                            key={order.id} 
                            className="hover:bg-gray-50 transition duration-200"
                          >
                            <td className="border p-3">{order.id}</td>
                            <td className="border p-3">{order.name}</td>
                            <td className="border p-3">{order.phoneNumber}</td>
                            <td className="border p-3 truncate max-w-xs">
                              {order.message.length > 50 
                                ? `${order.message.substring(0, 50)}...` 
                                : order.message}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                
                {/* Mobile Card View */}
                <div className="block md:hidden">
                  {renderCardView(orders, 'orders')}
                </div>
              </>
            )}
          </div>
        )
      
      case 'individual':
        return (
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Individual Turlar</h2>
            {loading ? (
              <div className="text-center text-gray-500">Yuklanmoqda...</div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 text-left">ID</th>
                        <th className="border p-3 text-left">Ism</th>
                        <th className="border p-3 text-left">Email</th>
                        <th className="border p-3 text-left">Telefon</th>
                        <th className="border p-3 text-left">Amallar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {individualTours.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center p-4 text-gray-500">
                            Individual turlar mavjud emas
                          </td>
                        </tr>
                      ) : (
                        individualTours.map(tour => (
                          <tr 
                            key={tour.id} 
                            className="hover:bg-gray-50 transition duration-200"
                          >
                            <td className="border p-3">{tour.id}</td>
                            <td className="border p-3">{tour.firstName} {tour.lastName}</td>
                            <td className="border p-3">{tour.email}</td>
                            <td className="border p-3">{tour.phone}</td>
                            <td className="border p-3">
                              <button 
                                className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
                                onClick={() => openTourDetailsModal(tour)}
                              >
                                Batafsil
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                
                {/* Mobile Card View */}
                <div className="block md:hidden">
                  {renderCardView(individualTours, 'individual')}
                </div>
              </>
            )}
          </div>
        )
      
      case 'bron':
        return (
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Bron Qilishlar</h2>
            {loading ? (
              <div className="text-center text-gray-500">Yuklanmoqda...</div>
            ) : error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-3 text-left">ID</th>
                        <th className="border p-3 text-left">To'liq Ism</th>
                        <th className="border p-3 text-left">Sana</th>
                        <th className="border p-3 text-left">Email</th>
                        <th className="border p-3 text-left">Telefon</th>
                        <th className="border p-3 text-left">Xabar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center p-4 text-gray-500">
                            Bron qilishlar mavjud emas
                          </td>
                        </tr>
                      ) : (
                        bookings.map(booking => (
                          <tr 
                            key={booking.id} 
                            className="hover:bg-gray-50 transition duration-200"
                          >
                            <td className="border p-3">{booking.id}</td>
                            <td className="border p-3">{booking.fullName}</td>
                            <td className="border p-3">{booking.date}</td>
                            <td className="border p-3">{booking.email}</td>
                            <td className="border p-3">{booking.phone}</td>
                            <td className="border p-3">
                              {booking.message.length > 50 
                                ? `${booking.message.substring(0, 50)}...` 
                                : booking.message}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                
                {/* Mobile Card View */}
                <div className="block md:hidden">
                  {renderCardView(bookings, 'bron')}
                </div>
              </>
            )}
          </div>
        )
      
      default:
        return <div>Tanlangan bo'lim</div>
    }
  }

  // Add mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Admin Panel</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none"
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Sidebar - Responsive */}
      <div className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
        w-full md:w-64 bg-white shadow-lg 
        absolute md:relative z-50 md:z-0
        top-16 md:top-0 left-0
      `}>
        <div className="p-6 border-b hidden md:block">
          <h1 className="text-2xl font-bold text-center text-blue-600">Admin Panel</h1>
        </div>
        <nav className="p-4">
          {menuItems.map(item => (
            <button 
              key={item.id}
              onClick={() => {
                setActiveMenu(item.id)
                setIsMobileMenuOpen(false)
              }}
              className={`
                w-full text-left p-3 rounded-lg mb-2 flex items-center
                ${activeMenu === item.id 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-blue-100 text-gray-700'}
                transition duration-200
              `}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area - Responsive */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto mt-16 md:mt-0">
        <div className="w-full mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Add modal rendering */}
      {isModalOpen && <TourDetailsModal />}
    </div>
  )
}

export default Admin