import React, { useState } from "react";

function Booking() {
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
            Submit Your Travel Request
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Travel Date
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
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@mail.com"
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+998 90 123 45 67"
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional information about your travel..."
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
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-center text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                  ✅ Your request has been successfully submitted!
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-center text-sm text-red-600 bg-red-50 p-2 rounded-lg">
                  ❌ An error occurred. Please try again.
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