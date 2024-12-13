import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return savedLanguage && ['en', 'ru', 'uz'].includes(savedLanguage) ? savedLanguage : 'en';
  });

  const translations = {
    en: {
      tours: "Tours",
      individualTours: "Individual Tours",
      blog: "Blog",
      aboutUs: "About Us",
      bookNow: "Book Now",
      contactUs: "Contact Us",
      close: "Close"
    },
    ru: {
      tours: "Туры",
      individualTours: "Индивидуальные туры",
      blog: "Блог",
      aboutUs: "О нас",
      bookNow: "Забронировать",
      contactUs: "Связаться с нами",
      close: "Закрыть"
    },
    uz: {
      tours: "Turlar",
      individualTours: "Individual turlar",
      blog: "Blog",
      aboutUs: "Biz haqimizda",
      bookNow: "Bron qilish",
      contactUs: "Bog'lanish",
      close: "Yopish"
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
    document.documentElement.lang = selectedLanguage;

    const handleBeforeUnload = () => {
      localStorage.setItem('selectedLanguage', 'en');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [selectedLanguage]);

  const t = translations[selectedLanguage];

  const renderFlag = (country) => {
    switch (country) {
      case 'uz':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15">
            <rect width="20" height="5" fill="#1EB5FF" />
            <rect y="5" width="20" height="5" fill="#FFFFFF" />
            <rect y="10" width="20" height="5" fill="#3D9238" />
            <circle cx="4" cy="2.5" r="1.5" fill="#FFFFFF" />
            <g fill="#FFFFFF">
              <circle cx="7" cy="2.5" r="0.5" />
              <circle cx="8.5" cy="2.5" r="0.5" />
              <circle cx="10" cy="2.5" r="0.5" />
              <circle cx="7" cy="1.5" r="0.5" />
              <circle cx="8.5" cy="1.5" r="0.5" />
              <circle cx="10" cy="1.5" r="0.5" />
              <circle cx="7" cy="3.5" r="0.5" />
              <circle cx="8.5" cy="3.5" r="0.5" />
              <circle cx="10" cy="3.5" r="0.5" />
              <circle cx="7" cy="2.5" r="0.5" />
              <circle cx="8.5" cy="2.5" r="0.5" />
              <circle cx="10" cy="2.5" r="0.5" />
            </g>
          </svg>
        );
      case 'ru':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15">
            <rect width="20" height="5" fill="#FFFFFF" />
            <rect y="5" width="20" height="5" fill="#0039A6" />
            <rect y="10" width="20" height="5" fill="#D52B1E" />
          </svg>
        );
      case 'en':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15">
            <rect width="20" height="15" fill="#012169" />
            <path d="M0,0 L20,15 M20,0 L0,15" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="1" />
            <path d="M10,0 L10,15 M0,7.5 L20,7.5" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M10,0 L10,15 M0,7.5 L20,7.5" stroke="#C8102E" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const getSelectedLanguage = () => selectedLanguage;
  return (
    <>
      <header className="bg-gradient-to-r from-purple-50 to-blue-50 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
              <Link to="/" className="flex items-center">
                <img
                  src="https://canaan.travel/static/images/Canaan-logo-1.png"
                  alt="Canaan Travel"
                  className="h-12 hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            <nav className="hidden xl:flex items-center space-x-8">
              <div className="relative group">
                <Link to="/tours" className="text-gray-700 group-hover:text-blue-600 text-lg font-medium transition-colors duration-300">
                  {t.tours}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              <div className="relative group hidden md:block">
                <Link to="/individual-tours" className="text-gray-700 group-hover:text-blue-600 text-lg font-medium transition-colors duration-300">
                  {t.individualTours}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              <div className="relative group">
                <a
                  href="https://bukharatourism.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 group-hover:text-blue-600 text-lg font-medium transition-colors duration-300"
                >
                  {t.blog}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>

              <div className="relative group">
                <Link to="/our-mission" className="text-gray-700 group-hover:text-blue-600 text-lg font-medium transition-colors duration-300">
                  {t.aboutUs}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <a
                  href="tel:+998918218195"
                  className="flex items-center text-gray-700 hover:text-purple-700 transform hover:scale-110 transition-all duration-300"
                  title="Call"
                >
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a
                  href="mailto:asfan.coder@gmail.com?subject=Canaan Travel - Inquiry&body=Hello,%0D%0A%0D%0AI am contacting you through the Canaan Travel website.%0D%0A%0D%0ABest regards,"
                  className="flex items-center text-gray-700 hover:text-purple-700"
                  title="Send Email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              <Link
                to="/booking"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                {t.bookNow}
              </Link>

              <div className="relative inline-block">
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="appearance-none backdrop-blur-md bg-white/30 border border-purple-200 text-gray-700 pl-10 pr-8 py-2 rounded-lg hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center">
                  {renderFlag(selectedLanguage)}
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-600">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </nav>

            <button
              className="xl:hidden transform hover:scale-110 transition-transform duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="xl:hidden pb-4 animate-slideDown bg-white/95 backdrop-blur-sm shadow-lg rounded-b-2xl">
              <div className="flex flex-col space-y-4 px-4 w-full">
                <Link
                  to="/tours"
                  className="w-full block py-2 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-300 border-b border-gray-100 hover:bg-purple-50 rounded-lg px-3"
                  onClick={() => setIsOpen(false)}
                >
                  {t.tours}
                </Link>

                <Link
                  to="/individual-tours"
                  className="w-full block py-2 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-300 border-b border-gray-100 hover:bg-purple-50 rounded-lg px-3"
                  onClick={() => setIsOpen(false)}
                >
                  {t.individualTours}
                </Link>

                <a
                  href="https://bukharatourism.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-300 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {t.blog}
                </a>

                <Link
                  to="/our-mission"
                  className="block py-2 text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-300 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {t.aboutUs}
                </Link>

                <div className="flex items-center space-x-4 py-2">
                  <a
                    href="tel:+998918218195"
                    className="flex items-center text-gray-700 hover:text-purple-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:asfan.coder@gmail.com"
                    className="flex items-center text-gray-700 hover:text-purple-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>

                <Link
                  to="/booking"
                  className="block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {t.bookNow}
                </Link>

                <div className="relative py-2">
                  <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="w-full appearance-none backdrop-blur-md bg-white/30 border border-purple-200 text-gray-700 pl-10 pr-8 py-2 rounded-lg hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2">
                    {renderFlag(selectedLanguage)}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showContactModal && (
            <div className="fixed inset-0 backdrop-blur-sm bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
              <div className="bg-white/90 rounded-lg p-6 w-full max-w-sm shadow-2xl transform transition-all duration-300 scale-100 animate-scaleIn">
                <h3 className="text-lg font-semibold mb-4">{t.contactUs}</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+998918218195"
                    className="flex items-center text-gray-700 hover:text-purple-700"
                    title="Call"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:asfan.coder@gmail.com?subject=Canaan Travel - Inquiry&body=Hello,%0D%0A%0D%0AI am contacting you through the Canaan Travel website.%0D%0A%0D%0ABest regards,"
                    className="flex items-center text-gray-700 hover:text-purple-700"
                    title="Send Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    asfan.coder@gmail.com
                  </a>
                </div>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="mt-6 w-full bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
                >
                  {t.close}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;