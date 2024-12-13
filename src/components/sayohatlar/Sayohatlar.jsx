import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sayohatlar() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const tours = [
    {
      id: 1,
      title: '5-Day Samarkand Tour',
      description: 'Explore the ancient city and historical monuments',
      duration: '5 days',
      price: '$500',
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80',
      path: '/5-days-tour'
    },
    {
      id: 2,
      title: '6-Day Bukhara Tour',
      description: 'Visit madrasahs and historical sites',
      duration: '6 days',
      price: '$600',
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80',
      path: '/6-days-tour'
    },
    {
      id: 3,
      title: '10-Day Comprehensive Uzbekistan Tour',
      description: 'Travel around all of Uzbekistan',
      duration: '10 days',
      price: '$1,000',
      image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80',
      path: '/10-days-tour'
    }
  ];

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-blue-700">Tours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {tours.map((tour) => (
          <div 
            key={tour.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative pb-[56.25%]">
              <img 
                src={tour.image} 
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
                onClick={() => handleNavigate(tour.path)}
                className="mt-4 w-full bg-blue-500 text-white py-2 sm:py-3 rounded-md hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sayohatlar;