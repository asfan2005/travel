import React from "react";
import { FaUsers, FaHandshake, FaGlobe, FaAward } from 'react-icons/fa';
import { BiTargetLock, BiSupport } from 'react-icons/bi';
import { MdSecurity, MdTravelExplore } from 'react-icons/md';
import CountUp from 'react-countup';
import { useSearchParams } from 'react-router-dom';

// Stats data with translations
const stats = {
  en: [
    { icon: FaUsers, end: 1000, suffix: "+", title: "Satisfied Clients" },
    { icon: MdTravelExplore, end: 50, suffix: "+", title: "Travel Destinations" },
    { icon: FaHandshake, end: 100, suffix: "+", title: "Partners" },
    { icon: FaAward, end: 15, suffix: "+", title: "Years of Experience" }
  ],
  ru: [
    { icon: FaUsers, end: 1000, suffix: "+", title: "Довольных клиентов" },
    { icon: MdTravelExplore, end: 50, suffix: "+", title: "Направлений" },
    { icon: FaHandshake, end: 100, suffix: "+", title: "Партнеров" },
    { icon: FaAward, end: 15, suffix: "+", title: "Лет опыта" }
  ],
  uz: [
    { icon: FaUsers, end: 1000, suffix: "+", title: "Mamnun mijozlar" },
    { icon: MdTravelExplore, end: 50, suffix: "+", title: "Sayohat yo'nalishlari" },
    { icon: FaHandshake, end: 100, suffix: "+", title: "Hamkorlar" },
    { icon: FaAward, end: 15, suffix: "+", title: "Yillik tajriba" }
  ]
};

const additionalServices = {
  en: {
    title: "Our Additional Services",
    support: {
      title: "Travel Support",
      services: ["Visa support for Uzbekistan", "Hotel bookings across the country"]
    },
    tourTypes: {
      title: "Tour Types",
      types: ["Mountain tours", "Hiking tours", "Horse riding tours", "Camel tours", 
              "Cycling tours", "Agritourism", "Botanical tours", "Business tours"]
    },
    entertainment: {
      title: "Entertainment Programs",
      description: "We offer various entertainment programs in excursion cities including folklore shows, factory visits, pottery workshops, and airport/station transfers with national artists"
    }
  },
  ru: {
    title: "Наши дополнительные услуги",
    support: {
      title: "Туристическая поддержка",
      services: ["Визовая поддержка в Узбекистан", "Бронирование отелей по всей стране"]
    },
    tourTypes: {
      title: "Типы туров",
      types: ["Горные туры", "Пешие туры", "Конные туры", "Верблюжьи туры", 
              "Велотуры", "Агротуризм", "Ботанические туры", "Бизнес туры"]
    },
    entertainment: {
      title: "Развлекательные программы",
      description: "Мы предлагаем различные развлекательные программы в экскурсионных городах, включая фольклорные шоу, посещение фабрик, гончарные мастер-классы и трансферы аэропорт/вокзал с национальными артистами"
    }
  },
  uz: {
    title: "Qo'shimcha xizmatlarimiz",
    support: {
      title: "Sayohat yordami",
      services: ["O'zbekistonga viza yordami", "Butun mamlakat bo'ylab mehmonxonalarni band qilish"]
    },
    tourTypes: {
      title: "Sayohat turlari",
      types: ["Tog' sayohatlari", "Piyoda sayohatlar", "Ot minish sayohatlari", "Tuya safari", 
              "Velosiped sayohatlari", "Agroturizm", "Botanik sayohatlar", "Biznes sayohatlar"]
    },
    entertainment: {
      title: "Ko'ngilochar dasturlar",
      description: "Biz ekskursiya shaharlarida turli xil ko'ngilochar dasturlarni taklif etamiz, jumladan folklor tomoshalari, zavod tashrifi, kulolchilik ustaxonalari va milliy san'atkorlar bilan aeroportdan/vokzaldan transfer xizmatlari"
    }
  }
};

const contactInfo = {
  en: {
    contact: {
      title: "Contact Us:",
      phone: "Phone: +998 90 711 33 38",
      available: "(Available on WhatsApp & Telegram)",
      email: "Email: travelcationsuz@gmail.com"
    },
    hours: {
      title: "Working Hours:",
      weekdays: "Monday - Saturday: 9:00 - 18:00",
      sunday: "Sunday: Closed"
    }
  },
  ru: {
    contact: {
      title: "Свяжитесь с нами:",
      phone: "Телефон: +998 90 711 33 38",
      available: "(Доступны в WhatsApp и Telegram)",
      email: "Почта: travelcationsuz@gmail.com"
    },
    hours: {
      title: "Часы работы:",
      weekdays: "Понедельник - Суббота: 9:00 - 18:00",
      sunday: "Воскресенье: Выходной"
    }
  },
  uz: {
    contact: {
      title: "Biz bilan bog'laning:",
      phone: "Telefon: +998 90 711 33 38",
      available: "(WhatsApp va Telegramda mavjud)",
      email: "Email: travelcationsuz@gmail.com"
    },
    hours: {
      title: "Ish vaqti:",
      weekdays: "Dushanba - Shanba: 9:00 - 18:00",
      sunday: "Yakshanba: Dam olish kuni"
    }
  }
};

