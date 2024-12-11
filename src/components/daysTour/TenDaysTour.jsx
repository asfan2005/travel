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

function TenDaysTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedDays, setExpandedDays] = useState({});

  // Add new state for form
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

  // Sahifa yuklanganda yoki yangilanganda tepaga scroll qilish
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
    for (let i = 1; i <= 10; i++) {
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
    
    // Log the form data
    console.log('Form submitted with data:', formData);
    
    // Here you would typically send the data to your backend
    // For now, we'll just log it and reset the form
    
    // Reset form
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

    // Show success message
    alert('Tour request submitted successfully!');
  };

    return (
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        {/* Tour Header */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">
            10-day Golden Road to Samarkand Tour
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-xs sm:text-sm">
            <span>10 Days</span>
            <span className="hidden sm:block mx-2">|</span>
            <span>Tashkent, Khiva, Bukhara, Gijduvan, Samarkand, Shahrisabz</span>
          </div>
        </div>
        {/* Main Content - Flex Container */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left Side - Image Gallery */}
          <div className="w-full lg:w-2/3">
            {/* Main Image Container */}
            <div className="relative">
              {/* Price Badge - Repositioned and styled */}
              <div className="absolute top-2 left-2 z-10 sm:top-4 sm:left-4">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg sm:px-4 sm:py-2">
                  <span className="text-xs sm:text-sm text-gray-600">
                    Private Tour from{" "}
                  </span>
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
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all ${
                    currentImage === index
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
                    className={`absolute inset-0 bg-black/20 transition-opacity ${
                      currentImage === index ? "opacity-0" : "opacity-100"
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
                        <td className="py-2 text-right">
                          ${prices.economy[key]}
                        </td>
                        <td className="py-2 text-right">
                          ${prices.comfort[key]}
                        </td>
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
        {/* Contact Button */}
        <div className="fixed top-[10px] right-[10px] sm:right-[20px] md:right-[50px] z-50">
          <button
            style={{ marginTop: "70px" }}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          >
            <FaAddressCard className="text-lg sm:text-xl md:text-2xl" />
          </button>

          {/* Contact Card */}
          <div
            className={`absolute top-[60px] right-0 w-[280px] sm:w-[300px] md:w-[400px] transition-all duration-500 transform
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10 pointer-events-none"
            }`}
          >
            <div className="bg-white rounded-xl shadow-2xl p-3 sm:p-4 md:p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-1 right-1 md:top-2 md:right-2 text-gray-400 hover:text-red-500 p-1 md:p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
              >
                <FaTimes className="text-lg md:text-xl" />
              </button>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-blue-800 border-b-2 pb-2">
                Contact Information
              </h2>

              <div className="space-y-3 md:space-y-5">
                <div className="flex items-center transform hover:scale-105 transition-transform duration-200">
                  <span className="font-bold mr-2 text-blue-700">Manager:</span>
                  <span className="text-gray-700">Gayrat Nutfulloev</span>
                </div>

                <div className="flex items-center group hover:bg-blue-50 p-2 rounded-lg transition-all duration-200">
                  <FaMapMarkerAlt className="mr-3 text-red-500 text-xl group-hover:scale-125 transition-transform" />
                  <span className="text-gray-600 text-sm">
                    24, Otaboy Eshonov street, Bukhara city, Bukhara region,
                    Uzbekistan, 200100
                  </span>
                </div>

                <div className="flex items-center group hover:bg-blue-50 p-2 rounded-lg transition-all duration-200">
                  <FaPhone className="mr-3 text-green-600 text-xl group-hover:scale-125 transition-transform" />
                  <a
                    href="tel:+998123456789"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    +998 91 448 31 08
                  </a>
                  <div className="ml-3 flex space-x-3">
                    <a
                      href="https://wa.me/998914483109"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="text-green-500 hover:text-green-600 cursor-pointer text-xl hover:scale-125 transition-transform" />
                    </a>
                    <a
                      href="https://t.me/+998914483108"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram className="text-blue-500 hover:text-blue-600 cursor-pointer text-xl hover:scale-125 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center group hover:bg-blue-50 p-2 rounded-lg transition-all duration-200">
                  <FaEnvelope className="mr-3 text-blue-500 text-xl group-hover:scale-125 transition-transform" />
                  <a
                    href="mailto:mr.nutfulloyev@gmail.com"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    mr.nutfulloyev@gmail.com
                  </a>
                </div>

                <div className="flex items-center group hover:bg-blue-50 p-2 rounded-lg transition-all duration-200">
                  <FaGlobe className="mr-3 text-purple-500 text-xl group-hover:scale-125 transition-transform" />
                  <a
                    href="https://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    www.example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Flex Container */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left Side - Image Gallery */}
          <div className="w-full lg:w-2/3">
            {/* ... image gallery code ... */}

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
                    Golden Road to Samarkand, the 10-day Uzbekistan tour
                    itinerary, is an orientally picturesque trip full of bright
                    discoveries. You will do sights of Tashkent, Khiva, Bukhara,
                    Gijduvan, Samarkand and Shakhrisabz learn much interesting
                    about Uzbek traditions and customs, for centuries, handed down
                    from generation to generation, taste genuine Uzbek pilau,
                    visit an oriental bazaar and so on and so forth.
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
                      title: "Toshkent – kelish",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                01:05-03:00
                              </span>
                              <p>Toshkent xalqaro aeroportiga uchish.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                03:00-04:00
                              </span>
                              <p>
                                Toshkent aeroportiga yetib kelish va haydovchi
                                tomonidan kutib olish (haydovchi sizning
                                ism-familiyangiz yozilgan belgini ushlab turadi)
                                va mehmonxonaga transfer.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>Mehmonxonada nonushta.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                09:00-13:00
                              </span>
                              <p>
                                Shahar bo'ylab sayohat: Hazrati Imom majmuasini
                                ziyorat qilish (Kaffol Shoshiy maqbarasi, Muyi
                                Muborak madrasasi, Baroqxon madrasasi, Namozgoh
                                masjidi, Hazrati Imom masjidi), o'zbek mahallasini
                                ko'rish, Mingtepa eski shahri, Minor masjidi.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                13:00-14:00
                              </span>
                              <p>
                                Mahalliy restoranda tushlik ("Besh qozon"
                                oshxonasida Toshkent oshi).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                14:00-17:00
                              </span>
                              <p>
                                Toshkentni kashf etishda davom etamiz: Amir Temur
                                haykali va muzeyi, Jasorat monumenti, Mustaqillik
                                maydoni, Toshkent teleminorasi, Chorsu bozori.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                Kechqurun
                              </span>
                              <p>
                                Mahalliy restoranda kechki ovqat va mehmonxonada
                                tunash.
                              </p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 8 soat
                          </p>
                        </div>
                      ),
                    },
                    {
                      day: 2,
                      title: "Toshkent – Samarqand",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>
                                Mehmonxonada nonushta. Mehmonxonadan chiqish
                                (check-out).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                09:00-13:00
                              </span>
                              <p>
                                Tog' sayohati: Chimyon tog'lariga tashrif: Amirsoy
                                va Bildersoy.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                13:00-14:00
                              </span>
                              <p>
                                Mahalliy restoranda tushlik (mastava va xonim).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                14:00-17:00
                              </span>
                              <p>
                                Kurort sayohati: Chorvoq va Sukok kurortlariga
                                tashrif.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                17:00-18:30
                              </span>
                              <p>Mahalliy restoranda kechki ovqat.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                18:30-19:00
                              </span>
                              <p>Temir yo'l vokzaliga transfer.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                19:41-22:10
                              </span>
                              <p>Samarqandga yuqori tezlikdagi poyezd.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                22:10-22:30
                              </span>
                              <p>
                                Kelish va haydovchi tomonidan vokzalda kutib olish
                                (haydovchi sizning ism-familiyangiz yozilgan
                                belgini ushlab turadi) va mehmonxonaga transfer.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                Kechqurun
                              </span>
                              <p>Mehmonxonada tunash.</p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 15 soat
                          </p>
                        </div>
                      ),
                    },
                    {
                      day: 3,
                      title: "Samarqand",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>Mehmonxonada nonushta.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                09:00-13:00
                              </span>
                              <p>
                                Shahar bo'ylab sayohat: Gʻo'ri Amir maqbarasi
                                (Amir Temur va uning oilasi dafn etilgan afsonaviy
                                maqbara), Registon maydoni - jahonga mashhur 3 ta
                                madrasa majmuasi (Ulugʻbek, Tillakori, Sherdon),
                                Bibi Xonim masjidi - Markaziy Osiyoda qurilgan eng
                                katta masjid, Siyob bozori (mahalliy bozor).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                13:00-14:00
                              </span>
                              <p>
                                Mahalliy restoranda tushlik (Samarqand oshi -
                                "Zigʻir osh").
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                14:00-17:00
                              </span>
                              <p>
                                Samarqandni kashf etishda davom etamiz: Shohizinda
                                ansambli (Temuriylar sulolasi qabrlar va
                                Payg'ambarimizning amakivachchalari dafn etilgan
                                muqaddas joy va qabristonni ziyorat qilish),
                                Hazrati Xizr masjidi, Afrosiyob muzeyi, "El
                                merosi" teatr tomoshasi (Markaziy Osiyo xalqlari
                                tarixi).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                Kechqurun
                              </span>
                              <p>
                                Mahalliy restoranda kechki ovqat va mehmonxonada
                                tunash.
                              </p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 8 soat
                          </p>
                        </div>
                      ),
                    },
                    {
                      day: 4,
                      title: "Samarqand – Buxoro",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>
                                Mehmonxonada nonushta. Mehmonxonadan chiqish
                                (check-out).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                09:00-13:00
                              </span>
                              <p>
                                Shahar bo'ylab sayohat: Xo'ja Doniyor maqbarasi,
                                Ulug'bek rasadxonasi va muzeyi, "Ko'nigil-Meros"
                                ipak qog'oz ishlab chiqarish ustaxonasi.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                13:00-14:00
                              </span>
                              <p>
                                Mahalliy restoranda tushlik (Samarqand manti va
                                no'xat-sho'rak).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                14:00-14:30
                              </span>
                              <p>Temir yo'l vokzaliga transfer.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                15:00-17:00
                              </span>
                              <p>Buxoroga yuqori tezlikdagi poyezd.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                17:00-17:30
                              </span>
                              <p>
                                Kelish va haydovchi tomonidan vokzalda kutib olish
                                (haydovchi sizning ism-familiyangiz yozilgan
                                belgini ushlab turadi) va mehmonxonaga transfer.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                Kechqurun
                              </span>
                              <p>
                                Mahalliy restoranda kechki ovqat va mehmonxonada
                                tunash.
                              </p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 10 soat
                          </p>
                        </div>
                      ),
                    },
                    {
                      day: 5,
                      title: "Buxoro",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>Mehmonxonada nonushta.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                09:00-13:00
                              </span>
                              <p>
                                Shahar bo'ylab sayohat: Ark qal'asi, Bolo Hovuz
                                masjidi, Po-i Kalon majmuasi (Kalon minorasi,
                                Kalon masjidi, Mir Arab madrasasi), Ulug'bek
                                madrasasi, Abdulazizxon madrasasi, Magʻoki Attori
                                masjidi.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                13:00-14:00
                              </span>
                              <p>
                                Mahalliy restoranda tushlik (Buxoro palov va
                                shurva).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                14:00-17:00
                              </span>
                              <p>
                                Buxoroni kashf etishda davom etamiz: Chor Minor
                                madrasasi, Labi Hovuz majmuasi (Nodir Devonbegi
                                madrasasi va xonaqosi, Kukaldosh madrasasi), Toki
                                Zargaron, Telpak Furushon va Sarrofon savdo
                                rastalari.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                17:00-18:30
                              </span>
                              <p>
                                Milliy hunarmandchilik ustaxonalariga tashrif:
                                zargarlik, kashtachilik, qo'g'irchoqlar va
                                boshqalar.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                Kechqurun
                              </span>
                              <p>
                                Mahalliy restoranda kechki ovqat va mehmonxonada
                                tunash.
                              </p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 9 soat
                          </p>
                        </div>
                      ),
                    },
                    {
                      day: 6,
                      title: "Buxoro",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>Mehmonxonada nonushta.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                09:00-13:00
                              </span>
                              <p>
                                Buxoro atrofidagi sayohat: Bahovuddin Naqshband
                                (XIV asr avliyo va faylasufi) memorial-me'moriy
                                majmuasi, Sitorai Mohi Xosa saroyi (XX asr oxirgi
                                Buxoro amirining yozgi qarorgohi), Chor Bakr
                                nekropoli va memorial-me'moriy majmuasi (XVI asr).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                13:00-14:00
                              </span>
                              <p>
                                Mahalliy restoranda tushlik ("Chor Bakr Temur ota"
                                oshxonasida tandirda pishirilgan go'sht).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                14:00-17:00
                              </span>
                              <p>
                                Buxoro eski shahrini kashf etishda davom etamiz:
                                Fayzullo Xo'jayev uy-muzeyi (boy savdogar va
                                siyosatchi), Qo'sh madrasa majmuasi (Modarixon va
                                Abdullaxon madrasalari - XVI asr).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                Kechqurun
                              </span>
                              <p>
                                Mahalliy restoranda kechki ovqat va mehmonxonada
                                tunash.
                              </p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 8 soat
                          </p>
                        </div>
                      ),
                    },
                    {
                      day: 7,
                      title: "Buxoro – Xiva",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>
                                Mehmonxonada nonushta. Mehmonxonadan chiqish
                                (check-out).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                09:00-13:00
                              </span>
                              <p>
                                Romitan tumanidagi "Buxoro cho'l vohasi va spa"
                                turistik klasteriga tashrif: hovuz va qumli sohil,
                                Qizilqum cho'lida tuya va otda sayr qilish,
                                kvadrosikl poygalari, kamondan o'q otish.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                12:00-13:00
                              </span>
                              <p>
                                Mahalliy restoranda tushlik (G'ijduvon kaboblari
                                va Olot somsasi).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                13:00-19:00
                              </span>
                              <p>
                                Xivaga avtomobilda transfer (sedan yoki miniven).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                19:00-19:30
                              </span>
                              <p>
                                Ichan Qal'a qo'rg'oni ichida joylashgan
                                mehmonxonaga piyoda yurish (haydovchi yuklarni
                                ko'tarishda yordam beradi).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                Kechqurun
                              </span>
                              <p>
                                Mahalliy restoranda kechki ovqat va mehmonxonada
                                tunash.
                              </p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 12 soat
                          </p>
                        </div>
                      ),
                    },
                    {
                      day: 8,
                      title: "Xiva",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>Mehmonxonada nonushta.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                09:00-13:00
                              </span>
                              <p>
                                Xiva eski shahrini ziyorat: Ichan Qal'a
                                darvozalari va devorlari, Muhammad Aminxon
                                madrasasi, Kalta Minor minorasi, Ko'hna Ark
                                qarorgohi, Muhammad Rahimxon madrasasi, Shayx Said
                                Alouddin maqbarasi, Musiqa muzeyi, Juma masjidi.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                13:00-14:00
                              </span>
                              <p>Mahalliy restoranda tushlik (Shivit oshi).</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                14:00-17:00
                              </span>
                              <p>
                                Xiva eski shahrini kashf etishda davom etamiz:
                                Arabxona madrasasi, Do'st Olim madrasasi,
                                Abdullaxon madrasasi, Oq masjid, Anushaxon
                                hammomi, Olloqulixon madrasasi, Kutlug'murod Inoq
                                madrasasi, Karvonsaroy, Tosh Hovli saroyi,
                                Islomxo'ja madrasasi va minorasi, Pahlavon
                                Muhammad maqbarasi, Sherg'ozixon madrasasi.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                Kechqurun
                              </span>
                              <p>
                                Mahalliy restoranda kechki ovqat va mehmonxonada
                                tunash.
                              </p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 8 soat
                          </p>
                        </div>
                      ),
                    },
                    {
                      day: 9,
                      title: "Xiva – Urganch – Toshkent",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>
                                Mehmonxonada nonushta. Mehmonxonadan chiqish
                                (check-out).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                09:00-10:00
                              </span>
                              <p>Xivani ziyorat: Nurullaboy saroyini ko'rish.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                10:00-11:00
                              </span>
                              <p>Urganch shahriga transfer.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                11:00-13:00
                              </span>
                              <p>
                                Urganchda Avesto muzeyi va yodgorligi hamda
                                Jaloliddin Manguberdi yodgorligini ziyorat qilish.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                13:00-14:00
                              </span>
                              <p>Mahalliy restoranda tushlik (tuxumbarrak).</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                14:00-19:00
                              </span>
                              <p>
                                Qadimgi Xorazm arxeologik yodgorliklari - Ayaz
                                qal'a va Tuproq qal'ani ziyorat.
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                19:00-21:30
                              </span>
                              <p>Mahalliy restoranda kechki ovqat.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                21:30-22:00
                              </span>
                              <p>Urganch aeroportiga transfer.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                23:00-00:20
                              </span>
                              <p>Toshkentga uchish.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                00:20-01:00
                              </span>
                              <p>
                                Toshkent aeroportiga yetib kelish va haydovchi
                                tomonidan kutib olish (haydovchi sizning
                                ism-familiyangiz yozilgan belgini ushlab turadi)
                                va mehmonxonaga transfer.
                              </p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 18 soat
                          </p>
                        </div>
                      ),
                    },
                    {
                      day: 10,
                      title: "Toshkent – jo'nash",
                      content: (
                        <div className="text-gray-600 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                07:00-09:00
                              </span>
                              <p>
                                Mehmonxonada nonushta. Mehmonxonadan chiqish
                                (check-out) (yuklar mehmonxona qabulxonasida
                                qoldirilishi mumkin).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                10:00-16:00
                              </span>
                              <p>
                                Dam olish uchun bo'sh vaqt (O'zbekiston
                                poytaxtining yangi diqqatga sazovor joylarini
                                kashf etishingiz mumkin: Toshkent shahri bog'i,
                                Magic city bog'i, Ashxobod bog'i, Amaliy san'at
                                muzeyi).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                15:30-16:00
                              </span>
                              <p>
                                Mehmonxonaga qaytish (haydovchi sizni kutib
                                turadi).
                              </p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                16:00-17:00
                              </span>
                              <p>Toshkent Xalqaro Aeroportiga transfer.</p>
                            </div>
                            <div className="flex items-start">
                              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                                17:00-19:30
                              </span>
                              <p>O'z vataningizga uchish.</p>
                            </div>
                          </div>
                          <p className="text-sm italic mt-4">
                            Sayohat davomiyligi: 12 soat
                          </p>
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
                          className={`w-5 h-5 text-gray-400 group-hover:text-blue-500 transform transition-transform duration-200 ${
                            expandedDays[item.day] ? "rotate-180" : ""
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
              </div>
            </div>
          </div>

          {/* Right Side - Pricing Table */}
          <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
            {/* ... existing pricing table code ... */}
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-8 space-y-8">
          {/* Check-in/Check-out Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Mehmonxona ma'lumotlari
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Mehmonxonaga kirish vaqti – 14:00</li>
              <li>Mehmonxonadan chiqish vaqti – 12:00</li>
              <li>
                (Standart chiqish vaqtlari qo'llaniladi. Zarur bo'lsa, yuklar
                saqlash xizmati haqida mehmonxona qabulxonasidan so'rang)
              </li>
            </ul>
          </div>

          {/* Transfer Information */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                AEROPORT TRANSFERLARI HAQIDA MA'LUMOT
              </h3>
              <p className="text-gray-600">
                Transfer haydovchisi sizni kelish zalida kutib oladi va ismingiz
                hamda familiyangiz yozilgan belgini ko'rsatadi. Ba'zi
                aeroportlarda bojxonadan bir nechta chiqish yo'li mavjud, shuning
                uchun haydovchingizni diqqat bilan qidiring. Agar parvozingiz bir
                soatdan ko'proq kechiksa yoki haydovchini topa olmasangiz,
                yuqorida ko'rsatilgan raqamga qo'ng'iroq qiling. Aeroportlarda
                yuklar tashish xizmati har bir sumka uchun $3 dan ortiq bo'lishi
                mumkin; yuklar aravalari har doim ham mavjud emas.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                TEMIR YO'L VOKZALI TRANSFERLARI HAQIDA MA'LUMOT
              </h3>
              <p className="text-gray-600">
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
              Barcha chiptalar mahalliy gid yoki haydovchi tomonidan topshiriladi.
            </p>
            <p className="text-gray-600">
              Favqulodda vaziyatlarda, yuqorida ko'rsatilgan tur kompaniyasi
              ofisiga murojaat qiling.
            </p>
          </div>

          {/* Tour Cost Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Tur narxiga quyidagilar kiradi:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>
                  Toshkent, Samarqand, Buxoro va Xivada 3* mehmonxonada
                  SGL/DBL/TWN xonada nonushta bilan joylashtirish;
                </li>
                <li>
                  Toshkent-Samarqand iqtisodiy poyezd chiptasi (Afrosiyob/Sharq)
                  tashrif kuni chiptalar mavjudligiga qarab;
                </li>
                <li>
                  Samarqand-Buxoro iqtisodiy poyezd chiptasi (Afrosiyob/Sharq)
                  tashrif kuni chiptalar mavjudligiga qarab;
                </li>
                <li>Buxoro-Xiva-Urganch qulay sedan avtomobilida;</li>
                <li>Urganch-Toshkent ichki parvoz;</li>
                <li>
                  Barcha shaharlarda professional ingliz tilida so'zlashuvchi gid
                  xizmatlari;
                </li>
                <li>
                  Barcha transferlar, sayohatlar, shahar bo'ylab sayohatlar
                  konditsionerli sedan avtomobil/minibus/avtobus bilan dasturga
                  muvofiq;
                </li>
              </ol>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Tur narxiga quyidagilar kirmaydi:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Xalqaro aviachiptalar;</li>
                <li>Turistik e-viza to'lovlari;</li>
                <li>Erta kirish va kech chiqish;</li>
                <li>Tushlik va kechki ovqatlar;</li>
                <li>Mehmonxonalarda qo'shimcha xizmatlar uchun to'lovlar;</li>
                <li>
                  Diqqatga sazovor joylarda suratga va videoga olish uchun
                  to'lovlar;
                </li>
                <li>Shaxsiy sug'urta;</li>
                <li>Choy puli va xizmat haqlari;</li>
                <li>Yuqoridagi dasturga kiritilmagan har qanday xizmatlar.</li>
              </ol>
              <p className="mt-4 text-gray-600">
                Diqqatga sazovor joylarga kirish to'lovlari o'z hisobingizdan.
              </p>
            </div>
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
  );
}

export default TenDaysTour;
