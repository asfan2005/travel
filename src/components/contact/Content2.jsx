import React, { useEffect, useState } from "react";

function Content2() {
  const [activeDay, setActiveDay] = useState(null);

  const routes = [
    {
      day: 1,
      points: ["Tashkent"],
      title: "🌟 Toshkentga Xush Kelibsiz!",
      details:
        "🛬 Toshkentga kelish va joylashish\n🚗 VIP transport bilan aeroportdan kutib olish\n🏨 Premium mehmonxonaga joylashish\n🌆 Erkin vaqt - shahar bilan tanishish\n🌙 Mehmonxonada tunash",
      highlights: [
        "Premium transfer",
        "5 yulduzli mehmonxona",
        "Professional gid",
      ],
    },
    {
      day: 2,
      points: ["Tashkent"],
      title: "🏛 Toshkent Bo'ylab Sayohat",
      details:
        "🌅 Ertalabki nonushta\n🏛 Toshkentning tarixiy obidalari bo'ylab sayohat\n🍽 Milliy taomlarga boy tushlik\n🛍 Shopping va ko'ngilochar maskanlarga tashrif\n🌙 Mehmonxonada tunash",
      highlights: ["Tarixiy joylar", "Milliy taomlar", "Shopping imkoniyati"],
    },
    {
      day: 3,
      points: ["Tashkent", "Samarkand"],
      title: "🏰 Samarqand Sari",
      details:
        "🌅 Ertalabki nonushta\n🚅 Toshkentdan Samarqandga yo'l olish\n🏰 Registon maydoniga tashrif\n🍽 Milliy taomlarga boy tushlik\n🌙 Mehmonxonada tunash",
      highlights: ["Temir yo'l sayohati", "Tarixiy obidalar", "Milliy taomlar"],
    },
    {
      day: 4,
      points: ["Samarkand", "Bukhara"],
      title: "🕌 Buxoro Sari",
      details:
        "🌅 Ertalabki nonushta\n🚅 Samarqanddan Buxoroga yo'l olish\n🕌 Ark qal'asiga tashrif\n🍽 Milliy taomlarga boy tushlik\n🌙 Mehmonxonada tunash",
      highlights: ["Temir yo'l sayohati", "Tarixiy obidalar", "Milliy taomlar"],
    },
    {
      day: 5,
      points: ["Bukhara"],
      title: "🏺 Buxoro Bo'ylab Sayohat",
      details:
        "🌅 Ertalabki nonushta\n🏺 Buxoroning tarixiy obidalari bo'ylab sayohat\n🍽 Milliy taomlarga boy tushlik\n🛍 An'anaviy bozorga tashrif\n🌙 Mehmonxonada tunash",
      highlights: ["Tarixiy joylar", "Milliy taomlar", "Shopping imkoniyati"],
    },
    {
      day: 6,
      points: ["Bukhara", "Khiva"],
      title: "🕍 Xiva Sari",
      details:
        "🌅 Ertalabki nonushta\n🚗 Buxorodan Xivaga yo'l olish\n🕍 Ichan-Qal'aga tashrif\n🍽 Milliy taomlarga boy tushlik\n🌙 Mehmonxonada tunash",
      highlights: ["Premium transfer", "Tarixiy obidalar", "Milliy taomlar"],
    },
    {
      day: 7,
      points: ["Khiva", "Tashkent"],
      title: "✈️ Toshkentga Qaytish",
      details:
        "🌅 Ertalabki nonushta\n✈️ Xivadan Toshkentga uchish\n🌆 Shahar bo'ylab sayohat\n🍽 Milliy taomlarga boy tushlik\n🌙 Mehmonxonada tunash",
      highlights: ["Havo sayohati", "Shahar sayohati", "Milliy taomlar"],
    },
    {
      day: 8,
      points: ["Tashkent"],
      title: "🌆 Toshkent Bo'ylab Sayohat",
      details:
        "🌅 Ertalabki nonushta\n🌆 Zamonaviy Toshkent bo'ylab sayohat\n🍽 Milliy taomlarga boy tushlik\n🛍 Shopping imkoniyati\n🌙 Mehmonxonada tunash",
      highlights: ["Zamonaviy joylar", "Milliy taomlar", "Shopping imkoniyati"],
    },
    {
      day: 9,
      points: ["Tashkent", "Chimgan"],
      title: "⛰️ Chimyon Sari",
      details:
        "🌅 Ertalabki nonushta\n🚗 Toshkentdan Chimyonga yo'l olish\n⛰️ Tog' sayohati\n🍽 Milliy taomlarga boy tushlik\n🌙 Mehmonxonada tunash",
      highlights: ["Tog' sayohati", "Tabiat qo'ynida", "Premium transfer"],
    },
    {
      day: 10,
      points: ["Tashkent"],
      title: "👋 Xayrlashuv Kuni",
      details:
        "🌅 Ertalabki nonushta\n🛍 So'nggi xaridlar\n🍽 Xayrlashuv ziyofati\n✈️ Aeroportga jo'nash\n👋 Xayrlashuv",
      highlights: ["Shopping imkoniyati", "Maxsus ziyofat", "Premium transfer"],
    },
  ];

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
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          border: "1px solid #eaeaea",
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 relative">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Ajoyib Sayohat Kunlari
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
            ✨ Maxsus Imkoniyatlar:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-500">🚗</span> Premium transport
              xizmati
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-500">👨‍🏫</span> Professional gid
              hamrohligi
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-500">📸</span> Bepul fotosessiya
              xizmati
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content2;
