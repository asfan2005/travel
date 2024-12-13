import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const translations = {
  en: {
    recommendedTours: "Recommended Tours",
    subtitle: "Our specially selected and premium travel programs",
    bookNow: "Book Now"
  },
  uz: {
    recommendedTours: "Tavsiya etilgan sayohatlar",
    subtitle: "Maxsus tanlangan va premium sayohat dasturlarimiz",
    bookNow: "Buyurtma berish"
  },
  ru: {
    recommendedTours: "Рекомендуемые туры",
    subtitle: "Наши специально отобранные и премиальные туристические программы",
    bookNow: "Забронировать"
  }
};

const recommendationData = {
  en: [
    {
      id: 1,
      title: "Family Vacation - Charvak Lake",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "350",
      duration: "3 days / 2 nights",
      rating: 4.9
    },
    {
      id: 2,
      title: "Youth Adventure - Chimgan Mountains",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "280",
      duration: "2 days / 1 night",
      rating: 4.7
    },
    {
      id: 3,
      title: "Healing Tour for Elderly - Zomin",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "420",
      duration: "5 days / 4 nights",
      rating: 4.8
    },
    {
      id: 4,
      title: "Student Budget Tour - Samarkand",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "200",
      duration: "2 days / 1 night",
      rating: 4.5
    },
    {
      id: 5,
      title: "Photography Tour - Aydarkol",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "380",
      duration: "3 days / 2 nights",
      rating: 4.6
    },
    {
      id: 6,
      title: "Historical Sites Tour - Bukhara",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "450",
      duration: "4 days / 3 nights",
      rating: 4.8
    },
    {
      id: 7,
      title: "Gastronomic Tour - Khorezm",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "520",
      duration: "5 days / 4 nights",
      rating: 4.7
    },
    {
      id: 8,
      title: "Extreme Adventure - Ugam Range",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "340",
      duration: "3 days / 2 nights",
      rating: 4.4
    },
    {
      id: 9,
      title: "Winter Vacation - Beldersoy",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "390",
      duration: "2 days / 1 night",
      rating: 4.6
    },
    {
      id: 10,
      title: "Wellness Tour - Chartok",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "480",
      duration: "6 days / 5 nights",
      rating: 4.9
    },
    {
      id: 11,
      title: "Archaeological Tour - Termez",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "410",
      duration: "4 days / 3 nights",
      rating: 4.5
    },
    {
      id: 12,
      title: "Pilgrimage Tour - Kashkadarya",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "360",
      duration: "3 days / 2 nights",
      rating: 4.7
    }
  ],
  uz: [
    {
      id: 1,
      title: "Oilaviy dam olish - Chorvoq ko'li",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "350",
      duration: "3 kun / 2 kecha",
      rating: 4.9
    },
    {
      id: 2,
      title: "Yoshlar sarguzashti - Chimyon tog'lari",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "280",
      duration: "2 kun / 1 kecha",
      rating: 4.7
    },
    {
      id: 3,
      title: "Keksalar uchun shifobaxsh sayohat - Zomin",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "420",
      duration: "5 kun / 4 kecha",
      rating: 4.8
    },
    {
      id: 4,
      title: "Talabalar uchun budget sayohat - Samarqand",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "200",
      duration: "2 kun / 1 kecha",
      rating: 4.5
    },
    {
      id: 5,
      title: "Fotosurat ishqibozlari uchun - Aydarkol",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "380",
      duration: "3 kun / 2 kecha",
      rating: 4.6
    },
    {
      id: 6,
      title: "Tarixiy joylar bo'ylab - Buxoro",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "450",
      duration: "4 kun / 3 kecha",
      rating: 4.8
    },
    {
      id: 7,
      title: "Gastronomik sayohat - Xorazm",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "520",
      duration: "5 kun / 4 kecha",
      rating: 4.7
    },
    {
      id: 8,
      title: "Ekstremal sayohat - Ugom tizmasi",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "340",
      duration: "3 kun / 2 kecha",
      rating: 4.4
    },
    {
      id: 9,
      title: "Qishki dam olish - Beldersoy",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "390",
      duration: "2 kun / 1 kecha",
      rating: 4.6
    },
    {
      id: 10,
      title: "Sog'lomlashtiruvchi sayohat - Chortoq",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "480",
      duration: "6 kun / 5 kecha",
      rating: 4.9
    },
    {
      id: 11,
      title: "Arxeologik sayohat - Termiz",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "410",
      duration: "4 kun / 3 kecha",
      rating: 4.5
    },
    {
      id: 12,
      title: "Ziyorat turizmi - Qashqadaryo",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "360",
      duration: "3 kun / 2 kecha",
      rating: 4.7
    }
  ],
  ru: [
    {
      id: 1,
      title: "Семейный отдых - Озеро Чарвак",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "350",
      duration: "3 дня / 2 ночи",
      rating: 4.9
    },
    {
      id: 2,
      title: "Молодежное приключение - Чимганские горы",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "280",
      duration: "2 дня / 1 ночь",
      rating: 4.7
    },
    {
      id: 3,
      title: "Оздоровительный тур для пожилых - Заамин",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "420",
      duration: "5 дней / 4 ночи",
      rating: 4.8
    },
    {
      id: 4,
      title: "Бюджетный тур для студентов - Самарканд",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "200",
      duration: "2 дня / 1 ночь",
      rating: 4.5
    },
    {
      id: 5,
      title: "Фототур - Айдаркуль",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "380",
      duration: "3 дня / 2 ночи",
      rating: 4.6
    },
    {
      id: 6,
      title: "Исторический тур - Бухара",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "450",
      duration: "4 дня / 3 ночи",
      rating: 4.8
    },
    {
      id: 7,
      title: "Гастрономический тур - Хорезм",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "520",
      duration: "5 дней / 4 ночи",
      rating: 4.7
    },
    {
      id: 8,
      title: "Экстремальный тур - Угамский хребет",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "340",
      duration: "3 дня / 2 ночи",
      rating: 4.4
    },
    {
      id: 9,
      title: "Зимний отдых - Бельдерсай",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "390",
      duration: "2 дня / 1 ночь",
      rating: 4.6
    },
    {
      id: 10,
      title: "Оздоровительный тур - Чартак",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "480",
      duration: "6 дней / 5 ночей",
      rating: 4.9
    },
    {
      id: 11,
      title: "Археологический тур - Термез",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "410",
      duration: "4 дня / 3 ночи",
      rating: 4.5
    },
    {
      id: 12,
      title: "Паломнический тур - Кашкадарья",
      image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
      price: "360",
      duration: "3 дня / 2 ночи",
      rating: 4.7
    }
  ]
};

