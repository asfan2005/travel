import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function License() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDetails, setImageDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    loadSavedImage();
  }, []);

  const loadSavedImage = async () => {
    try {
      const savedImageData = localStorage.getItem('licenseImage');
      const savedImageDetails = localStorage.getItem('licenseImageDetails');
      
      if (savedImageData && savedImageDetails) {
        setSelectedImage(savedImageData);
        setImageDetails(JSON.parse(savedImageDetails));
      }
    } catch (error) {
      setError("Saqlangan rasmni yuklashda xatolik yuz berdi");
    }
  };

  const handleImageUpload = async (event) => {
    try {
      setLoading(true);
      setError(null);
      
      const file = event.target.files[0];
      
      if (!file) {
        throw new Error("Rasm tanlanmadi");
      }

      // Rasm formatini tekshirish
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error('Faqat JPG, JPEG yoki PNG formatidagi rasmlar qabul qilinadi!');
      }

      // Rasm hajmini tekshirish (5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Rasm hajmi 5MB dan oshmasligi kerak!');
      }

      const imageDetails = {
        name: file.name,
        size: file.size < 1024 * 1024 
          ? `${(file.size / 1024).toFixed(2)} KB`
          : `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        type: file.type,
        lastModified: new Date(file.lastModified).toLocaleString()
      };

      const base64Image = await convertToBase64(file);
      
      // Local storage'ga saqlash
      localStorage.setItem('licenseImage', base64Image);
      localStorage.setItem('licenseImageDetails', JSON.stringify(imageDetails));

      setSelectedImage(base64Image);
      setImageDetails(imageDetails);
    } catch (error) {
      setError(error.message || "Rasmni yuklashda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
    setPassword('');
    setPasswordError('');
  };

  const handleDeleteConfirm = () => {
    if (password === '87654321') {
      try {
        localStorage.removeItem('licenseImage');
        localStorage.removeItem('licenseImageDetails');
        setSelectedImage(null);
        setImageDetails(null);
        setIsModalOpen(false);
        
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      } catch (error) {
        setError('Rasmni o\'chirishda xatolik yuz berdi');
      }
    } else {
      setPasswordError('Noto\'g\'ri parol');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 sticky top-0">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Rasm yuklash</h1>
        
        <div className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div className="flex justify-center">
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleImageUpload}
              disabled={loading}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          )}

          {selectedImage && imageDetails && (
            <div className="mt-4 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">Rasm ma'lumotlari:</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Nomi:</span> {imageDetails.name}</p>
                  <p><span className="font-medium">Hajmi:</span> {imageDetails.size}</p>
                  <p><span className="font-medium">Turi:</span> {imageDetails.type}</p>
                  <p><span className="font-medium">Yuklangan sana:</span> {imageDetails.lastModified}</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={selectedImage}
                  alt="Yuklangan rasm"
                  className="w-full h-auto object-contain max-h-[600px]"
                  onError={() => setError("Rasmni ko'rsatishda xatolik yuz berdi")}
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleDeleteClick}
                  disabled={loading}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Rasmni o'chirish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Admin tekshiruvi</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parolni kiriting"
              className="w-full px-3 py-2 border rounded-lg mb-4"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mb-4">{passwordError}</p>
            )}
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Bekor qilish
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                O'chirish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default License;