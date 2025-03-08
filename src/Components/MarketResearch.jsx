import React from "react";
import { motion } from "framer-motion";
import { FaChartBar, FaLightbulb, FaClipboardList, FaProjectDiagram, FaBullseye, FaUsers } from "react-icons/fa";

const MarketResearch = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-10 bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center"
    >
      {/* Main Heading */}
      <h2 className="text-4xl font-extrabold">Market Research & Business Insights</h2>
      <p className="mt-4 text-lg">
        Unlock data-driven strategies to gain a competitive edge in the market.
      </p>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 - Industry Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-gray-900 flex flex-col items-center"
        >
          <FaChartBar className="text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold mt-4">Industry Trends</h3>
          <p className="mt-2 text-center">
            Stay ahead by analyzing market patterns and emerging trends.
          </p>
        </motion.div>

        {/* Card 2 - Strategic Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-gray-900 flex flex-col items-center"
        >
          <FaLightbulb className="text-4xl text-yellow-500" />
          <h3 className="text-xl font-semibold mt-4">Strategic Insights</h3>
          <p className="mt-2 text-center">
            Get tailored business solutions based on real-time market data.
          </p>
        </motion.div>

        {/* Card 3 - Competitor Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-gray-900 flex flex-col items-center"
        >
          <FaClipboardList className="text-4xl text-green-500" />
          <h3 className="text-xl font-semibold mt-4">Competitor Analysis</h3>
          <p className="mt-2 text-center">
            Analyze competitors and refine your business strategy for success.
          </p>
        </motion.div>

        {/* Card 4 - Digital & Brand Marketing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-gray-900 flex flex-col items-center"
        >
          <FaBullseye className="text-4xl text-red-500" />
          <h3 className="text-xl font-semibold mt-4">Digital & Brand Marketing</h3>
          <p className="mt-2 text-center">
            Enhance your brand's presence with cohesive and inventive marketing solutions.
          </p>
        </motion.div>

        {/* Card 5 - Generative AI & Business Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-gray-900 flex flex-col items-center"
        >
          <FaProjectDiagram className="text-4xl text-purple-500" />
          <h3 className="text-xl font-semibold mt-4">Generative AI & Business Intelligence</h3>
          <p className="mt-2 text-center">
            Leverage AI models to craft robust business solutions, unlocking innovation and efficiency.
          </p>
        </motion.div>

        {/* Card 6 - Client-Centric Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 text-gray-900 flex flex-col items-center"
        >
          <FaUsers className="text-4xl text-teal-500" />
          <h3 className="text-xl font-semibold mt-4">Client-Centric Approach</h3>
          <p className="mt-2 text-center">
            Our dedicated team ensures seamless integration, robust security, and unparalleled support.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="mt-8">
        <a
          href="#"
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition"
        >
          Get Started
        </a>
      </div>
    </motion.section>
  );
};

export default MarketResearch;
