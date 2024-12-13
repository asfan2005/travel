import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { ImSpinner8 } from "react-icons/im";
import { useSearchParams } from 'react-router-dom';

// Translations object
const translations = {
  en: {
    placesToVisit: "Places to Visit",
    duration: "Duration",
    durationText: "10 days/9 nights",
    season: "Season",
    seasonText: "Daily Departures",
    hotel: "Hotel",
    hotelText: "3*/4*",
    bookNow: "BOOK NOW",
    priceStarts: "Price starts from:",
    congratulations: "Congratulations! 🎉",
    requestSubmitted: "Your request has been successfully submitted",
    operatorContact: "Our operators will contact you within 30 minutes",
    yourName: "Your Name*",
    yourEmail: "Your Email*",
    writeMessage: "Write your message...",
    loading: "Loading...",
    send: "Send",
    aboutTour: "About the Tour Program",
    tourDescription: "This is an amazing journey through Uzbekistan's historical and cultural centers, offering a chance to discover the grandeur of the East and the heritage of great civilizations.",
    tourRoute: "Tour Route 🗺",
    dearTraveler: "Dear traveler, we will visit ancient cities with over 2000 years of history. We will explore the heritage of great historical figures like Amir Temur, Mirzo Ulugbek, and the Samanids.",
    cities: {
      samarkand: "Samarkand",
      bukhara: "Bukhara",
      khiva: "Khiva"
    },
    landmarks: {
      registan: "Famous Registan Ensemble",
      samanids: "Samanids Mausoleum",
      ichanQala: "Unique Ichan-Qala"
    },
    journeyDescription: "This journey allows you to feel the spirit of antiquity, experience Eastern traditions, and enjoy the natural beauty of the Chimgan mountains, which has become a popular destination for travelers."
  },
  uz: {
    placesToVisit: "Tashrif buyuriladigan joylar",
    duration: "Davomiyligi",
    durationText: "10 kun/9 kecha",
    season: "Mavsum",
    seasonText: "Har kunlik jo'nashlar",
    hotel: "Mehmonxona",
    hotelText: "3*/4*",
    bookNow: "HOZIR BAND QILING",
    priceStarts: "Narxlar boshlanadi:",
    congratulations: "Tabriklaymiz! 🎉",
    requestSubmitted: "Sizning so'rovingiz muvaffaqiyatli yuborildi",
    operatorContact: "Operatorlarimiz 30 daqiqa ichida siz bilan bog'lanishadi",
    yourName: "Ismingiz*",
    yourEmail: "Elektron pochtangiz*",
    writeMessage: "Xabaringizni yozing...",
    loading: "Yuklanmoqda...",
    send: "Yuborish",
    aboutTour: "Sayohat dasturi haqida",
    tourDescription: "Bu O'zbekistonning tarixiy va madaniy markazlari bo'ylab ajoyib sayohat bo'lib, Sharq ulug'vorligi va buyuk sivilizatsiyalar merosini kashf etish imkonini beradi.",
    tourRoute: "Sayohat yo'nalishi 🗺",
    dearTraveler: "Aziz sayyoh, biz 2000 yildan ortiq tarixga ega qadimiy shaharlarga tashrif buyuramiz. Amir Temur, Mirzo Ulug'bek va Somoniylar kabi buyuk tarixiy shaxslar merosini o'rganamiz.",
    cities: {
      samarkand: "Samarqand",
      bukhara: "Buxoro",
      khiva: "Xiva"
    },
    landmarks: {
      registan: "Mashhur Registon ansambli",
      samanids: "Somoniylar maqbarasi",
      ichanQala: "Noyob Ichan-Qal'a"
    },
    journeyDescription: "Bu sayohat sizga qadimiyat ruhini his qilish, Sharq an'analarini boshdan kechirish va sayohatchilar uchun mashhur manzilga aylangan Chimyon tog'larining tabiiy go'zalligidan bahramand bo'lish imkonini beradi."
  },
  ru: {
    placesToVisit: "Места для посещения",
    duration: "Продолжительность",
    durationText: "10 дней/9 ночей",
    season: "Сезон",
    seasonText: "Ежедневные отправления",
    hotel: "Отель",
    hotelText: "3*/4*",
    bookNow: "ЗАБРОНИРОВАТЬ СЕЙЧАС",
    priceStarts: "Цены начинаются от:",
    congratulations: "Поздравляем! 🎉",
    requestSubmitted: "Ваша заявка успешно отправлена",
    operatorContact: "Наши операторы свяжутся с вами в течение 30 минут",
    yourName: "Ваше имя*",
    yourEmail: "Ваша почта*",
    writeMessage: "Напишите ваше сообщение...",
    loading: "Загрузка...",
    send: "Отправить",
    aboutTour: "О программе тура",
    tourDescription: "Это удивительное путешествие по историческим и культурным центрам Узбекистана, предлагающее возможность открыть для себя величие Востока и наследие великих цивилизаций.",
    tourRoute: "Маршрут тура 🗺",
    dearTraveler: "Дорогой путешественник, мы посетим древние города с более чем 2000-летней историей. Мы исследуем наследие великих исторических личностей, таких как Амир Темур, Мирзо Улугбек и Саманиды.",
    cities: {
      samarkand: "Самарканд",
      bukhara: "Бухара",
      khiva: "Хива"
    },
    landmarks: {
      registan: "Знаменитый ансамбль Регистан",
      samanids: "Мавзолей Саманидов",
      ichanQala: "Уникальный Ичан-Кала"
    },
    journeyDescription: "Это путешествие позволит вам почувствовать дух древности, познакомиться с восточными традициями и насладиться природной красотой гор Чимган, ставших популярным направлением для путешественников."
  }
};

