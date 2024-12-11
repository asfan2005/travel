import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import {Link,useNavigate} from "react-router-dom"
function Footer2() {
  const navigate=useNavigate();
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
            © All site materials belong to Bekirova travel LLC and are protected by copyright.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white text-base font-medium">
            MAIN
          </h3>
        </div>

        {/* Programs */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white text-base font-medium">
            PROGRAMS:
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/individual-tours" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Individual tours
              </Link>
            </li>
            <li>
              <Link to="/5-days-tour" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                5 days (groups)
              </Link>
            </li>
            <li>
              <Link to="/6-days-tour" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                6 days (groups)
              </Link>
            </li>
            <li>
              <Link to="/10-days-tour" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                10 days (groups)
              </Link>
            </li>
          </ul>
        </div>

        {/* Documents */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white text-base font-medium">
            DOCUMENTS:
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white transition-colors">
              License
            </li>
            <li onClick={()=>navigate("/polise")} className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Info and Social */}
        <div className="flex flex-col space-y-4">
          <p className="text-gray-400">
            The site is not a public offer.
          </p>
          <p className="text-gray-400 max-w-[250px]">
            Licensed tour operator in Uzbekistan. We are in the register of companies of the country
          </p>
          {/* Social icons */}
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2.5 hover:opacity-80 transition-opacity"
            >
              <FaInstagram className="w-5 h-5 text-black" />
            </a>
            <a 
              href="https://telegram.org" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2.5 hover:opacity-80 transition-opacity"
            >
              <FaTelegram className="w-5 h-5 text-black" />
            </a>
            <a 
              href="https://whatsapp.com" 
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