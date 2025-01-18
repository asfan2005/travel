import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Ark from "../../images/Ark.jpg";
function Home() {
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get('lang');
    return langParam && ['en', 'ru', 'uz'].includes(langParam) ? langParam : 'en';
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get('lang');
    if (langParam && ['en', 'ru', 'uz'].includes(langParam)) {
      setSelectedLanguage(langParam);
    }
  }, [location.search]);

  const [counts, setCounts] = useState({
    years: 0,
    hotels: 0,
    guides: 0,
  });

  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const translations = {
    uz: {
      header: "Travelcations bilan O'zbekistonga sayohat qiling",
      subHeader: "Keyingi sarguzashtingizni kashf eting!",
      searchPlaceholder: "Qayerga sayohat qilmoqchisiz?",
      searchButton: "Qidirish",
      stats: {
        years: "Tajribalar yillari",
        hotels: "Mehmonxonalar",
        guides: "Gidlar",
      },
    },
    ru: {
      header: "Путешествуйте в Узбекистан с Travelcations",
      subHeader: " Откройте для себя ваше следующее приключение",
      searchPlaceholder: "Куда вы хотите поехать?",
      searchButton: "Поиск",
      stats: {
        years: "Годы опыта",
        hotels: "Отели",
        guides: "Гиды",
      },
    },
    en: {
      header: "Travel to Uzbekistan with Travelcations",
      subHeader: "Discover your next adventure!",
      searchPlaceholder: "Where do you want to travel?",
      searchButton: "Search",
      stats: {
        years: "Years of Experience",
        hotels: "Hotels",
        guides: "Guides",
      },
    }
  };

  const t = translations[selectedLanguage];

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

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;


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
      <div className="min-h-screen w-full" style={{ backgroundImage: `url(${Ark})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* Content */}
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">
          {/* Header */}
          <h1 className="mb-2 text-4xl font-bold md:text-5xl text-blue-500">{t.header}</h1>
        

          {/* Search Section */}
         

          
        </div>
      </div>
    </div>
  );
}

export default Home;
