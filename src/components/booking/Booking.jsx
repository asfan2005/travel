import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Translations obyekti
const translations = {
  en: {
    title: "Submit Your Travel Request",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    travelDate: "Travel Date",
    email: "Email",
    emailPlaceholder: "example@mail.com",
    phone: "Phone Number",
    phonePlaceholder: "+998 90 123 45 67",
    message: "Message",
    messagePlaceholder: "Additional information about your travel...",
    submit: "Submit Request",
    submitting: "Submitting...",
    successMessage: "✅ Your request has been successfully submitted!",
    errorMessage: "❌ An error occurred. Please try again."
  },
  uz: {
    title: "Sayohat so'rovingizni yuboring",
    fullName: "To'liq ism",
    fullNamePlaceholder: "To'liq ismingizni kiriting",
    travelDate: "Sayohat sanasi",
    email: "Elektron pochta",
    emailPlaceholder: "misol@pochta.com",
    phone: "Telefon raqam",
    phonePlaceholder: "+998 90 123 45 67",
    message: "Xabar",
    messagePlaceholder: "Sayohatingiz haqida qo'shimcha ma'lumot...",
    submit: "So'rovni yuborish",
    submitting: "Yuborilmoqda...",
    successMessage: "✅ Sizning so'rovingiz muvaffaqiyatli yuborildi!",
    errorMessage: "❌ Xatolik yuz berdi. Iltimos, qayta urinib ko'ring."
  },
  ru: {
    title: "Отправьте заявку на путешествие",
    fullName: "Полное имя",
    fullNamePlaceholder: "Введите ваше полное имя",
    travelDate: "Дата путешествия",
    email: "Электронная почта",
    emailPlaceholder: "primer@pochta.com",
    phone: "Номер телефона",
    phonePlaceholder: "+998 90 123 45 67",
    message: "Сообщение",
    messagePlaceholder: "Дополнительная информация о вашем путешествии...",
    submit: "Отправить заявку",
    submitting: "Отправка...",
    successMessage: "✅ Ваша заявка успешно отправлена!",
    errorMessage: "❌ Произошла ошибка. Пожалуйста, попробуйте снова."
  }
};

function Booking() {
  const [searchParams] = useSearchParams();
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  useEffect(() => {
    const urlLang = searchParams.get('lang');
    if (urlLang && translations[urlLang]) {
      setLang(urlLang);
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    fullName: "",
    date: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // API call imitation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        fullName: "",
        date: "",
        email: "",
        phone: "",
        message: "",
      });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-10">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-300 mx-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-indigo-800">
            {t.title}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                {t.fullName}
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder={t.fullNamePlaceholder}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                {t.travelDate}
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                {t.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.emailPlaceholder}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                {t.phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder={t.phonePlaceholder}
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                {t.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows="4"
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 ${
                  isSubmitting 
                    ? 'bg-gray-400' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white font-semibold rounded-lg transform hover:-translate-y-0.5 transition duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed`}
              >
                {isSubmitting ? t.submitting : t.submit}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-center text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                  {t.successMessage}
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-center text-sm text-red-600 bg-red-50 p-2 rounded-lg">
                  {t.errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

     
    </div>
  );
}

export default Booking;