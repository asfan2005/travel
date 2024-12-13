import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
  FaAddressCard,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
function SixDaysTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedDays, setExpandedDays] = useState({});

  // Add form state
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    citizenship: '',
    email: '',
    phone: '',
    arrivingFrom: '',
    startDate: '',
    endDate: '',
    accommodationType: '',
    numberOfTravelers: '',
    comments: ''
  });

  const images = [
    {
      src: "https://images.unsplash.com/photo-1615971304240-82c1793aa182?q=80&w=1200",
      alt: "Registan Square in Samarkand",
      location: "Samarkand",
    },
    {
      src: "https://images.unsplash.com/photo-1615971304240-82c1793aa182?q=80&w=1200",
      alt: "Tour route map",
      location: "Tour Map",
    },
    {
      src: "https://images.unsplash.com/photo-1615971304240-82c1793aa182?q=80&w=1200",
      alt: "Bukhara City View",
      location: "Bukhara",
    },
    {
      src: "https://images.unsplash.com/photo-1615971304240-82c1793aa182?q=80&w=1200",
      alt: "Khiva Old City",
      location: "Khiva",
    },
    {
      src: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=1200",
      alt: "Modern Tashkent",
      location: "Tashkent",
    },
    {
      src: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?q=80&w=1200",
      alt: "Shahrisabz View",
      location: "Shahrisabz",
    },
    {
      src: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=1200",
      alt: "Gijduvan Crafts",
      location: "Gijduvan",
    },
    {
      src: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=1200",
      alt: "Silk Road Bazaar",
      location: "Bazaar",
    },
    {
      src: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1200",
      alt: "Traditional Architecture",
      location: "Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=1200",
      alt: "Local Cuisine",
      location: "Cuisine",
    },
    {
      src: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1200",
      alt: "Handicrafts",
      location: "Crafts",
    },
    {
      src: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1200",
      alt: "Cultural Performance",
      location: "Culture",
    },
  ];

  const prices = {
    economy: {
      "1 person": 3000,
      "2 persons": 1760,
      "3 persons": 1510,
      "4 persons": 1330,
      "Single supplement": 290,
    },
    comfort: {
      "1 person": 3350,
      "2 persons": 1950,
      "3 persons": 1700,
      "4 persons": 1520,
      "Single supplement": 360,
    },
    deluxe: {
      "1 person": 3940,
      "2 persons": 2220,
      "3 persons": 1980,
      "4 persons": 1790,
      "Single supplement": 680,
    },
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const expandAll = () => {
    const allDays = {};
    for (let i = 1; i <= 6; i++) {
      allDays[i] = true;
    }
    setExpandedDays(allDays);
  };

  const collapseAll = () => {
    setExpandedDays({});
  };

  // Add handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Add submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);

    setFormData({
      title: '',
      firstName: '',
      lastName: '',
      citizenship: '',
      email: '',
      phone: '',
      arrivingFrom: '',
      startDate: '',
      endDate: '',
      accommodationType: '',
      numberOfTravelers: '',
      comments: ''
    });

    alert('Tour request submitted successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      {/* Tour Header */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">
          6-day Uzbekistan Express Tour
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-xs sm:text-sm">
          <span>6 Days</span>
          <span className="hidden sm:block mx-2">|</span>
          <span>Tashkent, Samarkand, Bukhara, Khiva</span>
        </div>
      </div>

      {/* Main Content - Flex Container */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        {/* Left Side - Image Gallery */}
        <div className="w-full lg:w-2/3">
          {/* Main Image Container */}
          <div className="relative">
            {/* Price Badge */}
            <div className="absolute top-2 left-2 z-10 sm:top-4 sm:left-4">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg sm:px-4 sm:py-2">
                <span className="text-xs sm:text-sm text-gray-600">Private Tour from </span>
                <span className="font-bold text-blue-600">US$ 1,330</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                {images[currentImage].location}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={previousImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-2 sm:mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all ${currentImage === index
                  ? "ring-2 ring-blue-500 scale-95"
                  : "hover:scale-95"
                  }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-black/20 transition-opacity ${currentImage === index ? "opacity-0" : "opacity-100"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Pricing Table */}
        <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
          <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 sticky top-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-600">
              Prices per person
            </h2>

            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <table className="w-full min-w-[300px]">
                <thead>
                  <tr className="border-b-2">
                    <th className="py-2 text-left">Persons</th>
                    <th className="py-2 text-right">Econ</th>
                    <th className="py-2 text-right">Comf</th>
                    <th className="py-2 text-right">Deluxe</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(prices.economy).map((key) => (
                    <tr key={key} className="border-b">
                      <td className="py-2">{key}</td>
                      <td className="py-2 text-right">${prices.economy[key]}</td>
                      <td className="py-2 text-right">${prices.comfort[key]}</td>
                      <td className="py-2 text-right">${prices.deluxe[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
              Prices are for 2024 in US$ per person
            </p>

            <button className="mt-4 sm:mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-all hover:scale-105 text-sm sm:text-base">
              Request Tour
            </button>
          </div>
        </div>
      </div>

      {/* Tour Itinerary Section */}
      <div className="mt-8">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          {/* Navigation Menu */}
          <div className="border-b border-gray-200 mb-4 w-full overflow-x-auto">
            <nav className="flex flex-wrap md:flex-nowrap min-w-full md:min-w-0 px-2 md:px-4">
              {/* Scrollable container for mobile */}
              <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 py-1 md:py-0">
                <button
                  className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out
                  hover:shadow-sm hover:-translate-y-[1px]
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  active:translate-y-[1px]"
                >
                  ITINERARY
                </button>

                <button
                  className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out
                  hover:shadow-sm hover:-translate-y-[1px]
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  active:translate-y-[1px]"
                >
                  PRICES
                </button>

                <button
                  className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out
                  hover:shadow-sm hover:-translate-y-[1px]
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  active:translate-y-[1px]"
                >
                  REQUEST
                </button>

                <button
                  className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out
                  hover:shadow-sm hover:-translate-y-[1px]
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  active:translate-y-[1px]"
                >
                  REVIEWS
                </button>
              </div>
            </nav>
          </div>

          {/* Tour Description */}
          <div className="border-t border-b border-gray-200 py-4 my-6">
            <p className="text-gray-600 italic text-base leading-relaxed">
              6-day Uzbekistan Express Tour is a perfect introduction to Uzbekistan's main highlights.
              You will explore the ancient cities of Samarkand and Bukhara, experience the modern capital Tashkent,
              and discover the rich cultural heritage of the Silk Road. This compact tour is ideal for those with limited time
              who want to see the essential sights of Uzbekistan.
            </p>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              Tour itinerary:
            </h2>
            <div className="space-x-4">
              <button
                onClick={expandAll}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {[
              {
                day: 1,
                title: "Tashkent - Arrival",
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          01:05-03:00
                        </span>
                        <p>Arrival at Tashkent International Airport.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          03:00-04:00
                        </span>
                        <p>
                          Meeting at Tashkent airport (driver will be holding a sign with your name)
                          and transfer to hotel.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          07:00-09:00
                        </span>
                        <p>Breakfast at hotel.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          09:00-13:00
                        </span>
                        <p>
                          City sightseeing: Hazrat Imam Complex (Kafal Shashi Mausoleum,
                          Muyi Muborak Madrasah, Barak Khan Madrasah, Namozgoh Mosque,
                          Hazrat Imam Mosque), visit to Uzbek mahalla, ancient city of Mingtepa,
                          Minor Mosque.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          13:00-14:00
                        </span>
                        <p>
                          Lunch at local restaurant (Tashkent pilaf at Besh Qozon - pilaf center).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          14:00-17:00
                        </span>
                        <p>
                          Continue exploring Tashkent: Amir Timur statue and museum,
                          Monument of Courage, Independence Square, Tashkent TV Tower,
                          Chorsu Bazaar.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          Evening
                        </span>
                        <p>Dinner at local restaurant and overnight at hotel.</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                day: 2,
                title: "Tashkent - Samarkand",
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          05:00-05:30
                        </span>
                        <p>
                          Check out from hotel (breakfast box can be arranged at reception).
                          Transfer to railway station (driver will meet you at hotel reception).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          06:03-08:21
                        </span>
                        <p>High-speed train to Samarkand.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          08:21-09:00
                        </span>
                        <p>
                          Meeting at the station (the driver will show you a plate with your name and surname
                          and transfer to the hotel (leave your luggage at the hotel reception
                          you can leave it).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          09:00-13:00
                        </span>
                        <p>
                          City attractions: Amir Cave (burial of Amir Temur and his family
                          legendary mausoleum), Registon Square - 3 world-famous madrasahs
                          (Ulugbek, Tillakori, Sherdon) complex, Bibi Khanim mosque - in Central Asia
                          the largest mosque built, Siyob Bazar (local market).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          13:00-14:00
                        </span>
                        <p>
                          Mahalliy restoranda tushlik (Samarqand oshi - "Zigʻir osh").
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          14:00-17:00
                        </span>
                        <p>
                          We will continue exploring Samarkand: Shahizinda Necropolis (holy place and
                          Tombs of the Timurid dynasty and the tomb of the Prophet Muhammad's cousin
                          cemetery), Hazrat Khizr Mosque, Afrosyab Museum, "Heritage of El"
                          theatrical performance (History of the peoples of Central Asia).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          In the evening
                        </span>
                        <p>Dinner at a local restaurant and overnight at the hotel.</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                day: 3,
                title: "Samarqand - Buxoro",
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          07:00-09:00
                        </span>
                        <p>Breakfast at the hotel. Leaving the hotel.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          09:00-13:00
                        </span>
                        <p>
                          City attractions: Khoja Daniyor mausoleum,
                          Ulugbek Observatory and Museum, "Konigil-Meros" silk paper
                          production workshop.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          13:00-14:00
                        </span>
                        <p>
                          Lunch at a local restaurant (Samarkand mantis and peas-salt).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          14:00-14:30
                        </span>
                        <p>Transfer to the railway station.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          15:00-17:00
                        </span>
                        <p>High-speed train to Bukhara.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          17:00-17:30
                        </span>
                        <p>
                          Pick up by the driver in Bukhara and transfer to the hotel.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          Kechqurun
                        </span>
                        <p>Dinner at a local restaurant and overnight at the hotel.</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                day: 4,
                title: "Buxoro",
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          07:00-09:00
                        </span>
                        <p>Breakfast at the hotel.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          09:00-13:00
                        </span>
                        <p>
                          Sights of the city: Today the tour will be on foot, because Old
                          most of the city is a pedestrian zone. Labi-Pool complex
                          (Nadir Devonbegi pool, house and madrasa, Kukaldosh madrasa),
                          Magoki-Attori mosque, 3 shopping domes (Toki Sarrofon, Toki
                          Telpakfurushon, Toki Zargoron), Ulugbek madrasa, Abdulaziz Khan madrasa,
                          Kalon Tower and Mosque, Mir Arab Madrasah.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          13:00-14:00
                        </span>
                        <p>
                          Lunch at a local restaurant (Bukhara oshi - Oshi sofi).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          14:00-17:00
                        </span>
                        <p>
                          We will continue exploring the Old City of Bukhara: Ark Fortress,
                          Bolo-Hovuz mosque, Chashmai-Ayub mausoleum, Somanii mausoleum.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          In the evening
                        </span>
                        <p>Dinner at a local restaurant and overnight at the hotel.</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                day: 5,
                title: "Buxoro - Toshkent (Jo'nash)",
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          07:00-09:00
                        </span>
                        <p>Breakfast at the hotel. Leaving the hotel.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          09:00-13:00
                        </span>
                        <p>
                          Attractions in the village area: Bahavuddin Naqshband
                          memorial-architectural complex (a saint and philosopher of the 14th century),
                          Sitorai Mohi Khosa Palace (the summer residence of the last Bukhara emir -
                          20th century), Chor Bakr necropolis (16th century memorial-architectural complex).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          13:00-14:00
                        </span>
                        <p>
                          Lunch at a local restaurant (grilled meat).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          14:00-14:30
                        </span>
                        <p>Transfer to the airport.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          15:00-17:00
                        </span>
                        <p>Toshkentga uchish.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          18:00-21:30
                        </span>
                        <p>Fly to your country.</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                day: 6,
                title: "Toshkent - Jo'nash",
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          07:00-09:00
                        </span>
                        <p>Breakfast at the hotel. Leaving the hotel.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          09:00-13:00
                        </span>
                        <p>
                          Getting to know the modern part of the city of Tashkent: Independence Square,
                          Amir Temur Avenue, Tashkent TV Tower, Metro Tour.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          13:00-14:00
                        </span>
                        <p>
                          Lunch at a local restaurant.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          14:00-17:00
                        </span>
                        <p>
                          Chorsu Bazaar, Kukeldash Madrasah, Hazrat Imam Complex
                          (Madrasa of Barak Khan, Mausoleum of Kaffar Oshii, Madrasa of Muyi Mubarak).
                        </p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          17:00-18:00
                        </span>
                        <p>Aeroportga transfer.</p>
                      </div>

                      <div className="flex items-start">
                        <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                          20:00-23:00
                        </span>
                        <p>Getting on an international flight.</p>
                      </div>
                    </div>
                  </div>
                ),
              },
            ].map((item) => (
              <div
                key={item.day}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleDay(item.day)}
                  className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center group"
                >
                  <div>
                    <span className="font-medium text-blue-500">
                      Day {item.day}:{" "}
                    </span>
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 group-hover:text-blue-500 transform transition-transform duration-200 ${expandedDays[item.day] ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedDays[item.day] && (
                  <div className="p-4 border-t bg-white">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Information Section */}
          <div className="mt-8 space-y-8">
            {/* Check-in/Check-out Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Hotel Information
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Check-in time – 14:00</li>
                <li>Check-out time – 12:00</li>
                <li>
                  (Standard check-out times apply. If needed, please inquire about
                  luggage storage service at the hotel reception)
                </li>
              </ul>
            </div>

            {/* Transfer Information */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  AIRPORT TRANSFER INFORMATION
                </h3>
                <p className="text-gray-600">
                  The transfer driver will meet you in the arrival hall with a sign showing your name.
                  Some airports have multiple exits from customs, so please look carefully for your driver.
                  If your flight is delayed by more than one hour or if you cannot find the driver,
                  please call the number shown above. Airport porter service may cost more than $3 per bag;
                  luggage carts are not always available.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  RAILWAY STATION TRANSFER INFORMATION
                </h3>
                <p className="text-gray-600">
                  When possible, the transfer driver will be on the platform next to your train car when you
                  Imkon qadar, transfer haydovchisi poyezddan tushganingizda
                  platformada vagoningiz yonida bo'ladi. Poyezddan tushganda
                  ismingiz va familiyangiz yozilgan belgini qidiring. Iltimos, bu
                  joyda kamida besh daqiqa kuting. Agar transfer agenti bilan
                  bog'lana olmasangiz, poyezdning bosh qismiga qarab yuring va
                  vokzal kirishida kuting. Ko'p joylarda yuklar aravalari mavjud
                  emasligini unutmang. Temir yo'l vokzallarida yuklar tashish
                  xizmati har bir sumka uchun $5 dan ortiq bo'lishi mumkin.
                </p>
              </div>
            </div>

            {/* Tickets and Emergency Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                All tickets are delivered by a local guide or driver.
              </p>
              <p className="text-gray-600">
                In case of emergency, the tour company mentioned above
                contact the office.
              </p>
            </div>

            {/* Tour Cost Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  The tour price includes:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>
                    In 3* hotels in Tashkent, Samarkand, Bukhara and Khiva
                    SGL/DBL/TWN room accommodation with breakfast;
                  </li>
                  <li>
                    Tashkent-Samarkand economic train ticket (Africa/East)
                    depending on the availability of tickets on the day of the visit;
                  </li>
                  <li>
                    Samarkand-Bukhara economic train ticket (Africa/East)
                    depending on the availability of tickets on the day of the visit;
                  </li>
                  <li>Bukhara-Khiva-Urganch in a comfortable sedan car;</li>
                  <li>Urganch-Tashkent domestic flight;</li>
                  <li>
                    Professional English speaking guide in all cities
                    services;
                  </li>
                  <li>
                    All transfers, tours, city tours
                    to the program by air-conditioned sedan car/minibus/bus
                    according to
                  </li>
                </ol>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Tour price does not include:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>International air tickets;</li>
                  <li>Tourist e-visa fees;</li>
                  <li>Early entry and late exit;</li>
                  <li>Lunch and dinner;</li>
                  <li>Payments for additional services in hotels;</li>
                  <li>
                    To take photos and videos in places of interest
                    payments;
                  </li>
                  <li>Personal insurance;</li>
                  <li>Tea money and service fees;</li>
                  <li>Any services not included in the program above.</li>
                </ol>
                <p className="mt-4 text-gray-600">
                  Entrance fees to attractions are at your own expense.
                </p>
              </div>
            </div>



            {/* Tour Request Form Section */}
            <div className="mt-12 w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Tour Request
                </h2>

                <div className="space-y-8">
                  {/* Contact Details */}
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      Contact Details
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      We use this information solely for the purpose of corresponding
                      regarding your travel.
                    </p>

                    <div className="w-full space-y-4">
                      <div className="w-full">
                        <select
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3 bg-white text-gray-700"
                        >
                          <option value="">Select Title</option>
                          <option value="Mr">Mr.</option>
                          <option value="Mrs">Mrs.</option>
                          <option value="Ms">Ms.</option>
                        </select>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="First Name"
                          className="w-full border rounded-md p-3"
                        />

                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Last Name"
                          className="w-full border rounded-md p-3"
                        />
                      </div>

                      <div className="w-full">
                        <select
                          name="citizenship"
                          value={formData.citizenship}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3 bg-white text-gray-700"
                        >
                          <option value="">Select Citizenship</option>

                          {/* Asia */}
                          <optgroup label="Asia">
                            <option value="AF">Afghanistan</option>
                            <option value="AM">Armenia</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BT">Bhutan</option>
                            <option value="BN">Brunei</option>
                            <option value="KH">Cambodia</option>
                            <option value="CN">China</option>
                            <option value="CY">Cyprus</option>
                            <option value="GE">Georgia</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran</option>
                            <option value="IQ">Iraq</option>
                            <option value="IL">Israel</option>
                            <option value="JP">Japan</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Laos</option>
                            <option value="LB">Lebanon</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="MN">Mongolia</option>
                            <option value="MM">Myanmar (Burma)</option>
                            <option value="NP">Nepal</option>
                            <option value="KP">North Korea</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PS">Palestine</option>
                            <option value="PH">Philippines</option>
                            <option value="QA">Qatar</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SG">Singapore</option>
                            <option value="KR">South Korea</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SY">Syria</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VN">Vietnam</option>
                            <option value="YE">Yemen</option>
                          </optgroup>

                          {/* Europe */}
                          <optgroup label="Europe">
                            <option value="AL">Albania</option>
                            <option value="AD">Andorra</option>
                            <option value="AT">Austria</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BG">Bulgaria</option>
                            <option value="HR">Croatia</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="EE">Estonia</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="GR">Greece</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IE">Ireland</option>
                            <option value="IT">Italy</option>
                            <option value="LV">Latvia</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MT">Malta</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="ME">Montenegro</option>
                            <option value="NL">Netherlands</option>
                            <option value="MK">North Macedonia</option>
                            <option value="NO">Norway</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russia</option>
                            <option value="SM">San Marino</option>
                            <option value="RS">Serbia</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="ES">Spain</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="UA">Ukraine</option>
                            <option value="GB">United Kingdom</option>
                            <option value="VA">Vatican City</option>
                          </optgroup>

                          {/* North America */}
                          <optgroup label="North America">
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="BS">Bahamas</option>
                            <option value="BB">Barbados</option>
                            <option value="BZ">Belize</option>
                            <option value="CA">Canada</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CU">Cuba</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="SV">El Salvador</option>
                            <option value="GD">Grenada</option>
                            <option value="GT">Guatemala</option>
                            <option value="HT">Haiti</option>
                            <option value="HN">Honduras</option>
                            <option value="JM">Jamaica</option>
                            <option value="MX">Mexico</option>
                            <option value="NI">Nicaragua</option>
                            <option value="PA">Panama</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="US">United States</option>
                          </optgroup>

                          {/* South America */}
                          <optgroup label="South America">
                            <option value="AR">Argentina</option>
                            <option value="BO">Bolivia</option>
                            <option value="BR">Brazil</option>
                            <option value="CL">Chile</option>
                            <option value="CO">Colombia</option>
                            <option value="EC">Ecuador</option>
                            <option value="GY">Guyana</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="SR">Suriname</option>
                            <option value="UY">Uruguay</option>
                            <option value="VE">Venezuela</option>
                          </optgroup>

                          {/* Africa */}
                          <optgroup label="Africa">
                            <option value="DZ">Algeria</option>
                            <option value="AO">Angola</option>
                            <option value="BJ">Benin</option>
                            <option value="BW">Botswana</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="CM">Cameroon</option>
                            <option value="CV">Cape Verde</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, Democratic Republic</option>
                            <option value="DJ">Djibouti</option>
                            <option value="EG">Egypt</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="ET">Ethiopia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GH">Ghana</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="CI">Ivory Coast</option>
                            <option value="KE">Kenya</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="ML">Mali</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="NA">Namibia</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="RW">Rwanda</option>
                            <option value="ST">São Tomé and Príncipe</option>
                            <option value="SN">Senegal</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="SS">South Sudan</option>
                            <option value="SD">Sudan</option>
                            <option value="SZ">Swaziland</option>
                            <option value="TZ">Tanzania</option>
                            <option value="TG">Togo</option>
                            <option value="TN">Tunisia</option>
                            <option value="UG">Uganda</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </optgroup>

                          {/* Oceania */}
                          <optgroup label="Oceania">
                            <option value="AU">Australia</option>
                            <option value="FJ">Fiji</option>
                            <option value="KI">Kiribati</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="FM">Micronesia</option>
                            <option value="NR">Nauru</option>
                            <option value="NZ">New Zealand</option>
                            <option value="PW">Palau</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="WS">Samoa</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="TO">Tonga</option>
                            <option value="TV">Tuvalu</option>
                            <option value="VU">Vanuatu</option>
                          </optgroup>

                          {/* Caribbean */}
                          <optgroup label="Caribbean">
                            <option value="AI">Anguilla</option>
                            <option value="AW">Aruba</option>
                            <option value="BM">Bermuda</option>
                            <option value="VG">British Virgin Islands</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CW">Curaçao</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="MQ">Martinique</option>
                            <option value="MS">Montserrat</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="MF">Saint Martin</option>
                            <option value="VI">U.S. Virgin Islands</option>
                          </optgroup>

                          {/* Dependencies and Other Territories */}
                          <optgroup label="Dependencies and Other Territories">
                            <option value="AS">American Samoa</option>
                            <option value="AQ">Antarctica</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CK">Cook Islands</option>
                            <option value="FK">Falkland Islands</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GL">Greenland</option>
                            <option value="GU">Guam</option>
                            <option value="HM">
                              Heard Island and McDonald Islands
                            </option>
                            <option value="HK">Hong Kong</option>
                            <option value="MO">Macao</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="NC">New Caledonia</option>
                            <option value="PN">Pitcairn</option>
                            <option value="RE">Réunion</option>
                            <option value="SH">Saint Helena</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="GS">
                              South Georgia and the South Sandwich Islands
                            </option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="TK">Tokelau</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="UM">
                              United States Minor Outlying Islands
                            </option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                          </optgroup>
                        </select>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="E-mail"
                          className="w-full border rounded-md p-3"
                        />

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone (+code)"
                          className="w-full border rounded-md p-3"
                        />
                      </div>

                      <div className="w-full">
                        <input
                          type="text"
                          name="arrivingFrom"
                          value={formData.arrivingFrom}
                          onChange={handleInputChange}
                          placeholder="Arriving from"
                          className="w-full border rounded-md p-3"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Travel Info */}
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      Travel Info
                    </h3>

                    <div className="w-full space-y-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3"
                        />

                        <input
                          type="date"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3"
                        />
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <select
                          name="accommodationType"
                          value={formData.accommodationType}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3 bg-white text-gray-700"
                        >
                          <option value="">Accommodation Type</option>
                          <option value="economy">Economy</option>
                          <option value="comfort">Comfort</option>
                          <option value="deluxe">Deluxe</option>
                          <option value="all">All options</option>
                        </select>

                        <select
                          name="numberOfTravelers"
                          value={formData.numberOfTravelers}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3 bg-white text-gray-700"
                        >
                          <option value="">Number of Travelers</option>
                          <option value="1">1 person</option>
                          <option value="2">2 people</option>
                          <option value="3">3 people</option>
                          <option value="4">4 people</option>
                          <option value="5">5 people</option>
                          <option value="6">6+ people</option>
                          <option value="group">Group tour</option>
                        </select>
                      </div>

                      <div className="w-full">
                        <textarea
                          name="comments"
                          value={formData.comments}
                          onChange={handleInputChange}
                          placeholder="Comments and additional information"
                          className="w-full border rounded-md p-3 h-32 resize-none"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors"
                    >
                      Send request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixDaysTour;
