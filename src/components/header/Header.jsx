import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../images/Logo.jpg";
function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showMobileAdminLoginModal, setShowMobileAdminLoginModal] = useState(false);

  // Get language from URL parameters
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get('lang');
    return langParam && ['en', 'ru', 'uz'].includes(langParam) ? langParam : 'en';
  });

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setSelectedLanguage(newLang);

    // Update URL with new language parameter
    const params = new URLSearchParams(location.search);
    params.set('lang', newLang);

    // Preserve current path while updating language
    navigate(`${location.pathname}?${params.toString()}`);

    // Update localStorage and document language
    localStorage.setItem('selectedLanguage', newLang);
    document.documentElement.lang = newLang;
  };

  // Update language when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get('lang');
    if (langParam && ['en', 'ru', 'uz'].includes(langParam)) {
      setSelectedLanguage(langParam);
      localStorage.setItem('selectedLanguage', langParam);
      document.documentElement.lang = langParam;
    }
  }, [location.search]);

  const translations = {
    en: {
      tours: "Private tours",
      individualTours: "Individual Tours",
      blog: "Blog",
      aboutUs: "About Us",
      bookNow: "Book Now",
      contactUs: "Contact Us",
      close: "Close",
      adminLogin: "Admin Login",
      username: "Username",
      password: "Password",
      login: "Login",
      invalidCredentials: "Invalid username or password"
    },
    ru: {
      tours: "Туры",
      individualTours: "Индивидуальные туры",
      blog: "Блог",
      aboutUs: "О нас",
      bookNow: "Забронировать",
      contactUs: "Связаться с нами",
      close: "Закрыть",
      adminLogin: "Вход для администратора",
      username: "Имя пользователя",
      password: "Пароль",
      login: "Войти",
      invalidCredentials: "Неверное имя пользователя или пароль"
    },
    uz: {
      tours: "Turlar",
      individualTours: "Individual turlar",
      blog: "Blog",
      aboutUs: "Biz haqimizda",
      bookNow: "Bron qilish",
      contactUs: "Bog'lanish",
      close: "Yopish",
      adminLogin: "Admin kirishi",
      username: "Foydalanuvchi nomi",
      password: "Parol",
      login: "Kirish",
      invalidCredentials: "Noto'g'ri foydalanuvchi nomi yoki parol"
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

  const getSelectedLanguage = () => selectedLanguage;

  // Admin login handler
  const handleAdminLogin = (e) => {
    e.preventDefault()
    // Updated login validation
    if (adminUsername === 'Travelcations' && adminPassword === 'eternalbukhara2024@') {
      // Successful login logic
      console.log('Admin logged in');

      // Navigate to admin dashboard
      navigate("/admin");
      // Reset form and modals
      setShowAdminLoginModal(false);
      setAdminUsername('');
      setAdminPassword('');
      setLoginError('');
    } else {
      // Show error for invalid credentials
      setLoginError(t.invalidCredentials || 'Invalid credentials');
    }
  };

  return (
    <>
      <header className="bg-gradient-to-r from-purple-50 to-blue-50 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="Canaan Travel"
                  className="h-16 w-16 object-cover rounded-xl hover:opacity-90 transition-opacity shadow-md"
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
                  href="tel:+998907113338"
                  className="flex items-center text-gray-700 hover:text-purple-700 transform hover:scale-110 transition-all duration-300"
                  title="Call"
                >
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#search/in%3Asent+travelcationsuz%40gmail.com"
                  className="flex items-center text-gray-700 hover:text-purple-700"
                  title="Send Email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <button
                onClick={() => setShowAdminLoginModal(true)}
                className="ml-4 text-gray-700 hover:text-purple-700 transform hover:scale-110 transition-all duration-300"
                title="Admin Login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
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
                    href="https://mail.google.com/mail/u/0/#search/in%3Asent+travelcationsuz%40gmail.com"
                    className="flex items-center text-gray-700 hover:text-purple-700"
                    title="Send Email"
                    target="_blank"
                    rel="noopener noreferrer"
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

                <div className="flex items-center justify-between py-2 border-t border-gray-100">
                  <span className="text-gray-700 text-lg font-medium">{t.adminLogin}</span>
                  <button
                    onClick={() => {
                      setShowMobileAdminLoginModal(true);
                      setIsOpen(false); // Close mobile menu
                    }}
                    className="text-gray-700 hover:text-purple-700 transform hover:scale-110 transition-all duration-300"
                    title="Admin Login"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </button>
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
                    href="https://mail.google.com/mail/u/0/#search/in%3Asent+travelcationsuz%40gmail.com"
                    className="flex items-center text-gray-700 hover:text-purple-700"
                    title="Send Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    travelcationsuz@gmail.com
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

          {showAdminLoginModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div
                className="absolute top-24 w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 
                transform transition-all duration-300 ease-in-out animate-scaleIn"
                style={{
                  position: 'absolute',
                  top: '100px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="text-center mb-6">
                  <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-purple-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">
                    {t.adminLogin}
                  </h3>
                </div>

                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t.username}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        id="username"
                        value={adminUsername}
                        onChange={(e) => setAdminUsername(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder={t.username}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t.password}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <input
                        type="password"
                        id="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder={t.password}
                        required
                      />
                    </div>
                  </div>

                  {loginError && (
                    <p className="text-red-500 text-sm text-center animate-pulse">
                      {loginError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg 
                    hover:bg-purple-700 transition-colors duration-300 
                    transform hover:scale-105 active:scale-95 
                    font-semibold shadow-md hover:shadow-lg"
                  >
                    {t.login}
                  </button>
                </form>

                <button
                  onClick={() => setShowAdminLoginModal(false)}
                  className="mt-4 w-full text-gray-600 hover:text-gray-800 
                  transition-colors duration-300 underline"
                >
                  {t.close}
                </button>
              </div>
            </div>
          )}

          {showMobileAdminLoginModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div
                className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 
                transform transition-all duration-300 ease-in-out animate-scaleIn m-4"
              >
                <div className="text-center mb-6">
                  <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-purple-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800">
                    {t.adminLogin}
                  </h3>
                </div>

                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div>
                    <label
                      htmlFor="mobile-username"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t.username}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        id="mobile-username"
                        value={adminUsername}
                        onChange={(e) => setAdminUsername(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder={t.username}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mobile-password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t.password}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <input
                        type="password"
                        id="mobile-password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder={t.password}
                        required
                      />
                    </div>
                  </div>

                  {loginError && (
                    <p className="text-red-500 text-sm text-center animate-pulse">
                      {loginError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-lg 
                    hover:bg-purple-700 transition-colors duration-300 
                    transform hover:scale-105 active:scale-95 
                    font-semibold shadow-md hover:shadow-lg"
                  >
                    {t.login}
                  </button>
                </form>

                <button
                  onClick={() => setShowMobileAdminLoginModal(false)}
                  className="mt-4 w-full text-gray-600 hover:text-gray-800 
                  transition-colors duration-300 underline"
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