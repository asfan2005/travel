import React, { useEffect, useState } from "react";

function Home({ selectedLanguage }) {
  const [counts, setCounts] = useState({
    years: 0,
    hotels: 0,
    guides: 0,
  });

  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const translations = {
    uz: {
      header: "Canaan Travel bilan O'zbekistonga sayohat qiling",
      subHeader: "Afsonaviy Sharqni kashf eting!",
      searchPlaceholder: "Qayerga sayohat qilmoqchisiz?",
      searchButton: "Qidirish",
      stats: {
        years: "Tajribalar yillari",
        hotels: "Mehmonxonalar",
        guides: "Gidlar",
      },
    },
    ru: {
      header: "Путешествуйте в Узбекистан с Canaan Travel",
      subHeader: "Откройте для себя легендарный Восток!",
      searchPlaceholder: "Куда вы хотите поехать?",
      searchButton: "Поиск",
      stats: {
        years: "Годы опыта",
        hotels: "Отели",
        guides: "Гиды",
      },
    },
  };

  const t = translations[selectedLanguage] || translations.uz;

  const popularPlaces = [
    { name: "Samarkand - Registan Square", rating: 4.9 },
    { name: "Bukhara - Poi Kalon Complex", rating: 4.8 },
    { name: "Khiva - Ichan Qala", rating: 4.7 },
    { name: "Tashkent - Chorsu Bazaar", rating: 4.6 },
    { name: "Shahrisabz - Ak-Saray Palace", rating: 4.5 },
  ];

  const filteredPlaces = popularPlaces.filter((place) =>
    place.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const duration = 2000; // Animation duration (ms)
    const steps = 50; // Animation steps
    const interval = duration / steps;

    const targetCounts = {
      years: 18,
      hotels: 500,
      guides: 300,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      setCounts({
        years: Math.min(Math.round((targetCounts.years * currentStep) / steps), targetCounts.years),
        hotels: Math.min(Math.round((targetCounts.hotels * currentStep) / steps), targetCounts.hotels),
        guides: Math.min(Math.round((targetCounts.guides * currentStep) / steps), targetCounts.guides),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    if (searchValue.trim()) {
      const searchQuery = encodeURIComponent(`${searchValue} Uzbekistan tourism`);
      const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
      window.open(googleSearchUrl, "_blank");
    }
  };

  return (
    <div className="w-full">
      <div className="min-h-screen w-full bg-[url('https://ufez.uz/wp-content/uploads/2021/06/d65209f1-0218-450f-b28b-3c7c72cee23b.jpeg')] bg-cover bg-center bg-no-repeat">
        {/* Content */}
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">
          {/* Header */}
          <h1 className="mb-2 text-4xl font-bold md:text-5xl">{t.header}</h1>
          <p className="mb-8 text-xl">{t.subHeader}</p>

          {/* Search Section */}
          <div className="mx-auto mb-12 flex w-full max-w-2xl flex-col gap-2 sm:flex-row relative">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => {
                  setTimeout(() => setShowSuggestions(false), 200);
                }}
                placeholder={t.searchPlaceholder}
                className="w-full rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              {/* Suggestions dropdown */}
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10">
                  {filteredPlaces.map((place, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-purple-50 cursor-pointer text-gray-800 flex justify-between items-center"
                      onClick={() => {
                        setSearchValue(place.name);
                        setShowSuggestions(false);
                      }}
                    >
                      <span className="text-left">{place.name}</span>
                      <span className="text-purple-600 font-medium flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-400 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {place.rating}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={handleSearch}
              className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {t.searchButton}
            </button>
          </div>

          {/* Stats */}
          <div className="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-3 md:bg-white md:rounded-lg md:p-6 relative">
            <div className="text-center flex flex-col items-center">
              <h2 className="mb-1 text-4xl font-bold text-white md:text-purple-600">{counts.years}</h2>
              <p className="text-white md:text-purple-600">{t.stats.years}</p>
            </div>

            {/* Vertical divider - for desktop only */}
            <div className="absolute left-1/3 top-1/4 h-1/2 w-px bg-purple-300 hidden md:block"></div>

            <div className="text-center flex flex-col items-center">
              <h2 className="mb-1 text-4xl font-bold text-white md:text-purple-600">{counts.hotels}+</h2>
              <p className="text-white md:text-purple-600">{t.stats.hotels}</p>
            </div>

            {/* Vertical divider - for desktop only */}
            <div className="absolute left-2/3 top-1/4 h-1/2 w-px bg-purple-300 hidden md:block"></div>

            <div className="text-center flex flex-col items-center">
              <h2 className="mb-1 text-4xl font-bold text-white md:text-purple-600">{counts.guides}+</h2>
              <p className="text-white md:text-purple-600">{t.stats.guides}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
