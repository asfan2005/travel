import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../../images/Logo.jpg"
// Til ma'lumotlari obyekti
const translations = {
  en: {
    main: "MAIN PAGE",
    programs: "PROGRAMS:",
    individualTours: "Individual tours",
    fiveDaysTour: "5 days (groups)",
    sixDaysTour: "6 days (groups)",
    tenDaysTour: "10 days (groups)",
    documents: "DOCUMENTS:",
    license: "License",
    privacyPolicy: "Privacy Policy",
    copyright: "© All site materials belong to Travelcations LLC and are protected by copyright.",
    notOffer: "The site is not a public offer.",
    licensed: "Licensed tour operator in Uzbekistan. All rights reserved",
  },
  ru: {
    main: "ГЛАВНАЯ СТРАНИЦА",
    programs: "ПРОГРАММЫ:",
    individualTours: "Индивидуальные туры",
    fiveDaysTour: "5 дней (группы)",
    sixDaysTour: "6 дней (группы)",
    tenDaysTour: "10 дней (группы)",
    documents: "ДОКУМЕНТЫ:",
    license: "Лицензия",
    privacyPolicy: "Политика конфиденциальности",
    copyright: "© Все материалы сайта принадлежат  Travelcations  ООО и защищены авторским правом.",
    notOffer: "Сайт не является публичной офертой.",
    licensed: "Лицензированный туроператор по Узбекистану. Все права защищены",
  },
  uz: {
    main: "ASOSIY SAHIFA",
    programs: "DASTURLAR:",
    individualTours: "Individual turlar",
    fiveDaysTour: "5 kunlik (guruhlar)",
    sixDaysTour: "6 kunlik (guruhlar)",
    tenDaysTour: "10 kunlik (guruhlar)",
    documents: "HUJJATLAR:",
    license: "Litsenziya",
    privacyPolicy: "Maxfiylik siyosati",
    copyright: "© Saytdagi barcha materiallar Travelcations MCHJ ga tegishli va mualliflik huquqi bilan himoyalangan.",
    notOffer: "Sayt ommaviy taklif emas.",
    licensed: "O'zbekistonda litsenziyalangan turoperator. Barcha huquqlar himoyalangan",
  },
};

function Footer2() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentLang = searchParams.get("lang") || "en";
  const t = translations[currentLang];

  // Helper function to navigate with language preservation
  const navigateWithLang = (path) => {
    navigate(`${path}?lang=${currentLang}`);
  };

  return (
    <footer className="bg-gray-50 text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo va copyright */}
        <div className="flex flex-col space-y-4">
          <img
            src={Logo}
            alt="Canaan Travel"
            className="h-24 w-24 object-cover rounded-xl hover:opacity-90 transition-opacity shadow-md"
          />
          <p className="text-gray-700 text-xs max-w-[250px]">
            {t.copyright}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3
            onClick={() => navigateWithLang("/")}
            className="text-gray-900 text-base font-medium cursor-pointer hover:text-gray-700 transition-colors"
          >
            {t.main}
          </h3>
        </div>

        {/* Programs */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-gray-900 text-base font-medium">
            {t.programs}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to={`/individual-tours?lang=${currentLang}`}
                className="text-gray-800 hover:text-gray-950 transition-colors cursor-pointer"
              >
                {t.individualTours}
              </Link>
            </li>
            <li>
              <Link
                to={`/5-days-tour?lang=${currentLang}`}
                className="text-gray-800 hover:text-gray-950 transition-colors cursor-pointer"
              >
                {t.fiveDaysTour}
              </Link>
            </li>
            <li>
              <Link
                to={`/6-days-tour?lang=${currentLang}`}
                className="text-gray-800 hover:text-gray-950 transition-colors cursor-pointer"
              >
                {t.sixDaysTour}
              </Link>
            </li>
            <li>
              <Link
                to={`/10-days-tour?lang=${currentLang}`}
                className="text-gray-800 hover:text-gray-950 transition-colors cursor-pointer"
              >
                {t.tenDaysTour}
              </Link>
            </li>
          </ul>
        </div>

        {/* Documents */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-gray-900 text-base font-medium">
            {t.documents}
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-800 hover:text-gray-950 transition-colors">
              {t.license}
            </li>
            <li
              onClick={() => navigateWithLang("/polise")}
              className="text-gray-800 hover:text-gray-950 transition-colors cursor-pointer"
            >
              {t.privacyPolicy}
            </li>
          </ul>
        </div>

        {/* Info and Social */}
        <div className="flex flex-col space-y-4">
          <p className="text-gray-700">
            {t.notOffer}
          </p>
          <p className="text-gray-700 max-w-[250px]">
            {t.licensed}
          </p>
          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/travelcations_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 rounded-full p-2.5 hover:bg-gray-300 transition-colors"
            >
              <FaInstagram className="w-5 h-5 text-gray-900" />
            </a>
            <a
              href="https://facebook.com/travelcations_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 rounded-full p-2.5 hover:bg-gray-300 transition-colors"
            >
              <FaFacebook className="w-5 h-5 text-gray-900" />
            </a>
            <a
              href="https://t.me/travelcations_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 rounded-full p-2.5 hover:bg-gray-300 transition-colors"
            >
              <FaTelegram className="w-5 h-5 text-gray-900" />
            </a>
            <a
              href="https://wa.me/998907113338"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 rounded-full p-2.5 hover:bg-gray-300 transition-colors"
            >
              <FaWhatsapp className="w-5 h-5 text-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;