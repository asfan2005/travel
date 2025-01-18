import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Lisensiya from "../../images/litsensiya.jpg";

function License() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'uz'; // Default til o'zbek

  // Tarjimalar obyekti
  const translations = {
    uz: {
      title: "Litsenziya",
      description: "Rasmiy litsenziya hujjati"
    },
    en: {
      title: "License",
      description: "Official license document"
    },
    ru: {
      title: "Лицензия",
      description: "Официальный лицензионный документ"
    }
  };

  // Joriy til uchun tarjimalarni olish
  const currentTranslation = translations[lang] || translations.uz;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          {currentTranslation.title}
        </h1>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="p-8">
            <img
              src={Lisensiya}
              alt={currentTranslation.title}
              className="w-full h-auto object-contain rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
          <div className="px-8 pb-8">
            <p className="text-lg text-gray-600 text-center mt-4">
              {currentTranslation.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default License;