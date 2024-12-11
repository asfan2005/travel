import React from 'react'

function Sayohatlar() {
  const tours = [
    {
      id: 1,
      title: '5 Kunlik Samarqand Sayohati',
      description: 'Qadimiy shahar va tarixiy yodgorliklarni kashf qiling',
      duration: '5 kun',
      price: '500,000 so\'m',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Registan_Square_Samarkand.jpg'
    },
    {
      id: 2,
      title: '6 Kunlik Buxoro Sayohati',
      description: 'Madrasalar va tarixiy obidalarni ko\'rib chiqing',
      duration: '6 kun',
      price: '600,000 so\'m',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Po-i-Kalyan%2C_Bukhara.jpg'
    },
    {
      id: 3,
      title: '10 Kunlik Kompleks O\'zbekiston Sayohati',
      description: 'Butun O\'zbekistonni aylanib chiqing',
      duration: '10 kun',
      price: '1,000,000 so\'m',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Khiva_Uzbekistan.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Sayohatlar</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div 
            key={tour.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img 
              src={tour.image} 
              alt={tour.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{tour.title}</h2>
              <p className="text-gray-600 mb-4">{tour.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">{tour.duration}</span>
                <span className="text-green-600 font-bold">{tour.price}</span>
              </div>
              <button 
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Buyurtma berish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sayohatlar;