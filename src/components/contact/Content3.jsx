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
      {/* Narxlar bo'limi */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-600 text-center mb-8">
          2024 - 2025 yillar uchun tur narxlari
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* 3* Mehmonxona */}
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-purple-100">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-purple-600 mr-2">3*</span>
                <h4 className="text-xl font-medium text-gray-800">Mehmonxonalar</h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">1 kishi</span>
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  715 USD
                  <span className="text-sm text-gray-500 ml-2">dan boshlab</span>
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                * Barcha soliqlar va xizmatlar narxga kiritilgan
              </div>
            </div>
          </div>

          {/* 4* Mehmonxona */}
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border border-indigo-100">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-indigo-100 rounded-full opacity-50"></div>
            <div className="relative">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-indigo-600 mr-2">4*</span>
                <h4 className="text-xl font-medium text-gray-800">Mehmonxonalar</h4>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">1 kishi</span>
                </p>
                <p className="text-2xl font-bold text-indigo-600">
                  780 USD
                  <span className="text-sm text-gray-500 ml-2">dan boshlab</span>
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                * Barcha soliqlar va xizmatlar narxga kiritilgan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ekskursiyalar bo'limi */}
      <div>
        <h3 className="text-2xl font-semibold text-purple-600 mb-6">
          Qo'shimcha ekskursiyalar
        </h3>
        
        <div className="space-y-4">
          {/* Toshkent */}
          <div 
            className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(0)}
          >
            <h4 className="font-medium">Toshkent bo'ylab qo'shimcha ekskursiyalar</h4>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeItem === 0 ? 'block' : 'hidden'}`}>
              <p>• Toshkent teleminorasi tashrifi (dunyodagi 12-baland teleminora. 1985 yilda qurilgan. Balandligi — 375 m) — 25 USD</p>
            </div>
          </div>

          {/* Samarqand */}
          <div 
            className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(1)}
          >
            <h4 className="font-medium">Samarqand bo'ylab qo'shimcha ekskursiyalar</h4>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeItem === 1 ? 'block' : 'hidden'}`}>
              <p>• "Xovrenko" sharob zavodiga ekskursiya (barcha mahsulotlar degustatsiyasi + yengil tamaddi) — 30 USD</p>
              <p>• Valentina Romanenko moda studiyasi (mashhur kiyim dizayneri + sharq ertagi uslubidagi moda namoyishi) — 10 USD</p>
              <p>• Qog'oz fabrikasiga tashrif (ipakdan qog'oz tayyorlanishini o'z ko'zingiz bilan ko'rish va sinab ko'rish imkoniyati) — 20 USD</p>
            </div>
          </div>

          {/* Buxoro */}
          <div 
            className="bg-gray-50 rounded-lg p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleItem(2)}
          >
            <h4 className="font-medium">Buxoro bo'ylab qo'shimcha ekskursiyalar</h4>
            <div className={`mt-2 text-gray-600 transition-all duration-300 ${activeItem === 2 ? 'block' : 'hidden'}`}>
              <p>• Nodir Devon Begi madrasasida kostyumlashtirilgan shou — 25 USD</p>
              <p>• Suv minorasi tashrifi, qayerdan eski Buxoroning unutilmas manzarasi ochiladigan, sifatli fotosuratlar olish imkoniyati — 25 USD</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg shadow-md">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {/* Info icon */}
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700 font-medium">Muhim eslatma:</p>
              <p className="mt-1 text-yellow-600">
                * Barcha qo'shimcha ekskursiyalar gid bilan oldindan kelishiladi va joyida to'lanadi.
              </p>
              <p className="mt-1 text-yellow-600 font-semibold">
                Har qanday qo'shimcha ekskursiya uchun minimal guruh – 5 kishi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Narx ma'lumotlari */}
      <div className="mt-12">
        {/* Yuqori chiziq */}
        <div className="w-full h-px bg-gray-200 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Narxga kiritilgan */}
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-6">
              Narxga kiritilgan:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">3*/4* mehmonxonalarda yashash (nonushta bilan)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Aeroport - mehmonxona - aeroport transferi</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Barcha ekskursiya dasturi bo'yicha transport xizmati va shaharlararo tashish</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">O'zbekcha/Ruscha so'zlashuvchi gid xizmati</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Urganch-Toshkent ichki aviaparvozi</span>
              </li>
            </ul>
          </div>

          {/* Narxga kiritilmagan */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-6">
              Narxga kiritilmagan:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Xalqaro aviaparvoz</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Video va fotosuratga olish</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Sug'urta</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Diqqatga sazovor joylarga kirish chiptasi</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Choy puli</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Alkogol va alkokolsiz ichimliklar</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-sm flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Tushlik va kechki ovqat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pastki chiziq */}
        <div className="w-full h-px bg-gray-200 mt-8"></div>
      </div>

      {/* Qo'shimcha ma'lumotlar */}
      <div className="mt-12">
        <div className="w-full h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {/* Shartlar */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Shartlar:
            </h3>
            <ul className="space-y-4 text-gray-700">
              {[
                "Qabul qiluvchi kompaniya mehmonxonani xuddi shu toifadagi boshqa mehmonxonaga almashtirish huquqiga ega",
                "Tur dasturi mijozlarga qulay logistikani ta'minlash maqsadida guruh hajmiga qarab o'zgartirilishi mumkin",
                "Majburiy to'lovlar: Diqqatga sazovor joylarga kirish va ekskursiya dasturi uchun - 180 USD"
              ].map((shart, index) => (
                <li key={index} className="flex items-start space-x-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                  <span className="text-purple-600 font-bold">{index + 1}</span>
                  <p className="text-sm">{shart}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Mehmonxonalar */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-purple-600 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Marshrut bo'yicha mehmonxonalar:
            </h3>

            {[
              {
                city: "Toshkent",
                hotels: {
                  four: "Khan Saat, Mr Lux, Al Anvar Hotel, Farad Plaza, Inspira-S, ATECA Hotel Suites",
                  three: "Seyran City Center, Porto Bello Hotel, Orient Grand, Orient Inn, OLD TASHKENT Hotel & Spa"
                }
              },
              {
                city: "Samarqand",
                hotels: {
                  four: "Dilimah Hotel, Movenpick Samarkand, Al Madina Hotel, Golden Samarkand Hotel",
                  three: "Arba Hotel, Orient Platan, Orient Star Samarkand Hotel, Raxyon Hotel"
                }
              },
              // ... other cities
            ].map((city, index) => (
              <div key={index} className="mb-6 bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg hover:shadow-md transition-all duration-300">
                <h4 className="font-bold text-purple-700 mb-3">{city.city}</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="text-sm font-medium text-purple-600 mb-1">4* Mehmonxonalar:</p>
                    <p className="text-sm text-gray-600">{city.hotels.four}</p>
                  </div>
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="text-sm font-medium text-purple-600 mb-1">3* Mehmonxonalar:</p>
                    <p className="text-sm text-gray-600">{city.hotels.three}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 rounded-full"></div>
      </div>

      {/* To'lov formasi */}
      <div className="mt-12 max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8">
        {/* Payment Method Selection */}
        <div className="mb-8">
          <h3 className="text-center text-gray-600 mb-4">To'lov turini tanlang</h3>
          <div className="flex justify-center gap-4">
            <button 
              type="button"
              onClick={() => setSelectedCard('uzcard')}
              className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 relative overflow-hidden group
                ${selectedCard === 'uzcard' 
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-lg' 
                  : 'bg-gray-50 border-2 border-transparent hover:bg-blue-50'}`}
            >
              <div className="relative z-10">
                <span className={`text-[#00008B] font-medium ${selectedCard === 'uzcard' ? 'text-lg' : 'text-base'}`}>
                  Uzcard
                </span>
                {selectedCard === 'uzcard' && (
                  <div className="absolute -right-2 -top-2 bg-blue-500 p-1 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 transition-opacity duration-300
                ${selectedCard === 'uzcard' ? 'opacity-50' : 'group-hover:opacity-25'}`} />
            </button>

            <button 
              type="button"
              onClick={() => setSelectedCard('humo')}
              className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 relative overflow-hidden group
                ${selectedCard === 'humo' 
                  ? 'bg-purple-50 border-2 border-purple-500 shadow-lg' 
                  : 'bg-gray-50 border-2 border-transparent hover:bg-purple-50'}`}
            >
              <div className="relative z-10">
                <span className={`text-[#00008B] font-medium ${selectedCard === 'humo' ? 'text-lg' : 'text-base'}`}>
                  Humo
                </span>
                {selectedCard === 'humo' && (
                  <div className="absolute -right-2 -top-2 bg-purple-500 p-1 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-0 transition-opacity duration-300
                ${selectedCard === 'humo' ? 'opacity-50' : 'group-hover:opacity-25'}`} />
            </button>
          </div>
        </div>

        <form 
          className="space-y-6" 
          onSubmit={(e) => {
            e.preventDefault();
            if (!selectedCard) {
              alert("Iltimos, to'lov turini tanlang!");
              return;
            }
            const formData = new FormData(e.target);
            const cardNumber = formData.get('cardNumber');
            const expiryDate = formData.get('expiryDate');
            const cvv = formData.get('cvv');

            // Karta raqamini tekshirish
            const uzcardPattern = /^8600\s\d{4}\s\d{4}\s\d{4}$/;
            const humoPattern = /^9860\s\d{4}\s\d{4}\s\d{4}$/;
            
            const isValidCard = selectedCard === 'uzcard' 
              ? uzcardPattern.test(cardNumber)
              : humoPattern.test(cardNumber);

            if (!isValidCard) {
              alert(`Iltimos, to'g'ri ${selectedCard === 'uzcard' ? 'Uzcard' : 'Humo'} karta raqamini kiriting`);
              return;
            }

            // Amal qilish muddatini tekshirish
            if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiryDate)) {
              alert("Amal qilish muddatini to'g'ri kiriting (MM/YY)");
              return;
            }

            // CVV ni tekshirish
            if (!/^\d{3}$/.test(cvv)) {
              alert("CVV kodni to'g'ri kiriting");
              return;
            }

            // Agar hammasi to'g'ri bo'lsa
            alert("To'lov muvaffaqiyatli qabul qilindi!");
            
            // Formani tozalash
            e.target.reset();
            setSelectedCard(null);
          }}
        >
          <div className="space-y-1.5">
            <label className="block text-gray-400 text-sm">
              Ism
            </label>
            <input
              type="text"
              name="fullName"
              className={`w-full px-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 
                ${selectedCard === 'uzcard' ? 'focus:ring-blue-500' : 'focus:ring-purple-500'}`}
              placeholder="To'liq ismingizni kiriting"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-gray-400 text-sm">
              Karta raqami
            </label>
            <div className="relative">
              <input
                type="text"
                name="cardNumber"
                autoComplete="off"
                data-form-type="card"
                className={`w-full px-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 
                  ${selectedCard === 'uzcard' ? 'focus:ring-blue-500' : 'focus:ring-purple-500'}`}
                placeholder={selectedCard === 'uzcard' ? '8600 0000 0000 0000' : '9860 0000 0000 0000'}
                maxLength="19"
                required
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length > 16) value = value.slice(0, 16);
                  value = value.replace(/(\d{4})/g, '$1 ').trim();
                  e.target.value = value;
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  const pastedText = e.clipboardData.getData('text');
                  let value = pastedText.replace(/\D/g, '');
                  if (value.length > 16) value = value.slice(0, 16);
                  value = value.replace(/(\d{4})/g, '$1 ').trim();
                  e.target.value = value;
                }}
                onKeyPress={(e) => {
                  if (!/[\d]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {selectedCard === 'uzcard' ? (
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                  </svg>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-1.5">
              <label className="block text-gray-400 text-sm">
                Amal qilish muddati
              </label>
              <input
                type="text"
                name="expiryDate"
                autoComplete="off"
                data-form-type="expiry"
                className={`w-full px-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 
                  ${selectedCard === 'uzcard' ? 'focus:ring-blue-500' : 'focus:ring-purple-500'}`}
                placeholder="OO/YY"
                maxLength="5"
                required
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length >= 2) {
                    value = value.slice(0, 2) + '/' + value.slice(2);
                  }
                  if (value.length > 4) value = value.slice(0, 5);
                  e.target.value = value;
                }}
                onKeyPress={(e) => {
                  if (!/[\d]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <label className="block text-gray-400 text-sm">
                CVV kod
              </label>
              <input
                type="password"
                name="cvv"
                autoComplete="off"
                data-form-type="cvv"
                className={`w-full px-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 
                  ${selectedCard === 'uzcard' ? 'focus:ring-blue-500' : 'focus:ring-purple-500'}`}
                placeholder="000"
                maxLength="3"
                required
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length > 3) value = value.slice(0, 3);
                  e.target.value = value;
                }}
                onKeyPress={(e) => {
                  if (!/[\d]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 text-white rounded-xl transition-all duration-300 mt-4 flex items-center justify-center gap-2
              ${selectedCard === 'uzcard' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : selectedCard === 'humo'
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-gray-400'}`}
          >
            <span>To'lovni amalga oshirish</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-500 text-center">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Xavfsiz to'lov</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content3;