function Recommendations() {
  const searchParams = new URLSearchParams(window.location.search);
  const currentLang = searchParams.get('lang') || 'uz';
  
  const t = translations[currentLang];
  const currentTours = recommendationData[currentLang];

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="w-full bg-gray-50 overflow-hidden">
      <div className="py-12 px-4 w-full max-w-[1920px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-extrabold relative">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                {t.recommendedTours}
              </span>
              <div className="absolute -top-6 -right-6 w-12 h-12 opacity-20 animate-spin-slow">
                <svg viewBox="0 0 24 24" fill="none" className="text-purple-600">
                  <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" fill="currentColor"/>
                </svg>
              </div>
            </h1>
            <p className="mt-4 text-gray-600 text-lg font-medium">
              {t.subtitle}
            </p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-purple-600"></div>
              <div className="flex gap-1">
                <span className="block w-2 h-2 rounded-full bg-purple-600"></span>
                <span className="block w-2 h-2 rounded-full bg-pink-500"></span>
                <span className="block w-2 h-2 rounded-full bg-purple-600"></span>
              </div>
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-purple-600"></div>
            </div>
          </div>
        </div>
        
        <div className="w-full">
          <Slider {...settings} className="!w-full">
            {currentTours.map((recommendation) => (
              <div key={recommendation.id} className="px-2">
                <div className="relative w-full h-[370px] sm:h-[400px] lg:h-[430px] rounded-3xl overflow-hidden shadow-xl group bg-white">
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={recommendation.image} 
                      alt={recommendation.title} 
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute top-6 left-0 right-0 px-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
                        <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/10">
                          <span className="text-white font-medium">
                            {recommendation.duration}
                          </span>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-orange-500" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                          </svg>
                        </div>

                        <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/10">
                          <span className="text-white font-medium">
                            {recommendation.rating}
                          </span>
                          <svg
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div className="space-y-4">
                        <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight tracking-wide">
                          {recommendation.title}
                        </h3>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-orange-500 text-3xl sm:text-4xl font-black">$</span>
                            <span className="text-white text-3xl sm:text-4xl font-extrabold">
                              {recommendation.price}
                            </span>
                          </div>

                          <Link 
                            to={`/contact?tour=${encodeURIComponent(recommendation.title)}`}
                            className="group/book relative"
                          >
                            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group-hover/book:bg-purple-600">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6 text-white transition-transform duration-300 group-hover/book:rotate-12" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M12 4v16m8-8H4" 
                                />
                              </svg>
                            </div>
                            <div className="absolute opacity-0 group-hover/book:opacity-100 transition-all duration-300 -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                              <div className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                                {t.bookNow}
                              </div>
                              <div className="w-3 h-3 bg-white rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2"></div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;