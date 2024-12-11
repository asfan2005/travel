import React, { useState, useEffect } from "react";
import { FaHistory, FaMapMarkerAlt, FaInfoCircle, FaStar, FaHandHoldingHeart } from "react-icons/fa";
import { FiSend, FiCheck } from "react-icons/fi";

const zardoslarData = [
    {
      id: 1,
      title: "Do'ppi",
      rating: 4.8,
      mainDescription: "Sharq xalqlarining milliy bosh kiyimi. Do'ppi - o'zbek xalqining eng qadimiy va chiroyli bosh kiyimlaridan biri. U nafaqat bezak, balki milliy o'zlikni anglatuvchi ramzdir.",
      details: {
        history: "Do'ppi tarixi ming yillar qa'riga borib taqaladi. Har bir mintaqaning o'ziga xos do'ppi tikish uslubi mavjud.",
        region: "Andijon, Marg'ilon, Chust, Buxoro va Samarqand do'ppi tikish markazlari hisoblanadi.",
        features: "Do'ppilar asosan qora va oq rangda tikiladi, lekin bayramona do'ppilar rang-barang iplar bilan bezatiladi.",
        usage: "To'ylarda, bayramlarda va kundalik hayotda keng qo'llaniladi.",
      },
      image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
    },
    {
      id: 2,
      title: "Atlas",
      rating: 4.2,
      mainDescription: "O'zbekistonning eng mashhur matosi - Atlas. Qadimiy an'analar asosida to'qilgan bu mato o'zining yorqin ranglari va noyob naqshlari bilan dunyoga mashhur.",
      details: {
        history: "Atlas to'qish san'ati 1500 yildan ortiq tarixga ega. Bu mato Buyuk Ipak yo'lida muhim savdo mahsuloti bo'lgan.",
        region: "Marg'ilon - Atlas to'qishning eng yirik markazi. Shuningdek, Namangan va Buxoroda ham Atlas to'qiladi.",
        features: "Atlasning 37 dan ortiq turi mavjud. Har bir naqsh va rang o'z ma'nosiga ega.",
        usage: "Milliy liboslar, pardalar va turli bezaklar tayyorlashda ishlatiladi.",
      },
      image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
    },
    {
      id: 3,
      title: "Zardo'zlik",
      rating: 4.5,
      mainDescription: "Zardo'zlik - oltin ip bilan tikish san'ati. Bu qadimiy hunarmandchilik turi Buxoro va Samarqandda rivojlangan. Zardo'zlik mahsulotlari nafaqat O'zbekistonda, balki butun dunyoda yuqori baholanadi.",
      details: {
        history: "Zardo'zlik tarixi ming yillar qa'riga borib taqaladi. Har bir mintaqaning o'ziga xos zardo'zlik tikish uslubi mavjud.",
        region: "Buxoro - Zardo'zlik tikishning eng yirik markazi. Shuningdek, Samarqandda ham zardo'zlik tikiladi.",
        features: "Zardo'zlik asosan oltin ip bilan tikiladi, lekin bayramona zardo'zlik rang-barang iplar bilan bezatiladi.",
        usage: "To'ylarda, bayramlarda va kundalik hayotda keng qo'llaniladi.",
      },
      image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
    },
    {
      id: 4,
      title: "Chopon",
      rating: 4.0,
      mainDescription: "Chopon - o'zbek milliy ustki kiyimi. U nafaqat sovuqdan himoya qiladi, balki kiyuvchining ijtimoiy mavqeini ham ko'rsatadi.",
      details: {
        history: "Chopon tarixi ming yillar qa'riga borib taqaladi. Har bir mintaqaning o'ziga xos chopon tikish uslubi mavjud.",
        region: "Andijon, Marg'ilon, Chust, Buxoro va Samarqand chopon tikish markazlari hisoblanadi.",
        features: "Choponlar asosan qora va oq rangda tikiladi, lekin bayramona chopon rang-barang iplar bilan bezatiladi.",
        usage: "To'ylarda, bayramlarda va kundalik hayotda keng qo'llaniladi.",
      },
      image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
    },
    {
      id: 5,
      title: "Suzana",
      rating: 3.8,
      mainDescription: "Suzana - o'zbek xalqining eng go'zal kashtachilik namunasi. Bu devoriy gilam turi bo'lib, kelin-kuyovlarning to'ylarida, bayramlarda va uy bezagi sifatida ishlatiladi.",
      details: {
        history: "Suzana tarixi ming yillar qa'riga borib taqaladi. Har bir mintaqaning o'ziga xos suzana tikish uslubi mavjud.",
        region: "Andijon, Marg'ilon, Chust, Buxoro va Samarqand suzana tikish markazlari hisoblanadi.",
        features: "Suzana asosan qora va oq rangda tikiladi, lekin bayramona suzana rang-barang iplar bilan bezatiladi.",
        usage: "To'ylarda, bayramlarda va kundalik hayotda keng qo'llaniladi.",
      },
      image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
    },
    {
      id: 6,
      title: "Kulolchilik",
      rating: 5.0,
      mainDescription: "O'zbek kulolchilik san'ati ming yillik tarixga ega. Rishton, G'ijduvon, Xiva va boshqa shaharlarda rivojlangan bu san'at turida ko'k, moviy ranglar ustunlik qiladi.",
      details: {
        history: "Kulolchilik tarixi ming yillar qa'riga borib taqaladi. Har bir mintaqaning o'ziga xos kulolchilik tikish uslubi mavjud.",
        region: "Rishton, G'ijduvon, Xiva va boshqa shaharlarda kulolchilik tikish markazlari hisoblanadi.",
        features: "Kulolchilik asosan ko'k va moviy rangda tikiladi, lekin bayramona kulolchilik rang-barang iplar bilan bezatiladi.",
        usage: "To'ylarda, bayramlarda va kundalik hayotda keng qo'llaniladi.",
      },
      image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
    }
  ];

