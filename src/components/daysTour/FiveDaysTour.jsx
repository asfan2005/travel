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
  FaCheckCircle,
} from "react-icons/fa";
import axios from 'axios';

// Multilingual Content
const content = {
  en: {
    tourTitle: "5-day Uzbekistan Express Tour",
    tourSubtitle: "5 Days | Tashkent, Samarkand, Bukhara",
    tourDescription: "5-day Uzbekistan Express Tour is a perfect introduction to Uzbekistan's main highlights. You will explore the ancient cities of Samarkand and Bukhara, experience the modern capital Tashkent, and discover the rich cultural heritage of the Silk Road. This compact tour is ideal for those with limited time who want to see the essential sights of Uzbekistan.",
    navigationItems: {
      itinerary: "ITINERARY",
      prices: "PRICES",
      request: "REQUEST",
      reviews: "REVIEWS"
    },
    pricesSection: {
      title: "Prices per person",
      headers: {
        persons: "Persons",
        economy: "Econ",
        comfort: "Comf",
        deluxe: "Deluxe"
      },
      priceRows: [
        { category: "1 person", economy: 1000, comfort: 1250, deluxe: 1760 },
        { category: "2 persons", economy: 900, comfort: 1060, deluxe: 1280 },
        { category: "3 persons", economy: 800, comfort: 960, deluxe: 1190 },
        { category: "4 persons", economy: 700, comfort: 860, deluxe: 1080 },
        { category: "Single supplement", economy: 280, comfort: 300, deluxe: 330 }
      ],
      disclaimer: "Prices are for 2025 in US$ per person, with discounted prices for larger groups available on request."
    },
    day1Title: "Tashkent - Arrival",
    day1Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                01:05-03:00
              </span>
              <p>Arrival at Tashkent International Airport.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                03:00-04:00
              </span>
              <p>
                Meeting at Tashkent airport (driver will hold a sign with your name)
                and transfer to hotel.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in Tashkent: Amir Timur's Tomb,
                Jorasat Monument, Independence Square, Tashkent Teleminorasi, Chorsu Bazaar.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (Besh Qozonda Tashkent - Tashkent Market).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Continue sightseeing: Amir Timur's Tomb,
                Jorasat Monument, Independence Square, Tashkent Teleminorasi, Chorsu Bazaar.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Evening
              </span>
              <p>Dinner and overnight at hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                01:05-03:00
              </span>
              <p>Прибытие в международный аэропорт Ташкента.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                03:00-04:00
              </span>
              <p>
                Встреча в аэропорту Ташкента (водитель будет держать табличку с вашим именем)
                и трансфер в отель.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия по Ташкенту: Гробница Амира Тимура,
                Монумент Джорасат, Площадь Независимости, Ташкентская Телеминораси, Базар Чорсу.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (Беш Козонда Ташкент - Ташкентский рынок).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Продолжение экскурсии: Гробница Амира Тимура,
                Монумент Джорасат, Площадь Независимости, Ташкентская Телеминораси, Базар Чорсу.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Вечер
              </span>
              <p>Ужин и ночь в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                01:05-03:00
              </span>
              <p>Toshkent xalqaro aeroportiga kelish.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                03:00-04:00
              </span>
              <p>
                Toshkent aeroportida kutib olish (haydovchi sizning ismingiz yozilgan plakat bilan turadi)
                va mehmonxonaga transfer.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Toshkentda sayohat: Amir Temur qabri,
                Jorasat Yodgorligi, Mustaqillik Maydoni, Toshkent Teleminorasi, Chorsu Bozori.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (Besh Qozonda Toshkent - Toshkent Bozori).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Sayohatni davom ettirish: Amir Temur qabri,
                Jorasat Yodgorligi, Mustaqillik Maydoni, Toshkent Teleminorasi, Chorsu Bozori.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada kechki ovqat va tunash.</p>
            </div>
          </div>
        </div>
      )
    },
    day2Title: "Tashkent - Samarqand",
    day2Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Morning</span>
              <p>
                Check out from the hotel (you can take your breakfast as a lunchbox from reception).
                Transfer to the railway station by car (the driver will be waiting for you at the reception of the hotel).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Train Journey</span>
              <p>High speed train to Samarkand.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Arrival</span>
              <p>
                Arrival and meeting at the railway station by the driver (the driver will hold a sign with your name and surname)
                and transfer to the hotel (you can leave your luggage at the reception of your hotel).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Morning Sightseeing</span>
              <p>
                Sightseeing of the city: Guri Emir (a legendary mausoleum where Amir Temur and all his family buried),
                Registan square - world famous complex of 3 madrasahs (Ulugbek, Tillakori, Sherdor),
                mosque Bibi Khanum – the biggest mosque ever built in Central Asia, Siyab bazaar (a local market).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Lunch</span>
              <p>Lunch at a local restaurant (Samarkand plov – "Zighir osh").</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Afternoon Sightseeing</span>
              <p>
                Continue to discover Samarkand: Shahi – Zinda necropolis (a holy place and cemetery with graves of Temurid's dynasty
                and a grave of cousin of Prophet Muhammad), Hazrati Khizr mosque, Afrasiab museum, "El merosi" theater show
                (history of Central Asian nations).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Evening</span>
              <p>Dinner in a local restaurant and overnight at the hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Утро</span>
              <p>
                Выезд из отеля (можно взять завтрак в виде ланч-бокса на ресепшене).
                Трансфер на железнодорожный вокзал на машине (водитель будет ждать вас на ресепшене отеля).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Поездка</span>
              <p>Скоростной поезд в Самарканд.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Прибытие</span>
              <p>
                Прибытие и встреча на железнодорожном вокзале водителем (водитель будет держать табличку с вашим именем и фамилией)
                и трансфер в отель (вы можете оставить багаж на ресепшене отеля).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Утренняя экскурсия</span>
              <p>
                Осмотр города: Гур-и Эмир (легендарный мавзолей, где похоронен Амир Темур и вся его семья),
                площадь Регистан - всемирно известный комплекс из 3 медресе (Улугбек, Тилля-Кори, Шердор),
                мечеть Биби-Ханым – самая большая мечеть, когда-либо построенная в Центральной Азии, базар Сиябский (местный рынок).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Обед</span>
              <p>Обед в местном ресторане (самаркандский плов – "Зигир ош").</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Дневная экскурсия</span>
              <p>
                Продолжение знакомства с Самаркандом: некрополь Шахи-З��нда (святое мест ����� кл��дбище с могилами
                dynastie Темуридов и могила двоюродного брата пророка Мухаммеда), мечеть Хазрати Хизр,
                музей Афрасиаб, театральное пре��ставление "Эль мероси" (история народов Центральной Азии).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Вечер</span>
              <p>Ужин в местном ресторане и ночь в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Ertalab</span>
              <p>
                Mehmonxonadan chiqish (nonushtani resepshendan lanch-qutisi sifatida olishingiz mumkin).
                Avtomobil bilan temir yo'l vokzaliga transfer (haydovchi mehmonxona resepshenida sizni kutadi).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Sayohat</span>
              <p>Samarqandga tezkor poyezd.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Kelish</span>
              <p>
                Temir yo'l vokzalida haydovchi tomonidan kutib olish (haydovchi sizning ism va familiyangiz yozilgan plakat bilan turadi)
                va mehmonxonaga transfer (yukingizni mehmonxona resepshenida qoldirishingiz mumkin).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Ertalab sayohat</span>
              <p>
                Shaharni ko'rib chiqish: Guri Emir (Amir Temur va uning butun oilasi dafn etilgan mashhur maqbara),
                Registon maydoni - dunyoga mashhur 3 madrasalar kompleksi (Ulug'bek, Tillakori, Sherdor),
                Bibi Xonim masjidi – Markaziy Osioda qurilgan eng katta masjid, Siyob bozori (mahalliy bozor).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Tushlik</span>
              <p>Mahalliy restorada tushlik (Samarqand oshi – "Zighir osh").</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Kunduzi sayohat</span>
              <p>
                Samarqandni davom etib ko'rib chiqish: Shahi-Zinda nekropolisi (muqaddas joy va Temuriylar
                sulolasining qabrlari va Payg'ambar Muhammadning ugholisi qabri), Hazrati Xizr masjidi,
                Afrosiyob muzeyi, "El merosi" teatr ko'rsatuvlari (Markaziy Osiyo xalqlari tarixi).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Kechqurun</span>
              <p>Mahalliy restorada kechki ovqat va mehmonxonada tunash.</p>
            </div>
          </div>
        </div>
      )
    },
    day3Title: "Samarqand - Buxoro",
    day3Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel. Departure from hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in Samarqand: Xoja Doniyor Mosque,
                Ulug'bek Research Institute and Museum, "Konigil-Meros" Carpet Factory.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (Samarqand - "Mantisi and No'xat-Sho'rak").
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Train transfer to Temir Yo'l train station.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Buxoro train.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                17:00-17:30
              </span>
              <p>
                Meeting at Buxoro train station and transfer to hotel.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Evening
              </span>
              <p>Breakfast and lunch at hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле. Выезд из отеля.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия по Самарканду: Мечеть Ходжа Даниера,
                Научно-исследовательский институт и музей Улугбека, Ковровая фабрика "Конигил-Мерос".
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (Самарканд - "Мантиси и Нухат-Шорак").
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Трансфер на железнодорожный вокзал Темир Йул.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Поезд в Бухару.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                17:00-17:30
              </span>
              <p>
                Встреча на железнодорожном вокзале Бухары и трансфер в отель.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Вечер
              </span>
              <p>Завтрак и обед в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta. Mehmonxonadan chiqish.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Samarqandni ko'rib chiqish: Xoja Doniyor Masjidi,
                Ulug'bek Tadqiqot Instituti va Muzeyi, "Konigil-Meros" Gilam Fabrikasi.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (Samarqand - "Mantisi va No'xat-Sho'rak").
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Temir yo'l vokzaliga transfer.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Buxoro poyezdi.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                17:00-17:30
              </span>
              <p>
                Buxoro temir yo'l vokzalida kutib olish va mehmonxonaga transfer.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada nonushta va tushlik.</p>
            </div>
          </div>
        </div>
      )
    },
    day4Title: "Buxoro",
    day4Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in Buxoro: Bugun Ekskursiya (day trip) is allowed,
                as it's considered a major part of the city's history.
                Labi-Hovuz Complex (Nodir Devonbegi Waterfall, xonaqa and madrasa, Kukaldosh madrasasi),
                Mago'ki-Attoriy Mosque, 3 grocery stores (Toki Sarrofon, Toki Telpakfurushon, Toki Zargoron),
                Ulug'bek Madrasa, Abdulazizxon Madrasa, Kalon Minorasi and Masjid, Mir Arab Madrasa.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (Buxoro - Oshi Sofiy).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Continue sightseeing: Ark Qal'asi,
                Bolo-Hovuz Masjid, Chashmai-Ayub Mosque, Somoniylar Mosque.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Evening
              </span>
              <p>Breakfast and lunch at hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия по Бухаре: Сегодняшняя экскурсия разрешена,
                так как считается важной частью истории города.
                Комплекс Лаби-Хавуз (Водопад Нодир Девонбеги, ханака и медресе, медресе Кукалдош),
                Мечеть Магоки-Аттори, 3 торговые лавки (Токи Саррофон, Токи Телпакфурушон, Токи Заргорон),
                Медресе Улугбека, Медресе Абдулазизхана, Калон Минора и Масджид, Медресе Мир Араб.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (Бухара - Оши Софий).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Продолжение экскурсии: Арк Калъаси,
                Мечеть Боло-Ховуз, Мечеть Чашмаи-Аюб, Мечеть Сомонийлар.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Вечер
              </span>
              <p>Завтрак и обед в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Buxoroni ko'rib chiqish: Bugungi sayohat ruxsat etilgan,
                chunki u shahar tarixining muhim qismi hisoblanadi.
                Labi-Hovuz Kompleksi (Nodir Devonbegi Selli, xonaqa va madrasa, Kukaldosh madrasasi),
                Mago'ki-Attoriy Masjidi, 3 do'kon (Toki Sarrofon, Toki Telpakfurushon, Toki Zargoron),
                Ulug'bek Madrasasi, Abdulazizxon Madrasasi, Kalon Minorasi va Masjidi, Mir Arab Madrasasi.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (Buxoro - Oshi Sofiy).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Sayohatni davom ettirish: Ark Qal'asi,
                Bolo-Hovuz Masjidi, Chashmai-Ayub Masjidi, Somoniylar Masjidi.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada nonushta va tushlik.</p>
            </div>
          </div>
        </div>
      )
    },
    day5Title: "Buxoro - Tashkent (Jo'nash)",
    day5Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel. Departure from hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in rural areas: Bahovuddin Naqshband
                Memorial-Architecture Complex (XIVth century avliyo and faylasufi),
                Sitorai Mohi Xosa Saroyi (last Buxoro emir's summer residence - XXth century),
                Chor Bakr Necropolis (XVIth century memorial-architecture complex).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (grilled meat).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Airport transfer.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Flight to Tashkent.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                18:00-21:30
              </span>
              <p>Return to Uzbekistan.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле. Выезд из отеля.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия в сельской местности: Мемориально-архитектурный комплекс Баховуддина Нақшбанда
                (авлие и философ XIV века),
                Ситораи Мохи Хоса Сарои (летняя резиденция последнего бухарского эмира - XX век),
                Некрополь Чор Бакр (мемориально-архитектурный комплекс XVI века).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (жареное мясо).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Трансфер в аэропорт.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Перелет в Ташкент.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                18:00-21:30
              </span>
              <p>Возвращение в Узбекистан.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta. Mehmonxonadan chiqish.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Qishloq hududlarini ko'rib chiqish: Bahovuddin Naqshband
                Memurial-Arxitektura Kompleksi (XIV asr avliyo va faylasufi),
                Sitorai Mohi Xosa Saroyi (oxirgi Buxoro emiri yozgi rezidensiyasi - XX asr),
                Chor Bakr Nekropolisi (XVI asr memurial-arxitektura kompleksi).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (kabob).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Aeroport transferi.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Toshkentga parvoz.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                18:00-21:30
              </span>
              <p>O'zbekistonga qaytish.</p>
            </div>
          </div>
        </div>
      )
    },
  },
  ru: {
    tourTitle: "5-дневный экспресс-тур по Узбекистану",
    tourSubtitle: "5 дней | Ташкент, Самарканд, Бухара",
    tourDescription: "5-дневный экспресс-тур по Узбекистану - идеальное введение в основные достопримечательности страны. Вы исследуете древние города Самарканд и Бухару, познакомитесь с современной столицей Ташкентом и откроете для себя богатое культурное наследие Шелкового пути. Этот компактный тур идеально подходит для тех, у кого ограниченное время и кто хочет увидеть основные достопримечательности Узбекистана.",
    navigationItems: {
      itinerary: "МАРШРУТ",
      prices: "ЦЕНЫ",
      request: "ЗАПРОС",
      reviews: "ОТЗЫВЫ"
    },
    pricesSection: {
      title: "Цены за человека",
      headers: {
        persons: "Количество",
        economy: "Эконом",
        comfort: "Комфорт",
        deluxe: "Делюкс"
      },
      priceRows: [
        { category: "1 человек", economy: 1000, comfort: 1250, deluxe: 1760 },
        { category: "2 человека", economy: 900, comfort: 1060, deluxe: 1280 },
        { category: "3 человека", economy: 800, comfort: 960, deluxe: 1190 },
        { category: "4 человека", economy: 700, comfort: 860, deluxe: 1080 },
        { category: "Доплата за одноместный", economy: 280, comfort: 300, deluxe: 330 }
      ],
      disclaimer: "Цены указаны за 2025 год в долларах США за человека, возможны скидки для больших групп по запросу."
    },
    day1Title: "Ташкент - Прибытие",
    day1Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                01:05-03:00
              </span>
              <p>Arrival at Tashkent International Airport.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                03:00-04:00
              </span>
              <p>
                Meeting at Tashkent airport (driver will hold a sign with your name)
                and transfer to hotel.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in Tashkent: Amir Timur's Tomb,
                Jorasat Monument, Independence Square, Tashkent Teleminorasi, Chorsu Bazaar.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (Besh Qozonda Tashkent - Tashkent Market).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Continue sightseeing: Amir Timur's Tomb,
                Jorasat Monument, Independence Square, Tashkent Teleminorasi, Chorsu Bazaar.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Evening
              </span>
              <p>Dinner and overnight at hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                01:05-03:00
              </span>
              <p>Прибытие в международный аэропорт Ташкента.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                03:00-04:00
              </span>
              <p>
                Встреча в аэропорту Ташкента (водитель будет держать табличку с вашим именем)
                и трансфер в отель.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия по Ташкенту: Гробница Амира Тимура,
                Монумент Джорасат, Площадь Независимости, Ташкентская Телеминораси, Базар Чорсу.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (Беш Козонда Ташкент - Ташкентский рынок).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Продолжение экскурсии: Гробница Амира Тимура,
                Монумент Джорасат, Площадь Независимости, Ташкентская Телеминораси, Базар Чорсу.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Вечер
              </span>
              <p>Ужин и ночь в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                01:05-03:00
              </span>
              <p>Toshkent xalqaro aeroportiga kelish.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                03:00-04:00
              </span>
              <p>
                Toshkent aeroportida kutib olish (haydovchi sizning ismingiz yozilgan plakat bilan turadi)
                va mehmonxonaga transfer.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Toshkentda sayohat: Amir Temur qabri,
                Jorasat Yodgorligi, Mustaqillik Maydoni, Toshkent Teleminorasi, Chorsu Bozori.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (Besh Qozonda Toshkent - Toshkent Bozori).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Sayohatni davom ettirish: Amir Temur qabri,
                Jorasat Yodgorligi, Mustaqillik Maydoni, Toshkent Teleminorasi, Chorsu Bozori.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada kechki ovqat va tunash.</p>
            </div>
          </div>
        </div>
      )
    },
    day2Title: "Ташкент - Самарканд",
    day2Content: (
      <div className="text-gray-600 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="font-medium text-blue-500 w-24 flex-shrink-0">Morning</span>
            <p>
              Check out from the hotel (you can take your breakfast as a lunchbox from reception).
              Transfer to the railway station by car (the driver will be waiting for you at the reception of the hotel).
            </p>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-blue-500 w-24 flex-shrink-0">Train Journey</span>
            <p>High speed train to Samarkand.</p>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-blue-500 w-24 flex-shrink-0">Arrival</span>
            <p>
              Arrival and meeting at the railway station by the driver (the driver will hold a sign with your name and surname)
              and transfer to the hotel (you can leave your luggage at the reception of your hotel).
            </p>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-blue-500 w-24 flex-shrink-0">Morning Sightseeing</span>
            <p>
              Sightseeing of the city: Guri Emir (a legendary mausoleum where Amir Temur and all his family buried),
              Registan square - world famous complex of 3 madrasahs (Ulugbek, Tillakori, Sherdor),
              mosque Bibi Khanum – the biggest mosque ever built in Central Asia, Siyab bazaar (a local market).
            </p>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-blue-500 w-24 flex-shrink-0">Lunch</span>
            <p>Lunch at a local restaurant (Samarkand plov – "Zighir osh").</p>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-blue-500 w-24 flex-shrink-0">Afternoon Sightseeing</span>
            <p>
              Continue to discover Samarkand: Shahi – Zinda necropolis (a holy place and cemetery with graves of Temurid's dynasty
              and a grave of cousin of Prophet Muhammad), Hazrati Khizr mosque, Afrasiab museum, "El merosi" theater show
              (history of Central Asian nations).
            </p>
          </div>

          <div className="flex items-start">
            <span className="font-medium text-blue-500 w-24 flex-shrink-0">Evening</span>
            <p>Dinner in a local restaurant and overnight at the hotel.</p>
          </div>
        </div>
      </div>
    ),
    day3Title: "Самарканд - Бухара",
    day3Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel. Departure from hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in Samarqand: Xoja Doniyor Mosque,
                Ulug'bek Research Institute and Museum, "Konigil-Meros" Carpet Factory.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (Samarqand - "Mantisi and No'xat-Sho'rak").
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Train transfer to Temir Yo'l train station.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Buxoro train.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                17:00-17:30
              </span>
              <p>
                Meeting at Buxoro train station and transfer to hotel.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Evening
              </span>
              <p>Breakfast and lunch at hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле. Выезд из отеля.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия по Самарканду: Мечеть Ходжа Даниера,
                Научно-исследовательский институт и музей Улугбека, Ковровая фабрика "Конигил-Мерос".
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (Самарканд - "Мантиси и Нухат-Шорак").
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Трансфер на железнодорожный вокзал Темир Йул.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Поезд в Бухару.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                17:00-17:30
              </span>
              <p>
                Встреча на железнодорожном вокзале Бухары и трансфер в отель.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Вечер
              </span>
              <p>Завтрак и обед в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta. Mehmonxonadan chiqish.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Samarqandni ko'rib chiqish: Xoja Doniyor Masjidi,
                Ulug'bek Tadqiqot Instituti va Muzeyi, "Konigil-Meros" Gilam Fabrikasi.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (Samarqand - "Mantisi va No'xat-Sho'rak").
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Temir yo'l vokzaliga transfer.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Buxoro poyezdi.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                17:00-17:30
              </span>
              <p>
                Buxoro temir yo'l vokzalida kutib olish va mehmonxonaga transfer.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada nonushta va tushlik.</p>
            </div>
          </div>
        </div>
      )
    },
    day4Title: "Бухара",
    day4Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in Buxoro: Bugun Ekskursiya (day trip) is allowed,
                as it's considered a major part of the city's history.
                Labi-Hovuz Complex (Nodir Devonbegi Waterfall, xonaqa and madrasa, Kukaldosh madrasasi),
                Mago'ki-Attoriy Mosque, 3 grocery stores (Toki Sarrofon, Toki Telpakfurushon, Toki Zargoron),
                Ulug'bek Madrasa, Abdulazizxon Madrasa, Kalon Minorasi and Masjid, Mir Arab Madrasa.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (Buxoro - Oshi Sofiy).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Continue sightseeing: Ark Qal'asi,
                Bolo-Hovuz Masjid, Chashmai-Ayub Mosque, Somoniylar Mosque.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Evening
              </span>
              <p>Breakfast and lunch at hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия по Бухаре: Сегодняшняя экскурсия разрешена,
                так как считается важной частью истории города.
                Комплекс Лаби-Хавуз (Водопад Нодир Девонбеги, ханака и медресе, медресе Кукалдош),
                Мечеть Магоки-Аттори, 3 торговые лавки (Токи Саррофон, Токи Телпакфурушон, Токи Заргорон),
                Медресе Улугбека, Медресе Абдулазизхана, Калон Минора и Масджид, Медресе Мир Араб.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (Бухара - Оши Софий).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Продолжение экскурсии: Арк Калъаси,
                Мечеть Боло-Ховуз, Мечеть Чашмаи-Аюб, Мечеть Сомонийлар.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Вечер
              </span>
              <p>Завтрак и обед в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Buxoroni ko'rib chiqish: Bugungi sayohat ruxsat etilgan,
                chunki u shahar tarixining muhim qismi hisoblanadi.
                Labi-Hovuz Kompleksi (Nodir Devonbegi Selli, xonaqa va madrasa, Kukaldosh madrasasi),
                Mago'ki-Attoriy Masjidi, 3 do'kon (Toki Sarrofon, Toki Telpakfurushon, Toki Zargoron),
                Ulug'bek Madrasasi, Abdulazizxon Madrasasi, Kalon Minorasi va Masjidi, Mir Arab Madrasasi.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (Buxoro - Oshi Sofiy).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Sayohatni davom ettirish: Ark Qal'asi,
                Bolo-Hovuz Masjidi, Chashmai-Ayub Masjidi, Somoniylar Masjidi.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada nonushta va tushlik.</p>
            </div>
          </div>
        </div>
      )
    },
    day5Title: "Бухара - Ташкент (Jo'nash)",
    day5Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel. Departure from hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in rural areas: Bahovuddin Naqshband
                Memorial-Architecture Complex (XIVth century avliyo and faylasufi),
                Sitorai Mohi Xosa Saroyi (last Buxoro emir's summer residence - XXth century),
                Chor Bakr Necropolis (XVIth century memorial-architecture complex).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (grilled meat).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Airport transfer.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Flight to Tashkent.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                18:00-21:30
              </span>
              <p>Return to Uzbekistan.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле. Выезд из отеля.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия в сельской местности: Мемориально-архитектурный комплекс Баховуддина Нақшбанда
                (авлие и философ XIV века),
                Ситораи Мохи Хоса Сарои (летняя резиденция последнего бухарского эмира - XX век),
                Некрополь Чор Бакр (мемориально-архитектурный комплекс XVI века).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (жареное мясо).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Трансфер в аэропорт.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Перелет в Ташкент.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                18:00-21:30
              </span>
              <p>Возвращение в Узбекистан.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta. Mehmonxonadan chiqish.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Qishloq hududlarini ko'rib chiqish: Bahovuddin Naqshband
                Memurial-Arxitektura Kompleksi (XIV asr avliyo va faylasufi),
                Sitorai Mohi Xosa Saroyi (oxirgi Buxoro emiri yozgi rezidensiyasi - XX asr),
                Chor Bakr Nekropolisi (XVI asr memurial-arxitektura kompleksi).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (kabob).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Aeroport transferi.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Toshkentga parvoz.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                18:00-21:30
              </span>
              <p>O'zbekistonga qaytish.</p>
            </div>
          </div>
        </div>
      )
    },
  },
  uz: {
    tourTitle: "5 kunlik O'zbekiston Ekspress Sayohati",
    tourSubtitle: "5 Kun | Toshkent, Samarqand, Buxoro",
    tourDescription: "5 kunlik O'zbekiston Ekspress Sayohati O'zbekistonning asosiy diqqatga sazovor joylarini tanishtirishga mukammal yo'l. Siz Samarqand va Buxoro kabi qadimiy shaharlarni, Toshkent kabi zamonaviy poytaxtni kashf qilasiz va Ipak yo'lining boy madaniy merosini ochib olasiz. Ushbu qisqa sayohat vaqti cheklangan bo'lgan va O'zbekistonning asosiy ko'rinishlarini ko'rmoqchi bo'lganlar uchun ideal.",
    navigationItems: {
      itinerary: "SAYOHAT YO'NALISHI",
      prices: "NARXLAR",
      request: "SO'ROV",
      reviews: "SHARHLAR"
    },
    pricesSection: {
      title: "Har bir kishi uchun narxlar",
      headers: {
        persons: "Kishilar",
        economy: "Iqtisodiy",
        comfort: "Komfort",
        deluxe: "Deluxe"
      },
      priceRows: [
        { category: "1 kishi", economy: 1000, comfort: 1250, deluxe: 1760 },
        { category: "2 kishi", economy: 900, comfort: 1060, deluxe: 1280 },
        { category: "3 kishi", economy: 800, comfort: 960, deluxe: 1190 },
        { category: "4 kishi", economy: 700, comfort: 860, deluxe: 1080 },
        { category: "Yagona joy uchun qo'shimcha", economy: 280, comfort: 300, deluxe: 330 }
      ],
      disclaimer: "Narxlar 2025 yil uchun dollar/kishi hisobida bo'lib, katta guruhlar uchun chegirmalar mavjud."
    },
    day1Title: "Toshkent - Kelish",
    day1Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                01:05-03:00
              </span>
              <p>Arrival at Tashkent International Airport.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                03:00-04:00
              </span>
              <p>
                Meeting at Tashkent airport (driver will hold a sign with your name)
                and transfer to hotel.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in Tashkent: Amir Timur's Tomb,
                Jorasat Monument, Independence Square, Tashkent Teleminorasi, Chorsu Bazaar.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (Besh Qozonda Tashkent - Tashkent Bozori).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Continue sightseeing: Amir Timur's Tomb,
                Jorasat Monument, Independence Square, Tashkent Teleminorasi, Chorsu Bazaar.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Evening
              </span>
              <p>Dinner and overnight at hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                01:05-03:00
              </span>
              <p>Прибытие в международный аэропорт Ташкента.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                03:00-04:00
              </span>
              <p>
                Встреча в аэропорту Ташкента (водитель будет держать табличку с вашим именем)
                и трансфер в отель.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия по Ташкенту: Гробница Амира Тимура,
                Монумент Джорасат, Площадь Независимости, Ташкентская Телеминораси, Базар Чорсу.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (Беш Козонда Ташкент - Ташкентский рынок).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Sayohatni davom ettirish: Amir Temur qabri,
                Jorasat Yodgorligi, Mustaqillik Maydoni, Toshkent Teleminorasi, Chorsu Bozori.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada kechki ovqat va tunash.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                01:05-03:00
              </span>
              <p>Toshkent xalqaro aeroportiga kelish.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                03:00-04:00
              </span>
              <p>
                Toshkent aeroportida kutib olish (haydovchi sizning ismingiz yozilgan plakat bilan turadi)
                va mehmonxonaga transfer.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Toshkentda sayohat: Amir Temur qabri,
                Jorasat Yodgorligi, Mustaqillik Maydoni, Toshkent Teleminorasi, Chorsu Bozori.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (Besh Qozonda Toshkent - Toshkent Bozori).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Sayohatni davom ettirish: Amir Temur qabri,
                Jorasat Yodgorligi, Mustaqillik Maydoni, Toshkent Teleminorasi, Chorsu Bozori.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada kechki ovqat va tunash.</p>
            </div>
          </div>
        </div>
      )
    },
    day2Title: "Toshkent - Samarqand",
    day2Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Morning</span>
              <p>
                Check out from the hotel (you can take your breakfast as a lunchbox from reception).
                Transfer to the railway station by car (the driver will be waiting for you at the reception of the hotel).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Train Journey</span>
              <p>High speed train to Samarkand.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Arrival</span>
              <p>
                Arrival and meeting at the railway station by the driver (the driver will hold a sign with your name and surname)
                and transfer to the hotel (you can leave your luggage at the reception of your hotel).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Morning Sightseeing</span>
              <p>
                Sightseeing of the city: Guri Emir (a legendary mausoleum where Amir Temur and all his family buried),
                Registan square - world famous complex of 3 madrasahs (Ulugbek, Tillakori, Sherdor),
                mosque Bibi Khanum – the biggest mosque ever built in Central Asia, Siyab bazaar (a local market).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Lunch</span>
              <p>Lunch at a local restaurant (Samarkand plov – "Zighir osh").</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Afternoon Sightseeing</span>
              <p>
                Continue to discover Samarkand: Shahi – Zinda necropolis (a holy place and cemetery with graves of Temurid's dynasty
                and a grave of cousin of Prophet Muhammad), Hazrati Khizr mosque, Afrasiab museum, "El merosi" theater show
                (history of Central Asian nations).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Evening</span>
              <p>Dinner in a local restaurant and overnight at the hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Утро</span>
              <p>
                Выезд из отеля (можно взять завтрак в виде ланч-бокса на ресепшене).
                Трансфер на железнодорожный вокзал на машине (водитель будет ждать вас на ресепшене отеля).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Поездка</span>
              <p>Скоростной поезд в Самарканд.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Прибытие</span>
              <p>
                Прибытие и встреча на железнодорожном вокзале водителем (водитель будет держать табличку с вашим именем и фамилией)
                и трансфер в отель (вы можете оставить багаж на ресепшене отеля).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Утренняя экскурсия</span>
              <p>
                Осмотр города: Гур-и Эмир (легендарный мавзолей, где похоронен Амир Темур и вся его семья),
                площадь Регистан - всемирно известный комплекс из 3 медресе (Улугбек, Тилля-Кори, Шердор),
                мечеть Биби-Ханым – самая большая мечеть, когда-либо построенная в Центральной Азии, базар Сиябский (местный рынок).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Обед</span>
              <p>Обед в местном ресторане (самаркандский плов – "Зигир ош").</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Дневная экскурсия</span>
              <p>
                Продолжение знакомства с Самаркандом: некрополь Шахи-З��нда (святое мест и кладбище с могилами
                dynastie Темуридов и могила двоюродного брата пророка Мухаммеда), мечеть Хазрати Хизр,
                музей Афрасиаб, театральное представление "Эль мероси" (история народов Центральной Азии).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Вечер</span>
              <p>Ужин в местном ресторане и ночь в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Ertalab</span>
              <p>
                Mehmonxonadan chiqish (nonushtani resepshendan lanch-qutisi sifatida olishingiz mumkin).
                Avtomobil bilan temir yo'l vokzaliga transfer (haydovchi mehmonxona resepshenida sizni kutadi).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Sayohat</span>
              <p>Samarqandga tezkor poyezd.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Kelish</span>
              <p>
                Temir yo'l vokzalida haydovchi tomonidan kutib olish (haydovchi sizning ism va familiyangiz yozilgan plakat bilan turadi)
                va mehmonxonaga transfer (yukingizni mehmonxona resepshenida qoldirishingiz mumkin).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Ertalab sayohat</span>
              <p>
                Shaharni ko'rib chiqish: Guri Emir (Amir Temur va uning butun oilasi dafn etilgan mashhur maqbara),
                Registon maydoni - dunyoga mashhur 3 madrasalar kompleksi (Ulug'bek, Tillakori, Sherdor),
                Bibi Xonim masjidi – Markaziy Osioda qurilgan eng katta masjid, Siyob bozori (mahalliy bozor).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Tushlik</span>
              <p>Mahalliy restorada tushlik (Samarqand oshi – "Zighir osh").</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Kunduzi sayohat</span>
              <p>
                Samarqandni davom etib ko'rib chiqish: Shahi-Zinda nekropolisi (muqaddas joy va Temuriylar
                sulolasining qabrlari va Payg'ambar Muhammadning ugholisi qabri), Hazrati Xizr masjidi,
                Afrosiyob muzeyi, "El merosi" teatr ko'rsatuvlari (Markaziy Osiyo xalqlari tarixi).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">Kechqurun</span>
              <p>Mahalliy restorada kechki ovqat va mehmonxonada tunash.</p>
            </div>
          </div>
        </div>
      )
    },
    day3Title: "Samarqand - Buxoro",
    day3Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel. Departure from hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in Samarqand: Xoja Doniyor Mosque,
                Ulug'bek Research Institute and Museum, "Konigil-Meros" Carpet Factory.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (Samarqand - "Mantisi and No'xat-Sho'rak").
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Train transfer to Temir Yo'l train station.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Buxoro train.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                17:00-17:30
              </span>
              <p>
                Meeting at Buxoro train station and transfer to hotel.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Evening
              </span>
              <p>Breakfast and lunch at hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле. Выезд из отеля.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия по Самарканду: Мечеть Ходжа Даниера,
                Научно-исследовательский институт и музей Улугбека, Ковровая фабрика "Конигил-Мерос".
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (Самарканд - "Мантиси и Нухат-Шорак").
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Трансфер на железнодорожный вокзал Темир Йул.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Поезд в Бухару.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                17:00-17:30
              </span>
              <p>
                Встреча на железнодорожном вокзале Бухары и трансфер в отель.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Вечер
              </span>
              <p>Завтрак и обед в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta. Mehmonxonadan chiqish.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Samarqandni ko'rib chiqish: Xoja Doniyor Masjidi,
                Ulug'bek Tadqiqot Instituti va Muzeyi, "Konigil-Meros" Gilam Fabrikasi.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (Samarqand - "Mantisi va No'xat-Sho'rak").
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Temir yo'l vokzaliga transfer.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Buxoro poyezdi.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                17:00-17:30
              </span>
              <p>
                Buxoro temir yo'l vokzalida kutib olish va mehmonxonaga transfer.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada nonushta va tushlik.</p>
            </div>
          </div>
        </div>
      )
    },
    day4Title: "Buxoro",
    day4Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in Buxoro: Bugun Ekskursiya (day trip) is allowed,
                as it's considered a major part of the city's history.
                Labi-Hovuz Complex (Nodir Devonbegi Waterfall, xonaqa and madrasa, Kukaldosh madrasasi),
                Mago'ki-Attoriy Mosque, 3 grocery stores (Toki Sarrofon, Toki Telpakfurushon, Toki Zargoron),
                Ulug'bek Madrasa, Abdulazizxon Madrasa, Kalon Minorasi and Masjid, Mir Arab Madrasa.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (Buxoro - Oshi Sofiy).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Continue sightseeing: Ark Qal'asi,
                Bolo-Hovuz Masjid, Chashmai-Ayub Mosque, Somoniylar Mosque.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Evening
              </span>
              <p>Breakfast and lunch at hotel.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия по Бухаре: Сегодняшняя экскурсия разрешена,
                так как считается важной частью истории города.
                Комплекс Лаби-Хавуз (Водопад Нодир Девонбеги, ханака и медресе, медресе Кукалдош),
                Мечеть Магоки-Аттори, 3 торговые лавки (Токи Саррофон, Токи Телпакфурушон, Токи Заргорон),
                Медресе Улугбека, Медресе Абдулазизхана, Калон Минора и Масджид, Медресе Мир Араб.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (Бухара - Оши Софий).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Продолжение экскурсии: Арк Калъаси,
                Мечеть Боло-Ховуз, Мечеть Чашмаи-Аюб, Мечеть Сомонийлар.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Вечер
              </span>
              <p>Завтрак и обед в отеле.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Buxoroni ko'rib chiqish: Bugungi sayohat ruxsat etilgan,
                chunki u shahar tarixining muhim qismi hisoblanadi.
                Labi-Hovuz Kompleksi (Nodir Devonbegi Selli, xonaqa va madrasa, Kukaldosh madrasasi),
                Mago'ki-Attoriy Masjidi, 3 do'kon (Toki Sarrofon, Toki Telpakfurushon, Toki Zargoron),
                Ulug'bek Madrasasi, Abdulazizxon Madrasasi, Kalon Minorasi va Masjidi, Mir Arab Madrasasi.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (Buxoro - Oshi Sofiy).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-17:00
              </span>
              <p>
                Sayohatni davom ettirish: Ark Qal'asi,
                Bolo-Hovuz Masjidi, Chashmai-Ayub Masjidi, Somoniylar Masjidi.
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                Kechqurun
              </span>
              <p>Mehmonxonada nonushta va tushlik.</p>
            </div>
          </div>
        </div>
      )
    },
    day5Title: "Buxoro - Tashkent (Jo'nash)",
    day5Content: {
      en: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Breakfast at hotel. Departure from hotel.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Sightseeing in rural areas: Bahovuddin Naqshband
                Memorial-Architecture Complex (XIVth century avliyo and faylasufi),
                Sitorai Mohi Xosa Saroyi (last Buxoro emir's summer residence - XXth century),
                Chor Bakr Necropolis (XVIth century memorial-architecture complex).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Lunch at local restaurant (grilled meat).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Airport transfer.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Flight to Tashkent.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                18:00-21:30
              </span>
              <p>Return to Uzbekistan.</p>
            </div>
          </div>
        </div>
      ),
      ru: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Завтрак в отеле. Выезд из отеля.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Экскурсия в сельской местности: Мемориально-архитектурный комплекс Баховуддина Нақшбанда
                (авлие и философ XIV века),
                Ситораи Мохи Хоса Сарои (летняя резиденция последнего бухарского эмира - XX век),
                Некрополь Чор Бакр (мемориально-архитектурный комплекс XVI века).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Обед в местном ресторане (жареное мясо).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Трансфер в аэропорт.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Перелет в Ташкент.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                18:00-21:30
              </span>
              <p>Возвращение в Узбекистан.</p>
            </div>
          </div>
        </div>
      ),
      uz: (
        <div className="text-gray-600 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                07:00-09:00
              </span>
              <p>Mehmonxonada nonushta. Mehmonxonadan chiqish.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                09:00-13:00
              </span>
              <p>
                Qishloq hududlarini ko'rib chiqish: Bahovuddin Naqshband
                Memurial-Arxitektura Kompleksi (XIV asr avliyo va faylasufi),
                Sitorai Mohi Xosa Saroyi (oxirgi Buxoro emiri yozgi rezidensiyasi - XX asr),
                Chor Bakr Nekropolisi (XVI asr memurial-arxitektura kompleksi).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                13:00-14:00
              </span>
              <p>
                Mahalliy restorada tushlik (kabob).
              </p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                14:00-14:30
              </span>
              <p>Aeroport transferi.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                15:00-17:00
              </span>
              <p>Toshkentga parvoz.</p>
            </div>

            <div className="flex items-start">
              <span className="font-medium text-blue-500 w-24 flex-shrink-0">
                18:00-21:30
              </span>
              <p>O'zbekistonga qaytish.</p>
            </div>
          </div>
        </div>
      )
    },
  },
  hotelInformation: {
    en: (
      <div className="text-gray-600 space-y-4">
        <div className="flex items-start">
          <span className="font-medium text-blue-500 w-24 flex-shrink-0">Check-in</span>
          <p>14:00</p>
        </div>
        <div className="flex items-start">
          <span className="font-medium text-blue-500 w-24 flex-shrink-0">Check-out</span>
          <p>12:00</p>
        </div>
        <p className="text-sm italic">
          Standard check-out times apply. If needed, ask at hotel reception about luggage storage service.
        </p>
      </div>
    ),
    ru: (
      <div className="text-gray-600 space-y-4">
        <div className="flex items-start">
          <span className="font-medium text-blue-500 w-24 flex-shrink-0">Заезд</span>
          <p>14:00</p>
        </div>
        <div className="flex items-start">
          <span className="font-medium text-blue-500 w-24 flex-shrink-0">Выезд</span>
          <p>12:00</p>
        </div>
        <p className="text-sm italic">
          Применяются стандартные времена выезда. При необходимости спросите на стойке регистрации отеля об услуге хранения багажа.
        </p>
      </div>
    ),
    uz: (
      <div className="text-gray-600 space-y-4">
        <div className="flex items-start">
          <span className="font-medium text-blue-500 w-24 flex-shrink-0">Kirish</span>
          <p>14:00</p>
        </div>
        <div className="flex items-start">
          <span className="font-medium text-blue-500 w-24 flex-shrink-0">Chiqish</span>
          <p>12:00</p>
        </div>
        <p className="text-sm italic">
          Standart chiqish vaqtlari qo'llaniladi. Kerak bo'lsa, yukni saqlash xizmati haqida mehmonxona resepshenidan so'rang.
        </p>
      </div>
    )
  },

  airportTransferInformation: {
    en: (
      <div className="text-gray-600 space-y-4">
        <p>
          The transfer driver will meet you in the arrival hall holding a sign with your name. Some airports have multiple customs exits, so please look carefully for your driver.
        </p>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">⚠️</span>
          <p>
            If your flight is delayed by more than one hour or you cannot find the driver, please call the number shown above.
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">💼</span>
          <p>
            Airport porter service may cost more than $3 per bag; luggage carts are not always available.
          </p>
        </div>
      </div>
    ),
    ru: (
      <div className="text-gray-600 space-y-4">
        <p>
          Водитель трансфера встретит вас в зале прибытия с табличкой с вашим именем. В некоторых аэропортах есть несколько выходов из таможни, поэтому внимательно ищите своего водителя.
        </p>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">⚠️</span>
          <p>
            Если ваш рейс задерживается более чем на час или вы не можете найти водителя, пожалуйста, п��звоните по номеру, указанному выше.
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">💼</span>
          <p>
            Услуга носильщика в аэропорту может стоить более $3 за сумку; тележки для багажа не всегда доступны.
          </p>
        </div>
      </div>
    ),
    uz: (
      <div className="text-gray-600 space-y-4">
        <p>
          Transfer haydovchisi sizni kelish zalida sizning ismingiz yozilgan plakat bilan kutib oladi. Ba'zi aeroportlarda bir nechta bojxona chiqishlari bo'lishi mumkin, shuning uchun haydovchingizni diqqat bilan qidiring.
        </p>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">⚠️</span>
          <p>
            Agar parvozingiz bir soatdan ortiq kechiksa yoki haydovchini topa olmagan bo'lsangiz, yuqorida ko'rsatilgan raqamga qo'ng'iroq qiling.
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">💼</span>
          <p>
            Aeroport porter xizmati bir sumka uchun $3 dan ko'proq bo'lishi mumkin; yukni tashish uchun arabchalar har doim mavjud bo'lavermaydi.
          </p>
        </div>
      </div>
    )
  },

  trainStationTransferInformation: {
    en: (
      <div className="text-gray-600 space-y-4">
        <p>
          As much as possible, when the transfer driver gets off the train will be next to your carriage on the platform. When you get off the train look for the sign with your first and last name.
        </p>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">⏰</span>
          <p>
            Please wait in place for at least five minutes. If with a transfer agent if you can't connect, walk towards the head of the train and wait at the station entrance.
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">💼</span>
          <p>
            Many places have luggage carts do not forget that it is not. Freight transportation at railway stations service may be more than $5 per bag.
          </p>
        </div>
        <p className="font-medium text-blue-500">
          All tickets are delivered by a local guide or driver.
        </p>
        <p className="text-sm italic">
          In case of emergency, contact the tour company office.
        </p>
      </div>
    ),
    ru: (
      <div className="text-gray-600 space-y-4">
        <p>
          По возможности, водитель трансфера выйдет рядом с вашим вагоном на платформе. Когда вы выйдете из поезда, ищите табличку с вашим именем и фамилией.
        </p>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">⏰</span>
          <p>
            Пожалуйста, подождите на месте не менее пяти минут. Если не удалось связаться с трансферным агентом, пройдите к голове поезда и ждите у входа на вокзал.
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">💼</span>
          <p>
            Не забывайте, что во многих местах нет тележек для багажа. Услуга грузоперевозок на железнодорожных вокзалах может стоить более $5 за сумку.
          </p>
        </div>
        <p className="font-medium text-blue-500">
          Все билеты доставляются местным гидом или водителем.
        </p>
        <p className="text-sm italic">
          В случае чрезвычайной ситуации свяжитесь с офисом туристической компании.
        </p>
      </div>
    ),
    uz: (
      <div className="text-gray-600 space-y-4">
        <p>
          Imkon qadar, transfer haydovchisi platformada sizning vagoningiz yonida tushadi. Poyezddan tushganda, ismingiz va familiyangiz yozilgan plakat bilan qidiring.
        </p>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">⏰</span>
          <p>
            Iltimos, o'z joyingizda kamida besh daqiqa kutib turing. Agar transfer agenti bilan bog'lana olmagan bo'lsangiz, poyezdning boshiga qarab boring va vokzal kirishida kutib turing.
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <span className="font-medium text-blue-500">💼</span>
          <p>
            Ko'p joylarida yukni tashish uchun arabchalar yo'q ekanligini unutmang. Temir yo'l vokzallarida yuk tashish xizmati bir sumka uchun $5 dan ko'proq bo'lishi mumkin.
          </p>
        </div>
        <p className="font-medium text-blue-500">
          Barcha chipta va biletlar mahalliy gid yoki haydovchi tomonidan yetkazib beriladi.
        </p>
        <p className="text-sm italic">
          Favqulodda holatlarda sayohat kompaniyasining ofisi bilan bog'laning.
        </p>
      </div>
    )
  }


};


