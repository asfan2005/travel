import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const translations = {
  uz: {
    title: "Shaxsiy ma'lumotlarni qayta ishlash siyosati",
    sections: {
      section1: {
        title: "1. Umumiy qoidalar",
        content: [
          "Ushbu shaxsiy ma'lumotlarni qayta ishlash siyosati 27.07.2006 sanasida 'Shaxsiy ma'lumotlar to'g'risida'gi Federal qonun talablariga muvofiq o'rnatilgan va 'Bekirova travel' MChJ (bundan keyin - Operator) tomonidan shaxsiy ma'lumotlarni qayta ishlash tartibi va shaxsiy ma'lumotlar xavfsizligini ta'minlash choralarini belgilaydi.",
          "1.1. Operator o'z faoliyatining eng muhim maqsadi va sharti sifatida fuqarolarning shaxsiy ma'lumotlarni qayta ishlashda huquq va erkinliklarini, shu jumladan shaxsiy hayot, shaxsiy va oilaviy sir huquqlarini himoya qilishni belgilaydi.",
          "1.2. Ushbu siyosat Operator http://bekirova.uz/ saytini tashrif buyurish uchun olishi mumkin bo'lgan buyurtmalar to'g'risidagi barcha ma'lumotlarga nisbatan qo'llaniladi."
        ]
      },
      section2: {
        title: "2. Asosiy tushunchalar",
        content: [
          "2.1. Shaxsiy ma'lumotlarni avtomatlashtirilgan qayta ishlash — kompyuter texnologiyalaridan foydalangan holda shaxsiy ma'lumotlarni qayta ishlash.",
          "2.2. Shaxsiy ma'lumotlarni bloklash — shaxsiy ma'lumotlarni qayta kiritishni vaqtincha to'xtatish (shaxsiy ma'lumotlarni aniqlash zarur bo'lgan hollar bundan mustasno).",
          "2.3. Veb-sayt — http://bekirova.uz internet tarmog'ida joylashgan grafik va axborot materiallari, shuningdek ularning dasturiy ta'minoti va ma'lumotlar bazalari to'plami.",
          "2.4. Shaxsiy ma'lumotlar axborot tizimi — ma'lumotlar bazalarida mavjud bo'lgan shaxsiy ma'lumotlar va ularni qayta ishlashni ta'minlovchi axborot texnologiyalari va texnik vositalar majmuasi.",
          "2.5. Shaxsiy ma'lumotlar maxfiyligi — qo'shimcha ma'lumotlardan foydalanmasdan turib ma'lum bir Foydalanuvchi yoki boshqa shaxsiy ma'lumotlar subyektiga tegishli shaxsiy ma'lumotlarni aniqlashga yo'l qo'ymaydigan harakatlar.",
          "2.6. Shaxsiy ma'lumotlarni qayta ishlash — avtomatlashtirish vositalaridan foydalangan holda yoki bunday vositalardan foydalanmasdan shaxsiy ma'lumotlar bilan bajariladigan har qanday harakat (operatsiya) yoki harakatlar (operatsiyalar) majmui, shu jumladan yig'ish, yozish, tizimlashtirish, to'plash, saqlash, aniqlashtirish (yangilash, o'zgartirish), olish, foydalanish, uzatish (tarqatish, taqdim etish, kirish), maxfiylashtirish, bloklash, o'chirish, yo'q qilish.",
          "2.7. Operator — davlat organi, munitsipal organ, yuridik yoki jismoniy shaxs bo'lib, mustaqil ravishda yoki boshqa shaxslar bilan birgalikda shaxsiy ma'lumotlarni qayta ishlashni tashkil etuvchi va (yoki) amalga oshiruvchi, shuningdek shaxsiy ma'lumotlarni qayta ishlash maqsadlari, qayta ishlanadigan shaxsiy ma'lumotlar tarkibi, shaxsiy ma'lumotlar bilan bajariladigan harakatlar (operatsiyalar) belgilanadigan shaxs.",
          "2.8. Shaxsiy ma'lumotlar — http://bekirova.uz veb-sayti Foydalanuvchisiga bevosita yoki bilvosita tegishli bo'lgan har qanday ma'lumot.",
          "2.9. Tarqatish uchun ruxsat etilgan shaxsiy ma'lumotlar — Shaxsiy ma'lumotlar to'g'risidagi qonunga muvofiq ma'lumotlar subyekti tomonidan tarqatish uchun ruxsat etilgan shaxsiy ma'lumotlarni qayta ishlashga rozilik berish yo'li bilan cheklanmagan shaxslar doirasi foydalanishi mumkin bo'lgan shaxsiy ma'lumotlar.",
          "2.10. Foydalanuvchi — http://bekirova.uz veb-saytining har qanday tashrif buyuruvchisi.",
          "2.11. Shaxsiy ma'lumotlarni taqdim etish — ma'lum bir shaxsga yoki shaxslar doirasiga shaxsiy ma'lumotlarni oshkor qilishga qaratilgan harakatlar.",
          "2.12. Shaxsiy ma'lumotlarni oshkor qilish — shaxsiy ma'lumotlarni nomalum shaxslar doirasiga (shaxsiy ma'lumotlarni uzatish) yoki cheklanmagan shaxslar doirasiga shaxsiy ma'lumotlar bilan tanishish imkoniyatini berish, shu jumladan ommaviy axborot vositalarida e'lon qilish, axborot-telekommunikatsiya tarmoqlarida joylashtirish yoki boshqa usul bilan shaxsiy ma'lumotlarga kirishni ta'minlashga qaratilgan harakatlar.",
          "2.13. Shaxsiy ma'lumotlarni transchegaraviy uzatish — shaxsiy ma'lumotlarni chet davlat hududiga, chet davlat organiga, chet el jismoniy yoki yuridik shaxsiga uzatish.",
          "2.14. Shaxsiy ma'lumotlarni yo'q qilish — keyinchalik shaxsiy ma'lumotlar axborot tizimida shaxsiy ma'lumotlar mazmunini tiklash imkoniyatisiz qaytarib bo'lmaydigan tarzda yo'q qilingan va/yoki shaxsiy ma'lumotlarning moddiy tashuvchilarini yo'q qilish natijasida amalga oshiriladigan har qanday harakatlar."
        ]
      },
      section3: {
        title: "3. Operator huquq va majburiyatlari",
        content: [
          {
            subtitle: "3.1. Operator quyidagi huquqlarga ega:",
            items: [
              "Shaxsiy ma'lumotlar subyektidan ishonchli ma'lumotlar va/yoki shaxsiy ma'lumotlarni o'z ichiga olgan hujjatlarni olish;",
              "Shaxsiy ma'lumotlar subyekti tomonidan ma'lumotlarni qayta ishlashga rozilik bekor qilingan taqdirda, shuningdek shaxsiy ma'lumotlarni qayta ishlashni to'xtatish to'g'risida so'rov kelib tushgan taqdirda, Operator qonunda belgilangan asoslar mavjud bo'lganda subyektning roziligisiz shaxsiy ma'lumotlarni qayta ishlashni davom ettirish huquqiga ega;",
              "Agar Shaxsiy ma'lumotlar to'g'risidagi qonun yoki boshqa federal qonunlarda boshqacha tartib nazarda tutilmagan bo'lsa, Shaxsiy ma'lumotlar to'g'risidagi qonun va unga muvofiq qabul qilingan me'yoriy-huquqiy hujjatlarda nazarda tutilgan majburiyatlarni bajarish uchun zarur va yetarli bo'lgan choralar mazmuni va ro'yxatini mustaqil ravishda belgilash;"
            ]
          },
          {
            subtitle: "3.2. Operator quyidagi majburiyatlarga ega:",
            items: [
              "Shaxsiy ma'lumotlar subyektiga uning so'roviga ko'ra ma'lumotlarni qayta ishlash to'g'risida ma'lumot berish;",
              "O'zbekiston Respublikasining amaldagi qonunchiligiga muvofiq shaxsiy ma'lumotlarni qayta ishlashni tashkil etish;",
              "Shaxsiy ma'lumotlar subyektlari va ularning qonuniy vakillarining Shaxsiy ma'lumotlar to'g'risidagi arizalari va so'rovlariga qonun talablariga rioya qilish;",
              "Shaxsiy ma'lumotlar subyektlarining huquqlarini himoya qilish bo'yicha vakolatli organning so'rovini olgan kundan boshlab 10 kun ichida zarur ma'lumotlarni taqdim etish;",
              "Shaxsiy ma'lumotlarni qayta ishlash to'g'risidagi ushbu Siyosatni e'lon qilish yoki boshqa usulda cheklanmagan foydalanishni ta'minlash;",
              "Shaxsiy ma'lumotlarga noqonuniy yoki tasodifiy kirish, yo'q qilish, o'zgartirish, bloklash, nusxa ko'chirish, taqdim etish, tarqatish, shuningdek shaxsiy ma'lumotlarga nisbatan boshqa noqonuniy harakatlardan himoya qilish uchun huquqiy, tashkiliy va texnik choralar ko'rish;",
              "Shaxsiy ma'lumotlar to'g'risidagi qonunda nazarda tutilgan tartibda va hollarda shaxsiy ma'lumotlarni uzatishni (tarqatish, taqdim etish, kirish) to'xtatish, qayta ishlashni to'xtatish va shaxsiy ma'lumotlarni yo'q qilish;",
              "Shaxsiy ma'lumotlar to'g'risidagi qonunda nazarda tutilgan boshqa majburiyatlarni bajarish."
            ]
          }
        ]
      },
      section4: {
        title: "4. Shaxsiy ma'lumotlar subyektlarining asosiy huquq va majburiyatlari",
        content: [
          {
            subtitle: "4.1. Shaxsiy ma'lumotlar subyektlari quyidagi huquqlarga ega:",
            items: [
              "Federal qonunlarda nazarda tutilgan holatlar bundan mustasno bo'lib, shaxsiy ma'lumotlarni qayta ishlash to'g'risidagi ma'lumotlarni olish. Ma'lumotlar subyektiga tushunarli shaklda taqdim etiladi va ularda boshqa shaxsiy ma'lumotlar subyektlari to'g'risidagi ma'lumotlar bo'lmasligi kerak, bunday ma'lumotlarni oshkor qilish uchun qonuniy asoslar mavjud bo'lgan holatlar bundan mustasno. Ma'lumotlar ro'yxati va ularni olish tartibi Shaxsiy ma'lumotlar to'g'risidagi qonun bilan belgilanadi;",
              "Agar shaxsiy ma'lumotlar to'liq bo'lmasa, eskirgan, noto'g'ri, noqonuniy olingan yoki e'lon qilingan qayta ishlash maqsadi uchun zarur bo'lmasa, operatordan o'z shaxsiy ma'lumotlarini aniqlash, bloklash yoki o'chirishni, shuningdek o'z huquqlarini himoya qilish bo'yicha qonunda nazarda tutilgan choralarni ko'rishni talab qilish;",
              "Tovarlar, ishlar va xizmatlarni bozorda targ'ib qilish maqsadida shaxsiy ma'lumotlarni qayta ishlashga dastlabki rozilik berish shartini qo'yish;",
              "Shaxsiy ma'lumotlarni qayta ishlashga rozilikni qaytarib olish va shaxsiy ma'lumotlarni olish va qayta ishlashni to'xtatish to'g'risida so'rov yuborish;",
              "Operator tomonidan uning shaxsiy ma'lumotlarini qayta ishlashda noqonuniy harakatlar yoki harakatsizlik ustidan shaxsiy ma'lumotlar subyektlarining huquqlarini himoya qilish bo'yicha vakolatli organga yoki sudga shikoyat qilish;",
              "O'zbekiston Respublikasi qonunchiligida nazarda tutilgan boshqa huquqlarni amalga oshirish."
            ]
          },
          {
            subtitle: "4.2. Shaxsiy ma'lumotlar subyektlari quyidagi majburiyatlarga ega:",
            items: [
              "Operatorga o'zi haqida ishonchli ma'lumotlarni taqdim etish;",
              "O'z shaxsiy ma'lumotlarini aniqlash (yangilash, o'zgartirish) to'g'risida Operatorni xabardor qilish."
            ]
          },
          {
            subtitle: "4.3. Qo'shimcha shartlar:",
            content: [
              "O'zi haqida yolg'on ma'lumotlar yoki boshqa shaxsiy ma'lumotlarni operatorga taqdim etish yoki ma'lumotlar subyektining roziligisiz uning ma'lumotlarini taqdim etish O'zbekiston Respublikasi qonunchiligiga muvofiq javobgarlikka tortiladi."
            ]
          }
        ]
      },
      section5: {
        title: "5. Shaxsiy ma'lumotlarni qayta ishlash tamoyillari",
        content: [
          "5.1. Shaxsiy ma'lumotlarni qayta ishlash qonuniy va adolatli tarzda amalga oshiriladi.",
          "5.2. Shaxsiy ma'lumotlarni qayta ishlash aniq, oldindan belgilangan va qonuniy maqsadlarga erishish bilan cheklangan. Shaxsiy ma'lumotlarni yig'ish maqsadlariga zid bo'lgan tarzda qayta ishlashga yo'l qo'yilmaydi.",
          "5.3. O'zaro bog'liq bo'lmagan maqsadlar uchun qayta ishlanadigan shaxsiy ma'lumotlarni o'z ichiga olgan ma'lumotlar bazalarini birlashtirish taqiqlanadi.",
          "5.4. Faqat qayta ishlash maqsadlariga mos keladigan shaxsiy ma'lumotlargina qayta ishlanishi mumkin.",
          "5.5. Qayta ishlanadigan shaxsiy ma'lumotlarning mazmuni va hajmi e'lon qilingan qayta ishlash maqsadlariga mos kelishi kerak. Qayta ishlanadigan shaxsiy ma'lumotlar e'lon qilingan maqsadlar uchun ortiqcha bo'lishiga yo'l qo'yilmaydi.",
          "5.6. Shaxsiy ma'lumotlarni qayta ishlashda shaxsiy ma'lumotlarning aniqligi, yetarliligi va zarur hollarda qayta ishlash maqsadlariga nisbatan dolzarbligi ta'minlanadi. Operator to'liq bo'lmagan yoki noaniq ma'lumotlarni o'chirish yoki aniqlash va/yoki qabul qilish uchun zarur choralarni ko'rish ishlarini amalga oshirilishini ta'minlaydi.",
          "5.7. Shaxsiy ma'lumotlarni saqlash shaxsiy ma'lumotlar subyektini identifikatsiyalash imkonini beradigan shaklda, agar federal qonun, shartnoma bilan shaxsiy ma'lumotlarni saqlash muddati belgilanmagan bo'lsa (uning tomoni, benefitsiari yoki kafili shaxsiy ma'lumotlar subyekti hisoblanadi), shaxsiy ma'lumotlarni qayta ishlash maqsadlari uchun zarur bo'lgan muddatdan oshmaydigan muddatda amalga oshiriladi. Qayta ishlanadigan shaxsiy ma'lumotlar, agar federal qonun bilan boshqacha tartib nazarda tutilmagan bo'lsa, qayta ishlash maqsadlariga erishilganda yoki bu maqsadlarga erishish zarurati yo'qolganda yo'q qilinadi yoki anonimlashtiradi."
        ]
      },
      section6: {
        title: "6. Shaxsiy ma'lumotlarni qayta ishlash maqsadlari",
        content: [
          {
            subtitle: "Qayta ishlash maqsadi:",
            content: [
              "Foydalanuvchiga elektron pochta xabarlari yuborish orqali xabardor qilish"
            ]
          },
          {
            subtitle: "Shaxsiy ma'lumotlar:",
            items: [
              "familiya, ism, sharif",
              "elektron pochta manzili",
              "telefon raqamlari",
              "tug'ilgan yil, oy, sana va joy",
              "fotosurat"
            ]
          },
          {
            subtitle: "Huquqiy asoslar:",
            items: [
              "Operator ta'sis hujjatlari",
              "Operator va shaxsiy ma'lumotlar subyekti o'rtasida tuzilgan shartnomalar"
            ]
          },
          {
            subtitle: "Shaxsiy ma'lumotlarni qayta ishlash turlari:",
            items: [
              "Shaxsiy ma'lumotlarni yig'ish, yozish, tizimlashtirish, to'plash, saqlash, yo'q qilish va maxfiylashtirish",
              "Elektron pochta manziliga xabarlar yuborish"
            ]
          }
        ]
      },
      section7: {
        title: "7. Shaxsiy ma'lumotlarni qayta ishlash shartlari",
        content: [
          "7.1. Shaxsiy ma'lumotlarni qayta ishlash shaxsiy ma'lumotlar subyektining o'z shaxsiy ma'lumotlarini qayta ishlashga roziligi bilan amalga oshiriladi.",
          "7.2. Shaxsiy ma'lumotlarni qayta ishlash O'zbekiston Respublikasining xalqaro shartnomasi yoki qonunida belgilangan maqsadlarga erishish, O'zbekiston Respublikasi qonunchiligiga muvofiq operatorga yuklatilgan funksiyalar, vakolatlar va majburiyatlarni amalga oshirish uchun zarur.",
          "7.3. Shaxsiy ma'lumotlarni qayta ishlash odil sudlov, sud qarori, boshqa organ yoki mansabdor shaxsning O'zbekiston Respublikasi qonunchiligiga muvofiq ijro etilishi shart bo'lgan ijro ish yurituvini o'tkazish to'g'risidagi hujjatni ijro etish uchun zarur.",
          "7.4. Shaxsiy ma'lumotlarni qayta ishlash shaxsiy ma'lumotlar subyekti tomoni, benefitsiari yoki kafili bo'lgan shartnomani bajarish, shuningdek shaxsiy ma'lumotlar subyekti tashabbusi bilan shartnoma tuzish yoki shaxsiy ma'lumotlar subyekti benefitsiar yoki kafil bo'lgan shartnomani tuzish uchun zarur.",
          "7.5. Operator yoki uchinchi shaxsning shaxsiy ma'lumotlarni qayta ishlashi shaxslarning huquq va qonuniy manfaatlarini amalga oshirish yoki jamoat ahamiyatiga ega maqsadlarga erishish uchun zarur bo'lib, bunda shaxsiy ma'lumotlar subyektining huquq va erkinliklari buzilmasligi kerak.",
          "7.6. Shaxsiy ma'lumotlar subyekti tomonidan yoki uning talabi bilan cheklanmagan shaxslar doirasi foydalanishi mumkin bo'lgan shaxsiy ma'lumotlarni qayta ishlash amalga oshiriladi (bundan keyin — ommaviy shaxsiy ma'lumotlar).",
          "7.7. Federal qonun bo'yicha e'lon qilish yoki majburiy oshkor qilish nazarda tutilgan shaxsiy ma'lumotlarni qayta ishlash amalga oshiriladi."
        ]
      },
      section8: {
        title: "8. Shaxsiy ma'lumotlarni yig'ish, saqlash, uzatish va boshqa turdagi qayta ishlash tartibi",
        content: [
          "Operator tomonidan qayta ishlanadigan shaxsiy ma'lumotlarning xavfsizligi shaxsiy ma'lumotlarni himoya qilish sohasidagi qonun talablariga to'liq rioya qilish uchun zarur bo'lgan huquqiy, tashkiliy va texnik choralarni amalga oshirish orqali ta'minlanadi.",
          "8.1. Operator shaxsiy ma'lumotlarning saqlanishini ta'minlaydi va ruxsatsiz shaxslarning shaxsiy ma'lumotlarga kirishini istisno qilish uchun barcha mumkin bo'lgan choralarni ko'radi.",
          "8.2. Foydalanuvchining shaxsiy ma'lumotlari hech qachon, amaldagi qonunchilik bilan bog'liq holatlar yoki shaxsiy ma'lumotlar subyekti fuqarolik-huquqiy shartnoma bo'yicha majburiyatlarni bajarish uchun Operatorga uchinchi shaxsga ma'lumotlarni uzatishga rozilik bergan holatlar bundan mustasno, uchinchi shaxslarga berilmaydi.",
          "8.3. Shaxsiy ma'lumotlarda noaniqliklar mavjud bo'lgan taqdirda, Foydalanuvchi ularni Operatorning bekirovatravel@gmail.com elektron pochta manziliga \"Shaxsiy ma'lumotlarni yangilash\" belgisi bilan xabarnoma yuborish orqali mustaqil ravishda yangilashi mumkin.",
          "8.4. Shaxsiy ma'lumotlarni qayta ishlash muddati, agar shartnoma yoki amaldagi qonunchilik bilan boshqa muddat nazarda tutilmagan bo'lsa, shaxsiy ma'lumotlar yig'iladigan maqsadlarga erishish bilan belgilanadi. Foydalanuvchi istalgan vaqtda Operatorning bekirovatravel@gmail.com elektron pochta manziliga \"Shaxsiy ma'lumotlarni qayta ishlashga rozilikni qaytarib olish\" belgisi bilan xabarnoma yuborish orqali shaxsiy ma'lumotlarni qayta ishlashga rozilikni qaytarib olishi mumkin.",
          "8.5. To'lov tizimlari, aloqa vositalari va boshqa xizmatlarni ko'rsatuvchi tashqi xizmat ko'rsatuvchi provayderlar tomonidan yig'iladigan barcha ma'lumotlar ko'rsatilgan shaxslar (Operatorlar) tomonidan ularning Foydalanuvchi kelishuvi va Maxfiylik siyosatiga muvofiq saqlanadi va qayta ishlanadi. Operator, shu jumladan ushbu bandda ko'rsatilgan xizmat ko'rsatuvchi provayderlarning harakatlari uchun javobgar emas.",
          "8.6. Shaxsiy ma'lumotlar subyekti tomonidan tarqatishga ruxsat berilgan shaxsiy ma'lumotlarni uzatish (kirishni ta'minlashdan tashqari), shuningdek qayta ishlash shartlari yoki qayta ishlash (kirishni olishdan tashqari) o'rnatilgan taqiqlar O'zbekiston Respublikasi qonunchiligi bilan belgilangan davlat, jamoat va boshqa jamoat manfaatlarida shaxsiy ma'lumotlarni qayta ishlash amalga oshirilgan hollarda qo'llanilmaydi.",
          "8.7. Operator shaxsiy ma'lumotlarni qayta ishlashda maxfiy ma'lumotlarning maxfiyligini ta'minlaydi.",
          "8.8. Operator shaxsiy ma'lumotlarni shaxsiy ma'lumotlar subyektini identifikatsiyalash imkonini beradigan shaklda, agar federal qonun, shartnoma bilan shaxsiy ma'lumotlarni saqlash muddati belgilanmagan bo'lsa (uning tomoni, benefitsiari yoki kafili shaxsiy ma'lumotlar subyekti hisoblanadi), shaxsiy ma'lumotlarni qayta ishlash maqsadlari uchun zarur bo'lgan muddatdan oshmaydigan muddatda saqlaydi.",
          "8.9. Shaxsiy ma'lumotlarni qayta ishlashni to'xtatish sharti shaxsiy ma'lumotlarni qayta ishlash maqsadlariga erishish, shaxsiy ma'lumotlar subyektining rozilik muddati tugashi, shaxsiy ma'lumotlar subyektining roziligini qaytarib olishi yoki shaxsiy ma'lumotlarni qayta ishlashni to'xtatish to'g'risidagi so'rovi, shuningdek shaxsiy ma'lumotlarni noqonuniy qayta ishlash faktini aniqlash bo'lishi mumkin."
        ]
      },
      section9: {
        title: {
          uz: "9. Operator tomonidan olingan shaxsiy ma'lumotlar bilan amalga oshiriladigan harakatlar ro'yxati",
          ru: "9. Перечень действий с персональными данными, полученными оператором",
          en: "9. List of Actions Performed with Personal Data Received by the Operator"
        },
        content: {
          uz: [
            "9.1. Operator yig'ish, yozish, tizimlashtirish, to'plash, saqlash, aniqlash (yangilash, o'zgartirish), olish, foydalanish, uzatish (tarqatish, taqdim etish, kirish), maxfiylashtirish, bloklash, o'chirish va yo'q qilishni amalga oshiradi.",
            "9.2. Operator shaxsiy ma'lumotlarni axborot-telekommunikatsiya tarmoqlari orqali olingan ma'lumotlarni avtomatlashtirilgan yoki avtomatlashtirilmagan holda qayta ishlashni amalga oshiradi."
          ],
          ru: [
            "9.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.",
            "9.2. Оператор осуществляет автоматизированную и/или без использования средств автоматизации обработку полученных через информационно-телекоммуникационные сети данных."
          ],
          en: [
            "9.1. The operator performs collection, recording, systematization, accumulation, storage, clarification (updating, modification), retrieval, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, and destruction.",
            "9.2. The operator performs automated and/or non-automated processing of data received through information and telecommunications networks."
          ]
        }
      },
      section10: {
        title: {
          uz: "10. Shaxsiy ma'lumotlarni transchegaraviy uzatish",
          ru: "10. Трансграничная передача персональных данных",
          en: "10. Cross-Border Transfer of Personal Data"
        },
        content: {
          uz: [
            "10.1. Operator shaxsiy ma'lumotlarni transchegaraviy uzatishni boshlashdan oldin shaxsiy ma'lumotlarni transchegaraviy uzatish rejalashtirilgan xorijiy davlat organlari, xorijiy jismoniy shaxslar, xorijiy yuridik shaxslar haqida ma'lumot olishi shart (bunday xabarnoma shaxsiy ma'lumotlarni qayta ishlash to'g'risidagi xabarnomadan alohida yuboriladi).",
            "10.2. Operator yuqoridagi xabarnomani yuborishdan oldin, shaxsiy ma'lumotlarni transchegaraviy uzatish rejalashtirilgan xorijiy davlat organlari, xorijiy jismoniy shaxslar, xorijiy yuridik shaxslar haqida ma'lumot olishi shart."
          ],
          ru: [
            "10.1. Оператор обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своем намерении осуществлять трансграничную передачу персональных данных до начала такой деятельности (такое уведомление направляется отдельно от уведомления об обработке персональных данных).",
            "10.2. Оператор обязан получить информацию о зарубежных государственных органах, иностранных физических лицах, иностранных юридических лицах, которым планируется трансграничная передача персональных данных, до направления вышеуказанного уведомления."
          ],
          en: [
            "10.1. The operator must notify the authorized body for the protection of personal data subjects' rights about its intention to carry out cross-border transfer of personal data before starting such activity (such notification is sent separately from the notification of personal data processing).",
            "10.2. The operator must obtain information about foreign state authorities, foreign individuals, foreign legal entities to whom cross-border transfer of personal data is planned, before sending the above notification."
          ]
        }
      },
      section11: {
        title: {
          uz: "11. Shaxsiy ma'lumotlarning maxfiyligi",
          ru: "11. Конфиденциальность персональных данных",
          en: "11. Confidentiality of Personal Data"
        },
        content: {
          uz: [
            "Operator va shaxsiy ma'lumotlarga kirish huquqiga ega boshqa shaxslar, federal qonunda boshqacha tartib nazarda tutilmagan bo'lsa, shaxsiy ma'lumotlar subyektining roziligisiz uchinchi shaxslarga shaxsiy ma'lumotlarni oshkor qilmaslik va tarqatmaslik majburiyatiga ega."
          ],
          ru: [
            "Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом."
          ],
          en: [
            "The operator and other persons who have access to personal data are obligated not to disclose to third parties and not to distribute personal data without the consent of the personal data subject, unless otherwise provided by federal law."
          ]
        }
      },
      section12: {
        title: {
          uz: "12. Yakuniy qoidalar",
          ru: "12. Заключительные положения",
          en: "12. Final Provisions"
        },
        content: {
          uz: [
            "12.1. Foydalanuvchi o'z shaxsiy ma'lumotlarini qayta ishlash bo'yicha har qanday savollar bilan bekirovatravel@gmail.com elektron pochta manziliga murojaat qilib, tushuntirish olishi mumkin.",
            "12.2. Operator tomonidan shaxsiy ma'lumotlarni qayta ishlash siyosatiga kiritilgan har qanday o'zgarishlar ushbu hujjatda aks ettiriladi. Siyosat yangi versiya bilan almashtirilgunga qadar amal qiladi.",
            "12.3. Siyosatning amaldagi versiyasi http://bekirova.uz/privacy manzilida Internetda erkin foydalanish uchun joylashtirilgan."
          ],
          ru: [
            "12.1. Пользователь может получить разъяснения по вопросам обработки своих персональных данных, обратившись к Оператору по электронной почте bekirovatravel@gmail.com.",
            "12.2. Любые изменения в политике обработки персональных данных Оператором будут отражены в данном документе. Политика действует бессрочно до замены ее новой версией.",
            "12.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу http://bekirova.uz/privacy."
          ],
          en: [
            "12.1. The user can receive clarification on the processing of their personal data by contacting the Operator via email at bekirovatravel@gmail.com.",
            "12.2. Any changes to the personal data processing policy by the Operator will be reflected in this document. The Policy remains valid indefinitely until replaced with a new version.",
            "12.3. The current version of the Policy is freely available on the Internet at http://bekirova.uz/privacy."
          ]
        }
      }
    }
  },
  ru: {
    title: "Политика обработки персональных данных",
    sections: {
      section1: {
        title: "1. Общие правила",
        content: [
          "Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных ООО «Bekirova travel» (далее – Оператор).",
          "1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.",
          "1.2. Настоящая политика применяется ко всей инфрмации, которую Оператор может получить о посетителях веб-сайта http://bekirova.uz/."
        ]
      },
      section2: {
        title: "2. Основные понятия",
        content: [
          "2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники.",
          "2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).",
          "2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность на сети интернет по сетевому адресу http://bekirova.uz.",
          "2.4. Информационная система персональных данных — совокупность содержащихся в базх данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств.",
          "2.5. Конфиденциальность персональных данных - обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.",
          "2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.",
          "2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.",
          "2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта http://bekirova.uz.",
          "2.9. Персональные данные, разрешенные субъектом персональных данных для распространения, - персональные данные, доступ неограниченного круга лиц к которым предоставлен суб��ектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных.",
          "2.10. Пользователь – любой посетитель веб-сайта http://bekirova.uz.",
          "2.11. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.",
          "2.12. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченному кругу лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в инфо��мационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.",
          "2.13. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства, органу власти иностранного государства, иностранно физическому или иностранному юридическому лицу.",
          "2.14. Уничтожение персональных данных – любые действия, в результате которых персональные данные ничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.",
          "3.1. Оператор имеет право:",
          "Получать от субъекта персональных данных достоверную информацию и/или документы, содержащие персональные данные;",
          "В случае отзыва субъектом персональных данных согласия на обработку персональных данных, а также в случае поступления запроса о прекращении обработки персональных данных, Оператор вправе продолжить обработку ерсоальных данных без согласия субъекта при наличии оснований, указанных в законе;",
          "Самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональны данных или другим федеральными законами;",
          "3.2. Оператор обязан:",
          "Предоставлять субъекту персональных данных по его просьбе информацию об обработке его данных;",
          "Организовывать обработку персональных данных в соответствии с действующим законодательством Республики Узбекистан;",
          "Соблюдать требования законодательства при работе с обращениями и запросами субъектов персональных данных и их законных представителей;",
          "Предоставлять необходимую информацию уполномоченному органу по защите прав субъектов персональных данных в течение 10 дней с даты получения запроса;",
          "Опубликовать или иным образом обеспечить неограниченный доступ к настоящей Политике обработки персональных данных;",
          "Принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий в отношении персональных данных;",
          "Прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;",
          "Исполнять иные обязанности, предусмотренные законодательством о персональных данных.",
        ]
      },
      section3: {
        title: "3. Права и обязанности оператора",
        content: [
          {
            subtitle: "3.1. Оператор имеет право:",
            items: [
              "Получа��ь от субъекта персональных данных достоверную информацию и/или документы, содержащие персональные данные;",
              "В случае отзыва субъектом персональных данных согласия на обработку персональных данных, а также в случае поступления запроса о прекращении обработки персональных данных, Оператор вправе продолжить обработку персональны�� данных без согласия субъекта при наличии оснований, указанных в законе;",
              "Самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами;"
            ]
          },
          {
            subtitle: "3.2. Оператор обязан:",
            items: [
              "Предоставлять субъекту персональных данных по его просьбе информацию об обработке его данных;",
              "Организовывать обработку персональных данных в соответствии с действующим законодательством РУз;",
              "Соблюдать требования законодательства при работе с обращениями и запросами субъектов персональных данных и их законных представителей;",
              "Предоставлять необходимую информацию уполномоченному органу по защите прав субъектов персональных данных в течение 10 дней с даты получения запроса;",
              "Опубликовать или иным образом обеспечить неограниченный доступ к настоящей Политике обработки персональных данных;",
              "Принимать правовые, организационные и технические меры для защиты песональных данных от неправомерного или случайного доступа к ним;",
              "Прекратить передачу персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;",
              "Исполнять иные обязанности, предусмотренные законодательством о персональных данных."
            ]
          }
        ]
      },
      section4: {
        title: "4. Основные права и обзанности субъектов персональных данных",
        content: [
          {
            subtitle: "4.1. Субъекты персональных данных имеют право:",
            items: [
              "Получать информацию об обработке персональных данных, за исключением случаев, предусмотренных федеральными законами. Информация предоставляется субъекту персональных данных в понятной форме, и в ней не должны содержаться персональные данные других субъектов, за исключением случаев, когда имеются законные основания для раскрытия таких данных;",
              "Требовать от оператора уточнения, блокирования или удаления своих персональных данных, если они являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;",
              "Выдвигать условие п��едварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг;",
              "Отозвать согласие на обработку персональных данных и направить запрос о прекращении получения и обработки персональных данных;",
              "Обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие оператора при обработке его персональных данных;",
              "Осуществлять иные права, предсмотренные законодательством Республики Узбекистан."
            ]
          },
          {
            subtitle: "4.2. Субъекты персональных данных обязаны:",
            items: [
              "Предоставлять оператору достоверные сведения о себе;",
              "Сообщать оператору об уточнении (обновлении, изменении) своих персональных данных."
            ]
          },
          {
            subtitle: "4.3. Дополнительные условия:",
            content: [
              "Предоставление оператору подложных сведений о себе либо предоставление персональных данных субъекта без его согласия лечет ответственность в соответствии с законодательством Республики Узбекистан."
            ]
          }
        ]
      },
      section5: {
        title: "5. Принципы обработки персональных данных",
        content: [
          "5.1. Обработка персональных данных осуществляется на законной и справедливой основе.",
          "5.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законух целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данн��х.",
          "5.3. Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.",
          "5.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.",
          "5.5. Содержание и объем обрабатываемых персональных данных должны соответствовать заявленным целям обработки. Обрабатываемые персональные данные не должны быть избыточными по отношению к заявленным целям их обработки.",
          "5.6. При обработке персональных данных должны быть обеспечены точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки персональных данных. Оператор должен принимать необходимые меры либо обеспечивать их принятие по удалению или уточнению неполных или неточных данных.",
          "5.7. Хранение персональных данных должно осуществляться в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных. Обрабатываемые персональные данные подлежат уничтожению либо обезличиванию по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом."
        ]
      },
      section6: {
        title: "6. Цели обработки персональных данных",
        content: [
          {
            subtitle: "Цель обработки:",
            content: [
              "Уведомление пользователя путем отправки электронных писем"
            ]
          },
          {
            subtitle: "Персональные данные:",
            items: [
              "фамилия, имя, отчество",
              "адрес электронной почты",
              "номера телефонов",
              "год, месяц, дата и место рождения",
              "фотографии"
            ]
          },
          {
            subtitle: "Правовые основания:",
            items: [
              "Учредительные документы оператора",
              "Договоры, заключаемые между оператором и субъектом персональных данных"
            ]
          },
          {
            subtitle: "Виды обработки персональных данных:",
            items: [
              "Сбор, запись, систематизация, накопление, хранение, уничтожение и обезличивание персональных д��нных",
              "Отправка информационных писем на электронную почту"
            ]
          }
        ]
      },
      section7: {
        title: "7. Условия обработки персональных данных",
        content: [
          "7.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.",
          "7.2. Обработка персональных данных необходима для достижения целей, предусмотренных международным договором или законом Республики Узбекистан, для осуществления возложенных на оператора функций, полномочий и обязанностей в соответствии с законодательством Республики Узбекистан.",
          "7.3. Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лиц��, подлежащих исполнению в со��тветствии с законодательством Республики Узбекистан об исполнительном производстве.",
          "7.4. Обработка персональных данных необходима для исполнения договора, стороной ко��орого, выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по ини��иативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем.",
          "7.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.",
          "7.6. Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее — общедоступные персональные данные).",
          "7.7. Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом."
        ]
      },
      section8: {
        title: "8. Порядок сбора, хранения, передачи и других видов обработки персональных данных",
        content: [
          "Безопасность персональных данных, обрабатываемых Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований законодательства в области защиты персональных данных.",
          "8.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.",
          "8.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае, если субъектом персональных данных дано согласие Оператору на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору.",
          "8.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомления на адрес электронной почты bekirovatravel@gmail.com с пометкой «Актуализация персональных данных».",
          "8.4. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные, если иной срок не предусмотрен договором или действующим законодательством. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление на адрес электронной почты bekirovatravel@gmail.com с пометкой «Отзыв согласия на обработку персональных данных».",
          "8.5. Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами (Операторами) в соответствии с их Пользовательским соглашением и Политикой конфиденциальности. Оператор не несет ответственности за действия третьих лиц, в том числе указанных в настоящем пункте поставщиков услуг.",
          "8.6. Установленные субъектом персональных данных запреты на передачу (кроме предоставления доступа), а также на обработку или условия обработки (кроме получения доступа) персональных данных, разрешенных для распространения, не действуют в случаях обработки персональных данных в государственных, общественных и иных публичных интересах, определенных законодательством Республики Узбекистан.",
          "8.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.",
          "8.8. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных.",
          "8.9. Условием прекращения обработки персональных данных может являться достижение целей обработки персональных данных, истечение срока действия согласия субъекта персональных данных, отзыв согласия субъектом персональных данных или требование о прекращении обработки персональных данных, а также выявление неправомерной обработки персональных данных."
        ]
      },
      section9: {
        title: {
          uz: "9. Operator tomonidan olingan shaxsiy ma'lumotlar bilan amalga oshiriladigan harakatlar ro'yxati",
          ru: "9. Перечень действий с персональными данными, полученными оператором",
          en: "9. List of Actions Performed with Personal Data Received by the Operator"
        },
        content: {
          uz: [
            "9.1. Operator yig'ish, yozish, tizimlashtirish, to'plash, saqlash, aniqlash (yangilash, o'zgartirish), olish, foydalanish, uzatish (tarqatish, taqdim etish, kirish), maxfiylashtirish, bloklash, o'chirish va yo'q qilishni amalga oshiradi.",
            "9.2. Operator shaxsiy ma'lumotlarni axborot-telekommunikatsiya tarmoqlari orqali olingan ma'lumotlarni avtomatlashtirilgan yoki avtomatlashtirilmagan holda qayta ishlashni amalga oshiradi."
          ],
          ru: [
            "9.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.",
            "9.2. Оператор осуществляет автоматизированную и/или без использования средств автоматизации обработку полученных через информационно-телекоммуникационные сети данных."
          ],
          en: [
            "9.1. The operator performs collection, recording, systematization, accumulation, storage, clarification (updating, modification), retrieval, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, and destruction.",
            "9.2. The operator performs automated and/or non-automated processing of data received through information and telecommunications networks."
          ]
        }
      },
      section10: {
        title: {
          uz: "10. Shaxsiy ma'lumotlarni transchegaraviy uzatish",
          ru: "10. Трансграничная передача персональных данных",
          en: "10. Cross-Border Transfer of Personal Data"
        },
        content: {
          uz: [
            "10.1. Operator shaxsiy ma'lumotlarni transchegaraviy uzatishni boshlashdan oldin shaxsiy ma'lumotlarni transchegaraviy uzatish rejalashtirilgan xorijiy davlat organlari, xorijiy jismoniy shaxslar, xorijiy yuridik shaxslar haqida ma'lumot olishi shart (bunday xabarnoma shaxsiy ma'lumotlarni qayta ishlash to'g'risidagi xabarnomadan alohida yuboriladi).",
            "10.2. Operator yuqoridagi xabarnomani yuborishdan oldin, shaxsiy ma'lumotlarni transchegaraviy uzatish rejalashtirilgan xorijiy davlat organlari, xorijiy jismoniy shaxslar, xorijiy yuridik shaxslar haqida ma'lumot olishi shart."
          ],
          ru: [
            "10.1. Оператор обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своем намерении осуществлять трансграничную передачу персональных данных до начала такой деятельности (такое уведомление направляется отдельно от уведомления об обработке персональных данных).",
            "10.2. Оператор обязан получить информацию о зарубежных государственных органах, иностранных физических лицах, иностранных юридических лицах, которым планируется трансграничная передача персональных данных, до направления вышеуказанного уведомления."
          ],
          en: [
            "10.1. The operator must notify the authorized body for the protection of personal data subjects' rights about its intention to carry out cross-border transfer of personal data before starting such activity (such notification is sent separately from the notification of personal data processing).",
            "10.2. The operator must obtain information about foreign state authorities, foreign individuals, foreign legal entities to whom cross-border transfer of personal data is planned, before sending the above notification."
          ]
        }
      },
      section11: {
        title: {
          uz: "11. Shaxsiy ma'lumotlarning maxfiyligi",
          ru: "11. Конфиденциальность персональных данных",
          en: "11. Confidentiality of Personal Data"
        },
        content: {
          uz: [
            "Operator va shaxsiy ma'lumotlarga kirish huquqiga ega boshqa shaxslar, federal qonunda boshqacha tartib nazarda tutilmagan bo'lsa, shaxsiy ma'lumotlar subyektining roziligisiz uchinchi shaxslarga shaxsiy ma'lumotlarni oshkor qilmaslik va tarqatmaslik majburiyatiga ega."
          ],
          ru: [
            "Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом."
          ],
          en: [
            "The operator and other persons who have access to personal data are obligated not to disclose to third parties and not to distribute personal data without the consent of the personal data subject, unless otherwise provided by federal law."
          ]
        }
      },
      section12: {
        title: {
          uz: "12. Yakuniy qoidalar",
          ru: "12. Заключительные положения",
          en: "12. Final Provisions"
        },
        content: {
          uz: [
            "12.1. Foydalanuvchi o'z shaxsiy ma'lumotlarini qayta ishlash bo'yicha har qanday savollar bilan bekirovatravel@gmail.com elektron pochta manziliga murojaat qilib, tushuntirish olishi mumkin.",
            "12.2. Operator tomonidan shaxsiy ma'lumotlarni qayta ishlash siyosatiga kiritilgan har qanday o'zgarishlar ushbu hujjatda aks ettiriladi. Siyosat yangi versiya bilan almashtirilgunga qadar amal qiladi.",
            "12.3. Siyosatning amaldagi versiyasi http://bekirova.uz/privacy manzilida Internetda erkin foydalanish uchun joylashtirilgan."
          ],
          ru: [
            "12.1. Пользователь может получить разъяснения по вопросам обработки своих персональных данных, обратившись к Оператору по электронной почте bekirovatravel@gmail.com.",
            "12.2. Любые изменения в политике обработки персональных данных Оператором будут отражены в данном документе. Политика действует бессрочно до замены ее новой версией.",
            "12.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу http://bekirova.uz/privacy."
          ],
          en: [
            "12.1. The user can receive clarification on the processing of their personal data by contacting the Operator via email at bekirovatravel@gmail.com.",
            "12.2. Any changes to the personal data processing policy by the Operator will be reflected in this document. The Policy remains valid indefinitely until replaced with a new version.",
            "12.3. The current version of the Policy is freely available on the Internet at http://bekirova.uz/privacy."
          ]
        }
      }
    }
  },
  en: {
    title: "Personal Data Processing Policy",
    sections: {
      section1: {
        title: "1. General Rules",
        content: [
          "This personal data processing policy is dated 27.07.2006 in accordance with the requirements of the Federal Law 'On Personal Data' and defines the procedure for processing personal data and measures to ensure data security by 'Bekirova travel' LLC (hereinafter - Operator).",
          "1.1. The operator defines the protection of citizens' rights and freedoms in processing personal data, including privacy, personal and family privacy rights, as the most important goal and condition of its activity.",
          "1.2. This policy applies to all information that the Operator can obtain about visitors to the website http://bekirova.uz/."
        ]
      },
      section2: {
        title: "2. Basic Concepts",
        content: [
          "2.1. Automated processing of personal data — processing of personal data using computer technologies.",
          "2.2. Blocking personal data — temporary suspension of personal data processing (except where processing is necessary for clarification of personal data).",
          "2.3. Website — a set of graphic and information materials, as well as computer programs and databases that ensure their availability on the Internet at the network address http://bekirova.uz.",
          "2.4. Personal data information system — a combination of personal data contained in databases and information technologies and technical means ensuring their processing.",
          "2.5. Confidentiality of personal data - mandatory for the Operator or other person who has gained access to personal data requirement not to allow their distribution without the consent of the personal data subject or the presence of other legal grounds.",
          "2.6. Processing of personal data – any action (operation) or set of actions (operations) performed with or without the use of automation tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.",
          "2.7. Operator – a state body, municipal body, legal entity or natural person, independently or jointly with other persons organizing and (or) carrying out the processing of personal data, as well as determining the purposes of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data.",
          "2.8. Personal data – any information relating directly or indirectly to a specific or identifiable User of the website http://bekirova.uz.",
          "2.9. Personal data authorized by the personal data subject for distribution - personal data, access to which by an unlimited number of persons is provided by the personal data subject by giving consent to the processing of personal data authorized by the personal data subject for distribution in the manner prescribed by the Law on Personal Data.",
          "2.10. User – any visitor to the website http://bekirova.uz.",
          "2.11. Provision of personal data – actions aimed at disclosing personal data to a specific person or specific group of persons.",
          "2.12. Distribution of personal data – any actions aimed at disclosing personal data to an indefinite circle of persons (transfer of personal data) or at familiarizing an unlimited circle of persons with personal data, including the publication of personal data in the mass media, placement in information and telecommunications networks or providing access to personal data in any other way.",
          "2.13. Cross-border transfer of personal data – transfer of personal data to the territory of a foreign state, to an authority of a foreign state, to a foreign individual or foreign legal entity.",
          "2.14. Destruction of personal data – any actions resulting in the permanent destruction of personal data with no possibility of further restoration of the content of personal data in the personal data information system and (or) destruction of personal data carriers.",
          "3.1. The operator has the following rights:",
          "Receive reliable information and/or documents containing personal data from the personal data subject;",
          "In case of withdrawal of consent to personal data processing by the personal data subject, as well as in case of receiving a request to stop personal data processing, the Operator has the right to continue processing personal data without the subject's consent when there are grounds specified by law;",
          "Independently determine the content and list of measures necessary and sufficient to ensure the fulfillment of obligations provided for in the Personal Data Act and regulatory legal documents adopted in accordance with it, unless otherwise provided by the Personal Data Act or other federal laws;",
          "3.2. The operator has the following obligations:",
          "Provide information about data processing to the personal data subject at their request;",
          "Organize personal data processing in accordance with the current legislation of Uzbekistan;",
          "Comply with legal requirements regarding applications and requests about Personal Data from personal data subjects and their legal representatives;",
          "Provide necessary information to the competent body for protection of personal data subjects' rights within 10 days from the date of receiving the request;",
          "Publish or otherwise provide unrestricted access to this Personal Data Processing Policy;",
          "Take legal, organizational and technical measures to protect personal data from illegal or accidental access, destruction, modification, blocking, copying, provision, distribution, as well as other illegal actions regarding personal data;",
          "Stop the transfer (distribution, provision, access) of personal data, stop processing and destroy personal data in the manner and cases provided for in the Personal Data Act;",
          "Fulfill other obligations provided by the law on personal data.",
        ]
      },
      section3: {
        title: "3. Rights and Obligations of the Operator",
        content: [
          {
            subtitle: "3.1. The operator has the following rights:",
            items: [
              "To receive reliable information and/or documents containing personal data from the personal data subject;",
              "In case of withdrawal of consent to personal data processing by the personal data subject, as well as in case of receiving a request to stop personal data processing, the Operator has the right to continue processing personal data without the subject's consent when there are grounds specified by law;",
              "To independently determine the content and list of measures necessary and sufficient to ensure the fulfillment of obligations provided for in the Personal Data Act and regulatory legal documents adopted in accordance with it;"
            ]
          },
          {
            subtitle: "3.2. The operator has the following obligations:",
            items: [
              "To provide information about data processing to the personal data subject at their request;",
              "To organize personal data processing in accordance with the current legislation of Uzbekistan;",
              "To comply with legal requirements regarding applications and requests about Personal Data from personal data subjects and their legal representatives;",
              "To provide necessary information to the competent body for protection of personal data subjects' rights within 10 days from the date of receiving the request;",
              "To publish or otherwise provide unrestricted access to this Personal Data Processing Policy;",
              "To take legal, organizational and technical measures to protect personal data from illegal or accidental access;",
              "To stop the transfer of personal data, stop processing and destroy personal data in the manner and cases provided for in the Personal Data Act;",
              "To fulfill other obligations provided by the law on personal data."
            ]
          }
        ]
      },
      section4: {
        title: "4. Basic Rights and Obligations of Personal Data Subjects",
        content: [
          {
            subtitle: "4.1. Personal data subjects have the right to:",
            items: [
              "Receive information about the processing of personal data, except for cases provided for by federal laws. Information is provided to the personal data subject in an understandable form and should not contain personal data of other subjects, except when there are legal grounds for disclosing such data;",
              "Request from the operator clarification, blocking or deletion of their personal data if it is incomplete, outdated, inaccurate, illegally obtained or not necessary for the stated purpose of processing, as well as take measures provided by law to protect their rights;",
              "Set the condition of preliminary consent when processing personal data for the purpose of promoting goods, works and services in the market;",
              "Withdraw consent to personal data processing and send a request to stop receiving and processing personal data;",
              "Appeal to the authorized body for the protection of the rights of personal data subjects or to court against illegal actions or inaction of the operator when processing their personal data;",
              "Exercise other rights provided for by the legislation of the Republic of Uzbekistan."
            ]
          },
          {
            subtitle: "4.2. Personal data subjects are obligated to:",
            items: [
              "Provide the operator with reliable information about themselves;",
              "Inform the operator about clarification (updating, changing) of their personal data."
            ]
          },
          {
            subtitle: "4.3. Additional conditions:",
            content: [
              "Providing false information about oneself to the operator or providing personal data of a subject without their consent entails liability in accordance with the legislation of the Republic of Uzbekistan."
            ]
          }
        ]
      },
      section5: {
        title: "5. Principles of Personal Data Processing",
        content: [
          "5.1. Processing of personal data is carried out on a lawful and fair basis.",
          "5.2. The processing of personal data is limited to achieving specific, predetermined, and legitimate purposes. Processing of personal data incompatible with the purposes of collecting personal data is not allowed.",
          "5.3. The integration of databases containing personal data processed for incompatible purposes is prohibited.",
          "5.4. Only personal data that meets the purposes of its processing shall be processed.",
          "5.5. The content and volume of processed personal data must correspond to the stated processing purposes. The processed personal data should not be excessive in relation to the stated purposes of their processing.",
          "5.6. When processing personal data, the accuracy of personal data, their sufficiency, and when necessary, relevance to the purposes of processing must be ensured. The Operator must take necessary measures or ensure their adoption to delete or clarify incomplete or inaccurate data.",
          "5.7. Storage of personal data must be carried out in a form that allows identification of the personal data subject for no longer than required by the purposes of personal data processing, unless the storage period is determined by federal law or contract (where the personal data subject is its party, beneficiary, or guarantor). Processed personal data shall be destroyed or anonymized upon achieving the processing purposes or if the need to achieve these purposes is lost, unless otherwise provided by federal law."
        ]
      },
      section6: {
        title: "6. Purposes of Personal Data Processing",
        content: [
          {
            subtitle: "Purpose of processing:",
            content: [
              "Notify the user by sending emails"
            ]
          },
          {
            subtitle: "Personal information:",
            items: [
              "surname, name, patronymic",
              "email address",
              "phone numbers",
              "year, month, date and place of birth",
              "photos"
            ]
          },
          {
            subtitle: "Legal bases:",
            items: [
              "Founding documents of the operator",
              "Contracts formed between the operator and the subject of personal data"
            ]
          },
          {
            subtitle: "Types of personal data processing:",
            items: [
              "Collection, writing, systematization, accumulation, storage, destruction and confidentiality of personal data",
              "Sending newsletters to an e-mail address"
            ]
          }
        ]
      },
      section7: {
        title: "7. Terms of Personal Data Processing",
        content: [
          "7.1. Personal data processing is carried out with the consent of the personal data subject to process their personal data.",
          "7.2. Personal data processing is necessary to achieve the goals stipulated in the international agreement or law of the Republic of Uzbekistan, to implement the functions, powers and obligations assigned to the operator in accordance with the legislation of the Republic of Uzbekistan.",
          "7.3. Personal data processing is necessary for the administration of justice, execution of a court decision, act of another body or official that must be executed in accordance with the legislation of the Republic of Uzbekistan on enforcement proceedings.",
          "7.4. Personal data processing is necessary for the execution of a contract where the personal data subject is a party, beneficiary or guarantor, as well as for concluding a contract at the initiative of the personal data subject or a contract where the personal data subject will be the beneficiary or guarantor.",
          "7.5. Personal data processing is necessary for the implementation of the rights and legitimate interests of the operator or third parties, or to achieve socially significant goals, provided that this does not violate the rights and freedoms of the personal data subject.",
          "7.6. Processing of personal data is carried out, access to which by an unlimited number of persons is provided by the personal data subject or at their request (hereinafter referred to as publicly available personal data).",
          "7.7. Processing of personal data is carried out that is subject to publication or mandatory disclosure in accordance with federal law."
        ]
      },
      section8: {
        title: "8. Procedure for Collection, Storage, Transfer and Other Types of Personal Data Processing",
        content: [
          "The security of personal data processed by the Operator is ensured through the implementation of legal, organizational and technical measures necessary to fully comply with the requirements of legislation in the field of personal data protection.",
          "8.1. The Operator ensures the preservation of personal data and takes all possible measures to prevent unauthorized access to personal data.",
          "8.2. The User's personal data will never, under any circumstances, be transferred to third parties, except in cases related to compliance with current legislation or if the personal data subject has given consent to the Operator to transfer data to a third party for the fulfillment of obligations under a civil law contract.",
          "8.3. In case of inaccuracies in personal data, the User can update them independently by sending a notification to the Operator at bekirovatravel@gmail.com with the mark 'Personal Data Update'.",
          "8.4. The period of personal data processing is determined by achieving the purposes for which personal data was collected, unless another period is provided for by contract or current legislation. The User may at any time withdraw their consent to personal data processing by sending a notification to the Operator at bekirovatravel@gmail.com with the mark 'Withdrawal of Consent to Personal Data Processing'.",
          "8.5. All information collected by third-party services, including payment systems, communication tools, and other service providers, is stored and processed by these persons (Operators) in accordance with their User Agreement and Privacy Policy. The Operator is not responsible for the actions of third parties, including service providers specified in this clause.",
          "8.6. Prohibitions set by the personal data subject on transfer (except for providing access), as well as on processing or processing conditions (except for obtaining access) of personal data permitted for distribution, do not apply in cases of personal data processing in state, public, and other public interests defined by the legislation of the Republic of Uzbekistan.",
          "8.7. The Operator ensures the confidentiality of personal data during processing.",
          "8.8. The Operator stores personal data in a form that allows identification of the personal data subject for no longer than required by the purposes of personal data processing, unless the storage period is determined by federal law or contract where the personal data subject is its party, beneficiary, or guarantor.",
          "8.9. The condition for terminating personal data processing may be the achievement of personal data processing purposes, expiration of the personal data subject's consent, withdrawal of consent by the personal data subject, or request to stop personal data processing, as well as detection of unlawful personal data processing."
        ]
      },
      section9: {
        title: {
          uz: "9. Operator tomonidan olingan shaxsiy ma'lumotlar bilan amalga oshiriladigan harakatlar ro'yxati",
          ru: "9. Перечень действий с персональными данными, полученными оператором",
          en: "9. List of Actions Performed with Personal Data Received by the Operator"
        },
        content: {
          uz: [
            "9.1. Operator yig'ish, yozish, tizimlashtirish, to'plash, saqlash, aniqlash (yangilash, o'zgartirish), olish, foydalanish, uzatish (tarqatish, taqdim etish, kirish), maxfiylashtirish, bloklash, o'chirish va yo'q qilishni amalga oshiradi.",
            "9.2. Operator shaxsiy ma'lumotlarni axborot-telekommunikatsiya tarmoqlari orqali olingan ma'lumotlarni avtomatlashtirilgan yoki avtomatlashtirilmagan holda qayta ishlashni amalga oshiradi."
          ],
          ru: [
            "9.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.",
            "9.2. Оператор осуществляет автоматизированную и/или без использования средств автоматизации обработку полученных через информационно-телекоммуникационные сети данных."
          ],
          en: [
            "9.1. The operator performs collection, recording, systematization, accumulation, storage, clarification (updating, modification), retrieval, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, and destruction.",
            "9.2. The operator performs automated and/or non-automated processing of data received through information and telecommunications networks."
          ]
        }
      },
      section10: {
        title: {
          uz: "10. Shaxsiy ma'lumotlarni transchegaraviy uzatish",
          ru: "10. Трансграничная передача персональных данных",
          en: "10. Cross-Border Transfer of Personal Data"
        },
        content: {
          uz: [
            "10.1. Operator shaxsiy ma'lumotlarni transchegaraviy uzatishni boshlashdan oldin shaxsiy ma'lumotlarni transchegaraviy uzatish rejalashtirilgan xorijiy davlat organlari, xorijiy jismoniy shaxslar, xorijiy yuridik shaxslar haqida ma'lumot olishi shart (bunday xabarnoma shaxsiy ma'lumotlarni qayta ishlash to'g'risidagi xabarnomadan alohida yuboriladi).",
            "10.2. Operator yuqoridagi xabarnomani yuborishdan oldin, shaxsiy ma'lumotlarni transchegaraviy uzatish rejalashtirilgan xorijiy davlat organlari, xorijiy jismoniy shaxslar, xorijiy yuridik shaxslar haqida ma'lumot olishi shart."
          ],
          ru: [
            "10.1. Оператор обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своем намерении осуществлять трансграничную передачу персональных данных до начала такой деятельности (такое уведомление направляется отдельно от уведомления об обработке персональных данных).",
            "10.2. Оператор обязан получить информацию о зарубежных государственных органах, иностранных физических лицах, иностранных юридических лицах, которым планируется трансграничная передача персональных данных, до направления вышеуказанного уведомления."
          ],
          en: [
            "10.1. The operator must notify the authorized body for the protection of personal data subjects' rights about its intention to carry out cross-border transfer of personal data before starting such activity (such notification is sent separately from the notification of personal data processing).",
            "10.2. The operator must obtain information about foreign state authorities, foreign individuals, foreign legal entities to whom cross-border transfer of personal data is planned, before sending the above notification."
          ]
        }
      },
      section11: {
        title: {
          uz: "11. Shaxsiy ma'lumotlarning maxfiyligi",
          ru: "11. Конфиденциальность персональных данных",
          en: "11. Confidentiality of Personal Data"
        },
        content: {
          uz: [
            "Operator va shaxsiy ma'lumotlarga kirish huquqiga ega boshqa shaxslar, federal qonunda boshqacha tartib nazarda tutilmagan bo'lsa, shaxsiy ma'lumotlar subyektining roziligisiz uchinchi shaxslarga shaxsiy ma'lumotlarni oshkor qilmaslik va tarqatmaslik majburiyatiga ega."
          ],
          ru: [
            "Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом."
          ],
          en: [
            "The operator and other persons who have access to personal data are obligated not to disclose to third parties and not to distribute personal data without the consent of the personal data subject, unless otherwise provided by federal law."
          ]
        }
      },
      section12: {
        title: {
          uz: "12. Yakuniy qoidalar",
          ru: "12. Заключительные положения",
          en: "12. Final Provisions"
        },
        content: {
          uz: [
            "12.1. Foydalanuvchi o'z shaxsiy ma'lumotlarini qayta ishlash bo'yicha har qanday savollar bilan bekirovatravel@gmail.com elektron pochta manziliga murojaat qilib, tushuntirish olishi mumkin.",
            "12.2. Operator tomonidan shaxsiy ma'lumotlarni qayta ishlash siyosatiga kiritilgan har qanday o'zgarishlar ushbu hujjatda aks ettiriladi. Siyosat yangi versiya bilan almashtirilgunga qadar amal qiladi.",
            "12.3. Siyosatning amaldagi versiyasi http://bekirova.uz/privacy manzilida Internetda erkin foydalanish uchun joylashtirilgan."
          ],
          ru: [
            "12.1. Пользователь может получить разъяснения по вопросам обработки своих персональных данных, обратившись к Оператору по электронной почте bekirovatravel@gmail.com.",
            "12.2. Любые изменения в политике обработки персональных данных Оператором будут отражены в данном документе. Политика действует бессрочно до замены ее новой версией.",
            "12.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу http://bekirova.uz/privacy."
          ],
          en: [
            "12.1. The user can receive clarification on the processing of their personal data by contacting the Operator via email at bekirovatravel@gmail.com.",
            "12.2. Any changes to the personal data processing policy by the Operator will be reflected in this document. The Policy remains valid indefinitely until replaced with a new version.",
            "12.3. The current version of the Policy is freely available on the Internet at http://bekirova.uz/privacy."
          ]
        }
      }
    }
  }
};

