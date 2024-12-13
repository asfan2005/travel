import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Content2() {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";
  const [activeDay, setActiveDay] = useState(null);

  const translations = {
    en: {
      title: "Great Travel Days",
      specialFeatures: "Special Features:",
      premiumTransport: "Premium transport service",
      professionalGuide: "Professional guide service",
      photoService: "Free photoshoot service",
      routes: [
        {
          day: 1,
          points: ["Tashkent"],
          title: "🌟 Welcome to Tashkent!",
          details: "🛬 Arrival and check-in in Tashkent\n🚗 VIP transfer from airport\n🏨 Check-in at Premium hotel\n🌆 Free time - city exploration\n🌙 Overnight at hotel",
          highlights: ["Premium transfer", "5-star hotel", "Professional guide"],
        },
        {
          day: 2,
          points: ["Tashkent"],
          title: "🏛 Tashkent City Tour",
          details: "🌅 Breakfast\n🏛 Tour of historical monuments in Tashkent\n🍽 Traditional lunch\n🛍 Shopping and entertainment venues\n🌙 Overnight at hotel",
          highlights: ["Historical sites", "Traditional cuisine", "Shopping opportunity"],
        },
        {
          day: 3,
          points: ["Tashkent", "Samarkand"],
          title: "🏰 Journey to Samarkand",
          details: "🌅 Breakfast\n🚅 Train journey to Samarkand\n🏰 Visit to Registan Square\n🍽 Traditional lunch with local cuisine\n🌙 Overnight at hotel",
          highlights: ["Train journey", "Historical monuments", "Local cuisine"],
        },
        {
          day: 4,
          points: ["Samarkand", "Bukhara"],
          title: "🕌 Journey to Bukhara",
          details: "🌅 Breakfast\n🚅 Train journey to Bukhara\n🕌 Visit to Ark Fortress\n🍽 Traditional lunch with local dishes\n🌙 Overnight at hotel",
          highlights: ["Train journey", "Historical monuments", "Local cuisine"],
        },
        {
          day: 5,
          points: ["Bukhara"],
          title: "🏺 Exploring Bukhara",
          details: "🌅 Breakfast\n🏺 Tour of Bukhara's historical monuments\n🍽 Traditional lunch\n🛍 Visit to traditional bazaar\n🌙 Overnight at hotel",
          highlights: ["Historical sites", "Local cuisine", "Shopping opportunity"],
        },
        {
          day: 6,
          points: ["Bukhara", "Khiva"],
          title: "🕍 Journey to Khiva",
          details: "🌅 Breakfast\n🚗 Drive to Khiva\n🕍 Visit to Ichan-Kala\n🍽 Traditional lunch\n🌙 Overnight at hotel",
          highlights: ["Premium transfer", "Historical monuments", "Local cuisine"],
        },
        {
          day: 7,
          points: ["Khiva", "Tashkent"],
          title: "✈️ Return to Tashkent",
          details: "🌅 Breakfast\n✈️ Flight to Tashkent\n🌆 City exploration\n🍽 Traditional lunch\n🌙 Overnight at hotel",
          highlights: ["Air travel", "City tour", "Local cuisine"],
        },
        {
          day: 8,
          points: ["Tashkent"],
          title: "🌆 Modern Tashkent Tour",
          details: "🌅 Breakfast\n🌆 Tour of modern Tashkent\n🍽 Traditional lunch\n🛍 Shopping opportunity\n🌙 Overnight at hotel",
          highlights: ["Modern attractions", "Local cuisine", "Shopping opportunity"],
        },
        {
          day: 9,
          points: ["Tashkent", "Chimgan"],
          title: "⛰️ Journey to Chimgan",
          details: "🌅 Breakfast\n🚗 Drive to Chimgan\n⛰️ Mountain excursion\n🍽 Traditional lunch\n🌙 Overnight at hotel",
          highlights: ["Mountain tour", "Nature experience", "Premium transfer"],
        },
        {
          day: 10,
          points: ["Tashkent"],
          title: "👋 Farewell Day",
          details: "🌅 Breakfast\n🛍 Last-minute shopping\n🍽 Farewell dinner\n✈️ Transfer to airport\n👋 Departure",
          highlights: ["Shopping opportunity", "Special dinner", "Premium transfer"],
        },
      ]
    },
    uz: {
      title: "Ajoyib Sayohat Kunlari",
      specialFeatures: "Maxsus Xizmatlar:",
      premiumTransport: "Premium transport xizmati",
      professionalGuide: "Professional gid xizmati",
      photoService: "Bepul fotosessiya xizmati",
      routes: [
        {
          day: 1,
          points: ["Toshkent"],
          title: "🌟 Toshkentga Xush Kelibsiz!",
          details: "🛬 Toshkentga kelish va joylashtirish\n🚗 VIP transfer aeroportdan\n🏨 Premium mehmonxonaga joylashtirish\n🌆 Bo'sh vaqt - shahar sayohati\n🌙 Mehmonxonada tunash",
          highlights: ["Premium transfer", "5 yulduzli mehmonxona", "Professional gid"],
        },
        {
          day: 2,
          points: ["Toshkent"],
          title: "🏛 Toshkent Shahar Sayohati",
          details: "🌅 Nonushta\n🏛 Toshkentning tarixiy yodgorliklariga sayohat\n🍽 An'anaviy tushlik\n🛍 Xarid va ko'ngilochar maskanlar\n🌙 Mehmonxonada tunash",
          highlights: ["Tarixiy joylar", "Milliy taomlar", "Xarid imkoniyati"],
        },
        {
          day: 3,
          points: ["Toshkent", "Samarqand"],
          title: "🏰 Samarqandga Sayohat",
          details: "🌅 Nonushta\n🚅 Samarqandga poyezd sayohati\n🏰 Registon maydoniga tashrif\n🍽 Milliy taomlar bilan tushlik\n🌙 Mehmonxonada tunash",
          highlights: ["Poyezd sayohati", "Tarixiy yodgorliklar", "Milliy taomlar"],
        },
        {
          day: 4,
          points: ["Samarqand", "Buxoro"],
          title: "🕌 Buxoroga Sayohat",
          details: "🌅 Nonushta\n🚅 Buxoroga poyezd sayohati\n🕌 Ark qal'asiga tashrif\n🍽 Milliy taomlar bilan tushlik\n🌙 Mehmonxonada tunash",
          highlights: ["Poyezd sayohati", "Tarixiy yodgorliklar", "Milliy taomlar"],
        },
        {
          day: 5,
          points: ["Buxoro"],
          title: "🏺 Buxoroni O'rganish",
          details: "🌅 Nonushta\n🏺 Buxoro tarixiy yodgorliklariga sayohat\n🍽 An'anaviy tushlik\n🛍 An'anaviy bozorga tashrif\n🌙 Mehmonxonada tunash",
          highlights: ["Tarixiy joylar", "Milliy taomlar", "Xarid imkoniyati"],
        },
        {
          day: 6,
          points: ["Buxoro", "Xiva"],
          title: "🕍 Xivaga Sayohat",
          details: "🌅 Nonushta\n🚗 Xivaga yo'l\n🕍 Ichan-Qal'aga tashrif\n🍽 An'anaviy tushlik\n🌙 Mehmonxonada tunash",
          highlights: ["Premium transfer", "Tarixiy yodgorliklar", "Milliy taomlar"],
        },
        {
          day: 7,
          points: ["Xiva", "Toshkent"],
          title: "✈️ Toshkentga Qaytish",
          details: "🌅 Nonushta\n✈️ Toshkentga uchish\n🌆 Shahar sayohati\n🍽 Milliy taomlar\n🌙 Mehmonxonada tunash",
          highlights: ["Havo sayohati", "Shahar sayohati", "Milliy taomlar"],
        },
        {
          day: 8,
          points: ["Toshkent"],
          title: "🌆 Zamonaviy Toshkent Sayohati",
          details: "🌅 Nonushta\n🌆 Zamonaviy Toshkent sayohati\n🍽 Milliy tushlik\n🛍 Xarid imkoniyati\n🌙 Mehmonxonada tunash",
          highlights: ["Zamonaviy maskanlar", "Milliy taomlar", "Xarid imkoniyati"],
        },
        {
          day: 9,
          points: ["Toshkent", "Chimyon"],
          title: "⛰️ Chimyonga Sayohat",
          details: "🌅 Nonushta\n🚗 Chimyonga yo'l\n⛰️ Tog' sayohati\n🍽 Milliy tushlik\n🌙 Mehmonxonada tunash",
          highlights: ["Tog' sayohati", "Tabiat qo'ynida", "Premium transfer"],
        },
        {
          day: 10,
          points: ["Toshkent"],
          title: "👋 Xayrlashuv Kuni",
          details: "🌅 Nonushta\n🛍 So'nggi xaridlar\n🍽 Xayrlashuv kechki ovqati\n✈️ Aeroportga transfer\n👋 Jo'nash",
          highlights: ["Xarid imkoniyati", "Maxsus kechki ovqat", "Premium transfer"],
        },
      ]
    },
    ru: {
      title: "Великолепные Дни Путешествия",
      specialFeatures: "Особые Функции:",
      premiumTransport: "Премиум транспортное обслуживание",
      professionalGuide: "Услуги профессионального гида",
      photoService: "Бесплатная фотосессия",
      routes: [
        {
          day: 1,
          points: ["Ташкент"],
          title: "🌟 Добро пожаловать в Ташкент!",
          details: "🛬 Прибытие и заселение в Ташкенте\n🚗 VIP трансфер из аэропорта\n🏨 Заселение в премиум отель\n🌆 Свободное время - изучение города\n🌙 Ночь в отеле",
          highlights: ["Премиум трансфер", "5-звездочный отель", "Профессиональный гид"],
        },
        {
          day: 2,
          points: ["Ташкент"],
          title: "🏛 Экскурсия по Ташкенту",
          details: "🌅 Завтрак\n🏛 Тур по историческим памятникам Ташкента\n🍽 Традиционный обед\n🛍 Посещение торговых и развлекательных центров\n🌙 Ночь в отеле",
          highlights: ["Исторические места", "Традиционная кухня", "Шоппинг"],
        },
        {
          day: 3,
          points: ["Ташкент", "Самарканд"],
          title: "🏰 Путешествие в Самарканд",
          details: "🌅 Завтрак\n🚅 Поездка на поезде в Самарканд\n🏰 Посещение площади Регистан\n🍽 Традиционный обед с местной кухней\n🌙 Ночь в отеле",
          highlights: ["Поездка на поезде", "Исторические памятники", "Местная кухня"],
        },
        {
          day: 4,
          points: ["Самарканд", "Бухара"],
          title: "🕌 Путешествие в Бухару",
          details: "🌅 Завтрак\n🚅 Поездка на поезде в Бухару\n🕌 Посещение крепости Арк\n🍽 Традиционный обед с местными блюдами\n🌙 Ночь в отеле",
          highlights: ["Поездка на поезде", "Исторические памятники", "Местная кухня"],
        },
        {
          day: 5,
          points: ["Бухара"],
          title: "🏺 Исследование Бухары",
          details: "🌅 Завтрак\n🏺 Тур по историческим памятникам Бухары\n🍽 Традиционный обед\n🛍 Посещение традиционного базара\n🌙 Ночь в отеле",
          highlights: ["Исторические места", "Местная кухня", "Шоппинг"],
        },
        {
          day: 6,
          points: ["Бухара", "Хива"],
          title: "🕍 Путешествие в Хиву",
          details: "🌅 Завтрак\n🚗 Поездка в Хиву\n🕍 Посещение Ичан-Калы\n🍽 Традиционный обед\n🌙 Ночь в отеле",
          highlights: ["Премиум трансфер", "Исторические памятники", "Местная кухня"],
        },
        {
          day: 7,
          points: ["Хива", "Ташкент"],
          title: "✈️ Возвращение в Ташкент",
          details: "🌅 Завтрак\n✈️ Перелет в Ташкент\n🌆 Изучение города\n🍽 Традиционный обед\n🌙 Ночь в отеле",
          highlights: ["Авиаперелет", "Обзорная экскурсия", "Местная кухня"],
        },
        {
          day: 8,
          points: ["Ташкент"],
          title: "🌆 Тур по Современному Ташкенту",
          details: "🌅 Завтрак\n🌆 Экскурсия по современному Ташкенту\n🍽 Традиционный обед\n🛍 Возможность шоппинга\n🌙 Ночь в отеле",
          highlights: ["Современные достопримечательности", "Местная кухня", "Шоппинг"],
        },
        {
          day: 9,
          points: ["Ташкент", "Чимган"],
          title: "⛰️ Путешествие в Чимган",
          details: "🌅 Завтрак\n🚗 Поездка в Чимган\n⛰️ Горная экскурсия\n🍽 Традиционный обед\n🌙 Ночь в отеле",
          highlights: ["Горный тур", "Природные красоты", "Премиум трансфер"],
        },
        {
          day: 10,
          points: ["Ташкент"],
          title: "👋 День Прощания",
          details: "🌅 Завтрак\n🛍 Последние покупки\n🍽 Прощальный ужин\n✈️ Трансфер в аэропорт\n👋 Вылет",
          highlights: ["Возможность шоппинга", "Специальный ужин", "Премиум трансфер"],
        },
      ]
    }
  };

  const currentTranslation = translations[lang] || translations.en;

  const routes = currentTranslation.routes;

  const toggleDetails = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  useEffect(() => {
    window.ymaps = window.ymaps || {};

    const loadScript = () => {
      const existingScript = document.getElementById("yandex-maps");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }

      const script = document.createElement("script");
      script.id = "yandex-maps";
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=ваш_API_ключ&lang=en_US";
      script.async = true;
      script.onload = () => {
        window.ymaps.ready(initMap);
      };
      document.body.appendChild(script);
    };

    const initMap = () => {
      const map = new window.ymaps.Map("map-container", {
        center: [41.2995, 69.2401], // Tashkent coordinates
        zoom: 6,
        controls: ["zoomControl", "fullscreenControl"],
      });

      // Kunlik marshrutlar
      const routes = [
        { day: 1, points: ["Tashkent"] },
        { day: 2, points: ["Tashkent"] },
        { day: 3, points: ["Tashkent", "Samarkand"] },
        { day: 4, points: ["Samarkand", "Bukhara"] },
        { day: 5, points: ["Bukhara"] },
        { day: 6, points: ["Bukhara", "Khiva"] },
        { day: 7, points: ["Khiva", "Tashkent"] },
        { day: 8, points: ["Tashkent"] },
        { day: 9, points: ["Tashkent", "Chimgan"] },
        { day: 10, points: ["Tashkent"] },
      ];

      // Barcha manzillar koordinatalari
      const locations = {
        Tashkent: [41.2995, 69.2401],
        Samarkand: [39.627, 66.975],
        Bukhara: [39.768, 64.421],
        Khiva: [41.3775, 60.3619],
        Chimgan: [41.524, 70.008],
      };

      // Har bir kun uchun marshrutni chizish
      routes.forEach((route, index) => {
        if (route.points.length > 1) {
          const multiRoute = new window.ymaps.multiRouter.MultiRoute(
            {
              referencePoints: route.points,
              params: {
                routingMode: "auto",
              },
            },
            {
              wayPointVisible: true,
              routeActiveStrokeWidth: 4,
              routeActiveStrokeColor: "#1976D2",
              routeActivePedestrianSegmentStrokeStyle: "solid",
              boundsAutoApply: true,
            }
          );

          map.geoObjects.add(multiRoute);
        }
      });

      // Markerlarni qo'yish
      Object.entries(locations).forEach(([name, coords]) => {
        const placemark = new window.ymaps.Placemark(
          coords,
          {
            balloonContent: name,
          },
          {
            preset: "islands#blueCircleDotIconWithCaption",
            iconCaptionMaxWidth: "50",
          }
        );
        map.geoObjects.add(placemark);
      });
    };

    loadScript();

    return () => {
      const script = document.getElementById("yandex-maps");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-[90%] mx-auto">
      <div
        id="map-container"
        style={{
          width: "100%",
          height: "500px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
      <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 relative">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            {currentTranslation.title}
          </span>
          <div className="absolute w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all duration-300 hover:shadow-xl cursor-pointer transform hover:-translate-y-1"
              style={{
                backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
                border: "1px solid #eaeaea",
              }}
              onClick={() => toggleDetails(route.day)}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transform rotate-12"
                  style={{
                    background: "linear-gradient(135deg, #1976D2, #64B5F6)",
                    boxShadow: "0 4px 6px rgba(25, 118, 210, 0.3)",
                  }}
                >
                  {route.day}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-xl text-gray-800 mb-1">
                    {route.title}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {route.points.join(" ⟶ ")}
                  </div>
                </div>
              </div>
              {activeDay === route.day && (
                <div className="mt-4 space-y-4">
                  <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                    {route.details}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {route.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-50"
                      >
                        ✨ {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <h3 className="font-bold text-xl mb-3 text-gray-800">
            ✨ {currentTranslation.specialFeatures}
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-500">🚗</span> {currentTranslation.premiumTransport}
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-500">👨‍🏫</span> {currentTranslation.professionalGuide}
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-500">📸</span> {currentTranslation.photoService}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content2;