function Contact1() {
  const [searchParams] = useSearchParams();
  const [currentLang, setCurrentLang] = useState('en');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const lang = searchParams.get('lang') || 'en';
    setCurrentLang(lang);
  }, [searchParams]);

  const t = translations[currentLang];

  const cities = ["Tashkent", "Samarkand", "Gijduvan", "Bukhara", "Khiva", "Chimgan", "Tashkent"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-5">
      {/* Places to Visit Section */}
      <div className="text-center mb-12">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-purple-800 relative inline-block group">
          {t.placesToVisit}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h3>

        {/* Cities list */}
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
          {cities.map((city, index) => (
            <span
              key={index}
              className="px-3 sm:px-4 py-2 bg-white rounded-lg border border-purple-100 shadow-sm
                       hover:shadow-md hover:border-purple-300 hover:-translate-y-1
                       transition-all duration-300 cursor-pointer text-sm sm:text-base
                       relative group overflow-hidden"
            >
              <span className="relative z-10">{city}</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50
                            transform scale-x-0 group-hover:scale-x-100
                            transition-transform duration-300 origin-left"
              ></span>
            </span>
          ))}
        </div>
      </div>

      {/* Travel Information */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
        <div className="w-full sm:w-auto group relative overflow-hidden">
          <div className="px-6 sm:px-8 py-4 bg-white border-2 border-purple-200 rounded-xl shadow-md 
                        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                        text-center sm:text-left">
            <div className="text-purple-600 text-base sm:text-lg font-semibold mb-1">
              ⏰ {t.duration}
            </div>
            <div className="text-gray-800">{t.durationText}</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 
                          transform scale-x-0 transition-transform duration-300 
                          group-hover:scale-x-100"></div>
          </div>
        </div>

        <div className="w-full sm:w-auto group relative overflow-hidden">
          <div className="px-6 sm:px-8 py-4 bg-white border-2 border-purple-200 rounded-xl shadow-md 
                        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                        text-center sm:text-left">
            <div className="text-purple-600 text-base sm:text-lg font-semibold mb-1">
              🗓 {t.season}
            </div>
            <div className="text-gray-800">{t.seasonText}</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 
                          transform scale-x-0 transition-transform duration-300 
                          group-hover:scale-x-100"></div>
          </div>
        </div>

        <div className="w-full sm:w-auto group relative overflow-hidden">
          <div className="px-6 sm:px-8 py-4 bg-white border-2 border-purple-200 rounded-xl shadow-md 
                        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                        text-center">
            <div className="text-purple-600 text-base sm:text-lg font-semibold mb-1">
              ⭐️ {t.hotel}
            </div>
            <div className="text-gray-800">{t.hotelText}</div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 
                          transform scale-x-0 transition-transform duration-300 
                          group-hover:scale-x-100"></div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-5 sm:p-8 border-2 border-purple-100">
        <div className="relative mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-2">
            {t.bookNow}
          </h2>
          <p className="text-center text-purple-600 text-base sm:text-lg font-medium">
            {t.priceStarts} <span className="text-xl sm:text-2xl font-bold">$715</span>
          </p>
        </div>

        {isSuccess && (
          <div className="mb-6 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg text-center animate-fade-in">
            <p className="font-bold text-green-700 text-lg mb-1">
              {t.congratulations}
            </p>
            <p className="text-green-600">{t.requestSubmitted}</p>
            <p className="text-sm text-green-500 mt-2">{t.operatorContact}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t.yourName}
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

          <input
            type="email"
            name="email"
            placeholder={t.yourEmail}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

          <textarea
            name="message"
            placeholder={t.writeMessage}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent h-32 resize-none"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center gap-2 ${
              isLoading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <>
                <ImSpinner8 className="animate-spin" />
                {t.loading}
              </>
            ) : (
              <>
                <FiSend />
                {t.send}
              </>
            )}
          </button>
        </form>
      </div>

      {/* Tour Details */}
      <div className="w-full mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-purple-100">
        <h3 className="text-2xl sm:text-3xl font-bold text-purple-800 text-center mb-8 relative">
          {t.aboutTour}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
        </h3>

        <div className="prose prose-purple w-full text-center space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            {t.tourDescription}
          </p>

          <div className="w-full bg-purple-50 rounded-xl p-6 my-8">
            <h4 className="text-xl font-semibold text-purple-700 mb-4">
              {t.tourRoute}
            </h4>
            <div className="flex items-center justify-center flex-wrap gap-3">
              {[
                "Tashkent",
                "Samarkand",
                "Gijduvan",
                "Bukhara",
                "Khiva",
                "Chimgan",
                "Tashkent",
              ].map((city, index, arr) => (
                <span key={index} className="inline-flex items-center">
                  <span className="text-purple-600 font-medium hover:text-purple-800 transition-colors duration-300">
                    {city}
                  </span>
                  {index < arr.length - 1 && (
                    <span className="text-purple-400 mx-3 animate-pulse">
                      ➔
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-700 text-lg">
            {t.dearTraveler}
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 my-8">
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border-2 border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-purple-500 text-3xl mb-3">🏛</div>
              <h5 className="font-semibold text-purple-700 text-xl mb-3">
                {t.cities.samarkand}
              </h5>
              <p className="text-gray-600">{t.landmarks.registan}</p>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border-2 border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-purple-500 text-3xl mb-3">⚜️</div>
              <h5 className="font-semibold text-purple-700 text-xl mb-3">
                {t.cities.bukhara}
              </h5>
              <p className="text-gray-600">{t.landmarks.samanids}</p>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border-2 border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-purple-500 text-3xl mb-3">🕌</div>
              <h5 className="font-semibold text-purple-700 text-xl mb-3">
                {t.cities.khiva}
              </h5>
              <p className="text-gray-600">{t.landmarks.ichanQala}</p>
            </div>
          </div>

          <div className="w-full bg-gradient-to-r from-purple-50 to-pink-50 p-4 lg:p-6 rounded-xl">
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              {t.journeyDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