function Zardoslar() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = Math.ceil(zardoslarData.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulyatsiya qilingan API so'rovi
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", message: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-indigo-800">
        O'zbek Milliy San'ati
      </h1>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          <div className="flex w-full flex-shrink-0 flex-col md:flex-row">
            {zardoslarData.slice(0, 3).map((item) => (
              <div key={item.id} className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-[400px] md:h-[400px] group-hover:h-[600px] transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    <div className="p-4">
                      <div className="mb-3">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h2>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className={`${
                                index < Math.floor(item.rating) 
                                  ? 'text-yellow-500' 
                                  : 'text-gray-300'
                              } w-4 h-4`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            {item.rating}/5
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">
                        {item.mainDescription}
                      </p>

                      <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-start gap-2 text-indigo-600">
                          <FaHistory className="flex-shrink-0 mt-1" />
                          <p className="text-sm">{item.details.history}</p>
                        </div>
                        
                        <div className="flex items-start gap-2 text-green-600">
                          <FaMapMarkerAlt className="flex-shrink-0 mt-1" />
                          <p className="text-sm">{item.details.region}</p>
                        </div>
                        
                        <div className="flex items-start gap-2 text-purple-600">
                          <FaInfoCircle className="flex-shrink-0 mt-1" />
                          <p className="text-sm">{item.details.features}</p>
                        </div>
                        
                        <div className="flex items-start gap-2 text-red-600">
                          <FaHandHoldingHeart className="flex-shrink-0 mt-1" />
                          <p className="text-sm">{item.details.usage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-shrink-0 flex-col md:flex-row">
            {zardoslarData.slice(3, 6).map((item) => (
              <div key={item.id} className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-[400px] md:h-[400px] group-hover:h-[600px] transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    <div className="p-4">
                      <div className="mb-3">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h2>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className={`${
                                index < Math.floor(item.rating) 
                                  ? 'text-yellow-500' 
                                  : 'text-gray-300'
                              } w-4 h-4`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">
                            {item.rating}/5
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">
                        {item.mainDescription}
                      </p>

                      <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-start gap-2 text-indigo-600">
                          <FaHistory className="flex-shrink-0 mt-1" />
                          <p className="text-sm">{item.details.history}</p>
                        </div>
                        
                        <div className="flex items-start gap-2 text-green-600">
                          <FaMapMarkerAlt className="flex-shrink-0 mt-1" />
                          <p className="text-sm">{item.details.region}</p>
                        </div>
                        
                        <div className="flex items-start gap-2 text-purple-600">
                          <FaInfoCircle className="flex-shrink-0 mt-1" />
                          <p className="text-sm">{item.details.features}</p>
                        </div>
                        
                        <div className="flex items-start gap-2 text-red-600">
                          <FaHandHoldingHeart className="flex-shrink-0 mt-1" />
                          <p className="text-sm">{item.details.usage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSlide === index 
                  ? 'bg-indigo-600 w-6' 
                  : 'bg-gray-300 hover:bg-indigo-400'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto mt-8 md:mt-16 px-4">
        <div className="w-full bg-gray-50 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl md:text-2xl font-bold text-center text-purple-700 mb-4">
            Sayohat turini band qilishni xohlaysizmi?
          </h2>
          
          <p className="text-center text-gray-600 mb-6 text-sm">
            Quyidagi formani to'ldiring va biz siz bilan 24 soat ichida bog'lanamiz
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="w-full">
              <label htmlFor="name" className="block text-gray-700 text-xs font-medium mb-1">
                Ismingiz
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ismingizni kiriting"
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent 
                         transition duration-200"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="phone" className="block text-gray-700 text-xs font-medium mb-1">
                Telefon raqamingiz
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+998 90 123 45 67"
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent 
                         transition duration-200"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="message" className="block text-gray-700 text-xs font-medium mb-1">
                Qo'shimcha ma'lumot
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                placeholder="Qo'shimcha ma'lumotlarni kiriting..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent 
                         transition duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2
                       transition duration-300 ${
                         isSubmitted 
                           ? 'bg-green-500 hover:bg-green-600' 
                           : 'bg-purple-600 hover:bg-purple-700'
                       } text-white shadow-md hover:shadow-lg`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isSubmitted ? (
                <>
                  <FiCheck className="w-4 h-4" />
                  Muvaffaqiyatli yuborildi
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  Yuborish
                </>
              )}
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-4 text-center text-sm text-green-600 animate-fade-in">
              Sizning so'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz!
            </div>
          )}

          <p className="text-center text-xs text-gray-500 mt-6">
            Ma'lumotlaringiz maxfiy saqlanadi va uchinchi shaxslarga berilmaydi
          </p>
        </div>
      </div>
    </div>
  );
}

// CSS animatsiya uchun
const styles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }
`;

// Stillarni head ga qo'shish
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Zardoslar;