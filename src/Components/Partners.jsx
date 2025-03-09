import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Partners = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="p-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center"
  >
    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-4xl font-extrabold"
    >
      🌟 Trusted by Industry Leaders
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="mt-4 text-lg text-gray-300"
    >
      We collaborate with top-tier companies to drive innovation and excellence.
    </motion.p>

    {/* Swiper for Partner Logos */}
    <div className="mt-10">
      <Swiper
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="pb-8"
      >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white p-5 rounded-xl shadow-lg flex items-center justify-center h-28"
            >
              <img
                src={`/partner${index}.png`}
                alt={`Partner ${index}`}
                className="h-14 object-contain"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Collaboration Statement */}
    <div className="mt-12 bg-gray-800 p-8 rounded-xl shadow-lg text-center">
      <h3 className="text-2xl font-bold text-yellow-400">🤝 Stronger Together</h3>
      <p className="mt-4 text-lg text-gray-300">
        Our partners share our vision of transforming industries through cutting-edge technology.  
        These collaborations empower us to deliver <span className="text-yellow-400">innovative solutions</span>,  
        ensuring sustained growth and success.
      </p>
    </div>

    {/* CTA Button */}
    <div className="mt-10">
      <a
        href="#"
        className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        📢 Become a Partner
      </a>
    </div>
  </motion.section>
);

export default Partners;
