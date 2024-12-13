import React from "react";
import { FaUsers, FaHandshake, FaGlobe, FaAward } from 'react-icons/fa';
import { BiTargetLock, BiSupport } from 'react-icons/bi';
import { MdSecurity, MdTravelExplore } from 'react-icons/md';
import CountUp from 'react-countup';

// Statistics data
const stats = [
  {
    icon: FaUsers,
    end: 1000,
    suffix: "+",
    title: "Satisfied Clients",
  },
  {
    icon: MdTravelExplore,
    end: 50,
    suffix: "+",
    title: "Travel Destinations",
  },
  {
    icon: FaHandshake,
    end: 100,
    suffix: "+",
    title: "Partners",
  },
  {
    icon: FaAward,
    end: 15,
    suffix: "+",
    title: "Years of Experience",
  },
];

// Counter component
const StatCounter = ({ icon: Icon, end, suffix, title }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
      <Icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
      <h3 className="text-xl font-bold text-blue-800">
        <CountUp
          end={end}
          suffix={suffix}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
        />
      </h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

function AboutUs() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 sm:mt-24">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-600 mb-8">
        TravelCations - Your Trusted Travel Partner in Uzbekistan
      </h1>

      {/* Main image */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Advantour Team"
          className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, index) => (
          <StatCounter
            key={index}
            icon={stat.icon}
            end={stat.end}
            suffix={stat.suffix}
            title={stat.title}
          />
        ))}
      </div>

      {/* Company Introduction */}
      <div className="mb-16 bg-gradient-to-r from-blue-50 to-white p-6 sm:p-8 rounded-xl shadow-lg">
        <div className="space-y-4 text-gray-700">
          <p className="text-base sm:text-lg leading-relaxed">
            Established on December 10, 2024, our travel company offers the highest level of service 
            on all routes across Uzbekistan while maintaining affordable prices.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            We specialize in hosting guests from Europe, Asia, and America, as well as providing 
            local tourism services. For residents and visitors of our beautiful republic, we develop 
            interesting routes and exciting tours throughout Uzbekistan.
          </p>
        </div>
      </div>

      {/* Additional Services */}
      <div className="mb-16 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Our Additional Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Travel Support</h3>
            <p className="text-gray-700">Visa support for Uzbekistan</p>
            <p className="text-gray-700">Hotel bookings across the country</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Tour Types</h3>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-700">Mountain tours</p>
              <p className="text-gray-700">Hiking tours</p>
              <p className="text-gray-700">Horse riding tours</p>
              <p className="text-gray-700">Camel tours</p>
              <p className="text-gray-700">Cycling tours</p>
              <p className="text-gray-700">Agritourism</p>
              <p className="text-gray-700">Botanical tours</p>
              <p className="text-gray-700">Business tours</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg md:col-span-2">
            <h3 className="font-semibold text-blue-800 mb-2">Entertainment Programs</h3>
            <p className="text-gray-700">
              We offer various entertainment programs in excursion cities including folklore shows,
              factory visits, pottery workshops, and airport/station transfers with national artists
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-4 text-blue-800">Contact Us:</h3>
          <div className="space-y-2 text-gray-600">
            <p className="font-medium">Phone: +998 90 711 33 38</p>
            <p className="text-sm">(Available on WhatsApp & Telegram)</p>
            <p className="font-medium">Email: travelcationsuz@gmail.com</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-semibold text-lg mb-4 text-blue-800">Working Hours:</h3>
          <div className="space-y-2 text-gray-600">
            <p>Monday - Friday: 9:00 - 18:00</p>
            <p>Saturday: 10:00 - 15:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;