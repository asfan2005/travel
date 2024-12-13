import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSearchParams } from "react-router-dom";

const partnerLogos = [
  {
    id: 1,
    name: "Booking.com",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png",
    description: {
      uz: "Dunyo bo'ylab mehmonxonalar bronlash tizimi",
      en: "Worldwide hotel booking system",
      ru: "Система бронирования отелей по всему миру"
    }
  },
  {
    id: 2,
    name: "Turkish Airlines",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png",
    description: {
      uz: "Evropaning eng yaxshi aviakompaniyasi",
      en: "Best airline in Europe",
      ru: "Лучшая авиакомпания Европы"
    }
  },
  {
    id: 3,
    name: "Uzbekistan Airways",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png",
    description: {
      uz: "O'zbekistonning milliy aviakompaniyasi",
      en: "National airline of Uzbekistan",
      ru: "Национальная авиакомпания Узбекистана"
    }
  },
  {
    id: 4,
    name: "Hilton Hotels",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png",
    description: {
      uz: "Premium darajadagi mehmonxonalar tarmog'i",
      en: "Premium hotel chain",
      ru: "Сеть отелей премиум-класса"
    }
  },
  {
    id: 5,
    name: "Hyatt",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png",
    description: {
      uz: "Hashamatli mehmonxonalar tarmog'i",
      en: "Luxury hotel chain",
      ru: "Сеть роскошных отелей"
    }
  },
  {
    id: 6,
    name: "Emirates",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png",
    description: {
      uz: "Dunyoning eng yaxshi aviakompaniyasi",
      en: "World's best airline",
      ru: "Лучшая авиакомпания мира"
    }
  },
  {
    id: 7,
    name: "Qatar Airways",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png",
    description: {
      uz: "5 yulduzli aviakompaniya",
      en: "5-star airline",
      ru: "5-звездочная авиакомпания"
    }
  },
  {
    id: 8,
    name: "Aeroflot",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/2560px-Emirates_logo.svg.png",
    description: {
      uz: "Rossiyaning eng yirik aviakompaniyasi",
      en: "Russia's largest airline",
      ru: "Крупнейшая авиакомпания России"
    }
  }
];

const titles = {
  uz: "Bizning Hamkorlar",
  en: "Our Partners",
  ru: "Наши Партнеры"
};

const quotes = {
  uz: "Ishonchli hamkorlik - muvaffaqiyatli sayohatlar garovi",
  en: "Reliable cooperation is the guarantee of successful trips",
  ru: "Надежное сотрудничество - залог успешных путешествий"
};

function Footer() {
  const [searchParams] = useSearchParams();
  const currentLang = searchParams.get('lang') || 'uz';

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mb-4 relative inline-block group">
            {titles[currentLang]}
            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            <span className="absolute -top-2 right-0 w-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 group-hover:w-full transition-all duration-500 ease-in-out delay-100"></span>
            <span className="absolute -left-2 top-0 h-0 w-1 bg-gradient-to-b from-blue-600 via-purple-500 to-pink-500 group-hover:h-full transition-all duration-500 ease-in-out delay-200"></span>
            <span className="absolute -right-2 bottom-0 h-0 w-1 bg-gradient-to-t from-pink-500 via-purple-500 to-blue-600 group-hover:h-full transition-all duration-500 ease-in-out delay-300"></span>
          </h2>
        </div>

        <div className="mb-10">
          <Slider {...sliderSettings} className="partner-slider">
            {partnerLogos.map((logo) => (
              <div key={logo.id} className="px-3">
                <div className="w-full h-32 p-4 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden border border-transparent hover:border-blue-100">
                  <div className="flex items-center justify-center h-full">
                    <img
                      src={logo.src}
                      alt={`${logo.name} logotipi`}
                      className="w-full h-16 object-contain transition-transform duration-300 group-hover:opacity-10"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-purple-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95">
                    <p className="text-sm text-white text-center px-4 font-medium">
                      {logo.description[currentLang]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-gray-700 relative inline-block">
            <span className="absolute -left-6 top-0 text-3xl text-blue-500 opacity-50">
              ❝
            </span>
            {quotes[currentLang]}
            <span className="absolute -right-6 bottom-0 text-3xl text-blue-500 opacity-50">
              ❞
            </span>
          </p>
          <div className="mt-2 flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