function Polise() {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang") || "uz";
  const t = translations[lang];

  const renderContent = (content) => {
    // Agar content obyekt bo'lsa va til kalitlari mavjud bo'lsa
    if (content && content[lang]) {
      return content[lang];
    }

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    // Agar content array bo'lsa
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === 'string') {
          return <p key={index} className="mb-4 leading-relaxed">{item}</p>;
        }
        
        if (item.subtitle && item.items) {
          return (
            <div key={index} className="mb-6">
              <h3 className="font-semibold mb-3">{item.subtitle}</h3>
              <ul className="list-disc pl-6 space-y-3">
                {item.items.map((listItem, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return null;
      });
    }
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        {t.title}
      </h1>

      {Object.entries(t.sections).map(([sectionKey, section]) => (
        <section key={sectionKey} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            {typeof section.title === 'object' ? section.title[lang] : section.title}
          </h2>
          
          {typeof section.content === 'object' && section.content[lang] ? (
            // Agar content til kalitlariga ega bo'lsa
            Array.isArray(section.content[lang]) ? 
              section.content[lang].map((item, index) => (
                <p key={index} className="mb-4 leading-relaxed">{item}</p>
              )) : null
          ) : (
            // Agar content oddiy array yoki boshqa turdagi ma'lumot bo'lsa
            renderContent(section.content)
          )}
        </section>
      ))}
    </div>
  );
}

export default Polise;
