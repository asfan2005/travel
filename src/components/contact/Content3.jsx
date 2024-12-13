import React, { useState } from "react";

function Content3() {
  const [activeItem, setActiveItem] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleItem = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Prices Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-600 text-center mb-8">
          Tour Prices for 2024 - 2025
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* 3* Hotel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-purple-100">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-purple-600 mr-2">3*</span>
                <h4 className="text-xl font-medium text-gray-800">Hotels</h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">Per person</span>
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  715 USD
                  <span className="text-sm text-gray-500 ml-2">starting from</span>
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                * All taxes and services included
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
          Optional Excursions
        </h3>
        
        <div className="space-y-4">
          {/* Tashkent */}
          <div 
            className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(0)}
          >
            <h4 className="font-medium">Additional Excursions in Tashkent</h4>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeItem === 0 ? 'block' : 'hidden'}`}>
              <p>• Visit to Tashkent TV Tower (12th tallest tower in the world. Built in 1985. Height — 375m) — 25 USD</p>
              <p>• Tashkent Metro Tour (Visit to the most beautiful stations) — 15 USD</p>
              <p>• Chorsu Bazaar Tour with Local Food Tasting — 30 USD</p>
              <p>• Ceramic Workshop Visit in Rishtan — 20 USD</p>
              <p>• Evening Folk Show at Navoi Theater — 35 USD</p>
            </div>
          </div>

          {/* Samarqand */}
          <div 
            className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(1)}
          >
            <h4 className="font-medium">Additional Excursions in Samarqand</h4>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeItem === 1 ? 'block' : 'hidden'}`}>
              <p>• Wine Tasting Tour at "Khovrenko" Winery (includes all products tasting + light snacks) — 30 USD</p>
              <p>• Valentina Romanenko Fashion Studio Tour (famous clothing designer + oriental style fashion show) — 10 USD</p>
              <p>• Traditional Paper Making Workshop (see and try the silk paper making process) — 20 USD</p>
              <p>• Sunset Dinner at Registan Square — 40 USD</p>
              <p>• Master Class in Traditional Bread Making — 25 USD</p>
              <p>• Ulugbek Observatory Astronomical Tour — 15 USD</p>
              <p>• Silk Carpet Weaving Workshop — 30 USD</p>
            </div>
          </div>

          {/* Buxoro */}
          <div 
            className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(2)}
          >
            <h4 className="font-medium">Additional Excursions in Bukhara</h4>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeItem === 2 ? 'block' : 'hidden'}`}>
              <p>• Costume Show at Nodir Devon Begi Madrasah — 25 USD</p>
              <p>• Water Tower Visit with Panoramic City Views and Photo Opportunities — 25 USD</p>
              <p>• Traditional Puppet Show Performance — 20 USD</p>
              <p>• Master Class in Suzani Embroidery — 35 USD</p>
              <p>• Evening Folklore Show with Dinner — 45 USD</p>
              <p>• Traditional Hammam Experience — 40 USD</p>
              <p>• Jewish Quarter and Synagogue Tour — 15 USD</p>
              <p>• Bukhara Artisan Workshop Tour (Gold embroidery, miniature painting) — 30 USD</p>
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
              <p className="text-sm text-yellow-700 font-medium">Important Notice:</p>
              <p className="mt-1 text-yellow-600">
                * All additional excursions must be arranged with the guide and paid on-site.
              </p>
              <p className="mt-1 text-yellow-600 font-semibold">
                Minimum group size for any additional excursion – 5 people.
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