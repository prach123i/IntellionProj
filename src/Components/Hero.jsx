import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-4">
            We Manage Your IT, So You Can Manage Your Business.
          </h1>
          <p className="text-lg mb-6">
            Take charge of your business continuity with innovative IT solutions.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg">
            Schedule a Free Consultation
          </button>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <img
            src="/vite.svg" // Replace with your image URL
            alt="IT Solutions"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
