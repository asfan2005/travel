import React, { useState, useEffect } from "react";

function Mashhur() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const popularPlaces = [
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
      city: "Samarqand",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Samarqand is known for its blue domes and has been famous around the world. There are many tales about this city.",
      rating: 4.7
    },
    {
      id: 4,
      city: "Xiva",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Xiva is one of the important cities of the Khorezm State, which is a part of the ancient Silk Road.",
      rating: 4.6
    },
    {
      id: 5,
      city: "Shahrisabz",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Shahrisabz is famous for being the birthplace of Amir Temur. It has a rich historical heritage.",
      rating: 4.9
    },
    {
      id: 6,
      city: "Termiz",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Termiz is one of the ancient Buddhist centers, located in the center of the Surkhandarya region.",
      rating: 4.8
    },
    {
      id: 7,
      city: "Marg'ilon",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Marg'ilon is a city of Atlas and Adras, which was the site of the Silk Road caravans. It has a rich historical heritage.",
      rating: 4.7
    },
    {
      id: 8,
      city: "Qo'qon",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Qo'qon is a city with many mosques and madrassas. It is the capital of the Qo'qon region.",
      rating: 4.9
    },
    {
      id: 9,
      city: "Andijon",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Andijon is one of the most important cities of Uzbekistan. It is a modern industrial center.",
      rating: 4.8
    },
    {
      id: 10,
      city: "Nukus",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Nukus is the capital of the Qoraqalpog'iston Respublikas. It is famous for the Savitskiy Museum and the world's largest salt lake.",
      rating: 4.7
    },
    {
      id: 11,
      city: "Navoiy",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Navoiy is a modern city with many large companies. It is a center for new construction projects.",
      rating: 4.9
    },
    {
      id: 12,
      city: "Jizzax",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      description: "Jizzax is a city on the ancient Silk Road. It has a rich historical heritage and is a modern industrial center.",
      rating: 4.8
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 4 >= popularPlaces.length ? 0 : prevIndex + 4
      );
    }, 5000); // 5 sekundga o'zgartirildi (3000 -> 5000)

    return () => clearInterval(timer);
  }, []);

  const visibleItems = popularPlaces.slice(currentIndex, currentIndex + 4);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Popular Destinations
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
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-90" />
            
            {/* Content */}
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

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(popularPlaces.length / 4) }).map((_, index) => (
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