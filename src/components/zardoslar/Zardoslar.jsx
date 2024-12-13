import React, { useState, useEffect } from "react";
import { FaHistory, FaMapMarkerAlt, FaInfoCircle, FaStar, FaHandHoldingHeart } from "react-icons/fa";
import { FiSend, FiCheck } from "react-icons/fi";

const zardoslarData = [
  {
    id: 1,
    title: "Doppi",
    rating: 4.8,
    mainDescription: "Traditional headwear of Eastern peoples. Doppi is one of the most ancient and beautiful headdresses of the Uzbek people. It is not just a decoration, but a symbol of national identity.",
    details: {
      history: "The history of Doppi dates back thousands of years. Each region has its own unique style of making Doppi.",
      region: "Andijan, Margilan, Chust, Bukhara, and Samarkand are considered centers of Doppi making.",
      features: "Doppis are mainly made in black and white, but festive Doppis are decorated with colorful threads.",
      usage: "Widely used in weddings, celebrations, and daily life.",
    },
    image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
  },
  {
    id: 2,
    title: "Atlas",
    rating: 4.2,
    mainDescription: "Atlas - the most famous fabric of Uzbekistan. This fabric, woven based on ancient traditions, is famous worldwide for its bright colors and unique patterns.",
    details: {
      history: "The art of Atlas weaving has more than 1500 years of history. This fabric was an important trade commodity on the Great Silk Road.",
      region: "Margilan is the largest center of Atlas weaving. Atlas is also woven in Namangan and Bukhara.",
      features: "There are more than 37 types of Atlas. Each pattern and color has its own meaning.",
      usage: "Used in making national clothes, curtains, and various decorations.",
    },
    image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
  },
  {
    id: 3,
    title: "Gold Embroidery",
    rating: 4.5,
    mainDescription: "Gold embroidery - the art of embroidering with golden thread. This ancient craft developed in Bukhara and Samarkand. Gold embroidery products are highly valued not only in Uzbekistan but worldwide.",
    details: {
      history: "The history of gold embroidery dates back thousands of years. Each region has its own unique embroidery style.",
      region: "Bukhara is the largest center of gold embroidery. It is also practiced in Samarkand.",
      features: "Gold embroidery is mainly done with golden thread, but festive pieces are decorated with colorful threads.",
      usage: "Used in weddings, celebrations, and daily life.",
    },
    image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
  },
  {
    id: 4,
    title: "Chapan",
    rating: 4.0,
    mainDescription: "Chapan - traditional Uzbek outerwear. It not only protects from cold but also shows the social status of the wearer.",
    details: {
      history: "The history of Chapan goes back thousands of years. Each region has its own unique style of making Chapan.",
      region: "Andijan, Margilan, Chust, Bukhara, and Samarkand are centers of Chapan making.",
      features: "Chapans are mainly made in black and white, but festive ones are decorated with colorful threads.",
      usage: "Used in weddings, celebrations, and daily life.",
    },
    image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
  },
  {
    id: 5,
    title: "Suzani",
    rating: 3.8,
    mainDescription: "Suzani - the most beautiful example of Uzbek embroidery. This type of wall carpet is used in weddings, celebrations, and as home decoration.",
    details: {
      history: "The history of Suzani dates back thousands of years. Each region has its own unique embroidery style.",
      region: "Andijan, Margilan, Chust, Bukhara, and Samarkand are centers of Suzani embroidery.",
      features: "Suzani is mainly made in black and white, but festive pieces are decorated with colorful threads.",
      usage: "Used in weddings, celebrations, and home decoration.",
    },
    image: "https://canaan.travel/media/articles/zolotoshveynoe-iskusstvo-uzbekistana-600x470.jpg"
  },
  {
    id: 6,
    title: "Pottery",
    rating: 5.0,
    mainDescription: "Uzbek pottery art has a thousand-year history. This art form, developed in Rishtan, Gijduvan, Khiva, and other cities, is dominated by blue and turquoise colors.",
    details: {
      history: "The history of pottery dates back thousands of years. Each region has its own unique pottery style.",
      region: "Rishtan, Gijduvan, Khiva, and other cities are considered pottery centers.",
      features: "Pottery is mainly made in blue and turquoise colors, but festive pieces are decorated with various colors.",
      usage: "Used in daily life, celebrations, and as decorative items.",
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
        Uzbek National Art
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
                              className={`${index < Math.floor(item.rating)
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
                              className={`${index < Math.floor(item.rating)
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index
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
            Would you like to book a tour?
          </h2>

          <p className="text-center text-gray-600 mb-6 text-sm">
            Fill out the form below and we will contact you within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="w-full">
              <label htmlFor="name" className="block text-gray-700 text-xs font-medium mb-1">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent 
                   transition duration-200"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="phone" className="block text-gray-700 text-xs font-medium mb-1">
                Phone Number
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
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                placeholder="Enter additional information..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent 
                   transition duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2
                 transition duration-300 ${isSubmitted
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-purple-600 hover:bg-purple-700'
                } text-white shadow-md hover:shadow-lg`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isSubmitted ? (
                <>
                  <FiCheck className="w-4 h-4" />
                  Successfully Sent
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  Send
                </>
              )}
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-4 text-center text-sm text-green-600 animate-fade-in">
              Your request has been received. We will contact you soon!
            </div>
          )}

          <p className="text-center text-xs text-gray-500 mt-6">
            Your information will be kept confidential and will not be shared with third parties
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