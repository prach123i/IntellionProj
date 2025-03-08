import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaIndustry, FaTruck, FaHeartbeat, FaGlobe, FaShoppingCart, FaCode } from "react-icons/fa";

const industriesData = [
  { icon: <FaIndustry className="text-blue-600" size={50} />, title: "Manufacturing", description: "Enhancing efficiency with AI-driven solutions." },
  { icon: <FaTruck className="text-green-600" size={50} />, title: "Logistics", description: "Optimizing transportation networks worldwide." },
  { icon: <FaHeartbeat className="text-red-600" size={50} />, title: "Healthcare", description: "Revolutionizing patient care with technology." },
  { icon: <FaGlobe className="text-yellow-500" size={50} />, title: "Fintech & Banking", description: "Delivering secure financial solutions." },
  { icon: <FaShoppingCart className="text-purple-600" size={50} />, title: "E-Commerce", description: "Empowering brands with digital transformation." },
  { icon: <FaCode className="text-teal-500" size={50} />, title: "Software & SaaS", description: "Building scalable applications worldwide." },
];

const Industries = () => (
  <section className="py-16 px-8 bg-gray-50 text-gray-800 text-center">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold tracking-tight">Industries We Serve</h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
        Driving innovation across multiple sectors with customized solutions.
      </p>

      {/* Swiper Carousel */}
      <div className="mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="py-8"
        >
          {industriesData.map((industry, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center transition-all duration-300"
              >
                {industry.icon}
                <h3 className="text-2xl font-semibold mt-4">{industry.title}</h3>
                <p className="mt-3 text-gray-600">{industry.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Explore More
      </motion.button>
    </div>
  </section>
);

export default Industries;