const formTranslations = {
  en: {
    tourRequest: "Tour Request",
    contactDetails: "Contact Details",
    contactPurpose: "We use this information solely for the purpose of corresponding regarding your travel.",

    // Form Field Labels
    title: "Select Title",
    firstName: "First Name",
    lastName: "Last Name",
    citizenship: "Select Citizenship",
    email: "E-mail",
    phone: "Phone (+code)",
    arrivingFrom: "Arriving from",

    // Travel Info Section
    travelInfo: "Travel Info",
    startDate: "Start Date",
    endDate: "End Date",
    accommodationType: "Accommodation Type",
    numberOfTravelers: "Number of Travelers",
    comments: "Comments and additional information",

    // Buttons and Actions
    sendRequest: "Send request",

    // Dropdown Options
    titleOptions: [
      { value: "", label: "Select Title" },
      { value: "Mr", label: "Mr." },
      { value: "Mrs", label: "Mrs." },
      { value: "Ms", label: "Ms." }
    ],

    accommodationOptions: [
      { value: "", label: "Accommodation Type" },
      { value: "economy", label: "Economy" },
      { value: "comfort", label: "Comfort" },
      { value: "deluxe", label: "Deluxe" },
      { value: "all", label: "All options" }
    ],

    travelersOptions: [
      { value: "", label: "Number of Travelers" },
      { value: "1", label: "1 person" },
      { value: "2", label: "2 people" },
      { value: "3", label: "3 people" },
      { value: "4", label: "4 people" },
      { value: "5", label: "5 people" },
      { value: "6", label: "6+ people" },
      { value: "group", label: "Group tour" }
    ]
  },
  ru: {
    tourRequest: "Заявка на тур",
    contactDetails: "Контактные данные",
    contactPurpose: "Мы используем эту информацию исключительно для связи по вопросам вашего путешествия.",

    // Form Field Labels
    title: "Выберите обращение",
    firstName: "Имя",
    lastName: "Фамилия",
    citizenship: "Выберите гражданство",
    email: "Электронная почта",
    phone: "Телефон (+код)",
    arrivingFrom: "Прибытие из",

    // Travel Info Section
    travelInfo: "Информация о поездке",
    startDate: "Дата начала",
    endDate: "Дата окончания",
    accommodationType: "Тип размещения",
    numberOfTravelers: "Количество путешественников",
    comments: "Комментарии и дополнительная информация",

    // Buttons and Actions
    sendRequest: "Отправить заявку",

    // Dropdown Options
    titleOptions: [
      { value: "", label: "Выберите обращение" },
      { value: "Mr", label: "Г-н" },
      { value: "Mrs", label: "Г-жа" },
      { value: "Ms", label: "Мс." }
    ],

    accommodationOptions: [
      { value: "", label: "Тип размещения" },
      { value: "economy", label: "Эконом" },
      { value: "comfort", label: "Комфорт" },
      { value: "deluxe", label: "Делюкс" },
      { value: "all", label: "Все варианты" }
    ],

    travelersOptions: [
      { value: "", label: "Количество путешественников" },
      { value: "1", label: "1 человек" },
      { value: "2", label: "2 человека" },
      { value: "3", label: "3 человека" },
      { value: "4", label: "4 человека" },
      { value: "5", label: "5 человек" },
      { value: "6", label: "6+ человек" },
      { value: "group", label: "Групповой тур" }
    ]
  },
  uz: {
    tourRequest: "Sayohat so'rovi",
    contactDetails: "Kontakt ma'lumotlari",
    contactPurpose: "Biz ushbu ma'lumotlardan faqat sizning sayohatingiz bo'yicha murojaatlar uchun foydalanamiz.",

    // Form Field Labels
    title: "Unvanni tanlang",
    firstName: "Ism",
    lastName: "Familiya",
    citizenship: "Fuqarolikni tanlang",
    email: "Elektron pochta",
    phone: "Telefon (+kod)",
    arrivingFrom: "Qayerdan kelmoqdasiz",

    // Travel Info Section
    travelInfo: "Sayohat ma'lumotlari",
    startDate: "Boshlanish sanasi",
    endDate: "Tugash sanasi",
    accommodationType: "Joylashish turi",
    numberOfTravelers: "Sayohatchilar soni",
    comments: "Izohlar va qo'shimcha ma'lumotlar",

    // Buttons and Actions
    sendRequest: "So'rovni yuborish",

    // Dropdown Options
    titleOptions: [
      { value: "", label: "Unvanni tanlang" },
      { value: "Mr", label: "Janob" },
      { value: "Mrs", label: "Xonim" },
      { value: "Ms", label: "Ms." }
    ],

    accommodationOptions: [
      { value: "", label: "Joylashish turi" },
      { value: "economy", label: "Iqtisodiy" },
      { value: "comfort", label: "Komfort" },
      { value: "deluxe", label: "Deluxe" },
      { value: "all", label: "Barcha variantlar" }
    ],

    travelersOptions: [
      { value: "", label: "Sayohatchilar soni" },
      { value: "1", label: "1 kishi" },
      { value: "2", label: "2 kishi" },
      { value: "3", label: "3 kishi" },
      { value: "4", label: "4 kishi" },
      { value: "5", label: "5 kishi" },
      { value: "6", label: "6+ kishi" },
      { value: "group", label: "Guruh sayohati" }
    ]
  }
};



