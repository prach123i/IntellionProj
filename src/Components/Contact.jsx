import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-6 bg-gradient-to-b from-[#F7F7F7] via-[#E0E0E0] to-[#F7F7F7] text-gray-900 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold text-black drop-shadow-md"
        >
          📩 Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-5 text-lg text-gray-700"
        >
          Have a question? Let’s chat and create something amazing together.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 bg-white border border-gray-300 p-8 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-400 bg-gray-100 text-gray-900 p-4 w-full rounded-lg focus:ring-2 focus:ring-gray-700 placeholder-gray-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-400 bg-gray-100 text-gray-900 p-4 w-full rounded-lg focus:ring-2 focus:ring-gray-700 placeholder-gray-600"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-400 bg-gray-100 text-gray-900 p-4 w-full rounded-lg mt-5 focus:ring-2 focus:ring-gray-700 placeholder-gray-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-400 bg-gray-100 text-gray-900 p-4 w-full rounded-lg mt-5 focus:ring-2 focus:ring-gray-700 placeholder-gray-600"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-400 bg-gray-100 text-gray-900 p-4 w-full rounded-lg mt-5 focus:ring-2 focus:ring-gray-700 placeholder-gray-600"
            rows="5"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 w-full"
          >
            ✉️ Send Message
          </motion.button>
        </motion.form>
        <div className="mt-10 text-gray-800">
          <p>
            <strong>📞 Phone:</strong> 0612-2500-971
          </p>
          <p>
            <strong>📧 Email:</strong> info@finolity.com
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
