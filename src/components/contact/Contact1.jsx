import React, { useState } from "react";
import { FiSend } from "react-icons/fi"; // react-icons o'rnatish kerak
import { ImSpinner8 } from "react-icons/im";

function Contact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Formani yuborish simulyatsiyasi
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // 3 sekunddan keyin success xabarni o'chirish
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
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
      {/* Sayohat yo'nalishi */}
      <div className="text-center mb-12">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-purple-800 relative inline-block group">
          Tashrif buyuriladigan joylar
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h3>

        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4">
          {[
            "Toshkent",
            "Samarqand",
            "G'ijduvon",
            "Buxoro",
            "Xiva",
            "Chimyon",
            "Toshkent",
          ].map((city, index) => (
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

      {/* Sayohat ma'lumotlari */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
        <div className="w-full sm:w-auto group relative overflow-hidden">
          <div
            className="px-6 sm:px-8 py-4 bg-white border-2 border-purple-200 rounded-xl shadow-md 
                        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                        text-center sm:text-left"
          >
            <div className="text-purple-600 text-base sm:text-lg font-semibold mb-1">
              ⏰ Davomiyligi
            </div>
            <div className="text-gray-800">10 kun/9 kecha</div>
            <div
              className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 
                          transform scale-x-0 transition-transform duration-300 
                          group-hover:scale-x-100"
            ></div>
          </div>
        </div>

        <div className="w-full sm:w-auto group relative overflow-hidden">
          <div
            className="px-6 sm:px-8 py-4 bg-white border-2 border-purple-200 rounded-xl shadow-md 
                        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                        text-center sm:text-left"
          >
            <div className="text-purple-600 text-base sm:text-lg font-semibold mb-1">
              🗓 Mavsum
            </div>
            <div className="text-gray-800">Har kuni safar</div>
            <div
              className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 
                          transform scale-x-0 transition-transform duration-300 
                          group-hover:scale-x-100"
            ></div>
          </div>
        </div>

        <div className="w-full sm:w-auto group relative overflow-hidden">
          <div
            className="px-6 sm:px-8 py-4 bg-white border-2 border-purple-200 rounded-xl shadow-md 
                        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                        text-center"
          >
            <div className="text-purple-600 text-base sm:text-lg font-semibold mb-1">
              ⭐️ Mehmonxona
            </div>
            <div className="text-gray-800">3*/4*</div>
            <div
              className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 
                          transform scale-x-0 transition-transform duration-300 
                          group-hover:scale-x-100"
            ></div>
          </div>
        </div>
      </div>

      {/* Bron qilish formasi */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-5 sm:p-8 border-2 border-purple-100">
        <div className="relative mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-2">
            BAND QILISH
          </h2>
          <p className="text-center text-purple-600 text-base sm:text-lg font-medium">
            Narxi: <span className="text-xl sm:text-2xl font-bold">$715</span>{" "}
            dan boshlanadi
          </p>
          <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-purple-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-purple-100 rounded-full opacity-20"></div>
        </div>

        {isSuccess && (
          <div className="mb-6 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg text-center animate-fade-in">
            <p className="font-bold text-green-700 text-lg mb-1">
              Tabriklaymiz! 🎉
            </p>
            <p className="text-green-600">
              Sizning so'rovingiz muvaffaqiyatli yuborildi
            </p>
            <p className="text-sm text-green-500 mt-2">
              Operatorlarimiz 30 daqiqa ichida siz bilan bog'lanishadi
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Ismingiz*"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

          <input
            type="email"
            name="email"
            placeholder="Elektron pochtangiz*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

          <textarea
            name="message"
            placeholder="Xabaringizni yozing..."
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
                Yuklanmoqda...
              </>
            ) : (
              <>
                <FiSend />
                Yuborish
              </>
            )}
          </button>
        </form>
      </div>

      {/* Sayohat tafsilotlari */}
      <div className="w-full mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-purple-100">
        <h3 className="text-2xl sm:text-3xl font-bold text-purple-800 text-center mb-8 relative">
          Sayohat Dasturi Haqida
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
        </h3>

        <div className="prose prose-purple w-full text-center space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Bu O'zbekistonning tarixiy va madaniy markazlari bo'ylab ajoyib
            sayohat bo'lib, Sharq ulug'vorligi va buyuk sivilizatsiyalar
            merosini kashf etish imkonini beradi.
          </p>

          <div className="w-full bg-purple-50 rounded-xl p-6 my-8">
            <h4 className="text-xl font-semibold text-purple-700 mb-4">
              Sayohat Yo'nalishi 🗺
            </h4>
            <div className="flex items-center justify-center flex-wrap gap-3">
              {[
                "Toshkent",
                "Samarqand",
                "G'ijduvon",
                "Buxoro",
                "Xiva",
                "Chimyon",
                "Toshkent",
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
            Aziz sayohatchi, biz 2000 yildan ortiq tarixga ega qadimiy
            shaharlarni ziyorat qilamiz. Amir Temur, Mirzo Ulug'bek va
            Somoniylar kabi buyuk shaxslar merosini o'rganamiz.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 my-8">
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border-2 border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-purple-500 text-3xl mb-3">🏛</div>
              <h5 className="font-semibold text-purple-700 text-xl mb-3">
                Samarqand
              </h5>
              <p className="text-gray-600">Mashhur Registon ansambli</p>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border-2 border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-purple-500 text-3xl mb-3">⚜️</div>
              <h5 className="font-semibold text-purple-700 text-xl mb-3">
                Buxoro
              </h5>
              <p className="text-gray-600">Somoniylar maqbarasi</p>
            </div>
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border-2 border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-purple-500 text-3xl mb-3">🕌</div>
              <h5 className="font-semibold text-purple-700 text-xl mb-3">
                Xiva
              </h5>
              <p className="text-gray-600">Noyob Ichan-qal'a</p>
            </div>
          </div>

          <div className="w-full bg-gradient-to-r from-purple-50 to-pink-50 p-4 lg:p-6 rounded-xl">
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Bu sayohat sizga qadimiyat ruhini his qilish, sharqona an'analar
              bilan tanishish va sayohatchilar uchun dam olish maskaniga
              aylangan Chimyon tog'larining tabiiy go'zalliklaridan bahramand
              bo'lish imkonini beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
