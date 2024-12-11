import React, { useState, useEffect } from "react";

function Mashhur() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const mashhurJoylar = [
    {
      id: 1,
      shahar: "Toshkent",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Toshkentga 2000 yildan ortiq. Bu yerda ko'plab muhim tarixiy voqealar sodir bo'lgan va shahar madaniyatimizning markazi hisoblanadi.",
      reyting: 4.8
    },
    {
      id: 2,
      shahar: "Buxoro",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Buxoro diqqatga sazovor joylari bilan mashhur. Bir kun ham shaharni to'liq ko'rish uchun yetarli emas.",
      reyting: 4.5
    },
    {
      id: 3,
      shahar: "Samarqand",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Samarqand o'zining ko'k gumbazlari bilan butun dunyoga mashhur. Bu shahar haqida minglab afsonalar bor.",
      reyting: 4.7
    },
    {
      id: 4,
      shahar: "Xiva",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Xorazmshohlar davlatining yirik shaharlaridan biri bo'lgan Xiva boy tarixga ega.",
      reyting: 4.6
    },
    {
      id: 5,
      shahar: "Shahrisabz",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Amir Temurning vatani bo'lgan Shahrisabz o'zining tarixiy obidalari bilan mashhur.",
      reyting: 4.9
    },
    {
      id: 6,
      shahar: "Termiz",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Qadimiy buddaviylik markazlaridan biri, Surxondaryo viloyatining markaziy shahri.",
      reyting: 4.8
    },
    {
      id: 7,
      shahar: "Marg'ilon",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Atlas va adras to'qish markazi, qadimiy hunarmandchilik an'analari saqlanib qolgan shahar.",
      reyting: 4.7
    },
    {
      id: 8,
      shahar: "Qo'qon",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Xudoyorxon saroyi, ko'plab masjid va madrasalari bilan mashhur. Qo'qon xonligining poytaxti bo'lgan.",
      reyting: 4.9
    },
    {
      id: 9,
      shahar: "Andijon",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Bobur vatani, O'zbekistonning eng gavjum shaharlaridan biri. Zamonaviy sanoat markazi.",
      reyting: 4.8
    },
    {
      id: 10,
      shahar: "Nukus",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Qoraqalpog'iston Respublikasining poytaxti, Savitskiy muzeyi bilan dunyo tan olgan shahar.",
      reyting: 4.7
    },
    {
      id: 11,
      shahar: "Navoiy",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Zamonaviy sanoat shahri, NKMK va boshqa yirik korxonalar joylashgan. Yangi qurilishlar markazi.",
      reyting: 4.9
    },
    {
      id: 12,
      shahar: "Jizzax",
      rasm: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80",
      malumot: "Qadimiy Silk Road yo'lidagi shahar, So'g'd madaniyati merosi saqlanib qolgan. Zamonaviy industrial markaz.",
      reyting: 4.8
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 4 >= mashhurJoylar.length ? 0 : prevIndex + 4
      );
    }, 5000); // 5 sekundga o'zgartirildi (3000 -> 5000)

    return () => clearInterval(timer);
  }, []);

  const visibleItems = mashhurJoylar.slice(currentIndex, currentIndex + 4);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Mashhur Yo'nalishlar
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleItems.map((joy) => (
          <div
            key={joy.id}
            className="relative group h-[400px] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-700 hover:shadow-2xl"
          >
            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 group-hover:scale-110 transition-transform duration-300">
              <div className="flex items-center group-hover:hidden">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="hidden group-hover:flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(joy.reyting)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-gray-800">
                {joy.reyting.toFixed(1)}
              </span>
            </div>

            <img
              src={joy.rasm}
              alt={joy.shahar}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-90" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 group-hover:translate-y-[-8px]">
              <h2 className="text-2xl font-bold text-white mb-3">
                {joy.shahar}
              </h2>
              <p className="text-white/90 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {joy.malumot}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(mashhurJoylar.length / 4) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 4)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / 4) === index 
                ? 'bg-purple-600' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Mashhur;