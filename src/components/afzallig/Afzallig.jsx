import React from "react";

function Afzallig() {
  const [email, setEmail] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  // Add language detection from URL
  const searchParams = new URLSearchParams(window.location.search);
  const currentLang = searchParams.get('lang') || 'en';

  // Add translations object
  const translations = {
    en: {
      title: "✨ Travel Adventures Await You! ✨",
      card1: {
        title: "🌟 Amazing Travel Experience",
        description: "Every journey is a new story! 🌄 Majestic mountain peaks, 🏞️ beautiful valley landscapes, 🌺 historical monuments and modern cities - all waiting for you!"
      },
      card2: {
        title: "World Heritage Sites",
        description: "🏛️ Discover UNESCO heritage wonders! Experience the magnificent domes of Registan Square, 🏺 unique art of Gijduvan pottery, ⚜️ and the incomparable architecture of Shakhrisabz!"
      },
      card3: {
        title: "Great Silk Road History",
        description: "🐪 Travel through thousand years of history! Ancient caravanserais, 🏺 oriental bazaars, 🎭 ancient culture and traditions - all await you. Journey into the magical world of the Silk Road!"
      },
      subscribe: {
        title: "🎉 Be the First to Know About Special Offers!",
        description: "Be among the first to learn about premium travel packages, special discounts, and new destinations! ✈️",
        placeholder: "✉️ Enter your email address",
        button: "🚀 Subscribe",
        sending: "✨ Sending..."
      },
      modal: {
        title: "🎊 Congratulations! 🎊",
        description: "Your subscription has been successfully received! The most exciting offers will be in your inbox soon! ✨",
        close: "Close ✨"
      }
    },
    ru: {
      title: "✨ Путешествия ждут вас! ✨",
      card1: {
        title: "🌟 Удивительный опыт путешествий",
        description: "Каждое путешествие - новая история! 🌄 Величественные горные вершины, 🏞️ красивые долины, 🌺 исторические памятники и современные города - всё ждёт вас!"
      },
      card2: {
        title: "Объе��ты Всемирного наследия",
        description: "🏛️ Откройте для себя чудеса наследия ЮНЕСКО! Полюбуйтесь величественными куполами площади Регистан, 🏺 уникальным искусством гиждуванской керамики, ⚜️ и несравненной архитектурой Шахрисабза!"
      },
      card3: {
        title: "История Великого Шёлкового пути",
        description: "🐪 Путешествуйте сквозь тысячелетнюю историю! Древние караван-сараи, 🏺 восточные базары, 🎭 древняя культура и традиции - всё ждёт вас. Погрузитесь в волшебный мир Шёлкового пути!"
      },
      subscribe: {
        title: "🎉 Узнавайте первыми о специальных предложениях!",
        description: "Будьте в числе первых, кто узнает о премиальных турпакетах, специальных скидках и новых направлениях! ✈️",
        placeholder: "✉️ Введите ваш email адрес",
        button: "🚀 Подписаться",
        sending: "✨ Отправка..."
      },
      modal: {
        title: "🎊 Поздравляем! 🎊",
        description: "Ваша подписка успешно оформлена! Самые интересные предложения скоро появятся в вашей почте! ✨",
        close: "Закрыть ✨" 
      }
    },
    uz: {
      title: "✨ Sayohat Sarguzashtlari Sizni Kutmoqda! ✨",
      card1: {
        title: "🌟 Ajoyib Sayohat Tajribasi",
        description: "Har bir sayohat - yangi hikoya! 🌄 Mahobatli tog' cho'qqilari, 🏞️ go'zal vodiy manzaralari, 🌺 tarixiy yodgorliklar va zamonaviy shaharlar - barchasi sizni kutmoqda!"
      },
      card2: {
        title: "Jahon Merosi Obidalari",
        description: "����️ UNESCO merosi mo'jizalarini kashf eting! Registon maydonining hashamatli gumbazlari, 🏺 Gijduvon kulolchiligining noyob san'ati, ⚜️ va Shahrisabzning tengsiz me'morchiligi!"
      },
      card3: {
        title: "Buyuk Ipak Yo'li Tarixi",
        description: "🐪 Ming yillik tarix bo'ylab sayohat! Qadimiy karvonsaroylar, 🏺 sharq bozorlari, 🎭 qadimiy madaniyat va an'analar - barchasi sizni kutmoqda. Ipak yo'lining sehrli dunyosiga sayohat qiling!"
      },
      subscribe: {
        title: "🎉 Maxsus Takliflar Haqida Birinchilardan Bo'lib Xabardor Bo'ling!",
        description: "Premium sayohat paketlari, maxsus chegirmalar va yangi yo'nalishlar haqida birinchilardan bo'lib xabardor bo'ling! ✈️",
        placeholder: "✉️ Email manzilingizni kiriting",
        button: "🚀 Obuna bo'lish",
        sending: "✨ Yuborilmoqda..."
      },
      modal: {
        title: "🎊 Tabriklaymiz! 🎊",
        description: "Sizning obunangiz muvaffaqiyatli qabul qilindi! Eng qiziqarli takliflar tez orada pochta qutingizda bo'ladi! ✨",
        close: "Yopish ✨"
      }
    }
  };

  // Get current language translations
  const t = translations[currentLang];

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !emailRegex.test(value)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    setLoading(true);
    
    try {
      // Backend API'ga so'rov yuborish (simulated)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Open Telegram channel in a new tab
      window.open('https://t.me/travelcations_uz', '_blank');
      
      setShowModal(true);
      setEmail("");
      setError("");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      setError("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-20 bg-gradient-to-b from-purple-50 to-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-center mb-8 lg:mb-16 hover:scale-105 transition-transform cursor-pointer animate-gradient">
        {t.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
        {/* First card */}
        <div className="group bg-white rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-b-4 border-purple-500 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="flex justify-center mb-4 lg:mb-8">
            <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-20 h-20 text-purple-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 bg-clip-text text-transparent">
            {t.card1.title}
          </h3>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            {t.card1.description}
          </p>
        </div>

        {/* Second card */}
        <div className="group bg-white rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-b-4 border-purple-500 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="flex justify-center mb-4 lg:mb-8">
            <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-20 h-20 text-purple-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
            {t.card2.title}
          </h3>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            {t.card2.description}
          </p>
        </div>

        {/* Third card */}
        <div className="group bg-white rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-b-4 border-purple-500 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="flex justify-center mb-4 lg:mb-8">
            <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-20 h-20 text-purple-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
            {t.card3.title}
          </h3>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            {t.card3.description}
          </p>
        </div>
      </div>

      {/* Email subscription form */}
      <div className="max-w-2xl mx-auto mt-8 sm:mt-12 lg:mt-20 bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 bg-clip-text text-transparent">
          {t.subscribe.title}
        </h3>
        <p className="text-gray-600 text-center mb-6">
          {t.subscribe.description}
        </p>
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder={t.subscribe.placeholder}
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border ${
                  error ? 'border-red-500' : 'border-purple-200'
                } focus:outline-none focus:border-purple-500 transition-colors placeholder-purple-300`}
              />
              <button
                type="submit"
                disabled={loading || error || !email}
                className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap transform hover:scale-105 active:scale-95"
              >
                {loading ? t.subscribe.sending : t.subscribe.button}
              </button>
            </div>
            {error && (
              <span className="text-red-500 text-sm ml-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 max-w-md w-full relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transform hover:rotate-90 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 mb-2">
                {t.modal.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {t.modal.description}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {t.modal.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Afzallig;