import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Mashhur() {
  const [searchParams] = useSearchParams();
  const currentLang = searchParams.get('lang') || 'uz';
  const [currentIndex, setCurrentIndex] = useState(0);

  const translations = {
    en: {
      title: "Popular Destinations",
      places: [
        {
          id: 1,
          city: "Tashkent",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Tashkent is over 2000 years old. It has been the site of many important historical events and is considered the center of our culture.",
          rating: 4.8
        },
        {
          id: 2,
          city: "Bukhara",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Bukhara is famous for its attractions. Even one day is not enough to fully see the city.",
          rating: 4.5
        },
        {
          id: 3,
          city: "Samarkand",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Samarkand is known for its blue domes and has been famous around the world. There are many tales about this city.",
          rating: 4.7
        },
        {
          id: 4,
          city: "Khiva",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Khiva is one of the important cities of the Khorezm State, which is a part of the ancient Silk Road.",
          rating: 4.6
        },
        {
          id: 5,
          city: "Shakhrisabz",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Shakhrisabz is famous for being the birthplace of Amir Temur. It has a rich historical heritage.",
          rating: 4.9
        },
        {
          id: 6,
          city: "Termez",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Termez is one of the ancient Buddhist centers, located in the center of the Surkhandarya region.",
          rating: 4.8
        },
        {
          id: 7,
          city: "Margilan",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Margilan is a city of Atlas and Adras, which was the site of the Silk Road caravans. It has a rich historical heritage.",
          rating: 4.7
        },
        {
          id: 8,
          city: "Kokand",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Kokand is a city with many mosques and madrassas. It is the capital of the Kokand region.",
          rating: 4.9
        },
        {
          id: 9,
          city: "Andijan",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Andijan is one of the most important cities of Uzbekistan. It is a modern industrial center.",
          rating: 4.8
        },
        {
          id: 10,
          city: "Nukus",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Nukus is the capital of the Karakalpakstan Republic. It is famous for the Savitsky Museum and the world's largest salt lake.",
          rating: 4.7
        },
        {
          id: 11,
          city: "Navoi",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Navoi is a modern city with many large companies. It is a center for new construction projects.",
          rating: 4.9
        },
        {
          id: 12,
          city: "Jizzakh",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Jizzakh is a city on the ancient Silk Road. It has a rich historical heritage and is a modern industrial center.",
          rating: 4.8
        }
      ]
    },
    uz: {
      title: "Mashhur Manzillar",
      places: [
        {
          id: 1,
          city: "Toshkent",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Toshkent 2000 yildan ortiq tarixga ega. Bu yerda ko'plab muhim tarixiy voqealar sodir bo'lgan va madaniyatimiz markazi hisoblanadi.",
          rating: 4.8
        },
        {
          id: 2,
          city: "Buxoro",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Buxoro o'zining diqqatga sazovor joylari bilan mashhur. Shaharni to'liq ko'rish uchun bir kun ham kamlik qiladi.",
          rating: 4.5
        },
        {
          id: 3,
          city: "Samarqand",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Samarqand o'zining moviy gumbazlari bilan tanilgan va dunyo bo'ylab mashhur. Bu shahar haqida ko'plab rivoyatlar bor.",
          rating: 4.7
        },
        {
          id: 4,
          city: "Xiva",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Xiva qadimgi Ipak yo'lining bir qismi bo'lgan Xorazm davlatining muhim shaharlaridan biri.",
          rating: 4.6
        },
        {
          id: 5,
          city: "Shahrisabz",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Shahrisabz Amir Temurning tug'ilgan joyi sifatida mashhur. Boy tarixiy merosga ega.",
          rating: 4.9
        },
        {
          id: 6,
          city: "Termiz",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Termiz Surxondaryo viloyatining markazida joylashgan qadimiy buddaviylik markazlaridan biri.",
          rating: 4.8
        },
        {
          id: 7,
          city: "Marg'ilon",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Marg'ilon Atlas va Adras shahri, Ipak yo'li karvonlari to'xtagan joy. Boy tarixiy merosga ega.",
          rating: 4.7
        },
        {
          id: 8,
          city: "Qo'qon",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Qo'qon ko'plab masjid va madrasalarga ega shahar. Qo'qon viloyatining poytaxti.",
          rating: 4.9
        },
        {
          id: 9,
          city: "Andijon",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Andijon O'zbekistonning eng muhim shaharlaridan biri. Zamonaviy sanoat markazi.",
          rating: 4.8
        },
        {
          id: 10,
          city: "Nukus",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Nukus Qoraqalpog'iston Respublikasining poytaxti. Savitskiy muzeyi va dunyodagi eng katta tuz ko'li bilan mashhur.",
          rating: 4.7
        },
        {
          id: 11,
          city: "Navoiy",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Navoiy ko'plab yirik kompaniyalarga ega zamonaviy shahar. Yangi qurilish loyihalarining markazi.",
          rating: 4.9
        },
        {
          id: 12,
          city: "Jizzax",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Jizzax qadimgi Ipak yo'lidagi shahar. Boy tarixiy merosga ega va zamonaviy sanoat markazi.",
          rating: 4.8
        }
      ]
    },
    ru: {
      title: "Популярные Направления",
      places: [
        {
          id: 1,
          city: "Ташкент",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Ташкенту более 2000 лет. Здесь произошло много важных исторических событий, и он считается центром нашей культуры.",
          rating: 4.8
        },
        {
          id: 2,
          city: "Бухара",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Бухара славится своими достопримечательностями. Даже одного дня недостаточно, чтобы полностью осмотреть город.",
          rating: 4.5
        },
        {
          id: 3,
          city: "Самарканд",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Самарканд известен своими голубыми куполами и славится по всему миру. Об этом городе существует много легенд.",
          rating: 4.7
        },
        {
          id: 4,
          city: "Хива",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Хива - один из важных городов государства Хорезм, который является частью древнего Шелкового пути.",
          rating: 4.6
        },
        {
          id: 5,
          city: "Шахрисабз",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Шахрисабз известен как родина Амира Темура. Имеет богатое историческое наследие.",
          rating: 4.9
        },
        {
          id: 6,
          city: "Термез",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Термез - один из древних буддийских центров, расположенный в центре Сурхандарьинской области.",
          rating: 4.8
        },
        {
          id: 7,
          city: "Маргилан",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Маргилан - город Атласа и Адраса, где останавливались караваны Шелкового пути. Имеет богатое историческое наследие.",
          rating: 4.7
        },
        {
          id: 8,
          city: "Коканд",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Коканд - город со множеством мечетей и медресе. Является столицей Кокандского региона.",
          rating: 4.9
        },
        {
          id: 9,
          city: "Андижан",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Андижан - один из важнейших городов Узбекистана. Это современный промышленный центр.",
          rating: 4.8
        },
        {
          id: 10,
          city: "Нукус",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Нукус - столица Республики Каракалпакстан. Известен музеем Савицкого и крупнейшим в мире соленым озером.",
          rating: 4.7
        },
        {
          id: 11,
          city: "Навои",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Навои - современный город со множеством крупных компаний. Является центром новых строительных проектов.",
          rating: 4.9
        },
        {
          id: 12,
          city: "Джизак",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
          description: "Джизак - город на древнем Шелковом пути. Имеет богатое историческое наследие и является современным промышленным центром.",
          rating: 4.8
        }
      ]
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 4 >= translations[currentLang].places.length ? 0 : prevIndex + 4
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [currentLang]);

  const visibleItems = translations[currentLang].places.slice(currentIndex, currentIndex + 4);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        {translations[currentLang].title}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleItems.map((place) => (
          <div
            key={place.id}
            className="relative group h-[400px] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:shadow-2xl"
          >
            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 group-hover:scale-110 transition-transform duration-300">
              <div className="flex items-center group-hover:hidden">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="hidden group-hover:flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(place.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-gray-800">
                {place.rating.toFixed(1)}
              </span>
            </div>

            <img
              src={place.image}
              alt={place.city}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-90" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 group-hover:translate-y-[-8px]">
              <h2 className="text-2xl font-bold text-white mb-3">
                {place.city}
              </h2>
              <p className="text-white/90 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {place.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(translations[currentLang].places.length / 4) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 4)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / 4) === index 
                ? 'bg-purple-600' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Mashhur;