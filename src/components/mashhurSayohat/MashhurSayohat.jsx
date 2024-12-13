import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const translations = {
  en: {
    pageTitle: "Popular Tours",
    subtitle: "The best and favorite travel destinations",
    duration: "days / nights",
    bookNow: "Book Now",
    tourData: [
      
      
      {
        id: 1,
        title: "New Year in Uzbekistan - 2024-2025",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "774",
        duration: "7 days / 6 nights",
        rating: 4.8
      },
      {
        id: 2,
        title: "Thousand and One Nights of Uzbekistan",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "715",
        duration: "10 days / 9 nights",
        rating: 4.5
      },
      {
        id: 3,
        title: "Along the Ancient Caravan Routes",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "520",
        duration: "8 days / 7 nights",
        rating: 4.2
      },
      {
        id: 4,
        title: "Journey Along the Great Silk Road",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "850",
        duration: "12 days / 11 nights",
        rating: 4.7
      },
      {
        id: 5,
        title: "Tashkent - Samarkand Tour",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "450",
        duration: "3 days / 2 nights",
        rating: 4.6
      },
      {
        id: 6,
        title: "Through the History of Bukhara",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "580",
        duration: "4 days / 3 nights",
        rating: 4.4
      },
      {
        id: 7,
        title: "Khiva - The Ancient City",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "620",
        duration: "5 days / 4 nights",
        rating: 4.3
      },
      {
        id: 8,
        title: "Through the Fergana Valley",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "480",
        duration: "6 days / 5 nights",
        rating: 4.5
      },
      // Yana 4 ta element
      {
        id: 9,
        title: "Termiz - History of Buddhism",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "590",
        duration: "4 days / 3 nights",
        rating: 4.2
      },{
        id: 10,
        title: "Shahrisabz - Homeland of Amir Temur",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "420",
        duration: "3 days / 2 nights",
        rating: 4.4
      },
      {
        id: 11,
        title: "To the Nurota Mountains",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "680",
        duration: "5 days / 4 nights",
        rating: 4.6
      },
      {
        id: 12,
        title: "Through the Zarafshan Valley",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "550",
        duration: "4 days / 3 nights",
        rating: 4.3
      }
    
    ]
  },
  uz: {
    pageTitle: "Mashhur Sayohatlar",
    subtitle: "Eng yaxshi va sevimli sayohat yo'nalishlari",
    duration: "kun / tun",
    bookNow: "Buyurtma berish",
    tourData: [
      {
        id: 1,
        title: "O'zbekistonda Yangi Yil - 2024-2025",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "774",
        duration: "7 kun / 6 tun",
        rating: 4.8
      },
      {
        id: 2,
        title: "O'zbekistonning Ming bir kechasi",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "715",
        duration: "10 kun / 9 tun",
        rating: 4.5
      },
      {
        id: 3,
        title: "Qadimiy karvon yo'llari bo'ylab",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "520",
        duration: "8 kun / 7 tun",
        rating: 4.2
      },
      {
        id: 4,
        title: "Buyuk Ipak yo'li bo'ylab sayohat",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "850",
        duration: "12 kun / 11 tun",
        rating: 4.7
      },
      {
        id: 5,
        title: "Toshkent - Samarqand sayohati",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "450",
        duration: "3 kun / 2 tun",
        rating: 4.6
      },
      {
        id: 6,
        title: "Buxoro tarixi bo'ylab",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "580",
        duration: "4 kun / 3 tun",
        rating: 4.4
      },
      {
        id: 7,
        title: "Xiva - Qadimiy shahar",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "620",
        duration: "5 kun / 4 tun",
        rating: 4.3
      },
      {
        id: 8,
        title: "Farg'ona vodiysi bo'ylab",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "480",
        duration: "6 kun / 5 tun",
        rating: 4.5
      },
      {
        id: 9,
        title: "Termiz - Buddizm tarixi",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "590",
        duration: "4 kun / 3 tun",
        rating: 4.2
      },
      {
        id: 10,
        title: "Shahrisabz - Amir Temur vatani",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "420",
        duration: "3 kun / 2 tun",
        rating: 4.4
      },
      {
        id: 11,
        title: "Nurota tog'lariga sayohat",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "680",
        duration: "5 kun / 4 tun",
        rating: 4.6
      },
      {
        id: 12,
        title: "Zarafshon vodiysi bo'ylab",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "550",
        duration: "4 kun / 3 tun",
        rating: 4.3
      }
    ]
  },
  ru: {
    pageTitle: "Популярные Туры",
    subtitle: "Лучшие и любимые направления путешествий",
    duration: "дней / ночей",
    bookNow: "Забронировать",
    tourData: [
      {
        id: 1,
        title: "Новый Год в Узбекистане - 2024-2025",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "774",
        duration: "7 дней / 6 ночей",
        rating: 4.8
      },
      {
        id: 2,
        title: "Тысяча и одна ночь Узбекистана",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "715",
        duration: "10 дней / 9 ночей",
        rating: 4.5
      },
      {
        id: 3,
        title: "По древним караванным путям",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "520",
        duration: "8 дней / 7 ночей",
        rating: 4.2
      },
      {
        id: 4,
        title: "Путешествие по Великому Шелковому пути",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "850",
        duration: "12 дней / 11 ночей",
        rating: 4.7
      },
      {
        id: 5,
        title: "Ташкент - Самарканд тур",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "450",
        duration: "3 дня / 2 ночи",
        rating: 4.6
      },
      {
        id: 6,
        title: "По истории Бухары",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "580",
        duration: "4 дня / 3 ночи",
        rating: 4.4
      },
      {
        id: 7,
        title: "Хива - Древний город",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "620",
        duration: "5 дней / 4 ночи",
        rating: 4.3
      },
      {
        id: 8,
        title: "По Ферганской долине",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "480",
        duration: "6 дней / 5 ночей",
        rating: 4.5
      },
      {
        id: 9,
        title: "Термез - История буддизма",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "590",
        duration: "4 дня / 3 ночи",
        rating: 4.2
      },
      {
        id: 10,
        title: "Шахрисабз - Родина Амира Темура",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "420",
        duration: "3 дня / 2 ночи",
        rating: 4.4
      },
      {
        id: 11,
        title: "К горам Нураты",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "680",
        duration: "5 дней / 4 ночи",
        rating: 4.6
      },
      {
        id: 12,
        title: "По Зеравшанской долине",
        image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000",
        price: "550",
        duration: "4 дня / 3 ночи",
        rating: 4.3
      }
    ]
  }
};

