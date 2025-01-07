import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import {
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
  FaAddressCard,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import axios from 'axios';

function SixDaysTour() {
  const location = useLocation();
  const [language, setLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedDays, setExpandedDays] = useState({});

  // Add form state
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    citizenship: '',
    email: '',
    phone: '',
    arrivingFrom: '',
    startDate: '',
    endDate: '',
    accommodationType: '',
    numberOfTravelers: '',
    comments: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add state for prices
  const [priceData, setPriceData] = useState([]);

  // Multilingual content for tour title and description
  const tourTitles = {
    en: "10-day Uzbekistan Express Tour",
    ru: "10-дневный экспресс-тур по Узбекистану",
    uz: "O'zbekiston Express sayohati (6 kun)"
  };

  const tourDescriptions = {
    en: "10-day Uzbekistan Express Tour is a perfect introduction to Uzbekistan's main highlights. You will explore the ancient cities of Samarkand and Bukhara, experience the modern capital Tashkent, and discover the rich cultural heritage of the Silk Road. This compact tour is ideal for those with limited time who want to see the essential sights of Uzbekistan.",
    ru: "10-дневный экспресс-тур по Узбекистану - идеальное знакомство с основными достопримечательностями страны. Вы исследуете древние города Самарканд и Бухара, познакомитесь с современной столицей Ташкентом и откроете для себя богатое культурное наследие Шелкового пути. Этот компактный тур идеально подходит для тех, у кого ограничено время, но кто хочет увидеть самые важные достопримечательности Узбекистана.",
    uz: "O'zbekiston Express sayohati (10 kun) - O'zbekistonning asosiy diqqatga sazovor joylarini tanishishning mukammal imkoniyati. Siz Samarqand va Buxoro kabi qadimiy shaharlarni kashf qilasiz, zamonaviy poytaxt Toshkentni ko'rasiz va Ipak yo'lining boy madaniy merosini o'rganasiz. Ushbu qisqa sayohat vaqti cheklangan, lekin O'zbekistonning eng muhim ko'rinishlarini ko'rmoqchi bo'lganlar uchun ideal."
  };

  // Multilingual images with localized descriptions
  const images = [
    {
      src: "https://media.gettyimages.com/id/1249451586/photo/panorama-samarkand-uzbekistan-registan-square-sher-dor-madrasah.jpg?s=612x612&w=0&k=20&c=62sJBnyyZjKRQYcRhzu632HJBpTdFhoV2fbY8RYw7uM=",
      alt: {
        en: "Registan Square in Samarkand",
        ru: "Площадь Регистан в Самарканде",
        uz: "Samarqandda Registon maydoni"
      },
      location: {
        en: "Samarkand",
        ru: "Самарканд",
        uz: "Samarqand"
      }
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/603/797/474/thumb_1594_600_0_0_0_auto.jpg",
      alt: {
        en: "Tour route map",
        ru: "Маршрут тура",
        uz: "Sayohatning marshruti"
      },
      location: {
        en: "Tour Map",
        ru: "Маршрут тура",
        uz: "Sayohatning marshruti"
      }
    },
    {
      src: "https://media.gettyimages.com/id/1184019772/photo/bukhara-uzbekistan-kalyan-minaret-and-madressa-sunset-twilight.jpg?s=612x612&w=0&k=20&c=gQofEvWI4u-NilQZcq_Uqea9iIqU7KxdiWqlbvFOjwg=",
      alt: {
        en: "Bukhara City View",
        ru: "Вид Бухары",
        uz: "Buxorada ko'rinishi"
      },
      location: {
        en: "Bukhara",
        ru: "Бухара",
        uz: "Buxoro"
      }
    },
    {
      src: "https://media.istockphoto.com/id/1189800495/photo/khiva-sunset-twilight-xiva-%D1%85%D0%B8%D0%B2%D0%B0-islam-khoja-minaret-uzbekistan.jpg?s=612x612&w=0&k=20&c=bx8HgpRRqg30AeC97fUuOqjw-862_OAwes7vVMaOuTM=",
      alt: {
        en: "Khiva Old City",
        ru: "Старая Хива",
        uz: "Xiva eski shahri"
      },
      location: {
        en: "Khiva",
        ru: "Хива",
        uz: "Xiva"
      }
    },
    {
      src: "https://media.istockphoto.com/id/1034587098/photo/tashkent-tv-tower-aerial-shot-during-sunset-in-uzbekistan.jpg?s=612x612&w=0&k=20&c=vos2bfAhLB8HuKgh91KnMkllxkZC6RYoXNt-F8Tz6Os=",
      alt: {
        en: "Modern Tashkent",
        ru: "Современный Ташкент",
        uz: "Zamonaviy Toshkent"
      },
      location: {
        en: "Tashkent",
        ru: "Ташкент",
        uz: "Toshkent"
      }
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/35/29/8f/viste.jpg?w=700&h=400&s=1",
      alt: {
        en: "Shahrisabz View",
        ru: "Вид Шахрисабза",
        uz: "Shahrisabz ko'rinishi"
      },
      location: {
        en: "Shahrisabz",
        ru: "Шахрисабз",
        uz: "Shahrisabz"
      }
    },
    {
      src: "https://adrastravel.com/wp-content/uploads/2021/06/gijduvan-shashlik-2.webp",
      alt: {
        en: "Gijduvan Crafts",
        ru: "Изделия из гиядувана",
        uz: "Gijduvanda ishlari"
      },
      location: {
        en: "Gijduvan",
        ru: "Гийдуван",
        uz: "Gijduvan"
      }
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/ea/1c/bazar-chorsu.jpg?w=700&h=-1&s=1",
      alt: {
        en: "Silk Road Bazaar",
        ru: "Базар Шелкового пути",
        uz: "Ipak yo'lining bazar"
      },
      location: {
        en: "Bazaar",
        ru: "Базар",
        uz: "Bazar"
      }
    },
    {
      src: "https://uzbekistan.travel/storage/app/media/Otabek/asosiydagi%20rasmlar/cropped-images/2079897013-0-0-0-0-1728537570.jpg",
      alt: {
        en: "Traditional Architecture",
        ru: "Традиционная архитектура",
        uz: "Traditsion arhitektura"
      },
      location: {
        en: "Architecture",
        ru: "Архитектура",
        uz: "Arhitektura"
      }
    },
    {
      src: "https://www.advantour.com/img/uzbekistan/dishes/plov.jpg",
      alt: {
        en: "Local Cuisine",
        ru: "Национальная кухня",
        uz: "O'zbek ozi"
      },
      location: {
        en: "Cuisine",
        ru: "Кухня",
        uz: "Ozi"
      }
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/671/9de/24a/thumb_3967_1140_0_0_0_auto.jpg",
      alt: {
        en: "Handicrafts",
        ru: "Художественная обработка",
        uz: "Ishlab chiqarish"
      },
      location: {
        en: "Crafts",
        ru: "Художественная обработка",
        uz: "Ishlab chiqarish"
      }
    },
    {
      src: "https://taleof2backpackers.com/wp-content/uploads/2024/04/Things-to-do-in-Khiva-Travel-Guide.jpg",
      alt: {
        en: "Cultural Performance",
        ru: "Культурное выступление",
        uz: "Madaniyat"
      },
      location: {
        en: "Culture",
        ru: "Культура",
        uz: "Madaniyat"
      }
    },
  ];

  const prices = {
    economy: {
      "1 person": 1200,
      "2 persons": 1100,
      "3 persons": 1000,
      "4 persons": 900,
      "Single supplement": 300,
    },
    comfort: {
      "1 person": 1450,
      "2 persons": 1260,
      "3 persons": 1160,
      "4 persons": 1060,
      "Single supplement": 320,
    },
    deluxe: {
      "1 person": 1960,
      "2 persons": 1480,
      "3 persons": 1390,
      "4 persons": 1280,
      "Single supplement": 340,
    },
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // Extract language from URL query parameter
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang');
    
    if (['en', 'ru', 'uz'].includes(lang)) {
      setLanguage(lang);
    }
  }, [location]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('http://localhost:8080/daysprice');
        // Filter only 10-day tour prices
        const tenDayPrices = response.data.filter(price => price.days === 10);
        // Sort by person number to ensure correct order
        const sortedPrices = tenDayPrices.sort((a, b) => a.person - b.person);
        setPriceData(sortedPrices);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices();
  }, []);

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const expandAll = () => {
    const allDays = {};
    for (let i = 1; i <= 6; i++) {
      allDays[i] = true;
    }
    setExpandedDays(allDays);
  };

  const collapseAll = () => {
    setExpandedDays({});
  };

  // Add handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Add submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the request data
    const requestData = {
      ...formData,
      turName: "10-day Uzbekistan Express Tour", // Add the tour name
      citizenShip: formData.citizenship // Match the backend property name
    };

    try {
      // Send POST request
      const response = await axios.post('http://localhost:8080/individual', requestData);
      
      // Reset form
      setFormData({
        title: '',
        firstName: '',
        lastName: '',
        citizenship: '',
        email: '',
        phone: '',
        arrivingFrom: '',
        startDate: '',
        endDate: '',
        accommodationType: '',
        numberOfTravelers: '',
        comments: ''
      });

      // Open success modal
      setIsModalOpen(true);

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Add modal component
  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Tour Request Submitted</h2>
        <p className="text-gray-600 mb-6">
          Your tour request has been successfully sent. Our admin will contact you soon.
        </p>
        <button 
          onClick={() => setIsModalOpen(false)}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );

  const tourDetails = {
    duration: {
      en: "10 Days",
      ru: "10 дней",
      uz: "10 kun"
    },
    destinations: {
      en: "Tashkent, Samarkand, Bukhara, Khiva",
      ru: "Ташкент, Самарканд, Бухара, Хива",
      uz: "Toshkent, Samarqand, Buxoro, Xiva"
    }
  };

  const priceTableTexts = {
    headers: {
      en: {
        title: "Prices per person",
        columns: ["Persons", "Econ", "Comf", "Deluxe"],
        rows: [
          "1 person", 
          "2 persons", 
          "3 persons", 
          "4 persons", 
          "Single supplement"
        ],
        footer: "Prices are for 2025 in US$ per person, with discounted prices for larger groups available on request."
      },
      ru: {
        title: "Цены за человека",
        columns: ["Количество", "Эконом", "Комфорт", "Делюкс"],
        rows: [
          "1 человек", 
          "2 человека", 
          "3 человека", 
          "4 человека", 
          "Доплата за одноместный номер"
        ],
        footer: "Цены указаны за 2025 год в долларах США за человека, скидки для больших групп предоставляются по запросу."
      },
      uz: {
        title: "Har bir kishi uchun narxlar",
        columns: ["Kishilar", "Iqtisodiy", "Komfort", "Deluxe"],
        rows: [
          "1 kishi", 
          "2 kishi", 
          "3 kishi", 
          "4 kishi", 
          "Yagona joy uchun qo'shimcha narx"
        ],
        footer: "Narxlar 2025 yil uchun AQSh dollarida bir kishi uchun, katta guruhlar uchun chegirmalar so'rov asosida mavjud."
      }
    }
  };

  // Multilingual navigation buttons
  const navigationButtons = {
    en: {
      itinerary: "ITINERARY",
      prices: "PRICES", 
      request: "REQUEST",
      reviews: "REVIEWS"
    },
    ru: {
      itinerary: "МАРШРУТ",
      prices: "ЦЕНЫ", 
      request: "ЗАПРОС",
      reviews: "ОТЗЫВЫ"
    },
    uz: {
      itinerary: "SAYOHAT MARSHRUTИ",
      prices: "NARXLAR", 
      request: "SO'ROV",
      reviews: "SHARHLAR"
    }
  };

  const dayOneContent = {
    en: {
      title: "Tashkent - Arrival",
      timeline: [
        {
          time: "01:05-03:00",
          description: "Arrival at Tashkent International Airport."
        },
        {
          time: "03:00-04:00",
          description: "Meeting at Tashkent airport (driver will be holding a sign with your name) and transfer to hotel."
        },
        {
          time: "07:00-09:00",
          description: "Breakfast at hotel."
        },
        {
          time: "09:00-13:00",
          description: "City sightseeing: Hazrat Imam Complex (Kafal Shashi Mausoleum, Muyi Muborak Madrasah, Barak Khan Madrasah, Namozgoh Mosque, Hazrat Imam Mosque), visit to Uzbek mahalla, ancient city of Mingtepa, Minor Mosque."
        },
        {
          time: "13:00-14:00",
          description: "Lunch at local restaurant (Tashkent pilaf at Besh Qozon - pilaf center)."
        },
        {
          time: "14:00-17:00",
          description: "Continue exploring Tashkent: Amir Timur statue and museum, Monument of Courage, Independence Square, Tashkent TV Tower, Chorsu Bazaar."
        },
        {
          time: "Evening",
          description: "Dinner at local restaurant and overnight at hotel."
        }
      ]
    },
    ru: {
      title: "Ташкент - Прибытие",
      timeline: [
        {
          time: "01:05-03:00",
          description: "Прибытие в международный аэропорт Ташкента."
        },
        {
          time: "03:00-04:00",
          description: "Встреча в аэропорту Ташкента (водитель будет держать табличку с вашим именем) и трансфер в отель."
        },
        {
          time: "07:00-09:00",
          description: "Завтрак в отеле."
        },
        {
          time: "09:00-13:00",
          description: "Обзорная экскурсия по городу: Комплекс Хазрат Имам (Мавзолей Кафал Шаши, Медресе Муйи Мубарак, Медресе Барак-хана, Мечеть Намозгох, Мечеть Хазрат Имам), посещение узбекского махалля, древний город Мингтепа, Малая мечеть."
        },
        {
          time: "13:00-14:00",
          description: "Обед в местном ресторане (Ташкентский плов в Беш Козон - центр плова)."
        },
        {
          time: "14:00-17:00",
          description: "Продолжение экскурсии по Ташкенту: Статуя и музей Амира Темура, Монумент Мужества, Площадь Независимости, Ташкентская телебашня, Базар Чорсу."
        },
        {
          time: "Вечер",
          description: "Ужин в местном ресторане и ночь в отеле."
        }
      ]
    },
    uz: {
      title: "Toshkent - Kelish",
      timeline: [
        {
          time: "01:05-03:00",
          description: "Toshkent xalqaro aeroportiga kelish."
        },
        {
          time: "03:00-04:00",
          description: "Toshkent aeroportida kutib olish (haydovchi sizning ismingiz yozilgan plakat bilan turadi) va mehmonxonaga o'tkazish."
        },
        {
          time: "07:00-09:00",
          description: "Mehmonxonada nonushta."
        },
        {
          time: "09:00-13:00",
          description: "Shahar sayohatи: Hazrat Imom majmuasi (Kafal Shashi maqbarasi, Muyi Muborak madrasasi, Barak Khan madrasasi, Namozgoh masjidi, Hazrat Imom masjidi), o'zbek mahallasiga tashrif, Mingtepa qadimiy shahri, Kichik masjid."
        },
        {
          time: "13:00-14:00",
          description: "Mahalliy restoranda tushlik (Besh Qozon - plov markazi)."
        },
        {
          time: "14:00-17:00",
          description: "Toshkentni davomini ko'rib chiqish: Amir Temur haykali va muzeyi, Botirlik monumenti, Mustaqillik maydoni, Toshkent telebashtasi, Chorsu bozori."
        },
        {
          time: "Kechqurun",
          description: "Mahalliy restoranda kechki ovqat va mehmonxonada tunash."
        }
      ]
    }
  };

  const dayTwoContent = {
    en: {
      title: "Tashkent - Samarkand",
      timeline: [
        {
          time: "05:00-05:30",
          description: "Check out from hotel (breakfast box can be arranged at reception). Transfer to railway station (driver will meet you at hotel reception)."
        },
        {
          time: "06:03-08:21",
          description: "High-speed train to Samarkand."
        },
        {
          time: "08:21-09:00",
          description: "Meeting at the station (the driver will show you a plate with your name and surname and transfer to the hotel (leave your luggage at the hotel reception you can leave it)."
        },
        {
          time: "09:00-13:00",
          description: "City attractions: Amir Cave (burial of Amir Temur and his family legendary mausoleum), Registon Square - 3 world-famous madrasahs (Ulugbek, Tillakori, Sherdon) complex, Bibi Khanim mosque - in Central Asia the largest mosque built, Siyob Bazar (local market)."
        },
        {
          time: "13:00-14:00",
          description: "Lunch at local restaurant (Samarkand pilaf)."
        },
        {
          time: "14:00-17:00",
          description: "Continue exploring Samarkand: Shahizinda Necropolis (holy place and Tombs of the Timurid dynasty and the tomb of the Prophet Muhammad's cousin cemetery), Hazrat Khizr Mosque, Afrosyab Museum, 'Heritage of El' theatrical performance (History of the peoples of Central Asia)."
        },
        {
          time: "Evening",
          description: "Dinner at a local restaurant and overnight at the hotel."
        }
      ]
    },
    ru: {
      title: "Ташкент - Самарканд",
      timeline: [
        {
          time: "05:00-05:30",
          description: "Выезд из отеля (завтрак-бокс может быть организован на стойке регистрации). Трансфер на железнодорожный вокзал (водитель встретит вас в холле отеля)."
        },
        {
          time: "06:03-08:21",
          description: "Скоростной поезд в Самарканд."
        },
        {
          time: "08:21-09:00",
          description: "Встреча на вокзале (водитель покажет табличку с вашим именем и фамилией и доставит в отель (можете оставить багаж на стойке регистрации отеля)."
        },
        {
          time: "09:00-13:00",
          description: "Городские достопримечательности: Мавзолей Амира (захоронение Амира Темура и его семьи), Площадь Регистан - комплекс из 3 всемирно известных медресе (Улугбека, Тиллакори, Шердор), мечеть Биби-Ханым - крупнейшая мечеть в Центральной Азии, Сиёб Базар (местный рынок)."
        },
        {
          time: "13:00-14:00",
          description: "Обед в местном ресторане (самаркандский плов)."
        },
        {
          time: "14:00-17:00",
          description: "Продолжение экскурсии по Самарканду: Некрополь Шахи-Зинда (святое место и кладбище с гробницами Тимуридов и могилой двоюродного брата пророка Мухаммада), мечеть Хазрат Хызр, Музей Афросиаба, театрализованное представление 'Наследие Эля' (История народов Центральной Азии)."
        },
        {
          time: "Вечер",
          description: "Ужин в местном ресторане и ночь в отеле."
        }
      ]
    },
    uz: {
      title: "Toshkent - Samarqand",
      timeline: [
        {
          time: "05:00-05:30",
          description: "Mehmonxonadan chiqish (nonushta qutisi resepshnda tayyorlanishi mumkin). Temir yo'l vokzaliga o'tkazish (haydovchi mehmonxona resepshnda kutib oladi)."
        },
        {
          time: "06:03-08:21",
          description: "Tezkor poyezd bilan Samarqandga yo'l."
        },
        {
          time: "08:21-09:00",
          description: "Vokzalda kutib olish (haydovchi sizning ism va familiyangiz yozilgan plakat ko'rsatadi va mehmonxonaga olib boradi (yuklaringizni mehmonxona resepshnda qoldirishingiz mumkin)."
        },
        {
          time: "09:00-13:00",
          description: "Shahar diqqatga sazovor joylar: Amir maqbarasi (Amir Temur va uning oilasining qabri), Registon maydoni - 3 jahon miqyosida mashhur madrasalar (Ulug'bek, Tillakori, Sherdor) majmuasi, Bibi Xonim masjidi - Markaziy Osiyodagi eng katta qurilgan masjid, Siyob Bozori (mahalliy bozar)."
        },
        {
          time: "13:00-14:00",
          description: "Mahalliy restoranda tushlik (Samarqand oshi)."
        },
        {
          time: "14:00-17:00",
          description: "Samarqandni davom etib ko'rib chiqish: Shohи Zinda nekropoli (muqaddas joy va Temuriylar sulolasi qabrlari va Payg'ambar Muhammad's jiyan qabristoni), Hazrat Xizr masjidi, Afrosiyob Muzeyi, 'El Merosi' teatr ko'rsatuvи (Markaziy Osiyo xalqlari tarixi)."
        },
        {
          time: "Kechqurun",
          description: "Mahalliy restoranda kechki ovqat va mehmonxonada tunash."
        }
      ]
    }
  };

  const dayThreeContent = {
    en: {
      title: "Samarkand - Bukhara",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Breakfast at the hotel. Leaving the hotel."
        },
        {
          time: "09:00-13:00",
          description: "City attractions: Khoja Daniyor mausoleum, Ulugbek Observatory and Museum, 'Konigil-Meros' silk paper production workshop."
        },
        {
          time: "13:00-14:00",
          description: "Lunch at a local restaurant (Samarkand mantis and peas-salt)."
        },
        {
          time: "14:00-14:30",
          description: "Transfer to the railway station."
        },
        {
          time: "15:00-17:00",
          description: "High-speed train to Bukhara."
        },
        {
          time: "17:00-17:30",
          description: "Pick up by the driver in Bukhara and transfer to the hotel."
        },
        {
          time: "Evening",
          description: "Dinner at a local restaurant and overnight at the hotel."
        }
      ]
    },
    ru: {
      title: "Самарканд - Бухара",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Завтрак в отеле. Выезд из отеля."
        },
        {
          time: "09:00-13:00",
          description: "Городские достопримечательности: Мавзолей Ходжи Даниёра, Обсерватория и музей Улугбека, мастерская производства шелковой бумаги 'Конигил-Мерос'."
        },
        {
          time: "13:00-14:00",
          description: "Обед в местном ресторане (самаркандские манты и горох-соль)."
        },
        {
          time: "14:00-14:30",
          description: "Трансфер на железнодорожный вокзал."
        },
        {
          time: "15:00-17:00",
          description: "Скоростной поезд в Бухару."
        },
        {
          time: "17:00-17:30",
          description: "Встреча водителем в Бухаре и трансфер в отель."
        },
        {
          time: "Вечер",
          description: "Ужин в местном ресторане и ночь в отеле."
        }
      ]
    },
    uz: {
      title: "Samarqand - Buxoro",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Mehmonxonada nonushta. Mehmonxonadan chiqish."
        },
        {
          time: "09:00-13:00",
          description: "Shahar diqqatga sazovor joylar: Xoja Doniyor maqbarasi, Ulug'bek Observatoriyasi va Muzeyi, 'Konigil-Meros' ipak qog'oz ishlab chiqarish ustaxonasi."
        },
        {
          time: "13:00-14:00",
          description: "Mahalliy restoranda tushlik (Samarqand mantisi va noxat-tuz)."
        },
        {
          time: "14:00-14:30",
          description: "Temir yo'l vokzaliga o'tkazish."
        },
        {
          time: "15:00-17:00",
          description: "Tezkor poyezd bilan Buxoroga yo'l."
        },
        {
          time: "17:00-17:30",
          description: "Buxoroda haydovchi tomonidan kutib olish va mehmonxonaga o'tkazish."
        },
        {
          time: "Kechqurun",
          description: "Mahalliy restoranda kechki ovqat va mehmonxonada tunash."
        }
      ]
    }
  };

  const dayFourContent = {
    en: {
      title: "Bukhara",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Breakfast at the hotel."
        },
        {
          time: "09:00-13:00",
          description: "Sights of the city: Today the tour will be on foot, because most of the old city is a pedestrian zone. Labi-Pool complex (Nadir Devonbegi pool, house and madrasa, Kukaldosh madrasa), Magoki-Attori mosque, 3 shopping domes (Toki Sarrofon, Toki Telpakfurushon, Toki Zargoron), Ulugbek madrasa, Abdulaziz Khan madrasa, Kalon Tower and Mosque, Mir Arab Madrasah."
        },
        {
          time: "13:00-14:00",
          description: "Lunch at a local restaurant (Bukhara pilaf - Oshi sofi)."
        },
        {
          time: "14:00-17:00",
          description: "We will continue exploring the Old City of Bukhara: Ark Fortress, Bolo-Hovuz mosque, Chashmai-Ayub mausoleum, Somanii mausoleum."
        },
        {
          time: "Evening",
          description: "Dinner at a local restaurant and overnight at the hotel."
        }
      ]
    },
    ru: {
      title: "Бухара",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Завтрак в отеле."
        },
        {
          time: "09:00-13:00",
          description: "Достопримечательности города: Сегодня экскурсия будет пешей, так как большая часть старого города является пешеходной зоной. Комплекс Лаби-Пол (Нэдир Девонбеги бассейн, дом и медресе, Кукалдош медресе), Магоки-Аттори мечеть, 3 торговых купола (Токи Саррофон, Токи Телпакфурушон, Токи Заргорон), медресе Улугбека, медресе Абдулазиза, башня и мечеть Калон, Мир Араб медресе."
      },
        {
          time: "13:00-14:00",
          description: "Обед в местном ресторане (Бухарский плов - Оши софи)."
        },
        {
          time: "14:00-17:00",
          description: "Продолжение экскурсии по Старому городу Бухары: Крепость Арк, мечеть Боло-Ховуз, мавзолей Чашмай-Айюб, мавзолей Сомани."
        },
        {
          time: "Вечер",
          description: "Ужин в местном ресторане и ночь в отеле."
        }
      ]
    },
    uz: {
      title: "Buxoro",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Mehmonxonada nonushta."
        },
        {
          time: "09:00-13:00",
          description: "Shahar diqqatga sazovor joylar: Bugun sayohat piyoda bo'ladi, chunki ko'p qismi eski shahar piyoda zonasi. Labi-Pool kompleksi (Nadir Devonbegi havzi, uy va madrasa, Kukaldosh madrasasi), Magoki-Attori masjidi, 3 savdo gumbazi (Toki Sarrofon, Toki Telpakfurushon, Toki Zargoron), Ulug'bek madrasasi, Abdulaziz Khan madrasasi, Kalon bashtasi va masjidi, Mir Arab Madrasasi."
        },
        {
          time: "13:00-14:00",
          description: "Mahalliy restoranda tushlik (Buxoro oshi - Oshi sofi)."
        },
        {
          time: "14:00-17:00",
          description: "Buxoroning Eski shahrini davom etib ko'rib chiqamiz: Ark qal'asi, Bolo-Hovuz masjidi, Chashmai-Ayub maqbarasi, Somanii maqbarasi."
        },
        {
          time: "Kechqurun",
          description: "Mahalliy restoranda kechki ovqat va mehmonxonada tunash."
        }
      ]
    }
  };

  const dayFiveContent = {
    en: {
      title: "Bukhara - Tashkent (Departure)",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Breakfast at the hotel. Leaving the hotel."
        },
        {
          time: "09:00-13:00",
          description: "Attractions in the village area: Bahavuddin Naqshband memorial-architectural complex (a saint and philosopher of the 14th century), Sitorai Mohi Khosa Palace (the summer residence of the last Bukhara emir - 20th century), Chor Bakr necropolis (16th century memorial-architectural complex)."
        },
        {
          time: "13:00-14:00",
          description: "Lunch at a local restaurant (grilled meat)."
        },
        {
          time: "14:00-14:30",
          description: "Transfer to the airport."
        },
        {
          time: "15:00-17:00",
          description: "Flight to Tashkent."
        },
        {
          time: "17:00-18:00",
          description: "Arrival in Tashkent, transfer to the hotel."
        },
        {
          time: "Evening",
          description: "Farewell dinner at a local restaurant and overnight at the hotel."
        }
      ]
    },
    ru: {
      title: "Бухара - Ташкент (Отъезд)",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Завтрак в отеле. Выезд из отеля."
        },
        {
          time: "09:00-13:00",
          description: "Достопримечательности пригородной зоны: Мемориально-архитектурный комплекс Бахавуддина Нақшбанда (святой  философ 14-го века), Дворец Ситораи Мохи Хоса (летняя резиденция последнего бухарского эмира - 20-й век), Некрополь Чор Бакр (мемориально-архитектурный комплекс 16-го века)."
        },
        {
          time: "13:00-14:00",
          description: "Обед в местном ресторане (жареное мясо)."
        },
        {
          time: "14:00-14:30",
          description: "Трансфер в аэропорт."
        },
        {
          time: "15:00-17:00",
          description: "Перелет в Ташкент."
        },
        {
          time: "17:00-18:00",
          description: "Прибытие в Ташкент, трансфер в отель."
        },
        {
          time: "Вечер",
          description: "Прощальный ужин в местном ресторане и ночь в отеле."
        }
      ]
    },
    uz: {
      title: "Buxoro - Toshkent (Yo'lga chiqish)",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Mehmonxonada nonushta. Mehmonxonadan chiqish."
        },
        {
          time: "09:00-13:00",
          description: "Qishloq atrofidagi diqqatga sazovor joylar: Baxovuddin Naqshband memurial-arxitektura majmuasi (14-asr avliyosi va faylsufi), Sitorai Moxi Xosa saroyи (oxirgi Buxoro emirining yozgi rezidentsiyasi - 20-asr), Chor Bakr nekropoli (16-asr memurial-arxitektura majmuasi)."
      },
        {
          time: "13:00-14:00",
          description: "Mahalliy restoranda tushlik (kabob)."
        },
        {
          time: "14:00-14:30",
          description: "Aeroportga o'tkazish."
        },
        {
          time: "15:00-17:00",
          description: "Toshkentga parvoz."
        },
        {
          time: "17:00-18:00",
          description: "Toshkentga kelish, mehmonxonaga o'tkazish."
        },
        {
          time: "Kechqurun",
          description: "Xayrlashish kechki oshи mahalliy restoranda va mehmonxonada tunash."
        }
      ]
    }
  };

  const daySixContent = {
    en: {
      title: "Tashkent - Departure",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Breakfast at the hotel. Preparation for departure."
        },
        {
          time: "09:00-12:00",
          description: "Final city tour of Tashkent: Independence Square, Earthquake Memorial Complex, Tashkent Metro (known for its beautiful stations), Applied Arts Museum, Chorsu Bazaar."
        },
        {
          time: "12:00-13:00",
          description: "Last-minute shopping and souvenir hunting at local markets and handicraft shops."
        },
        {
          time: "13:00-14:00",
          description: "Farewell lunch at a traditional Uzbek restaurant featuring national cuisine."
        },
        {
          time: "14:00-15:30",
          description: "Transfer to Tashkent International Airport. Assistance with check-in procedures."
        },
        {
          time: "15:30-17:00",
          description: "Free time at the airport, last-minute shopping, relaxation."
        },
        {
          time: "Evening",
          description: "Departure from Tashkent International Airport. End of the tour."
        }
      ]
    },
    ru: {
      title: "Ташкент - Отъезд",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Завтрак в отеле. Подготовка к отъезду."
        },
        {
          time: "09:00-12:00",
          description: "Заключительная экскурсия по Ташкенту: Площадь Независимости, Мемориальный комплекс Землетрясения, Ташкентское Метро (известное своими красивыми станциями), Музей прикладного искусства, Базар Чорсу."
        },
        {
          time: "12:00-13:00",
          description: "Последние покупки и поиск сувениров на местных рынках и в магазинах народных промыслов."
        },
        {
          time: "13:00-14:00",
          description: "Прощальный обед в традиционном узбекском ресторане с национальной кухней."
        },
        {
          time: "14:00-15:30",
          description: "Трансфер в международный аэропорт Ташкента. Помощь в процедуре регистрации."
        },
        {
          time: "15:30-17:00",
          description: "Свободное время в аэропорту, последние покупки, отдых."
        },
        {
          time: "Вечер",
          description: "Вылет из международного аэропорта Ташкента. Окончание тура."
        }
      ]
    },
    uz: {
      title: "Toshkent - Yo'lga chiqish",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Mehmonxonada nonushta. Yo'lga tayyorgarlik."
        },
        {
          time: "09:00-12:00",
          description: "Toshkentning oxirgi sayohat turи: Mustaqillik maydoni, Zilzila Xotira Majmuasi, Toshkent Metrosи (chiroyli stansiyalari bilan mashhur), Qo'l san'ati Muzeyi, Chorsu Bozori."
        },
        {
          time: "12:00-13:00",
          description: "Mahalliy bozorlar va qo'l san'ati do'konlarida oxirgi sotib olishlar va suvenir izlash."
        },
        {
          time: "13:00-14:00",
          description: "Milliy oshxonali an'anaviy o'zbek restoranida xayrlashish tushлigi."
        },
        {
          time: "14:00-15:30",
          description: "Toshkent Xalqaro Aeroportiga o'tkazish. Registratsiya jarayonida yordam."
        },
        {
          time: "15:30-17:00",
          description: "Aeroportda bo'sh vaqt, oxirgi sotib olishlar, dam olish."
        },
        {
          time: "Kechqurun",
          description: "Toshkent Xalqaro Aeroportidan yo'lga chiqish. Sayohatning yakunи."
        }
      ]
    }
  };

  const daySevenContent = {
    en: {
      title: "Bukhara - Desert Oasis",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Breakfast at the hotel. Check out from the hotel."
        },
        {
          time: "09:00-13:00",
          description: "Visiting the tourism cluster 'Bukhara desert oasis & spa' located in Romitan district: a pool and a sandy beach, camel and horse riding through the desert 'Kyzyl-Kum', quad bike races, archery."
        },
        {
          time: "13:00-14:00",
          description: "Lunch at a local restaurant (Gijduvan shish-kebab and Olot somsa)."
        },
        {
          time: "14:00-17:00",
          description: "Transfer to Khiva by car (sedan or minivan)."
        },
        {
          time: "17:00-18:00",
          description: "Walking to the hotel situated inside the Ichan Kala fortress (driver will help to carry the luggage)."
        },
        {
          time: "Evening",
          description: "Dinner in a local restaurant and overnight at the hotel."
        }
      ]
    },
    ru: {
      title: "Бухара - Пустынный Оазис",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Завтрак в отеле. Выезд из отеля."
        },
        {
          time: "09:00-13:00",
          description: "Посещение туристического кластера 'Бухарский пустынный оазис и спа' в районе Ромитан: бассейн и песчаный пляж, верблюжьи и конные прогулки по пустыне 'Кызылкум', гонки на квадроциклах, стрельба из лука."
        },
        {
          time: "13:00-14:00",
          description: "Обед в местном ресторане (Гиждуванский шашлык и Олот самса)."
        },
        {
          time: "14:00-17:00",
          description: "Трансфер в Хиву на автомобиле (седан или микроавтобус)."
        },
        {
          time: "17:00-18:00",
          description: "Прогулка к отелю, расположенному внутри крепости Ичан-Кала (водитель поможет с багажом)."
        },
        {
          time: "Вечер",
          description: "Ужин в местном ресторане и ночь в отеле."
        }
      ]
    },
    uz: {
      title: "Buxoro - Cho'l Oazisi",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Mehmonxonada nonushta. Mehmonxonadan chiqish."
        },
        {
          time: "09:00-13:00",
          description: "Romitan tumandagi 'Buxoro cho'l oazisi va spa' turizm klasterini ziyorat qilish: havuz va qumli plyaj, 'Qizilqum' cho'lida deve va ot minish, kvadrotsikl poyga, o'q otish."
        },
        {
          time: "13:00-14:00",
          description: "Mahalliy restoranda tushlik (Gijduvan shashlik va Olot somsa)."
        },
        {
          time: "14:00-17:00",
          description: "Xivaga sedan yoki mikroavtobus bilan o'tkazish."
        },
        {
          time: "17:00-18:00",
          description: "Ichan-Qal'a qal'asi ichida joylashgan mehmonxonaga yurish (haydovchi yukni ko'tarishda yordam beradi)."
        },
        {
          time: "Kechqurun",
          description: "Mahalliy restoranda kechki ovqat va mehmonxonada tunash."
        }
      ]
    }
  };

  const dayEightContent = {
    en: {
      title: "Khiva - Old Town Exploration",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Breakfast at the hotel."
        },
        {
          time: "09:00-13:00",
          description: "Sightseeing of Khiva's Old town: visiting Ichan Kala gates & walls, Muhammad Aminkhan madrasah, Kalta Minor minaret, Kukhna Ark residence, Mohamed Rahimkhan madrasah, Sheikh Said Alauddin Mausoleum, Music Museum, Juma Mosque."
        },
        {
          time: "13:00-14:00",
          description: "Lunch at a local restaurant (Shivit oshi)."
        },
        {
          time: "14:00-17:00",
          description: "Continue to discover Khiva's Old town: visiting Arabkhana madrasah, Dost A'lam madrasah, Abdullakhan madrasah, Oq Mosque, Anushakhan bathhouse, Ollokulikhan madrasah, Kutlimurod Inok madrasah, Karavansarai, Tosh Hovli residence, Islomkhudja madrasah and minaret, Pahlavon Muhammad Mausoleum, Sherghozikhan madrasah."
        },
        {
          time: "Evening",
          description: "Dinner in a local restaurant and overnight at the hotel."
        }
      ]
    },
    ru: {
      title: "Хива - Исследование Старого Города",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Завтрак в отеле."
        },
        {
          time: "09:00-13:00",
          description: "Осмотр достопримечательностей Старого города Хивы: посещение ворот и стен Ичан-Кала, медресе Мухаммада Аминхана, минарета Калта-Минор, резиденции Кухна-Арк, медресе Мохаммеда Рахимхана, мавзолея шейха Саида Алауддина, Музея музыки, мечети Джума."
        },
        {
          time: "13:00-14:00",
          description: "Обед в местном ресторане (Шивит оши)."
        },
        {
          time: "14:00-17:00",
          description: "Продолжение исследования Старого города Хивы: посещение медресе Арабхана, медресе Дост А'лама, медресе Абдуллахана, мечети Ок, бани Анушахана, медресе Оллокуликхана, медресе Кутлимурода Инока, Караван-сарая, резиденции Тош-Ховли, медресе и минарета Исломхуджи, мавзолея Пахлавона Мухаммада, медресе Шергозихана."
        },
        {
          time: "Вечер",
          description: "Ужин в местном ресторане и ночь в отеле."
        }
      ]
    },
    uz: {
      title: "Xiva - Eski Shaharni Kashf Etish",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Mehmonxonada nonushta."
        },
        {
          time: "09:00-13:00",
          description: "Xiva Eski shahrining diqqatga sazovor joylarini ko'rib chiqish: Ichan-Qal'a darvozalari va devorlarini ziyorat qilish, Muhammad Aminkhan madrasasi, Kalta Minor minorasi, Kukhna Ark rezidentsiyasi, Mohamed Rahimkhan madrasasi, Sheikh Said Alauddin maqbarasi, Musiqa Muzeyi, Juma masjidi."
        },
        {
          time: "13:00-14:00",
          description: "Mahalliy restoranda tushlik (Shivit oshi)."
        },
        {
          time: "14:00-17:00",
          description: "Xiva Eski shahrini davom etib kashf etish: Arabkhana madrasasi, Dost A'lam madrasasi, Abdullakhan madrasasi, Oq Masjid, Anushakhan hammomi, Ollokulikhan madrasasi, Kutlimurod Inok madrasasi, Karavansaroy, Tosh Hovli rezidentsiyasi, Islomkhudja madrasasi va minorasi, Pahlavon Muhammad maqbarasi, Sherghozikhan madrasasini ziyorat qilish."
        },
        {
          time: "Kechqurun",
          description: "Mahalliy restoranda kechki ovqat va mehmonxonada tunash."
        }
      ]
    }
  };

  const dayNineContent = {
    en: {
      title: "Khiva - Urgench - Tashkent",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Breakfast at the hotel. Check out from the hotel."
        },
        {
          time: "09:00-11:00",
          description: "Sightseeing of Khiva: visiting Nurullaboy palace in Khiva."
        },
        {
          time: "11:00-12:30",
          description: "Transfer to Urgench city."
        },
        {
          time: "12:30-14:00",
          description: "Visit Avesto museum & monument and Jaloliddin Manguberdi monument in Urgench."
        },
        {
          time: "13:00-14:00",
          description: "Lunch at a local restaurant (tukhumbarak)."
        },
        {
          time: "14:00-16:00",
          description: "Explore Ayaz kala and Tuprak kala archaeological sites of ancient Khorezm."
        },
        {
          time: "16:00-17:00",
          description: "Dinner in a local restaurant."
        },
        {
          time: "17:00-18:00",
          description: "Transfer to the airport of Urgench."
        },
        {
          time: "18:00-19:30",
          description: "Flight to Tashkent."
        },
        {
          time: "19:30-20:30",
          description: "Arrival and meeting at the airport of Tashkent by the driver (the driver will hold a sign with your name and surname) and transfer to the hotel."
        }
      ]
    },
    ru: {
      title: "Хива - Ургенч - Ташкент",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Завтрак в отеле. Выезд из отеля."
        },
        {
          time: "09:00-11:00",
          description: "Осмотр достопримечательностей Хивы: посещение дворца Нуруллабой в Хиве."
        },
        {
          time: "11:00-12:30",
          description: "Трансфер в город Ургенч."
        },
        {
          time: "12:30-14:00",
          description: "Посещение музея и памятника Авесто и памятника Джалолиддина Мангуберди в Ургенче."
        },
        {
          time: "13:00-14:00",
          description: "Обед в местном ресторане (тухумбарак)."
        },
        {
          time: "14:00-16:00",
          description: "Исследование археологических памятников Аяз-кала и Тупрак-кала древнего Хорезма."
        },
        {
          time: "16:00-17:00",
          description: "Ужин в местном ресторане."
        },
        {
          time: "17:00-18:00",
          description: "Трансфер в аэропорт Ургенча."
        },
        {
          time: "18:00-19:30",
          description: "Перелет в Ташкент."
        },
        {
          time: "19:30-20:30",
          description: "Прибытие и встреча в аэропорту Ташкента водителем (водитель будет держать табличку с вашим именем и фамилией) и трансфер в отель."
        }
      ]
    },
    uz: {
      title: "Xiva - Urgench - Toshkent",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Mehmonxonada nonushta. Mehmonxonadan chiqish."
        },
        {
          time: "09:00-11:00",
          description: "Xivani ko'rib chiqish: Xivadagi Nurullaboy saroyi ziyorat qilish."
        },
        {
          time: "11:00-12:30",
          description: "Urgench shahriga o'tkazish."
        },
        {
          time: "12:30-14:00",
          description: "Urgenchda Avesto muzeyi va yodgorlik va Jaloliddin Manguberdi yodgorligini ziyorat qilish."
        },
        {
          time: "13:00-14:00",
          description: "Mahalliy restoranda tushlik (tukhumbarak)."
        },
        {
          time: "14:00-16:00",
          description: "Qadimiy Xorazmning Oyaz qal'a va Tuprak qal'a arxeologik joylarini kashf etish."
        },
        {
          time: "16:00-17:00",
          description: "Mahalliy restoranda kechki ovqat."
        },
        {
          time: "17:00-18:00",
          description: "Urgench aeroportiga o'tkazish."
        },
        {
          time: "18:00-19:30",
          description: "Toshkentga parvoz."
        },
        {
          time: "19:30-20:30",
          description: "Toshkent aeroportida haydovchi tomonidan kutib olish (haydovchi sizning ism va familiyangiz yozilgan plakat bilan turadi) va mehmonxonaga o'tkazish."
        }
      ]
    }
  };

  const dayTenContent = {
    en: {
      title: "Tashkent - Departure",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Breakfast at the hotel. Check out from the hotel (you can leave your luggage in the hotel reception)."
        },
        {
          time: "09:00-14:00",
          description: "Free day for having a rest (you can discover new sights of the capital of Uzbekistan: Tashkent city park, Magic city park, Ashkhabad park, museum of Applied arts)."
        },
        {
          time: "14:00-15:00",
          description: "Coming back to the hotel (the driver will be waiting for you)."
        },
        {
          time: "15:00-16:30",
          description: "Transfer to Tashkent International Airport."
        },
        {
          time: "Evening",
          description: "Flight to your country."
        }
      ]
    },
    ru: {
      title: "Ташкент - Отъезд",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Завтрак в отеле. Выезд из отеля (можно оставить багаж на стойке регистрации отеля)."
        },
        {
          time: "09:00-14:00",
          description: "Свободный день для отдыха (можно исследовать новые достопримечательности столицы Узбекистана: городской парк Ташкента, парк Мэджик сити, парк Ашхабад, музей прикладного искусства)."
        },
        {
          time: "14:00-15:00",
          description: "Возвращение в отель (водитель будет ждать вас)."
        },
        {
          time: "15:00-16:30",
          description: "Трансфер в международный аэропорт Ташкента."
        },
        {
          time: "Вечер",
          description: "Вылет в вашу страну."
        }
      ]
    },
    uz: {
      title: "Toshkent - Yo'lga chiqish",
      timeline: [
        {
          time: "07:00-09:00",
          description: "Mehmonxonada nonushta. Mehmonxonadan chiqish (yukingizni mehmonxona resepshnda qoldirishingiz mumkin)."
        },
        {
          time: "09:00-14:00",
          description: "Dam olish uchun erkin kun (O'zbekiston poytaxtining yangi diqqatga sazovor joylarini kashf qilishingiz mumkin: Toshkent shahar parki, Magic city parki, Ashxobod parki, Qo'l san'ati muzeyi)."
        },
        {
          time: "14:00-15:00",
          description: "Mehmonxonaga qaytish (haydovchi sizni kutib turadi)."
        },
        {
          time: "15:00-16:30",
          description: "Toshkent Xalqaro Aeroportiga o'tkazish."
        },
        {
          time: "Kechqurun",
          description: "O'z mamlakatingizga parvoz."
        }
      ]
    }
  };

  const hotelAndTransferInfo = {
    en: {
      checkIn: {
        time: "14:00",
        note: "Standard check-out times apply. If needed, please inquire about luggage storage service at the hotel reception."
      },
      checkOut: {
        time: "12:00",
        note: "Standard check-out times apply. If needed, please inquire about luggage storage service at the hotel reception."
      },
      airportTransfer: {
        meetingPoint: "The transfer driver will meet you in the arrival hall with a sign showing your name.",
        additionalInfo: [
          "Some airports have multiple exits from customs, so please look carefully for your driver.",
          "If your flight is delayed by more than one hour or if you cannot find the driver, please call the number shown above.",
          "Airport porter service may cost more than $3 per bag; luggage carts are not always available."
        ]
      },
      railwayTransfer: {
        meetingPoint: "When possible, the transfer driver will be on the platform next to your train car when you arrive.",
        instructions: [
          "Look for a sign with your name and surname when exiting the train.",
          "Please wait at least five minutes at this location.",
          "If you cannot contact the transfer agent, look towards the front of the train and wait at the station entrance.",
          "Remember that luggage carts are not always available in many locations.",
          "Railway station luggage handling service may cost more than $5 per bag."
        ]
      },
      ticketDelivery: "All tickets are delivered by a local guide or driver.",
      emergencyContact: "In case of emergency, contact the tour company office."
    },
    ru: {
      checkIn: {
        time: "14:00",
        note: "Применяются стандартные времена заселения. При необходимости, пожалуйста, узнайте об услуге хранения багажа на стойке регистрации отеля."
      },
      checkOut: {
        time: "12:00",
        note: "Применяются стандартные времена выселения. При необходимости, пожалуйста, узнайте об услуге хранения багажа на стойке регистрации отеля."
      },
      airportTransfer: {
        meetingPoint: "Водитель трансфера встретит вас в зале прилета с табличкой, показывающей ваше имя.",
        additionalInfo: [
          "В некоторых аэропортах есть несколько выходов из таможни, поэтому внимательно ищите своего водителя.",
          "Если ваш рейс задерживается более чем на час или вы не можете найти водителя, пожалуйста, позвоните по номеру, указанному выше.",
          "Услуга носильщика в аэропорту может стоить более $3 за сумку; тележки для багажа не всегда доступны."
        ]
      },
      railwayTransfer: {
        meetingPoint: "По возможности, водитель трансфера будет находиться на платформе рядом с вашим вагоном при вашем прибытии.",
        instructions: [
          "Ищите табличку со своим именем и фамилией при выходе из поезда.",
          "Пожалуйста, подождите не менее пяти минут в этом месте.",
          "Если вы не можете связаться с агентом трансфера, посмотрите в сторону передней части поезда и ждите у вода на вокзал.",
          "Помните, что во многих местах тележки для багажа не всегда доступны.",
          "Услуга транспортировки багажа на железнодорожном вокзале может стоить более $5 за сумку."
        ]
      },
      ticketDelivery: "Все билеты доставляются местным гидом или водителем.",
      emergencyContact: "В случае чрезвычайной ситуации свяжитесь с офисом туристической компании."
    },
    uz: {
      checkIn: {
        time: "14:00",
        note: "Standart chiqish vaqtlari qo'llaniladi. Kerak bo'lsa, mehmonxona resepshndan yuklar saqlash xizmatini so'rang."
      },
      checkOut: {
        time: "12:00",
        note: "Standart chiqish vaqtlari qo'llaniladi. Kerak bo'lsa, mehmonxona resepshndan yuklar saqlash xizmatini so'rang."
      },
      airportTransfer: {
        meetingPoint: "Transfer haydovchisi sizni ismingiz yozilgan plakat bilan aeroport kelish zalida kutib oladi.",
        additionalInfo: [
          "Ba'zi aeroportlarda gombozdan chiqishning bir nechta yo'nalishlari bo'ladi, shuning uchun haydovchingizni diqqat bilan qidiring.",
          "Agar parvozingiz bir soatdan ko'proq kechiksa yoki haydovchini topa olmasangiz, yuqorida ko'rsatilgan raqamga qo'ng'iroq qiling.",
          "Aeroport porter xizmati har bir sumka uchun $3 dan ko'proq bo'lishi mumkin; yuklar aravalari har doim mavjud bo'lavermaydi."
        ]
      },
      railwayTransfer: {
        meetingPoint: "Imkon qadar, transfer haydovchisi sizning poyezd vagoningiz yonida platformada bo'ladi.",
        instructions: [
          "Poyezddan tushganda ismingiz va familiyangiz yozilgan belgini qidiring.",
          "Iltimos, bu joyda kamida besh daqiqa kuting.",
          "Agar transfer agenti bilan bog'lana olmasangiz, poyezdning bosh qismiga qarab yuring va vokzal kirishida kuting.",
          "Ko'p joylarda yuklar aravalari har doim mavjud bo'lavermaydi.",
          "Temir yo'l vokzallarida yuklar tashish xizmati har bir sumka uchun $5 dan ortiq bo'lishi mumkin."
        ]
      },
      ticketDelivery: "Barcha chipta va biletlar mahalliy gid yoki haydovchi tomonidan yetkazib beriladi.",
      emergencyContact: "Favqulodda holatlarda turlar kompaniyasining ofisiga murojaat qiling."
    }
  };

  const renderHotelAndTransferInfo = () => {
    const info = hotelAndTransferInfo[language];
    
    return (
      <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            {language === 'en' ? 'Hotel Check-In/Out Times' : 
             language === 'ru' ? 'Время заселения/выселения в отеле' : 
             'Mehmonxonaga kirish/chiqish vaqtlari'}
          </h3>
          <div className="space-y-2">
            <p>
              <span className="font-medium">
                {language === 'en' ? 'Check-in Time:' : 
                 language === 'ru' ? 'Время заселения:' : 
                 'Kirish vaqti:'}
              </span> {info.checkIn.time}
            </p>
            <p>
              <span className="font-medium">
                {language === 'en' ? 'Check-out Time:' : 
                 language === 'ru' ? 'Время выселения:' : 
                 'Chiqish vaqti:'}
              </span> {info.checkOut.time}
            </p>
            <p className="text-gray-600 text-sm">{info.checkIn.note}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            {language === 'en' ? 'Airport Transfer Information' : 
             language === 'ru' ? 'Информация о трансфере в аэропорту' : 
             'Aeroport transfer ma\'lumotlari'}
          </h3>
          <p className="mb-2">{info.airportTransfer.meetingPoint}</p>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {info.airportTransfer.additionalInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            {language === 'en' ? 'Railway Station Transfer Information' : 
             language === 'ru' ? 'Информация о трансфере на железнодорожном вокзале' : 
             'Temir yo\'l vokzali transfer ma\'lumotlari'}
          </h3>
          <p className="mb-2">{info.railwayTransfer.meetingPoint}</p>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {info.railwayTransfer.instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="mb-2"><strong>{language === 'en' ? 'Ticket Delivery:' : 
                                       language === 'ru' ? 'Доставка билетов:' : 
                                       'Chipta yetkazish:'}</strong> {info.ticketDelivery}</p>
          <p><strong>{language === 'en' ? 'Emergency Contact:' : 
                       language === 'ru' ? 'Экстренный контакт:' : 
                       'Favqulodda aloqa:'}</strong> {info.emergencyContact}</p>
        </div>
      </div>
    );
  };

  const tourPriceDetails = {
    en: {
      ticketDelivery: "All tickets are delivered by a local guide or driver.",
      emergencyContact: "In case of emergency, contact the tour company office.",
      priceIncludes: {
        title: "The tour price includes:",
        items: [
          "Accommodation in 3* hotels in Tashkent, Samarkand, Bukhara and Khiva in SGL/DBL/TWN rooms with breakfast;",
          "Tashkent-Samarkand economic train ticket (Africa/East) depending on ticket availability on the day of visit;",
          "Samarkand-Bukhara economic train ticket (Africa/East) depending on ticket availability on the day of visit;",
          "Bukhara-Khiva-Urganch transfer by comfortable sedan car;",
          "Urganch-Tashkent domestic flight;",
          "Professional English-speaking guide services in all cities;",
          "All transfers, tours, and city tours according to the program by air-conditioned sedan car/minibus/bus."
        ]
      },
      priceDoesNotInclude: {
        title: "Tour price does not include:",
        items: [
          "International air tickets;",
          "Tourist e-visa fees;",
          "Early entry and late exit;",
          "Lunch and dinner;",
          "Payments for additional services in hotels;",
          "Payments for taking photos and videos in places of interest;",
          "Personal insurance;",
          "Tea money and service fees;",
          "Any services not included in the program above.",
          "Entrance fees to attractions are at your own expense."
        ]
      }
    },
    ru: {
      ticketDelivery: "Все билеты доставляются местным гидом или водителем.",
      emergencyContact: "В случае чрезвычайной ситуации свяжитесь с офисом туристической компании.",
      priceIncludes: {
        title: "В стоимость тура входит:",
        items: [
          "Проживание в отелях 3* в Ташкенте, Самарканде, Бухаре и Хиве в номерах SGL/DBL/TWN с завтраком;",
          "Экономический железнодорожный билет Ташкент-Самарканд (Африка/Восток) в зависимости от наличия билетов в день посещения;",
          "Экономический железнодорожный билет Самарканд-Бухара (Африка/Восток) в зависимости от наличия билетов в день посещения;",
          "Трансфер Бухара-Хива-Ургенч комфортабельным седаном;",
          "Внутренний авиаперелет Ургенч-Ташкент;",
          "Услуги профессионального англоговорящего гида в всех городах;",
          "Все трансферы, туры и городские экскурсии по программе на кондиционированном седане/микроавтобусе/автобусе."
        ]
      },
      priceDoesNotInclude: {
        title: "В стоимость тура не входит:",
        items: [
          "Международные авиабилеты;",
          "Сборы за туристическую электронную визу;",
          "Ранний заезд и поздний выезд;",
          "Обед и ужин;",
          "Оплата дополнительных услуг в отелях;",
          "Оплата фото- и видеосъемки в достопримечательностях;",
          "Личное страхование;",
          "Чаевые и сервисные сборы;",
          "Любые услуги, не включенные в программу выше.",
          "Входные билеты в достопримечательности оплачиваются отдельно."
        ]
      }
    },
    uz: {
      ticketDelivery: "Barcha chipta va biletlar mahalliy gid yoki haydovchi tomonidan yetkazib beriladi.",
      emergencyContact: "Favqulodda holatlarda turlar kompaniyasining ofisiga murojaat qiling.",
      priceIncludes: {
        title: "Tur narxiga kiritilgan:",
        items: [
          "Toshkent, Samarqand, Buxoro va Xivadagi 3* mehmonxonalarda SGL/DBL/TWN xonalarda nonushta bilan joylashish;",
          "Toshkent-Samarqand iqtisodiy poyezd chipta (Afrika/Sharq) tashrif kunidagi chipta mavjudligiga bog'liq;",
          "Samarqand-Buxoro iqtisodiy poyezd chipta (Afrika/Sharq) tashrif kunidagi chipta mavjudligiga bog'liq;",
          "Buxoro-Xiva-Urganch qulay sedan avtomobilida o'tkazish;",
          "Urganch-Toshkent ichki parvoz;",
          "Barcha shaharlarda professional ingliz tilida gid xizmatlari;",
          "Dastur bo'yicha konditsioner sedan/mikroavtobus/avtobus bilan barcha transfer, turlar va shahar ekskursiyalari."
        ]
      },
      priceDoesNotInclude: {
        title: "Tur narxiga kiritilmagan:",
        items: [
          "Xalqaro aviachiptalar;",
          "Turist elektron vizasi to'lovlari;",
          "Erta kirish va kech chiqish;",
          "Tushlik va kechki ovqat;",
          "Mehmonxonalardagi qo'shimcha xizmatlar to'lovlari;",
          "Diqqatga sazovor joylardan foto va video olish to'lovlari;",
          "Shaxsiy sug'urta;",
          "Choy puli va xizmat to'lovlari;",
          "Yuqorida ko'rsatilgan dasturga kiritilmagan har qanday xizmatlar.",
          "Diqqatga sazovor joylarga kirish to'lovlari o'z hisobingizga."
        ]
      }
    }
  };

  const renderTourPriceDetails = () => {
    // Ensure language is defined and has a valid value
    if (!language || !tourPriceDetails[language]) {
      // Fallback to English if language is not set
      const details = tourPriceDetails['en'];
      
      return (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {details.priceIncludes.title}
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {details.priceIncludes.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {details.priceDoesNotInclude.title}
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {details.priceDoesNotInclude.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
            <p className="mt-4 text-gray-600">
              Entrance fees to attractions are at your own expense.
            </p>
          </div>
        </div>
      );
    }

    // Normal rendering with selected language
    const details = tourPriceDetails[language];
    
    return (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {details.priceIncludes.title}
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {details.priceIncludes.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {details.priceDoesNotInclude.title}
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {details.priceDoesNotInclude.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
          <p className="mt-4 text-gray-600">
            {language === 'en' ? 'Entrance fees to attractions are at your own expense.' :
             language === 'ru' ? 'Входные билеты в достопримечательности оплачиваются отдельно.' :
             'Diqqatga sazovor joylarga kirish to\'lovlari o\'z hisobingizga.'}
          </p>
        </div>
      </div>
    );
  };

  const renderTicketAndEmergencyInfo = () => {
    const ticketInfo = {
      en: {
        ticketDelivery: "All tickets are delivered by a local guide or driver.",
        emergencyContact: "In case of emergency, contact the tour company office."
      },
      ru: {
        ticketDelivery: "Все билеты доставляются местным гидом или водителем.",
        emergencyContact: "В случае чрезвычайной ситуации свяжитесь с офисом туристической компании."
      },
      uz: {
        ticketDelivery: "Barcha chipta va biletlar mahalliy gid yoki haydovchi tomonidan yetkazib beriladi.",
        emergencyContact: "Favqulodda holatlarda turlar kompaniyasining ofisiga murojaat qiling."
      }
    };

    // Use the current language, fallback to English if not set
    const currentLanguage = language in ticketInfo ? language : 'en';
    const { ticketDelivery, emergencyContact } = ticketInfo[currentLanguage];

    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="space-y-2">
          <p className="text-gray-600 flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2 text-blue-500" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            {ticketDelivery}
          </p>
          <p className="text-gray-600 flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2 text-red-500" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                clipRule="evenodd" 
              />
            </svg>
            {emergencyContact}
          </p>
        </div>
      </div>
    );
  };

  const citizenshipData = {
    en: {
      regions: {
        asia: 'Asia',
        europe: 'Europe',
        northAmerica: 'North America',
        southAmerica: 'South America',
        africa: 'Africa',
        oceania: 'Oceania',
        caribbean: 'Caribbean',
        dependencies: 'Dependencies and Other Territories'
      },
      countries: {
        northAmerica: [
          { code: 'CA', name: 'Canada' },
          { code: 'US', name: 'United States' },
          { code: 'MX', name: 'Mexico' },
          { code: 'BS', name: 'Bahamas' },
          { code: 'BB', name: 'Barbados' },
          { code: 'CR', name: 'Costa Rica' },
          { code: 'DO', name: 'Dominican Republic' },
          { code: 'SV', name: 'El Salvador' },
          { code: 'GT', name: 'Guatemala' },
          { code: 'HT', name: 'Haiti' },
          { code: 'HN', name: 'Honduras' },
          { code: 'JM', name: 'Jamaica' },
          { code: 'NI', name: 'Nicaragua' },
          { code: 'PA', name: 'Panama' }
        ],
        
        southAmerica: [
          { code: 'AR', name: 'Argentina' },
          { code: 'BO', name: 'Bolivia' },
          { code: 'BR', name: 'Brazil' },
          { code: 'CL', name: 'Chile' },
          { code: 'CO', name: 'Colombia' },
          { code: 'EC', name: 'Ecuador' },
          { code: 'GY', name: 'Guyana' },
          { code: 'PY', name: 'Paraguay' },
          { code: 'PE', name: 'Peru' },
          { code: 'SR', name: 'Suriname' },
          { code: 'UY', name: 'Uruguay' },
          { code: 'VE', name: 'Venezuela' }
        ],
        
        africa: [
          { code: 'DZ', name: 'Algeria' },
          { code: 'AO', name: 'Angola' },
          { code: 'BJ', name: 'Benin' },
          { code: 'BW', name: 'Botswana' },
          { code: 'BF', name: 'Burkina Faso' },
          { code: 'BI', name: 'Burundi' },
          { code: 'CM', name: 'Cameroon' },
          { code: 'CV', name: 'Cape Verde' },
          { code: 'CF', name: 'Central African Republic' },
          { code: 'TD', name: 'Chad' },
          { code: 'KM', name: 'Comoros' },
          { code: 'CG', name: 'Congo' },
          { code: 'CD', name: 'Congo, Democratic Republic' },
          { code: 'DJ', name: 'Djibouti' },
          { code: 'EG', name: 'Egypt' },
          { code: 'GQ', name: 'Equatorial Guinea' },
          { code: 'ER', name: 'Eritrea' },
          { code: 'ET', name: 'Ethiopia' },
          { code: 'GA', name: 'Gabon' },
          { code: 'GM', name: 'Gambia' }
        ],
        
        oceania: [
          { code: 'AU', name: 'Australia' },
          { code: 'FJ', name: 'Fiji' },
          { code: 'KI', name: 'Kiribati' },
          { code: 'MH', name: 'Marshall Islands' },
          { code: 'FM', name: 'Micronesia' },
          { code: 'NR', name: 'Nauru' },
          { code: 'NZ', name: 'New Zealand' },
          { code: 'PW', name: 'Palau' },
          { code: 'PG', name: 'Papua New Guinea' },
          { code: 'WS', name: 'Samoa' },
          { code: 'SB', name: 'Solomon Islands' },
          { code: 'TO', name: 'Tonga' },
          { code: 'TV', name: 'Tuvalu' },
          { code: 'VU', name: 'Vanuatu' }
        ],
        
        caribbean: [
          { code: 'AI', name: 'Anguilla' },
          { code: 'AG', name: 'Antigua and Barbuda' },
          { code: 'AW', name: 'Aruba' },
          { code: 'BS', name: 'Bahamas' },
          { code: 'BB', name: 'Barbados' },
          { code: 'BM', name: 'Bermuda' },
          { code: 'VG', name: 'British Virgin Islands' },
          { code: 'KY', name: 'Cayman Islands' },
          { code: 'CW', name: 'Curaçao' },
          { code: 'DM', name: 'Dominica' },
          { code: 'DO', name: 'Dominican Republic' },
          { code: 'GD', name: 'Grenada' },
          { code: 'GP', name: 'Guadeloupe' },
          { code: 'HT', name: 'Haiti' },
          { code: 'JM', name: 'Jamaica' },
          { code: 'MQ', name: 'Martinique' },
          { code: 'MS', name: 'Montserrat' },
          { code: 'PR', name: 'Puerto Rico' },
          { code: 'BL', name: 'Saint Barthélemy' },
          { code: 'KN', name: 'Saint Kitts and Nevis' },
          { code: 'LC', name: 'Saint Lucia' },
          { code: 'MF', name: 'Saint Martin' },
          { code: 'VC', name: 'Saint Vincent and the Grenadines' },
          { code: 'TT', name: 'Trinidad and Tobago' },
          { code: 'VI', name: 'U.S. Virgin Islands' }
        ],
        
        dependencies: [
          { code: 'AS', name: 'American Samoa' },
          { code: 'AQ', name: 'Antarctica' },
          { code: 'BV', name: 'Bouvet Island' },
          { code: 'IO', name: 'British Indian Ocean Territory' },
          { code: 'CX', name: 'Christmas Island' },
          { code: 'CC', name: 'Cocos (Keeling) Islands' },
          { code: 'FK', name: 'Falkland Islands' },
          { code: 'GF', name: 'French Guiana' },
          { code: 'PF', name: 'French Polynesia' },
          { code: 'TF', name: 'French Southern Territories' },
          { code: 'GI', name: 'Gibraltar' },
          { code: 'GL', name: 'Greenland' },
          { code: 'GU', name: 'Guam' },
          { code: 'HM', name: 'Heard Island and McDonald Islands' },
          { code: 'NC', name: 'New Caledonia' },
          { code: 'NF', name: 'Norfolk Island' },
          { code: 'MP', name: 'Northern Mariana Islands' },
          { code: 'PN', name: 'Pitcairn Islands' },
          { code: 'RE', name: 'Réunion' },
          { code: 'SH', name: 'Saint Helena' },
          { code: 'PM', name: 'Saint Pierre and Miquelon' },
          { code: 'TK', name: 'Tokelau' },
          { code: 'WF', name: 'Wallis and Futuna' }
        ]
      }
    },
    ru: {
      regions: {
        asia: 'Азия',
        europe: 'Европа',
        northAmerica: 'Северная Америка',
        southAmerica: 'Южная Америка',
        africa: 'Африка',
        oceania: 'Океания',
        caribbean: 'Карибские острова',
        dependencies: 'Зависимые территории'
      },
      countries: {
        northAmerica: [
          { code: 'CA', name: 'Канада' },
          { code: 'US', name: 'Соединенные Штаты' },
          { code: 'MX', name: 'Мексика' },
          { code: 'BS', name: 'Багамы' },
          { code: 'BB', name: 'Барбадос' },
          { code: 'CR', name: 'Коста-Рика' },
          { code: 'DO', name: 'Доминиканская Республика' },
          { code: 'SV', name: 'Сальвадор' },
          { code: 'GT', name: 'Гватемала' },
          { code: 'HT', name: 'Гаити' },
          { code: 'HN', name: 'Гондурас' },
          { code: 'JM', name: 'Ямайка' },
          { code: 'NI', name: 'Никарагуа' },
          { code: 'PA', name: 'Панама' }
        ],
        
        southAmerica: [
          { code: 'AR', name: 'Аргентина' },
          { code: 'BO', name: 'Боливия' },
          { code: 'BR', name: 'Бразилия' },
          { code: 'CL', name: 'Чили' },
          { code: 'CO', name: 'Колумбия' },
          { code: 'EC', name: 'Эквадор' },
          { code: 'GY', name: 'Гайана' },
          { code: 'PY', name: 'Парагвай' },
          { code: 'PE', name: 'Перу' },
          { code: 'SR', name: 'Суринам' },
          { code: 'UY', name: 'Уругвай' },
          { code: 'VE', name: 'Венесуэла' }
        ],
        
        africa: [
          { code: 'DZ', name: 'Алжир' },
          { code: 'AO', name: 'Ангола' },
          { code: 'BJ', name: 'Бенин' },
          { code: 'BW', name: 'Ботсвана' },
          { code: 'BF', name: 'Буркина-Фасо' },
          { code: 'BI', name: 'Бурунди' },
          { code: 'CM', name: 'Камерун' },
          { code: 'CV', name: 'Кабо-Верде' },
          { code: 'CF', name: 'Центральноафриканская Республика' },
          { code: 'TD', name: 'Чад' },
          { code: 'KM', name: 'Коморы' },
          { code: 'CG', name: 'Конго' },
          { code: 'CD', name: 'Демократическая Республика Конго' },
          { code: 'DJ', name: 'Джибути' },
          { code: 'EG', name: 'Египет' },
          { code: 'GQ', name: 'Экваториальная Гвинея' },
          { code: 'ER', name: 'Эритрея' },
          { code: 'ET', name: 'Эфиопия' },
          { code: 'GA', name: 'Габон' },
          { code: 'GM', name: 'Гамбия' }
        ],
        
        oceania: [
          { code: 'AU', name: 'Австралия' },
          { code: 'FJ', name: 'Фиджи' },
          { code: 'KI', name: 'Кирибати' },
          { code: 'MH', name: 'Маршалловы Острова' },
          { code: 'FM', name: 'Микронезия' },
          { code: 'NR', name: 'Науру' },
          { code: 'NZ', name: 'Новая Зеландия' },
          { code: 'PW', name: 'Палау' },
          { code: 'PG', name: 'Папуа-Новая Гвинея' },
          { code: 'WS', name: 'Самоа' },
          { code: 'SB', name: 'Соломоновы Острова' },
          { code: 'TO', name: 'Тонга' },
          { code: 'TV', name: 'Тувалу' },
          { code: 'VU', name: 'Вануату' }
        ],
        
        caribbean: [
          { code: 'AI', name: 'Ангилья' },
          { code: 'AG', name: 'Антигуа и Барбуда' },
          { code: 'AW', name: 'Аруба' },
          { code: 'BS', name: 'Багамы' },
          { code: 'BB', name: 'Барбадос' },
          { code: 'BM', name: 'Бермудские Острова' },
          { code: 'VG', name: 'Британские Виргинские Острова' },
          { code: 'KY', name: 'Каймановы Острова' },
          { code: 'CW', name: 'Кюрасао' },
          { code: 'DM', name: 'Доминика' },
          { code: 'DO', name: 'Доминиканская Республика' },
          { code: 'GD', name: 'Гренада' },
          { code: 'GP', name: 'Гваделупа' },
          { code: 'HT', name: 'Гаити' },
          { code: 'JM', name: 'Ямайка' },
          { code: 'MQ', name: 'Мартиника' },
          { code: 'MS', name: 'Монтсеррат' },
          { code: 'PR', name: 'Пуэрто-Рико' },
          { code: 'BL', name: 'Сен-Бартелеми' },
          { code: 'KN', name: 'Сент-Китс и Невис' },
          { code: 'LC', name: 'Сент-Люсия' },
          { code: 'MF', name: 'Сен-Мартен' },
          { code: 'VC', name: 'Сент-Винсент и Гренадины' },
          { code: 'TT', name: 'Тринидад и Тобаго' },
          { code: 'VI', name: 'Виргинские Острова США' }
        ],
        
        dependencies: [
          { code: 'AS', name: 'Американское Самоа' },
          { code: 'AQ', name: 'Антарктида' },
          { code: 'BV', name: 'Остров Буве' },
          { code: 'IO', name: 'Британская територия в Индийском океане' },
          { code: 'CX', name: 'Остров Рождества' },
          { code: 'CC', name: 'Кокосовые (Килинг) острова' },
          { code: 'FK', name: 'Фолклендские острова' },
          { code: 'GF', name: 'Французская Гвиана' },
          { code: 'PF', name: 'Французская Полинезия' },
          { code: 'TF', name: 'Французские Южные и Антарктические территории' },
          { code: 'GI', name: 'Гибралтар' },
          { code: 'GL', name: 'Гренландия' },
          { code: 'GU', name: 'Гуам' },
          { code: 'HM', name: 'Острова Херд и Макдональд' },
          { code: 'NC', name: 'Новая Каледония' },
          { code: 'NF', name: 'Остров Норфолк' },
          { code: 'MP', name: 'Северные Марианские острова' },
          { code: 'PN', name: 'Питкэрн' },
          { code: 'RE', name: 'Реюньон' },
          { code: 'SH', name: 'Остров Святой Елены' },
          { code: 'PM', name: 'Сен-Пьер и Микелон' },
          { code: 'TK', name: 'Токелау' },
          { code: 'WF', name: 'Уоллис и Футуна' }
        ]
      }
    },
    uz: {
      regions: {
        asia: 'Osiyo',
        europe: 'Yevropa',
        northAmerica: 'Shimoliy Amerika',
        southAmerica: 'Janubiy Amerika',
        africa: 'Afrika',
        oceania: 'Okeaniya',
        caribbean: 'Karib dengizi orollari',
        dependencies: 'Qaram hududlar'
      },
      countries: {
        northAmerica: [
          { code: 'CA', name: 'Kanada' },
          { code: 'US', name: 'Qo\'shma Shtatlar' },
          { code: 'MX', name: 'Meksika' },
          { code: 'BS', name: 'Bagama orollari' },
          { code: 'BB', name: 'Barbados' },
          { code: 'CR', name: 'Kosta-Rika' },
          { code: 'DO', name: 'Dominikan Respublikasi' },
          { code: 'SV', name: 'El Salvador' },
          { code: 'GT', name: 'Gvatemala' },
          { code: 'HT', name: 'Gaiti' },
          { code: 'HN', name: 'Gonduras' },
          { code: 'JM', name: 'Yamayka' },
          { code: 'NI', name: 'Nikaragua' },
          { code: 'PA', name: 'Panama' }
        ],
        
        southAmerica: [
          { code: 'AR', name: 'Argentina' },
          { code: 'BO', name: 'Boliviya' },
          { code: 'BR', name: 'Braziliya' },
          { code: 'CL', name: 'Chili' },
          { code: 'CO', name: 'Kolumbiya' },
          { code: 'EC', name: 'Ekvador' },
          { code: 'GY', name: 'Gayana' },
          { code: 'PY', name: 'Paragvay' },
          { code: 'PE', name: 'Peru' },
          { code: 'SR', name: 'Surinam' },
          { code: 'UY', name: 'Urugvay' },
          { code: 'VE', name: 'Venesuela' }
        ],
        
        africa: [
          { code: 'DZ', name: 'Jazoir' },
          { code: 'AO', name: 'Angola' },
          { code: 'BJ', name: 'Benin' },
          { code: 'BW', name: 'Botsvana' },
          { code: 'BF', name: 'Burkina-Faso' },
          { code: 'BI', name: 'Burundi' },
          { code: 'CM', name: 'Kamerun' },
          { code: 'CV', name: 'Kabo-Verde' },
          { code: 'CF', name: 'Markaziy Afrika Respublikasi' },
          { code: 'TD', name: 'Chad' },
          { code: 'KM', name: 'Komor orollari' },
          { code: 'CG', name: 'Kongo' },
          { code: 'CD', name: 'Kongo Demokratik Respublikasi' },
          { code: 'DJ', name: 'Jibuti' },
          { code: 'EG', name: 'Misr' },
          { code: 'GQ', name: 'Ekvatorial Gvineya' },
          { code: 'ER', name: 'Eritreya' },
          { code: 'ET', name: 'Efiopiya' },
          { code: 'GA', name: 'Gabon' },
          { code: 'GM', name: 'Gambiya' }
        ],
        
        oceania: [
          { code: 'AU', name: 'Avstraliya' },
          { code: 'FJ', name: 'Fiji' },
          { code: 'KI', name: 'Kiribati' },
          { code: 'MH', name: 'Marshall orollari' },
          { code: 'FM', name: 'Mikroneziya' },
          { code: 'NR', name: 'Nauru' },
          { code: 'NZ', name: 'Yangi Zelandiya' },
          { code: 'PW', name: 'Palau' },
          { code: 'PG', name: 'Papua-Yangi Gvineya' },
          { code: 'WS', name: 'Samoa' },
          { code: 'SB', name: 'Solomon orollari' },
          { code: 'TO', name: 'Tonga' },
          { code: 'TV', name: 'Tuvalu' },
          { code: 'VU', name: 'Vanuatu' }
        ],
        
        caribbean: [
          { code: 'AI', name: 'Angilya' },
          { code: 'AG', name: 'Antigua va Barbuda' },
          { code: 'AW', name: 'Aruba' },
          { code: 'BS', name: 'Bagama orollari' },
          { code: 'BB', name: 'Barbados' },
          { code: 'BM', name: 'Bermuda orollari' },
          { code: 'VG', name: 'Britaniya Virgin orollari' },
          { code: 'KY', name: 'Kayman orollari' },
          { code: 'CW', name: 'Kurasao' },
          { code: 'DM', name: 'Dominika' },
          { code: 'DO', name: 'Dominikan Respublikasi' },
          { code: 'GD', name: 'Grenada' },
          { code: 'GP', name: 'Gvadelupa' },
          { code: 'HT', name: 'Gaiti' },
          { code: 'JM', name: 'Yamayka' },
          { code: 'MQ', name: 'Martinika' },
          { code: 'MS', name: 'Montserrat' },
          { code: 'PR', name: 'Puerto-Riko' },
          { code: 'BL', name: 'Sen-Bartelemi' },
          { code: 'KN', name: 'Sen-Kits va Nevis' },
          { code: 'LC', name: 'Sen-Lyusiya' },
          { code: 'MF', name: 'Sen-Marten' },
          { code: 'VC', name: 'Sen-Vinsent va Grenadina' },
          { code: 'TT', name: 'Trinidad va Tobago' },
          { code: 'VI', name: 'AQSH Virgin orollari' }
        ],
        
        dependencies: [
          { code: 'AS', name: 'Amerikan Samoasi' },
          { code: 'AQ', name: 'Antarktida' },
          { code: 'BV', name: 'Buve oroli' },
          { code: 'IO', name: 'Britaniya Hind okean hududi' },
          { code: 'CX', name: 'Rojdestvo oroli' },
          { code: 'CC', name: 'Kokos (Kiling) orollari' },
          { code: 'FK', name: 'Folklend orollari' },
          { code: 'GF', name: 'Fransuz Gvianasi' },
          { code: 'PF', name: 'Fransuz Polineziyasi' },
          { code: 'TF', name: 'Fransuz Janubiy va Antarktika hududlari' },
          { code: 'GI', name: 'Gibraltar' },
          { code: 'GL', name: 'Grenlandiya' },
          { code: 'GU', name: 'Guam' },
          { code: 'HM', name: 'Herd va Makdonald orollari' },
          { code: 'NC', name: 'Yangi Kaledoniya' },
          { code: 'NF', name: 'Norfolk oroli' },
          { code: 'MP', name: 'Shimoliy Mariana orollari' },
          { code: 'PN', name: 'Pitkern' },
          { code: 'RE', name: 'Reyunion' },
          { code: 'SH', name: 'Muqaddas Yelena oroli' },
          { code: 'PM', name: 'Sen-Pyer va Mikelon' },
          { code: 'TK', name: 'Tokelau' },
          { code: 'WF', name: 'Uollis va Futuna' }
        ]
      }
    }
  };

  const renderCitizenshipSelect = () => {
    const regionOrder = [
      'asia', 
      'europe', 
      'northAmerica', 
      'southAmerica', 
      'africa', 
      'oceania', 
      'caribbean', 
      'dependencies'
    ];

    return (
      <div className="w-full">
        <select
          name="citizenship"
          value={formData.citizenship}
          onChange={handleInputChange}
          className="w-full border rounded-md p-3 bg-white text-gray-700"
          required
        >
          <option value="">
            {language === 'en' ? 'Select Citizenship' : 
             language === 'ru' ? 'Выберите гражданство' : 
             'Fuqarolikni tanlang'}
          </option>

          {regionOrder.map((region) => (
            <optgroup 
              key={region} 
              label={citizenshipData[language].regions[region]}
            >
              {citizenshipData[language].countries[region]?.map((country) => (
                <option 
                  key={country.code} 
                  value={country.code}
                >
                  {country.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    );
  };

  const travelersOptions = {
    en: ['1', '2', '3', '4', '5+'],
    ru: ['1', '2', '3', '4', '5+'],
    uz: ['1', '2', '3', '4', '5+']
  };

  const renderTourRequestForm = () => {
    const titles = {
      en: [
        { value: 'Mr', label: 'Mr' },
        { value: 'Mrs', label: 'Mrs' },
        { value: 'Ms', label: 'Ms' },
        { value: 'Dr', label: 'Dr' }
      ],
      ru: [
        { value: 'Г-н', label: 'Г-н' },
        { value: 'Г-жа', label: 'Г-жа' },
        { value: 'Мс', label: 'Мс' },
        { value: 'Д-р', label: 'Д-р' }
      ],
      uz: [
        { value: 'Janob', label: 'Janob' },
        { value: 'Xonim', label: 'Xonim' },
        { value: 'Ms', label: 'Ms' },
        { value: 'Doktor', label: 'Doktor' }
      ]
    };

    const formLabels = {
      en: {
        title: 'Select Title',
        firstName: 'First Name',
        lastName: 'Last Name',
        citizenship: 'Select Citizenship',
        email: 'E-mail',
        phone: 'Phone (+code)',
        arrivingFrom: 'Arriving from',
        startDate: 'Start Date',
        endDate: 'End Date',
        accommodationType: 'Accommodation Type',
        numberOfTravelers: 'Number of Travelers',
        comments: 'Comments and additional information',
        submit: 'Send Request'
      },
      ru: {
        title: 'Выберите обращение',
        firstName: 'Имя',
        lastName: 'Фамилия',
        citizenship: 'Выберите гражданство',
        email: 'Электронная почта',
        phone: 'Телефон (+код)',
        arrivingFrom: 'Прибытие из',
        startDate: 'Дата начала',
        endDate: 'Дата окончания',
        accommodationType: 'Тип размещения',
        numberOfTravelers: 'Количество путешественников',
        comments: 'Комментарии и дополнительная информация',
        submit: 'Отправить запрос'
      },
      uz: {
        title: 'Unvonni tanlang',
        firstName: 'Ism',
        lastName: 'Familiya',
        citizenship: 'Fuqarolikni tanlang',
        email: 'Elektron pochta',
        phone: 'Telefon (+kod)',
        arrivingFrom: 'Qayerdan kelmoqdasiz',
        startDate: 'Boshlanish sanasi',
        endDate: 'Tugash sanasi',
        accommodationType: 'Joylashish turi',
        numberOfTravelers: 'Sayohatchilar soni',
        comments: 'Izohlar va qo\'shimcha ma\'lumot',
        submit: 'So\'rovni yuborish'
      }
    };

    const accommodationTypes = {
      en: [
        { value: 'economy', label: 'Economy' },
        { value: 'comfort', label: 'Comfort' },
        { value: 'deluxe', label: 'Deluxe' }
      ],
      ru: [
        { value: 'economy', label: 'Эконом' },
        { value: 'comfort', label: 'Комфорт' },
        { value: 'deluxe', label: 'Делюкс' }
      ],
      uz: [
        { value: 'economy', label: 'Iqtisodiy' },
        { value: 'comfort', label: 'Komfort' },
        { value: 'deluxe', label: 'Deluxe' }
      ]
    };

    return (
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          {language === 'en' ? 'Request Tour' : 
           language === 'ru' ? 'Запрос тура' : 
           'Turni so\'rash'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].title}
              </label>
              <select
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                {titles[language].map((title) => (
                  <option key={title.value} value={title.value}>
                    {title.label}
                  </option>
                ))}
              </select>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].firstName}
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].lastName}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Citizenship */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].citizenship}
              </label>
              {renderCitizenshipSelect()}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Arriving From */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].arrivingFrom}
              </label>
              <input
                type="text"
                name="arrivingFrom"
                value={formData.arrivingFrom}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].startDate}
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].endDate}
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Accommodation Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].accommodationType}
              </label>
              <select
                name="accommodationType"
                value={formData.accommodationType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                {accommodationTypes[language].map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Number of Travelers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formLabels[language].numberOfTravelers}
              </label>
              <select
                name="numberOfTravelers"
                value={formData.numberOfTravelers}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                {travelersOptions[language].map((travelers) => (
                  <option key={travelers} value={travelers}>
                    {travelers}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {formLabels[language].comments}
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              {formLabels[language].submit}
            </button>
          </div>
        </form>
      </div>
    );
  };

  const renderPriceTable = () => {
    return (
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 sticky top-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-600">
          {language === 'en' ? 'Prices per person' :
           language === 'ru' ? 'Цены на человека' :
           'Kishi boshiga narxlar'}
        </h2>

        <div className="overflow-x-auto -mx-3 sm:mx-0">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className="border-b-2">
                <th className="py-2 text-left">
                  {language === 'en' ? 'Persons' :
                   language === 'ru' ? 'Человек' :
                   'Kishilar'}
                </th>
                <th className="py-2 text-right">
                  {language === 'en' ? 'Economy' :
                   language === 'ru' ? 'Эконом' :
                   'Ekonom'}
                </th>
                <th className="py-2 text-right">
                  {language === 'en' ? 'Comfort' :
                   language === 'ru' ? 'Комфорт' :
                   'Komfort'}
                </th>
                <th className="py-2 text-right">
                  {language === 'en' ? 'Deluxe' :
                   language === 'ru' ? 'Делюкс' :
                   'Delyuks'}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Main prices */}
              {priceData.map((price) => (
                <tr key={price.id} className="border-b">
                  <td className="py-2">
                    {price.person} {language === 'en' ? 'person' :
                                   language === 'ru' ? 'человек' :
                                   'kishi'}
                  </td>
                  <td className="py-2 text-right">${price.ecom}</td>
                  <td className="py-2 text-right">${price.comf}</td>
                  <td className="py-2 text-right">${price.deluxe}</td>
                </tr>
              ))}

              {/* Single Supplement section */}
              <tr className="border-t-2 border-gray-200">
                <th colSpan="4" className="py-3 text-left font-semibold text-gray-700">
                  {language === 'en' ? 'Single Supplement' :
                   language === 'ru' ? 'Доплата за одноместный номер' :
                   'Yakka joylashuv uchun qo\'shimcha'}
                </th>
              </tr>
              {priceData.map((price) => (
                <tr key={`supplement-${price.id}`} className="border-b">
                  <td className="py-2">
                    {price.person} {language === 'en' ? 'person' :
                                   language === 'ru' ? 'человек' :
                                   'kishi'}
                  </td>
                  <td colSpan="3" className="py-2 text-right">
                    ${price.singleSupplement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
          {language === 'en' ? 'Prices are in USD and may vary based on season' :
           language === 'ru' ? 'Цены указаны в долларах США и могут меняться в зависимости от сезона' :
           'Narxlar AQSh dollarida va mavsumga qarab o\'zgarishi mumkin'}
        </p>

        <button className="mt-4 sm:mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg transition-all hover:scale-105 text-sm sm:text-base">
          {language === 'en' ? 'Request Tour' :
           language === 'ru' ? 'Запросить тур' :
           'Turni so\'rash'}
        </button>
      </div>
    );
  };

  return (
    <div style={{marginTop:"80px"}} className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      {/* Tour Header */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">
          {tourTitles[language]}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-xs sm:text-sm">
          <span>{tourDetails.duration[language]}</span>
          <span className="hidden sm:block mx-2">|</span>
          <span>{tourDetails.destinations[language]}</span>
        </div>
      </div>

      {/* Main Content - Flex Container */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        {/* Left Side - Image Gallery */}
        <div className="w-full lg:w-2/3">
          {/* Main Image Container */}
          <div className="relative">
            {/* Price Badge */}
            <div className="absolute top-2 left-2 z-10 sm:top-4 sm:left-4">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg sm:px-4 sm:py-2">
                <span className="text-xs sm:text-sm text-gray-600">Private Tour from </span>
                <span className="font-bold text-blue-600">US$ 1,330</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt[language]}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                {images[currentImage].location[language]}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={previousImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-2 sm:mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all ${currentImage === index
                  ? "ring-2 ring-blue-500 scale-95"
                  : "hover:scale-95"
                  }`}
              >
                <img
                  src={image.src}
                  alt={image.alt[language]}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-black/20 transition-opacity ${currentImage === index ? "opacity-0" : "opacity-100"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Pricing Table */}
        <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
          {renderPriceTable()}
        </div>
      </div>

      {/* Tour Itinerary Section */}
      <div className="mt-8">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          {/* Navigation Menu */}
          <div className="border-b border-gray-200 mb-4 w-full overflow-x-auto">
            <nav className="flex flex-wrap md:flex-nowrap min-w-full md:min-w-0 px-2 md:px-4">
              {/* Scrollable container for mobile */}
              <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 py-1 md:py-0">
                <button
                  className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out
                  hover:shadow-sm hover:-translate-y-[1px]
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  active:translate-y-[1px]"
                >
                  {navigationButtons[language].itinerary}
                </button>

                <button
                  className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out
                  hover:shadow-sm hover:-translate-y-[1px]
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  active:translate-y-[1px]"
                >
                  {navigationButtons[language].prices}
                </button>

                <button
                  className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out
                  hover:shadow-sm hover:-translate-y-[1px]
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  active:translate-y-[1px]"
                >
                  {navigationButtons[language].request}
                </button>

                <button
                  className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out
                  hover:shadow-sm hover:-translate-y-[1px]
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                  active:translate-y-[1px]"
                >
                  {navigationButtons[language].reviews}
                </button>
              </div>
            </nav>
          </div>

          {/* Tour Description */}
          <div className="border-t border-b border-gray-200 py-4 my-6">
            <p className="text-gray-600 italic text-base leading-relaxed">
              {tourDescriptions[language]}
            </p>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              Tour itinerary:
            </h2>
            <div className="space-x-4">
              <button
                onClick={expandAll}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="text-blue-500 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {[
              {
                day: 1,
                title: dayOneContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {dayOneContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                day: 2,
                title: dayTwoContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {dayTwoContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                day: 3,
                title: dayThreeContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {dayThreeContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                day: 4,
                title: dayFourContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {dayFourContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                day: 5,
                title: dayFiveContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {dayFiveContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                day: 6,
                title: daySixContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {daySixContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">
                        {language === 'en' ? 'Tour Conclusion' : 
                         language === 'ru' ? 'Заключение тура' : 
                         'Sayohat yakunи'}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'en' ? 'Thank you for choosing our Uzbekistan Express Tour. We hope you enjoyed your journey through the historic Silk Road cities.' : 
                         language === 'ru' ? 'Благодарим вас за выбор нашего экспресс-тура по Узбекистану. Надеемся, вам понравилось путешествие по историческим городам Шелкового пути.' : 
                         'O\'zbekiston Express sayohatini tanlaganingiz uchun rahmat. Ipak yo\'li shaharlarida sayohatdan zavq olganingizga umid qilamiz.'}
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                day: 7,
                title: daySevenContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {daySevenContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">
                        {language === 'en' ? 'Tour Conclusion' : 
                         language === 'ru' ? 'Заключение тура' : 
                         'Sayohat yakunи'}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'en' ? 'Thank you for choosing our Uzbekistan Express Tour. We hope you enjoyed your journey through the historic Silk Road cities.' : 
                         language === 'ru' ? 'Благодарим вас за выбор нашего экспресс-тура по Узбекистану. Надеемся, вам понравилось путешествие по историческим городам Шелкового пути.' : 
                         'O\'zbekiston Express sayohatini tanlaganingiz uchun rahmat. Ipak yo\'li shaharlarida sayohatdan zavq olganingizga umid qilamiz.'}
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                day: 8,
                title: dayEightContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {dayEightContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">
                        {language === 'en' ? 'Tour Conclusion' : 
                         language === 'ru' ? 'Заключение тура' : 
                         'Sayohat yakunи'}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'en' ? 'Thank you for choosing our Uzbekistan Express Tour. We hope you enjoyed your journey through the historic Silk Road cities.' : 
                         language === 'ru' ? 'Благодарим вас за выбор нашего экспресс-тура по Узбекистану. Надеемся, вам понравилось путешествие по историческим городам Шелкового пути.' : 
                         'O\'zbekiston Express sayohatini tanlaganingiz uchun rahmat. Ipak yo\'li shaharlarida sayohatdan zavq olganingizga umid qilamiz.'}
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                day: 9,
                title: dayNineContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {dayNineContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">
                        {language === 'en' ? 'Tour Conclusion' : 
                         language === 'ru' ? 'Заключение тура' : 
                         'Sayohat yakunи'}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'en' ? 'Thank you for choosing our Uzbekistan Express Tour. We hope you enjoyed your journey through the historic Silk Road cities.' : 
                         language === 'ru' ? 'Благодарим вас за выбор нашего экспресс-тура по Узбекистану. Надеемся, вам понравилось путешествие по историческим городам Шелкового пути.' : 
                         'O\'zbekiston Express sayohatini tanlaganingiz uchun rahmat. Ipak yo\'li shaharlarida sayohatdan zavq olganingizga umid qilamiz.'}
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                day: 10,
                title: dayTenContent[language].title,
                content: (
                  <div className="text-gray-600 space-y-4">
                    <div className="space-y-2">
                      {dayTenContent[language].timeline.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">
                        {language === 'en' ? 'Tour Conclusion' : 
                         language === 'ru' ? 'Заключение тура' : 
                         'Sayohat yakunи'}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'en' ? 'Thank you for choosing our Uzbekistan Express Tour. We hope you enjoyed your journey through the historic Silk Road cities.' : 
                         language === 'ru' ? 'Благодарим вас за выбор нашего экспресс-тура по Узбекистану. Надеемся, вам понравилось путешествие по историческим городам Шелкового пути.' : 
                         'O\'zbekiston Express sayohatini tanlaganingiz uchun rahmat. Ipak yo\'li shaharlarida sayohatdan zavq olganingizga umid qilamiz.'}
                      </p>
                    </div>
                  </div>
                ),
              },
            ].map((item) => (
              <div
                key={item.day}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleDay(item.day)}
                  className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center group"
                >
                  <div>
                    <span className="font-medium text-blue-500">
                      Day {item.day}:{" "}
                    </span>
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 group-hover:text-blue-500 transform transition-transform duration-200 ${expandedDays[item.day] ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedDays[item.day] && (
                  <div className="p-4 border-t bg-white">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Information Section */}
          <div className="mt-8 space-y-8">
            {renderHotelAndTransferInfo()}

            {/* Tickets and Emergency Information */}
            {renderTicketAndEmergencyInfo()}

            {/* Tour Cost Information */}
            {renderTourPriceDetails()}

            {/* Tour Request Form Section */}
            <div className="mt-12 w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
              {renderTourRequestForm()}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <SuccessModal />}
    </div>
  );
}

export default SixDaysTour;
