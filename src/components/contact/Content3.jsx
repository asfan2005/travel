import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Content3() {
  const [activeItem, setActiveItem] = useState(null);
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "en";

  const translations = {
    en: {
      title: "Tour Prices for 2024 - 2025",
      hotels3Star: "Hotels",
      hotels4Star: "Hotels",
      perPerson: "Per person",
      startingFrom: "starting from",
      taxesIncluded: "* All taxes and services included",
      optionalExcursions: "Optional Excursions",
      tashkentTitle: "Additional Excursions in Tashkent",
      samarkandTitle: "Additional Excursions in Samarkand",
      bukharaTitle: "Additional Excursions in Bukhara",
      importantNotice: "Important Notice:",
      noticeText: "* All additional excursions must be arranged with the guide and paid on-site.",
      minimumGroup: "Minimum group size for any additional excursion – 5 people.",
      
      tashkentExcursions: [
        "• Visit to Tashkent TV Tower (12th tallest tower in the world. Built in 1985. Height — 375m) — 25 USD",
        "• Tashkent Metro Tour (Visit to the most beautiful stations) — 15 USD",
        "• Chorsu Bazaar Tour with Local Food Tasting — 30 USD",
        "• Ceramic Workshop Visit in Rishtan — 20 USD",
        "• Evening Folk Show at Navoi Theater — 35 USD"
      ],
      
      samarkandExcursions: [
        "• Wine Tasting Tour at 'Khovrenko' Winery (includes all products tasting + light snacks) — 30 USD",
        "• Valentina Romanenko Fashion Studio Tour (famous clothing designer + oriental style fashion show) — 10 USD",
        "• Traditional Paper Making Workshop (see and try the silk paper making process) — 20 USD",
        "• Sunset Dinner at Registan Square — 40 USD",
        "• Master Class in Traditional Bread Making — 25 USD",
        "• Ulugbek Observatory Astronomical Tour — 15 USD",
        "• Silk Carpet Weaving Workshop — 30 USD"
      ],
      
      bukharaExcursions: [
        "• Costume Show at Nodir Devon Begi Madrasah — 25 USD",
        "• Water Tower Visit with Panoramic City Views and Photo Opportunities — 25 USD",
        "• Traditional Puppet Show Performance — 20 USD",
        "• Master Class in Suzani Embroidery — 35 USD",
        "• Evening Folklore Show with Dinner — 45 USD",
        "• Traditional Hammam Experience — 40 USD",
        "• Jewish Quarter and Synagogue Tour — 15 USD",
        "• Bukhara Artisan Workshop Tour (Gold embroidery, miniature painting) — 30 USD"
      ]
    },
    uz: {
      title: "2024 - 2025 yillar uchun tur narxlari",
      hotels3Star: "Mehmonxonalar",
      hotels4Star: "Mehmonxonalar",
      perPerson: "Har bir kishiga",
      startingFrom: "dan boshlab",
      taxesIncluded: "* Barcha soliqlar va xizmatlar kiradi",
      optionalExcursions: "Qo'shimcha ekskursiyalar",
      tashkentTitle: "Toshkentdagi qo'shimcha ekskursiyalar",
      samarkandTitle: "Samarqanddagi qo'shimcha ekskursiyalar",
      bukharaTitle: "Buxorodagi qo'shimcha ekskursiyalar",
      importantNotice: "Muhim eslatma:",
      noticeText: "* Barcha qo'shimcha ekskursiyalar gid bilan kelishilgan holda joyida to'lanadi.",
      minimumGroup: "Har qanday qo'shimcha ekskursiya uchun minimal guruh hajmi – 5 kishi.",
      
      tashkentExcursions: [
        "• Toshkent teleminorasi tashrifi (dunyodagi 12-eng baland minora. 1985 yilda qurilgan. Balandligi — 375m) — 25 USD",
        "• Toshkent metro sayohati (Eng chiroyli bekatlarni ziyorat qilish) — 15 USD",
        "• Chorsu bozori sayohati va milliy taomlarni tatib ko'rish — 30 USD",
        "• Rishtondagi kulolchilik ustaxonasiga tashrif — 20 USD",
        "• Navoiy teatrida kechki folklor dasturi — 35 USD"
      ],
      
      samarkandExcursions: [
        "• 'Xovrenko' vinochilik zavodida vino degustatsiyasi (barcha mahsulotlarni tatib ko'rish + yengil gazaklar) — 30 USD",
        "• Valentina Romanenko moda studiyasiga tashrif (mashhur dizayner + sharqona uslubdagi moda namoyishi) — 10 USD",
        "• An'anaviy qog'oz tayyorlash ustaxonasi (ipak qog'oz tayyorlash jarayonini ko'rish va sinab ko'rish) — 20 USD",
        "• Registon maydonida quyosh botishi paytidagi kechki ovqat — 40 USD",
        "• An'anaviy non yopish master-klassi — 25 USD",
        "• Ulug'bek rasadxonasi astronomik sayohati — 15 USD",
        "• Ipak gilam to'qish ustaxonasi — 30 USD"
      ],
      
      bukharaExcursions: [
        "• Nodir Devon Begi madrasasida liboslar namoyishi — 25 USD",
        "• Suv minorasi tashrifi, shahar manzarasi va suratga olish imkoniyati — 25 USD",
        "• An'anaviy qo'g'irchoq teatri tomoshasi — 20 USD",
        "• Suzani tikish bo'yicha master-klass — 35 USD",
        "• Kechki folklor dasturi va kechki ovqat — 45 USD",
        "• An'anaviy hammom tajribasi — 40 USD",
        "• Yahudiylar mahallasi va sinagoga sayohati — 15 USD",
        "• Buxoro hunarmandchilik ustaxonalari sayohati (zardo'zlik, miniatyura) — 30 USD"
      ]
    },
    ru: {
      title: "Цены на туры на 2024 - 2025",
      hotels3Star: "Гостиницы",
      hotels4Star: "Гостиницы",
      perPerson: "На человека",
      startingFrom: "от",
      taxesIncluded: "* Все налоги и сборы включены",
      optionalExcursions: "Дополнительные экскурсии",
      tashkentTitle: "Дополнительные экскурсии в Ташкенте",
      samarkandTitle: "Дополнительные экскурсии в Самарканде",
      bukharaTitle: "Дополнительные экскурсии в Бухаре",
      importantNotice: "Важное примечание:",
      noticeText: "* Все дополнительные экскурсии должны быть согласованы с гидом и оплачены на месте.",
      minimumGroup: "Минимальный размер группы для любой дополнительной экскурсии – 5 человек.",
      
      tashkentExcursions: [
        "• Посещение Ташкентской телебашни (12-я по высоте башня в мире. Построена в 1985 году. Высота — 375м) — 25 USD",
        "• Тур по ташкентскому метро (посещение самых красивых станций) — 15 USD",
        "• Тур по базару Чорсу с дегустацией местной кухни — 30 USD",
        "• Посещение керамической мастерской в Риштане — 20 USD",
        "• Вечернее фольклорное шоу в театре Навои — 35 USD"
      ],
      
      samarkandExcursions: [
        "• Дегустация вин на винзаводе 'Ховренко' (включая дегустацию всех продуктов + легкие закуски) — 30 USD",
        "• Тур в модную студию Валентины Романенко (известный дизайнер одежды + показ мод в восточном стиле) — 10 USD",
        "• Мастерская традиционного изготовления бумаги (увидеть и попробовать процесс изготовления шелковой бумаги) — 20 USD",
        "• Ужин на закате на площади Регистан — 40 USD",
        "• Мастер-класс по приготовлению традиционного хлеба — 25 USD",
        "• Астрономический тур в обсерваторию Улугбека — 15 USD",
        "• Мастерская по ткачеству шелковых ковров — 30 USD"
      ],
      
      bukharaExcursions: [
        "• Показ костюмов в медресе Нодир Девон Беги — 25 USD",
        "• Посещение водонапорной башни с панорамным видом на город — 25 USD",
        "• Представление традиционного кукольного театра — 20 USD",
        "• Мастер-класс по вышивке сюзане — 35 USD",
        "• Вечернее фольклорное шоу с ужином — 45 USD",
        "• Традиционный опыт хаммама — 40 USD",
        "• Тур по еврейскому кварталу и синагоге — 15 USD",
        "• Тур по ремесленным мастерским Бухары (золотое шитье, миниатюра) — 30 USD"
      ]
    }
  };

  const t = translations[lang] || translations.en;

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Prices Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-600 text-center mb-8">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* 3* Hotel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-purple-100">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-purple-600 mr-2">3*</span>
                <h4 className="text-xl font-medium text-gray-800">{t.hotels3Star}</h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">{t.perPerson}</span>
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  715 USD
                  <span className="text-sm text-gray-500 ml-2">{t.startingFrom}</span>
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                {t.taxesIncluded}
              </div>
            </div>
          </div>

          {/* 4* Hotel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-indigo-100">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-indigo-100 rounded-full opacity-50"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-indigo-600 mr-2">4*</span>
                <h4 className="text-xl font-medium text-gray-800">Hotels</h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">Per person</span>
                </p>
                <p className="text-2xl font-bold text-indigo-600">
                  780 USD
                  <span className="text-sm text-gray-500 ml-2">starting from</span>
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                * All taxes and services included
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Excursions */}
      <div>
        <h3 className="text-2xl font-semibold text-purple-600 mb-6">
          {t.optionalExcursions}
        </h3>
        
        <div className="space-y-4">
          {/* Tashkent */}
          <div 
            className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(0)}
          >
            <h4 className="font-medium">{t.tashkentTitle}</h4>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeItem === 0 ? 'block' : 'hidden'}`}>
              {t.tashkentExcursions.map((excursion, index) => (
                <p key={index}>{excursion}</p>
              ))}
            </div>
          </div>

          {/* Samarqand */}
          <div 
            className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(1)}
          >
            <h4 className="font-medium">{t.samarkandTitle}</h4>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeItem === 1 ? 'block' : 'hidden'}`}>
              {t.samarkandExcursions.map((excursion, index) => (
                <p key={index}>{excursion}</p>
              ))}
            </div>
          </div>

          {/* Buxoro */}
          <div 
            className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(2)}
          >
            <h4 className="font-medium">{t.bukharaTitle}</h4>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeItem === 2 ? 'block' : 'hidden'}`}>
              {t.bukharaExcursions.map((excursion, index) => (
                <p key={index}>{excursion}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg shadow-md">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 font-medium">
                {t.importantNotice}
              </p>
              <p className="mt-1 text-yellow-600">
                {t.noticeText}
              </p>
              <p className="mt-1 text-yellow-600 font-semibold">
                {t.minimumGroup}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ... Continue with similar translations for other sections ... */}
    </div>
  );
}

export default Content3;