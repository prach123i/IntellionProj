import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaChartLine, FaProjectDiagram, FaDatabase, FaMobileAlt, FaLightbulb } from "react-icons/fa";

const services = [
  {
    icon: <FaChartLine />,
    title: "Business Consulting",
    description: "Strategic insights and innovative solutions to drive business growth.",
  },
  {
    icon: <FaCode />,
    title: "Web & Software Development",
    description: "Custom software and web applications tailored to your needs.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Product Development",
    description: "From ideation to launch, we build scalable and market-ready products.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Analytics & AI",
    description: "Leverage AI-driven insights for data-driven decision-making.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Native & cross-platform mobile solutions for businesses of all sizes.",
  },
  {
    icon: <FaLightbulb />,
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Empowering Businesses with Cutting-Edge Solutions</h2>
        <p className="text-lg text-gray-300">
          We provide end-to-end digital solutions to transform businesses and drive innovation.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="text-5xl text-blue-600 mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-center">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <motion.button
          className="px-8 py-3 bg-blue-500 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get a Free Consultation
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