function FiveDaysTour() {
  const location = useLocation();
  const [language, setLanguage] = useState('en');

  // Add this line to use the translations
  const translations = formTranslations[language];

  // Add a safe language selection with fallback
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang') || 'en';

    // Ensure the selected language exists in the content object
    setLanguage(content[lang] ? lang : 'en');
  }, [location]);

  // Add a safe content retrieval method
  const getSafeContent = (section, fallbackLanguage = 'en') => {
    // Try to get content in the current language
    if (content[section] && content[section][language]) {
      return content[section][language];
    }

    // Fallback to English if current language content is missing
    return content[fallbackLanguage][section];
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedDays, setExpandedDays] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

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
        ru: "Карта маршрута тура",
        uz: "Sayohat marshruti xaritasi"
      },
      location: {
        en: "Tour Map",
        ru: "Карта Тура",
        uz: "Sayohat Xaritasi"
      }
    },
    {
      src: "https://media.gettyimages.com/id/1184019772/photo/bukhara-uzbekistan-kalyan-minaret-and-madressa-sunset-twilight.jpg?s=612x612&w=0&k=20&c=gQofEvWI4u-NilQZcq_Uqea9iIqU7KxdiWqlbvFOjwg=",
      alt: {
        en: "Bukhara City View",
        ru: "Вид на город Бухара",
        uz: "Buxoro shahar ko'rinishi"
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
        ru: "Старый город Хива",
        uz: "Xiva Eski Shahri"
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
        uz: "Toshkentning zamonaviy ko'rinishi"
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
        ru: "Вид на Шахрисабз",
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
        ru: "Изделия из гиядуваа",
        uz: "Gijduvan mahsulotlari"
      },
      location: {
        en: "Gijduvan",
        ru: "Гиядуван",
        uz: "Gijduvan"
      }
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/ea/1c/bazar-chorsu.jpg?w=700&h=-1&s=1",
      alt: {
        en: "Silk Road Bazaar",
        ru: "Базар Шелкового пути",
        uz: "Shaxobon yo'li bazar"
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
        uz: "Traditsionali arhitektura"
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
        ru: "Хандерочка",
        uz: "Ishlab chiqarish"
      },
      location: {
        en: "Crafts",
        ru: "Хандерочка",
        uz: "Ishlab chiqarish"
      }
    },
    {
      src: "https://taleof2backpackers.com/wp-content/uploads/2024/04/Things-to-do-in-Khiva-Travel-Guide.jpg",
      alt: {
        en: "Cultural Performance",
        ru: "Культурное выступление",
        uz: "Maktabxona amaliyoti"
      },
      location: {
        en: "Culture",
        ru: "Культура",
        uz: "Maktabxona"
      }
    },
  ];

  const prices = {
    economy: {
      "1 person": 1000,
      "2 persons": 900,
      "3 persons": 800,
      "4 persons": 700,
      "Single supplement": 280,
    },
    comfort: {
      "1 person": 1250,
      "2 persons": 1060,
      "3 persons": 960,
      "4 persons": 860,
      "Single supplement": 300,
    },
    deluxe: {
      "1 person": 1760,
      "2 persons": 1280,
      "3 persons": 1190,
      "4 persons": 1080,
      "Single supplement": 330,
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

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const expandAll = () => {
    const allDays = {};
    for (let i = 1; i <= 5; i++) {
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

  // Success Modal Component
  const SuccessModal = () => {
    const modalTexts = {
      en: {
        title: "Tour Request Submitted!",
        message: "Our travel experts will review your request and contact you shortly.",
        close: "Close"
      },
      ru: {
        title: "Заявка на тур отправлена!",
        message: "Наши экперты по путешествиям рассмотрят вашу заявку и свяжутся с вами в ближайшее время.",
        close: "Зарыть"
      },
      uz: {
        title: "Sayohat so'rovi yuborildi!",
        message: "Sayohat mutaxassislarimiz sizning so'rovingizni ko'rib chiqishadi va tez orada siz bilan bog'lanishadi.",
        close: "Yopish"
      }
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setIsSuccessModalOpen(false)}
      >
        <div
          className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-300 ease-in-out scale-100 hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center space-y-6">
            <FaCheckCircle className="text-green-500 text-6xl animate-bounce" />

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {modalTexts[language].title}
              </h2>
              <p className="text-gray-600 text-sm">
                {modalTexts[language].message}
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                {modalTexts[language].close}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Updated handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const requiredFields = [
      'title', 'firstName', 'lastName', 'citizenship',
      'email', 'phone', 'startDate', 'endDate',
      'accommodationType', 'numberOfTravelers'
    ];

    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
      return;
    }

    const tourRequestData = {
      title: formData.title,
      firstName: formData.firstName,
      lastName: formData.lastName,
      citizenShip: formData.citizenship,
      email: formData.email,
      phone: formData.phone,
      arrivingFrom: formData.arrivingFrom || 'Not specified',
      startDate: formData.startDate,
      endDate: formData.endDate,
      accomodationType: formData.accommodationType,
      numberOdTravelers: formData.numberOfTravelers,
      comments: formData.comments || 'No additional comments',
      turName: "5 kunlik tur"
    };

    try {
      // Send POST request
      await axios.post('http://localhost:8080/individual', tourRequestData);

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
      setIsSuccessModalOpen(true);

    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit tour request. Please try again.');
    }
  };

  // Modify the rendering of hotel information
  const renderHotelInformation = () => {
    const hotelInfo = content.hotelInformation[language] || content.hotelInformation['en'];
    return hotelInfo;
  };

  // Render methods
  const renderAirportTransferInformation = () => {
    const transferInfo = content.airportTransferInformation[language] || content.airportTransferInformation['en'];
    return transferInfo;
  };

  const renderTrainStationTransferInformation = () => {
    const trainStationInfo = content.trainStationTransferInformation[language] || content.trainStationTransferInformation['en'];
    return trainStationInfo;
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
          "Услуги профессионального англоговорящего гида во всех городах;",
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

  // In your component's render method or return statement
  const renderTourPriceDetails = () => {
    const details = tourPriceDetails[language];
    
    return (
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="mb-2">
            <strong>
              {language === 'en' ? 'Ticket Delivery:' : 
               language === 'ru' ? 'Доставка билетов:' : 
               'Chipta yetkazish:'}
            </strong> 
            {details.ticketDelivery}
          </p>
          <p>
            <strong>
              {language === 'en' ? 'Emergency Contact:' : 
               language === 'ru' ? 'Экстренный контакт:' : 
               'Favqulodda aloqa:'}
            </strong> 
            {details.emergencyContact}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            {details.priceIncludes.title}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {details.priceIncludes.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-600 mb-4">
            {details.priceDoesNotInclude.title}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {details.priceDoesNotInclude.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const [pricingData, setPricingData] = useState([]);

  // Add this useEffect to fetch pricing data
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get('http://localhost:8080/daysprice');
        // Filter only 5 day tour prices
        const fiveDayPrices = response.data.filter(price => price.days === 5);
        setPricingData(fiveDayPrices);
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      }
    };

    fetchPricing();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      {/* Tour Header */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">
          {content[language].tourTitle}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-xs sm:text-sm">
          <span>{content[language].tourSubtitle}</span>
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
          <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 sticky top-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-600">
              {content[language].pricesSection.title}
            </h2>

            <div className="overflow-x-auto -mx-3 sm:mx-0">
              {pricingData.length > 0 ? (
                <table className="w-full min-w-[800px] border-collapse">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 border-b-2 border-blue-100">
                        {content[language].pricesSection.headers.persons}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 border-b-2 border-blue-100">
                        {content[language].pricesSection.headers.economy}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 border-b-2 border-blue-100">
                        {content[language].pricesSection.headers.comfort}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 border-b-2 border-blue-100">
                        {content[language].pricesSection.headers.deluxe}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 border-b-2 border-blue-100">
                        Single Supplement
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((price, index) => (
                      <tr 
                        key={price.id}
                        className={`
                          transition-colors hover:bg-gray-50
                          ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        `}
                      >
                        <td className="px-6 py-4 border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <span className="text-blue-600 font-semibold">{price.person}</span>
                            </div>
                            <span className="text-gray-700 font-medium">
                              {price.person === 1 ? 'Person' : 'Persons'}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center border-b border-gray-200">
                          <div className="inline-flex flex-col">
                            <span className="text-lg font-bold text-gray-800">
                              ${price.ecom}
                            </span>
                            <span className="text-xs text-gray-500">Economy</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center border-b border-gray-200">
                          <div className="inline-flex flex-col">
                            <span className="text-lg font-bold text-gray-800">
                              ${price.comf}
                            </span>
                            <span className="text-xs text-gray-500">Comfort</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center border-b border-gray-200">
                          <div className="inline-flex flex-col">
                            <span className="text-lg font-bold text-gray-800">
                              ${price.deluxe}
                            </span>
                            <span className="text-xs text-gray-500">Deluxe</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center border-b border-gray-200">
                          <div className="inline-flex items-center justify-center">
                            <div className="px-3 py-1 bg-blue-50 rounded-full">
                              <span className="text-blue-600 font-semibold">
                                +${price.singleSupplement}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-3"></div>
                  <span className="text-gray-600">Loading pricing data...</span>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-600">
                  {content[language].pricesSection.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Itinerary Section */}
      <div className="mt-8">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          {/* Navigation Menu */}
          <div className="border-b border-gray-200 mb-4 w-full overflow-x-auto">
            <nav className="flex flex-wrap md:flex-nowrap min-w-full md:min-w-0 px-2 md:px-4">
              <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 py-1 md:py-0">
                <button className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out">
                  {content[language].navigationItems.itinerary}
                </button>

                <button className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out">
                  {content[language].navigationItems.prices}
                </button>

                <button className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out">
                  {content[language].navigationItems.request}
                </button>

                <button className="whitespace-nowrap px-3 sm:px-4 py-2 text-[13px] sm:text-sm md:text-base 
                  text-gray-700 hover:text-blue-600 font-medium 
                  border-b-2 border-transparent hover:border-blue-600 
                  transition-all duration-300 ease-in-out">
                  {content[language].navigationItems.reviews}
                </button>
              </div>
            </nav>
          </div>

          {/* Tour Description */}
          <div className="border-t border-b border-gray-200 py-4 my-6">
            <p className="text-gray-600 italic text-base leading-relaxed">
              {content[language].tourDescription}
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
                title: getSafeContent('day1Title'),
                content: getSafeContent('day1Content')[language] ||
                  getSafeContent('day1Content')['en']
              },
              {
                day: 2,
                title: getSafeContent('day2Title'),
                content: getSafeContent('day2Content')[language] ||
                  getSafeContent('day2Content')['en']
              },
              {
                day: 3,
                title: getSafeContent('day3Title'),
                content: getSafeContent('day3Content')[language] ||
                  getSafeContent('day3Content')['en']
              },
              {
                day: 4,
                title: getSafeContent('day4Title'),
                content: getSafeContent('day4Content')[language] ||
                  getSafeContent('day4Content')['en']
              },
              {
                day: 5,
                title: getSafeContent('day5Title'),
                content: getSafeContent('day5Content')[language] ||
                  getSafeContent('day5Content')['en']
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
            {/* Check-in/Check-out Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {content[language].hotelInformation ?
                  <div className="flex items-start">
                    <span className="font-medium text-blue-500 w-24 flex-shrink-0">Hotel Information</span>
                  </div> :
                  "Hotel Information"
                }
              </h3>
              {renderHotelInformation()}
            </div>

            {/* Airport Transfer Information */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Airport Transfer Information
              </h3>
              {renderAirportTransferInformation()}
            </div>

            {/* Train Station Transfer Information */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Train Station Transfer Information
              </h3>
              {renderTrainStationTransferInformation()}
            </div>

            {/* Tour Cost Information */}
            <div className="grid md:grid-cols-2 gap-6">
              {renderTourPriceDetails()}
            </div>

            {/* Tour Request Form Section */}
            <div className="mt-12 w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {translations.tourRequest}
                </h2>

                <div className="space-y-8">
                  {/* Contact Details */}
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      {translations.contactDetails}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6">
                      {translations.contactPurpose}
                    </p>

                    <div className="w-full space-y-4">
                      <div className="w-full">
                        <select
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3 bg-white text-gray-700"
                        >
                          {translations.titleOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder={translations.firstName}
                          className="w-full border rounded-md p-3"
                        />

                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder={translations.lastName}
                          className="w-full border rounded-md p-3"
                        />
                      </div>

                      {/* Rest of the form would follow the same pattern */}
                      {/* Citizenship dropdown */}
                      
                      <div className="w-full">
                        <select
                          name="citizenship"
                          value={formData.citizenship}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3 bg-white text-gray-700"
                        >
                          <option value="">Select Citizenship</option>

                          {/* Asia */}
                          <optgroup label="Asia">
                            <option value="AF">Afghanistan</option>
                            <option value="AM">Armenia</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BT">Bhutan</option>
                            <option value="BN">Brunei</option>
                            <option value="KH">Cambodia</option>
                            <option value="CN">China</option>
                            <option value="CY">Cyprus</option>
                            <option value="GE">Georgia</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran</option>
                            <option value="IQ">Iraq</option>
                            <option value="IL">Israel</option>
                            <option value="JP">Japan</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Laos</option>
                            <option value="LB">Lebanon</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="MN">Mongolia</option>
                            <option value="MM">Myanmar (Burma)</option>
                            <option value="NP">Nepal</option>
                            <option value="KP">North Korea</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PS">Palestine</option>
                            <option value="PH">Philippines</option>
                            <option value="QA">Qatar</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SG">Singapore</option>
                            <option value="KR">South Korea</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SY">Syria</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VN">Vietnam</option>
                            <option value="YE">Yemen</option>
                          </optgroup>

                          {/* Europe */}
                          <optgroup label="Europe">
                            <option value="AL">Albania</option>
                            <option value="AD">Andorra</option>
                            <option value="AT">Austria</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BG">Bulgaria</option>
                            <option value="HR">Croatia</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="EE">Estonia</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="GR">Greece</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IE">Ireland</option>
                            <option value="IT">Italy</option>
                            <option value="LV">Latvia</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MT">Malta</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="ME">Montenegro</option>
                            <option value="NL">Netherlands</option>
                            <option value="MK">North Macedonia</option>
                            <option value="NO">Norway</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russia</option>
                            <option value="SM">San Marino</option>
                            <option value="RS">Serbia</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="ES">Spain</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="UA">Ukraine</option>
                            <option value="GB">United Kingdom</option>
                            <option value="VA">Vatican City</option>
                          </optgroup>

                          {/* North America */}
                          <optgroup label="North America">
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="BS">Bahamas</option>
                            <option value="BB">Barbados</option>
                            <option value="BZ">Belize</option>
                            <option value="CA">Canada</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CU">Cuba</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="SV">El Salvador</option>
                            <option value="GD">Grenada</option>
                            <option value="GT">Guatemala</option>
                            <option value="HT">Haiti</option>
                            <option value="HN">Honduras</option>
                            <option value="JM">Jamaica</option>
                            <option value="MX">Mexico</option>
                            <option value="NI">Nicaragua</option>
                            <option value="PA">Panama</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="US">United States</option>
                          </optgroup>

                          {/* South America */}
                          <optgroup label="South America">
                            <option value="AR">Argentina</option>
                            <option value="BO">Bolivia</option>
                            <option value="BR">Brazil</option>
                            <option value="CL">Chile</option>
                            <option value="CO">Colombia</option>
                            <option value="EC">Ecuador</option>
                            <option value="GY">Guyana</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="SR">Suriname</option>
                            <option value="UY">Uruguay</option>
                            <option value="VE">Venezuela</option>
                          </optgroup>

                          {/* Africa */}
                          <optgroup label="Africa">
                            <option value="DZ">Algeria</option>
                            <option value="AO">Angola</option>
                            <option value="BJ">Benin</option>
                            <option value="BW">Botswana</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="CM">Cameroon</option>
                            <option value="CV">Cape Verde</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, Democratic Republic</option>
                            <option value="DJ">Djibouti</option>
                            <option value="EG">Egypt</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="ET">Ethiopia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GH">Ghana</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="CI">Ivory Coast</option>
                            <option value="KE">Kenya</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="ML">Mali</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="NA">Namibia</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="RW">Rwanda</option>
                            <option value="ST">São Tomé and Príncipe</option>
                            <option value="SN">Senegal</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="SS">South Sudan</option>
                            <option value="SD">Sudan</option>
                            <option value="SZ">Swaziland</option>
                            <option value="TZ">Tanzania</option>
                            <option value="TG">Togo</option>
                            <option value="TN">Tunisia</option>
                            <option value="UG">Uganda</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </optgroup>

                          {/* Oceania */}
                          <optgroup label="Oceania">
                            <option value="AU">Australia</option>
                            <option value="FJ">Fiji</option>
                            <option value="KI">Kiribati</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="FM">Micronesia</option>
                            <option value="NR">Nauru</option>
                            <option value="NZ">New Zealand</option>
                            <option value="PW">Palau</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="WS">Samoa</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="TO">Tonga</option>
                            <option value="TV">Tuvalu</option>
                            <option value="VU">Vanuatu</option>
                          </optgroup>

                          {/* Caribbean */}
                          <optgroup label="Caribbean">
                            <option value="AI">Anguilla</option>
                            <option value="AW">Aruba</option>
                            <option value="BM">Bermuda</option>
                            <option value="VG">British Virgin Islands</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CW">Curaçao</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="MQ">Martinique</option>
                            <option value="MS">Montserrat</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="MF">Saint Martin</option>
                            <option value="VI">U.S. Virgin Islands</option>
                          </optgroup>

                          {/* Dependencies and Other Territories */}
                          <optgroup label="Dependencies and Other Territories">
                            <option value="AS">American Samoa</option>
                            <option value="AQ">Antarctica</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CK">Cook Islands</option>
                            <option value="FK">Falkland Islands</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">French Southern Territories</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GL">Greenland</option>
                            <option value="GU">Guam</option>
                            <option value="HM">
                              Heard Island and McDonald Islands
                            </option>
                            <option value="HK">Hong Kong</option>
                            <option value="MO">Macao</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="NC">New Caledonia</option>
                            <option value="PN">Pitcairn</option>
                            <option value="RE">Réunion</option>
                            <option value="SH">Saint Helena</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="GS">
                              South Georgia and the South Sandwich Islands
                            </option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="TK">Tokelau</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="UM">
                              United States Minor Outlying Islands
                            </option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                          </optgroup>
                        </select>
                      </div>
                      {/* Email and Phone */}
                      <div className="flex flex-col md:flex-row gap-4">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={translations.email}
                          className="w-full border rounded-md p-3"
                        />

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={translations.phone}
                          className="w-full border rounded-md p-3"
                        />
                      </div>

                      {/* Arriving From */}
                      <div className="w-full">
                        <input
                          type="text"
                          name="arrivingFrom"
                          value={formData.arrivingFrom}
                          onChange={handleInputChange}
                          placeholder={translations.arrivingFrom}
                          className="w-full border rounded-md p-3"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Travel Info */}
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      {translations.travelInfo}
                    </h3>

                    <div className="w-full space-y-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3"
                          placeholder={translations.startDate}
                        />

                        <input
                          type="date"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3"
                          placeholder={translations.endDate}
                        />
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <select
                          name="accommodationType"
                          value={formData.accommodationType}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3 bg-white text-gray-700"
                        >
                          {translations.accommodationOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>

                        <select
                          name="numberOfTravelers"
                          value={formData.numberOfTravelers}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-3 bg-white text-gray-700"
                        >
                          {translations.travelersOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="w-full">
                        <textarea
                          name="comments"
                          value={formData.comments}
                          onChange={handleInputChange}
                          placeholder={translations.comments}
                          className="w-full border rounded-md p-3 h-32 resize-none"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors"
                    >
                      {translations.sendRequest}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal Conditional Rendering */}
      {isSuccessModalOpen && <SuccessModal />}
    </div>
  );
}

export default FiveDaysTour;