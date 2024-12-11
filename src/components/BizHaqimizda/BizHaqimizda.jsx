import React from "react";
import { FaUsers, FaHandshake, FaGlobe, FaAward } from 'react-icons/fa';
import { BiTargetLock, BiSupport } from 'react-icons/bi';
import { MdSecurity, MdTravelExplore } from 'react-icons/md';
import CountUp from 'react-countup';

// Statistika ma'lumotlari
const stats = [
  {
    icon: FaUsers,
    end: 1000,
    suffix: "+",
    title: "Mamnun mijozlar",
  },
  {
    icon: MdTravelExplore,
    end: 50,
    suffix: "+",
    title: "Sayohat yo'nalishlari",
  },
  {
    icon: FaHandshake,
    end: 100,
    suffix: "+",
    title: "Hamkorlar",
  },
  {
    icon: FaAward,
    end: 15,
    suffix: "+",
    title: "Yillik tajriba",
  },
];

// Counter komponenti
const StatCounter = ({ icon: Icon, end, suffix, title }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
      <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
      <h3 className="text-xl font-bold text-blue-800">
        <CountUp
          end={end}
          suffix={suffix}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
        />
      </h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

function BizHaqimizda() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 sm:mt-24">
      {/* Sarlavha */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-600 mb-8">
        Advantour - Buyuk Ipak Yo'lidagi Sayohat Operatori
      </h1>

      {/* Asosiy rasm */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Advantour jamoasi"
          className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Statistika */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, index) => (
          <StatCounter
            key={index}
            icon={stat.icon}
            end={stat.end}
            suffix={stat.suffix}
            title={stat.title}
          />
        ))}
      </div>

      {/* Vision bo'limi */}
      <div className="mb-16 bg-gradient-to-r from-blue-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-6">
          <BiTargetLock className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">Bizning maqsadimiz</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <p className="text-base sm:text-lg leading-relaxed">
            Markaziy Osiyoning qadimiy madaniyati va zamonaviy hayotini dunyoga namoyon etish orqali, 
            Yevropa va Osiyo sayohatchilarini birlashtiruvchi ishonchli ko'prik vazifasini o'tash.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Biz nafaqat sayohat tashkilotchisi, balki madaniyatlar o'rtasidagi muloqot elchisi bo'lishga intilamiz. 
            Har bir sayohatchi uchun Markaziy Osiyoning betakror go'zalligini, boy tarixini va mehmondo'st xalqini 
            kashf etish imkoniyatini yaratamiz.
          </p>
        </div>
      </div>

      {/* Mission bo'limi */}
      <div className="mb-16 bg-gradient-to-r from-white to-blue-50 p-6 sm:p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-6">
          <FaGlobe className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">Bizning vazifamiz</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <p className="text-base sm:text-lg leading-relaxed">
            Biz yuqori malakali sayohat operatori sifatida, har bir mijozga alohida e'tibor va individual yondashuv 
            bilan xizmat ko'rsatamiz. Bizning professional jamoamiz sizning sayohatingizni unutilmas taassurotlarga 
            boy qilish uchun tinimsiz mehnat qiladi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-4">
              <MdSecurity className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Xavfsizlik va ishonch</h3>
                <p className="text-sm text-gray-600">Mijozlarimiz xavfsizligi va qulayligi bizning ustuvor vazifamiz</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <BiSupport className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">24/7 qo'llab-quvvatlash</h3>
                <p className="text-sm text-gray-600">Professional jamoamiz doimo yordam berishga tayyor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Xizmatlar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12">
        <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2158/2158475.png" 
            alt="Turlar va ekskursiyalar" 
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" 
          />
          <p className="text-sm sm:text-base font-medium">Turlar va ekskursiyalar</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1475/1475996.png" 
            alt="Mehmonxonalar" 
            className="w-16 h-16 mx-auto mb-4" 
          />
          <p>Mehmonxonalar</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3159/3159466.png" 
            alt="San'at va madaniyat" 
            className="w-16 h-16 mx-auto mb-4" 
          />
          <p>San'at va madaniyat</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3774/3774278.png" 
            alt="Transport" 
            className="w-16 h-16 mx-auto mb-4" 
          />
          <p>Transport</p>
        </div>
      </div>

      {/* Kontakt ma'lumotlari */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-4 text-blue-800">Toshkent ofisi:</h3>
          <div className="space-y-2 text-gray-600">
            <p>Mirzo Ulug'bek tumani</p>
            <p>Toshkent, O'zbekiston</p>
            <p className="font-medium">Tel: +998 71 230-11-27</p>
            <p className="font-medium">Email: info@advantour.com</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-4 text-blue-800">Samarqand ofisi:</h3>
          <div className="space-y-2 text-gray-600">
            <p>Registon maydoni</p>
            <p>Samarqand, O'zbekiston</p>
            <p className="font-medium">Tel: +998 91 555-55-55</p>
            <p className="font-medium">Email: samarkand@advantour.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BizHaqimizda;