function PopularTours() {
  const [searchParams] = useSearchParams();
  const currentLang = searchParams.get('lang') || 'uz';

  const settings = {
    dots: true,
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

  const currentTranslation = translations[currentLang];

  return (
    <div className="w-full bg-gray-50 overflow-hidden">
      <div className="py-12 px-4 w-full max-w-[1920px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {currentTranslation.pageTitle}
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            {currentTranslation.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="h-1 w-20 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></span>
            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z"/>
            </svg>
            <span className="h-1 w-20 bg-gradient-to-l from-purple-600 to-transparent rounded-full"></span>
          </div>
        </div>
        
        <div className="w-full">
          <Slider {...settings} className="!w-full">
            {currentTranslation.tourData.map((tour) => (
              <div key={tour.id} className="px-2">
                <div className="relative w-full h-[320px] sm:h-[350px] lg:h-[380px] rounded-3xl overflow-hidden shadow-xl group bg-white">
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute top-6 left-0 right-0 px-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
                        <div className="bg-black/30 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 border border-white/10">
                          <span className="text-white font-medium">
                            {tour.duration}
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
                            {tour.rating}
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
                          {tour.title}
                        </h3>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-orange-500 text-3xl sm:text-4xl font-black">$</span>
                            <span className="text-white text-3xl sm:text-4xl font-extrabold">
                              {tour.price}
                            </span>
                          </div>

                          <Link 
                            to={`/contact?tour=${encodeURIComponent(tour.title)}&lang=${currentLang}`}
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
                                {currentTranslation.bookNow}
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

export default PopularTours;