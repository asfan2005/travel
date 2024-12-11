import React, { useState, useEffect } from "react";

function Sharq() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const famousPlaces = [
    {
      id: 1,
      name: "Registon Maydoni",
      location: "Samarqand",
      description: "O'zbekistonning eng mashhur me'moriy yodgorligi, uch madrasa bilan o'ralgan tarixiy maydon.",
      additionalInfo: "XV asrda qurilgan | UNESCO merosi | Ulug'bek, Sherdor va Tillakori madrasalari",
      facts: [
        "Dunyodagi eng go'zal maydonlardan biri",
        "Har kuni minglab sayyohlar tashrif buyuradi",
        "Qadimiy ilm-fan markazi"
      ],
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=1000",
    },
    {
      id: 2,
      name: "Ichan Qal'a",
      location: "Xiva",
      description: "UNESCO jahon merosi ro'yxatiga kiritilgan qadimiy shahar, 400 dan ortiq tarixiy binolar majmuasi.",
      additionalInfo: "XII asrda qurilgan | UNESCO merosi | 400 dan ortiq tarixiy inshootlar",
      facts: [
        "O'rta Osiyodagi eng qadimiy shaharlardan biri",
        "Ichki shahar devorlarining uzunligi 2.2 km",
        "Qadimiy me'morchilik namunasi"
      ],
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=1000",
    },
    {
      id: 3,
      name: "Chorsu Bozori",
      location: "Toshkent",
      description: "Markaziy Osiyoning eng qadimiy va rang-barang bozorlaridan biri.",
      additionalInfo: "XIX asrdan buyon faoliyat yuritadi | Milliy savdo markazi",
      facts: [
        "Eng katta markaziy bozor",
        "An'anaviy hunarmandchilik markazi",
        "Milliy taomlar markazi"
      ],
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=1000",
    },
    {
      id: 4,
      name: "Ark Qal'asi",
      location: "Buxoro",
      description: "Qadimiy Buxoro shahridagi tarixiy qal'a, hukmdorlar qarorgohi bo'lgan.",
      additionalInfo: "V asrda qurilgan | Buxoro amirligi qarorgohi | Tarixiy muzey",
      facts: [
        "2000 yillik tarixga ega",
        "Qadimiy me'morchilik durdonasi",
        "Buxoro tarixining timsoli"
      ],
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=1000",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === famousPlaces.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? famousPlaces.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="w-full h-screen flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {famousPlaces.map((place) => (
          <div
            key={place.id}
            className="w-full h-screen flex-shrink-0 relative group"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/80">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl text-white text-center p-4 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-3xl sm:text-6xl font-bold mb-2 sm:mb-4 tracking-wider animate-fade-in">
                    {place.name}
                  </h2>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-xl sm:text-3xl font-semibold">{place.location}</p>
                  </div>

                  <p className="text-base sm:text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
                    {place.description}
                  </p>

                  <div className="mt-4 sm:mt-8">
                    <p className="text-base sm:text-lg font-medium text-yellow-300">
                      {place.additionalInfo}
                    </p>
                  </div>

                  {place.facts && (
                    <div className="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {place.facts.map((fact, index) => (
                        <div 
                          key={index}
                          className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg transform hover:scale-105 transition-transform duration-300"
                        >
                          <p className="text-xs sm:text-sm">{fact}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isAutoPlay ? 'bg-white text-black' : 'bg-white/50 text-white'
          }`}
        >
          {isAutoPlay ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>

        <div className="flex gap-3">
          {famousPlaces.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 
                ${currentIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sharq;