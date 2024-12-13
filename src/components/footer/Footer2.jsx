import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

// Til ma'lumotlari obyekti
const translations = {
  en: {
    main: "MAIN",
    programs: "PROGRAMS:",
    individualTours: "Individual tours",
    fiveDaysTour: "5 days (groups)",
    sixDaysTour: "6 days (groups)",
    tenDaysTour: "10 days (groups)",
    documents: "DOCUMENTS:",
    license: "License",
    privacyPolicy: "Privacy Policy",
    copyright: "© All site materials belong to Canaan Travel LLC and are protected by copyright.",
    notOffer: "The site is not a public offer.",
    licensed: "Licensed tour operator in Uzbekistan. We are officially registered in the national company registry.",
  },
  ru: {
    main: "ГЛАВНАЯ",
    programs: "ПРОГРАММЫ:",
    individualTours: "Индивидуальные туры",
    fiveDaysTour: "5 дней (группы)",
    sixDaysTour: "6 дней (группы)",
    tenDaysTour: "10 дней (группы)",
    documents: "ДОКУМЕНТЫ:",
    license: "Лицензия",
    privacyPolicy: "Политика конфиденциальности",
    copyright: "© Все материалы сайта принадлежат Canaan Travel LLC и защищены авторским правом.",
    notOffer: "Сайт не является публичной офертой.",
    licensed: "Лицензированный туроператор в Узбекистане. Мы официально зарегистрированы в национальном реестре компаний.",
  },
  uz: {
    main: "ASOSIY",
    programs: "DASTURLAR:",
    individualTours: "Individual turlar",
    fiveDaysTour: "5 kunlik (guruhlar)",
    sixDaysTour: "6 kunlik (guruhlar)",
    tenDaysTour: "10 kunlik (guruhlar)",
    documents: "HUJJATLAR:",
    license: "Litsenziya",
    privacyPolicy: "Maxfiylik siyosati",
    copyright: "© Saytdagi barcha materiallar Canaan Travel LLC ga tegishli va mualliflik huquqi bilan himoyalangan.",
    notOffer: "Sayt ommaviy taklif emas.",
    licensed: "O'zbekistondagi litsenziyalangan turoperator. Biz milliy kompaniyalar reyestrida rasman ro'yxatdan o'tganmiz.",
  },
};

function Footer2() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentLang = searchParams.get("lang") || "en";
  const t = translations[currentLang];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo va copyright */}
        <div className="flex flex-col space-y-4">
          <img 
            src="https://canaan.travel/static/images/Canaan-logo-1.png" 
            alt="Canaan Travel" 
            className="h-20 object-contain"
          />
          <p className="text-gray-400 text-xs max-w-[250px]">
            {t.copyright}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white text-base font-medium">
            {t.main}
          </h3>
        </div>

        {/* Programs */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white text-base font-medium">
            {t.programs}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/individual-tours" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                {t.individualTours}
              </Link>
            </li>
            <li>
              <Link to="/5-days-tour" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                {t.fiveDaysTour}
              </Link>
            </li>
            <li>
              <Link to="/6-days-tour" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                {t.sixDaysTour}
              </Link>
            </li>
            <li>
              <Link to="/10-days-tour" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                {t.tenDaysTour}
              </Link>
            </li>
          </ul>
        </div>

        {/* Documents */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white text-base font-medium">
            {t.documents}
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white transition-colors">
              {t.license}
            </li>
            <li onClick={() => navigate("/polise")} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              {t.privacyPolicy}
            </li>
          </ul>
        </div>

        {/* Info and Social */}
        <div className="flex flex-col space-y-4">
          <p className="text-gray-400">
            {t.notOffer}
          </p>
          <p className="text-gray-400 max-w-[250px]">
            {t.licensed}
          </p>
          {/* Social icons */}
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/travelcationsuz" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2.5 hover:opacity-80 transition-opacity"
            >
              <FaInstagram className="w-5 h-5 text-black" />
            </a>
            <a 
              href="https://facebook.com/travelcationsuz" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2.5 hover:opacity-80 transition-opacity"
            >
              <FaFacebook className="w-5 h-5 text-black" />
            </a>
            <a 
              href="https://t.me/travelcationsuz" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2.5 hover:opacity-80 transition-opacity"
            >
              <FaTelegram className="w-5 h-5 text-black" />
            </a>
            <a 
              href="https://wa.me/998907113338" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2.5 hover:opacity-80 transition-opacity"
            >
              <FaWhatsapp className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;