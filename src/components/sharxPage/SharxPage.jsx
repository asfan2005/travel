import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3, Image4,Image5,Image6,Image7 } from "../index";

function SharxPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Image1, Image2, Image3, Image4,Image5,Image6,Image7,Image2];

  // Responsive slides per view
  const getSlidesPerView = () => {
    if (window.innerWidth < 640) return 1;    // mobile
    if (window.innerWidth < 1024) return 2;   // tablet
    return 4;                                 // desktop
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(images.length / slidesPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="w-full py-4 md:py-6 lg:py-10">
      {/* Sarlavha */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6 lg:mb-10 text-gray-800">
        Kompaniya sharhlari
      </h1>

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {/* Rasmlar */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(images.length / slidesPerView) }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex w-full h-full flex-shrink-0">
              {images
                .slice(groupIndex * slidesPerView, (groupIndex + 1) * slidesPerView)
                .map((image, index) => (
                  <div 
                    key={index} 
                    className={`${
                      slidesPerView === 1 ? 'w-full' : 
                      slidesPerView === 2 ? 'w-1/2' : 'w-1/4'
                    } h-full flex-shrink-0 px-1 md:px-2`}
                  >
                    <img
                      src={image}
                      alt={`Slide ${groupIndex * slidesPerView + index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Nuqtachalar */}
        <div className="absolute bottom-2 md:bottom-3 lg:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 
                ${currentSlide === index 
                  ? 'bg-white w-6 md:w-8' 
                  : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1)}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 md:p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentSlide(prev => prev === totalSlides - 1 ? 0 : prev + 1)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 md:p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SharxPage;