// Counter component
const StatCounter = ({ icon: Icon, end, suffix, title }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
      <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
      <h3 className="text-xl font-bold text-blue-800">
        <CountUp end={end} suffix={suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
      </h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

function AboutUs() {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  const titles = {
    en: "TravelCations - Your Trusted Travel Partner in Uzbekistan",
    ru: "TravelCations - Ваш надежный партнер по путешествиям в Узбекистане",
    uz: "TravelCations - O'zbekistondagi ishonchli sayohat hamkoringiz"
  };

  const introText = {
    en: {
      p1: "Established on December 10, 2024, our travel company offers the highest level of service on all routes across Uzbekistan while maintaining affordable prices.",
      p2: "We specialize in hosting guests from Europe, Asia, and America, as well as providing local tourism services. For residents and visitors of our beautiful republic, we develop interesting routes and exciting tours throughout Uzbekistan."
    },
    ru: {
      p1: "Основанная 10 декабря 2024 года, наша туристическая компания предлагает высочайший уровень обслуживания на всех маршрутах по Узбекистану по доступным ценам.",
      p2: "Мы специализируемся на приеме гостей из Европы, Азии и Америки, а также предоставляем услуги местного туризма. Для жителей и го��тей нашей прекрасной республики мы разрабатываем интересные маршруты и увлекательные туры по всему Узбекистану."
    },
    uz: {
      p1: "2024-yil 10-dekabrda tashkil etilgan sayohat kompaniyamiz O'zbekiston bo'ylab barcha yo'nalishlarda arzon narxlarni saqlab qolgan holda eng yuqori darajadagi xizmatlarni taqdim etadi.",
      p2: "Biz Yevropa, Osiyo va Amerikadan kelgan mehmonlarni kutib olishga va mahalliy turizm xizmatlarini ko'rsatishga ixtisoslashganmiz. Go'zal respublikamizning aholisi va mehmonlari uchun O'zbekiston bo'ylab qiziqarli marshrutlar va ajoyib sayohatlarni ishlab chiqamiz."
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 sm:mt-24">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-600 mb-8">
        {titles[lang]}
      </h1>

      {/* Main image */}
      <div className="mb-12">
        <img
          src="https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/B52I5049-0-0-0-0-1583482818.jpg"
          alt="Advantour Team"
          className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats[lang].map((stat, index) => (
          <StatCounter key={index} {...stat} />
        ))}
      </div>

      {/* Company Introduction */}
      <div className="mb-16 bg-gradient-to-r from-blue-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
        <div className="space-y-4 text-gray-700">
          <p className="text-base sm:text-lg leading-relaxed">{introText[lang].p1}</p>
          <p className="text-base sm:text-lg leading-relaxed">{introText[lang].p2}</p>
        </div>
      </div>

      {/* Additional Services */}
      <div className="mb-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">{additionalServices[lang].title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">{additionalServices[lang].support.title}</h3>
            {additionalServices[lang].support.services.map((service, index) => (
              <p key={index} className="text-gray-700">{service}</p>
            ))}
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">{additionalServices[lang].tourTypes.title}</h3>
            <div className="grid grid-cols-2 gap-2">
              {additionalServices[lang].tourTypes.types.map((type, index) => (
                <p key={index} className="text-gray-700">{type}</p>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg md:col-span-2">
            <h3 className="font-semibold text-blue-800 mb-2">{additionalServices[lang].entertainment.title}</h3>
            <p className="text-gray-700">{additionalServices[lang].entertainment.description}</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-4 text-blue-800">{contactInfo[lang].contact.title}</h3>
          <div className="space-y-2 text-gray-600">
            <p className="font-medium">{contactInfo[lang].contact.phone}</p>
            <p className="text-sm">{contactInfo[lang].contact.available}</p>
            <p className="font-medium">{contactInfo[lang].contact.email}</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-4 text-blue-800">{contactInfo[lang].hours.title}</h3>
          <div className="space-y-2 text-gray-600">
            <p>{contactInfo[lang].hours.weekdays}</p>
            <p>{contactInfo[lang].hours.saturday}</p>
            <p>{contactInfo[lang].hours.sunday}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;