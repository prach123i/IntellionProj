import { motion } from "framer-motion";
import { FaChartLine, FaUniversity, FaIndustry, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const caseStudiesData = [
  {
    icon: <FaChartLine className="text-5xl text-blue-600" />,
    title: "Unacademy's Digital Transformation",
    description: "Discover how our strategic insights and digital solutions revolutionized Unacademy's success.",
    link: "#",
  },
  {
    icon: <FaUniversity className="text-5xl text-green-600" />,
    title: "MM Deemed University's Smart Manufacturing Lab",
    description: "Learn how we empowered MM Deemed University with SOLIDWORKS and advanced Smart Manufacturing.",
    link: "#",
  },
  {
    icon: <FaIndustry className="text-5xl text-purple-600" />,
    title: "Automobile Industry Process Optimization",
    description: "We streamlined workflows and reduced costs in a leading automobile industry using AI-driven automation.",
    link: "#",
  },
  {
    icon: <FaLaptopCode className="text-5xl text-orange-600" />,
    title: "E-commerce Platform Growth",
    description: "Our AI-powered recommendation engine boosted sales and customer engagement for an e-commerce giant.",
    link: "#",
  },
  {
    icon: <FaBriefcase className="text-5xl text-red-600" />,
    title: "Corporate IT Security Enhancement",
    description: "We implemented cutting-edge cybersecurity protocols to safeguard corporate networks and data privacy.",
    link: "#",
  },
];

const CaseStudies = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-10 bg-white text-black text-center"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold">Case Studies</h2>
      <p className="mt-4 text-lg">
        Real-world success stories showcasing our innovative solutions and impact.
      </p>

      {/* Swiper Effect for Case Studies */}
      <div className="mt-8">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="py-6"
        >
          {caseStudiesData.map((caseStudy, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-gray-900 flex flex-col items-center"
              >
                {caseStudy.icon}
                <h3 className="text-xl font-semibold mt-4">{caseStudy.title}</h3>
                <p className="mt-2 text-center">{caseStudy.description}</p>
                <a href={caseStudy.link} className="mt-4 text-blue-600 font-bold hover:underline">
                  Read More →
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Impact Section */}
      {/* Our Impact Section */}
<div className="mt-12 bg-gray-100 text-gray-900 p-8 rounded-xl shadow-lg text-center">
  <h3 className="text-3xl font-extrabold text-gray-800">🌟 Our Impact</h3>
  <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
    Discover how our innovative solutions have helped businesses achieve  
    <span className="font-semibold text-yellow-600"> enhanced efficiency</span>,  
    <span className="font-semibold text-yellow-600"> improved scalability</span>,  
    and <span className="font-semibold text-yellow-600"> elevated customer satisfaction</span>.  
    Our results speak for themselves.
  </p>

  {/* Key Impact Metrics */}
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h4 className="text-2xl font-semibold text-yellow-600">🚀 45% Growth</h4>
      <p className="text-gray-700">Increase in operational efficiency.</p>
    </div>
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h4 className="text-2xl font-semibold text-yellow-600">📈 2x Revenue</h4>
      <p className="text-gray-700">Companies doubled their revenue with us.</p>
    </div>
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h4 className="text-2xl font-semibold text-yellow-600">💡 98% Satisfaction</h4>
      <p className="text-gray-700">Clients reported enhanced user engagement.</p>
    </div>
  </div>
</div>

{/* Call to Action */}
<div className="mt-10 text-center">
  <a
    href="#"
    className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
  >
    🚀 Explore More Case Studies
  </a>
</div>

    </motion.section>
  );
};

export default CaseStudies;
