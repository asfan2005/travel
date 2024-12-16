import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sayohatlar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang');
    setCurrentLang(lang || 'en');
  }, [location]);

  const tourContent = {
    en: {
      pageTitle: 'Private tours',
      tours: [
        {
          id: 5,
          title: '5-Day Tour',
          description: 'Explore the ancient city and historical monuments',
          duration: '5 days',
          price: '$1000',
          buttonText: 'Order Now'
        },
        {
          id: 6,
          title: '6-Day Tour',
          description: 'Visit madrasahs and historical sites',
          duration: '6 days',
          price: '$1200',
          buttonText: 'Order Now'
        },
        {
          id: 10,
          title: '10-Day Tour',
          description: 'Travel around all of Uzbekistan',
          duration: '10 days',
          price: '$1890',
          buttonText: 'Order Now'
        }
      ]
    },
    uz: {
      pageTitle: 'Sayohatlar',
      tours: [
        {
          id: 5,
          title: '5 kunlik Samarqand sayohati',
          description: 'Qadimiy shahar va tarixiy yodgorliklarni kashf eting',
          duration: '5 kun',
          price: '$1000',
          buttonText: 'Buyurtma berish'
        },
        {
          id: 6,
          title: '6 kunlik Buxoro sayohati',
          description: 'Madrasalar va tarixiy joylarni ziyorat qiling',
          duration: '6 kun',
          price: '$1200',
          buttonText: 'Buyurtma berish'
        },
        {
          id: 10,
          title: "10 kunlik O'zbekiston bo'ylab sayohat",
          description: "Butun O'zbekiston bo'ylab sayohat",
          duration: '10 kun',
          price: '$1890',
          buttonText: 'Buyurtma berish'
        }
      ]
    },
    ru: {
      pageTitle: 'Туры',
      tours: [
        {
          id: 5,
          title: '5-дневный тур',
          description: 'Исследуйте древний город и исторические памятники',
          duration: '5 дней',
          price: '$1000',
          buttonText: 'Заказать сейчас'
        },
        {
          id: 6,
          title: '6-дневный тур',
          description: 'Посетите медресе и исторические места',
          duration: '6 дней',
          price: '$1200',
          buttonText: 'Заказать сейчас'
        },
        {
          id: 10,
          title: '10-дневный тур',
          description: 'Путешествие по всему Узбекистану',
          duration: '10 дней',
          price: '$1890',
          buttonText: 'Заказать сейчас'
        }
      ]
    }
  };

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`${path}?lang=${currentLang}`);
  };

  const content = tourContent[currentLang] || tourContent.en;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-blue-700">
        {content.pageTitle}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {content.tours.map((tour) => (
          <div 
            key={tour.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative pb-[56.25%]">
              <img 
                src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80"
                alt={tour.title} 
                className="absolute top-0 left-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{tour.title}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{tour.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-blue-600 font-medium">{tour.duration}</span>
                <span className="text-sm sm:text-base text-green-600 font-bold">{tour.price}</span>
              </div>
              <button 
                onClick={() => handleNavigate(`/${tour.id}-days-tour`)}
                className="mt-4 w-full bg-blue-500 text-white py-2 sm:py-3 rounded-md hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
              >
                {tour.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sayohatlar;