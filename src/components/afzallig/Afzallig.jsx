import React from "react";

function Afzallig() {
  const [email, setEmail] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  // Email validatsiya uchun regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !emailRegex.test(value)) {
      setError("Noto'g'ri email format");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailRegex.test(email)) {
      setError("Noto'g'ri email format");
      return;
    }

    setLoading(true);
    
    try {
      // Backend API'ga so'rov yuborish
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowModal(true);
      setEmail("");
      setError("");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-20 bg-gradient-to-b from-purple-50 to-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-center mb-8 lg:mb-16 hover:scale-105 transition-transform cursor-pointer animate-gradient">
        ✨ Sayohat Sarguzashtlari Sizni Kutmoqda! ✨
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
        {/* Birinchi card */}
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
            🌟 Ajoyib Sayohat Tajribasi
          </h3>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            Har bir sayohat – yangi hikoya! 🌄 Tog'larning mag'rur cho'qqilari, 🏞️ vodiylarning go'zal manzaralari, 🌺 tarixiy obidalaru zamonaviy shaharsozlik – barchasi sizni kutmoqda!
          </p>
        </div>

        {/* Ikkinchi card */}
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
            Jahon Meros Obidalari
          </h3>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            🏛️ UNESCO merosi bo'lgan mo'jizalarni kashf eting! Registon maydonining hashamatli gumbazlari, 🏺 Gʻijduvon kulolchiligining noyob san'ati, ⚜️ Shohizinda ansamblining betakror me'morchiligi sizni kutmoqda!
          </p>
        </div>

        {/* Uchinchi card */}
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
            Buyuk Ipak Yo'li Tarixi
          </h3>
          <p className="text-gray-600 text-center text-lg leading-relaxed">
            🐪 Ming yillik tarix izidan sayohat! Qadimiy karvonsaroylar, 🏺 sharq bozorlarining tarovati, 🎭 ko'hna madaniyat va an'analar – barchasi sizni kutmoqda. Ipak yo'lining sehrli dunyosiga sayohat qiling!
          </p>
        </div>
      </div>

      {/* Email subscription form */}
      <div className="max-w-2xl mx-auto mt-8 sm:mt-12 lg:mt-20 bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 bg-clip-text text-transparent">
          🎉 Maxsus Takliflardan Birinchi Bo'lib Xabardor Bo'ling!
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Eng sara sayohat paketlari, maxsus chegirmalar va yangi yo'nalishlar haqida birinchilardan bo'lib biling! ✈️
        </p>
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="✉️ Email manzilingizni kiriting"
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
                {loading ? "✨ Yuborilmoqda..." : "🚀 Obuna bo'lish"}
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
                🎊 Tabriklaymiz! 🎊
              </h3>
              <p className="text-gray-600 text-lg">
                Sizning so'rovingiz muvaffaqiyatli qabul qilindi! Tez orada eng qiziqarli takliflar sizning pochtangizda bo'ladi! ✨
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Yopish ✨
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Afzallig;