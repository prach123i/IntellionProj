import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-8 bg-gradient-to-br from-[#FAF3E0] via-[#FDE68A] to-[#FCA311] text-[#2D3748] text-center"
    >
      <div className="max-w-5xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-extrabold tracking-wide text-[#02735E]"
        >
          🚀 About Intelion
        </motion.h2>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-24 h-1 bg-[#02735E] mx-auto mt-4 rounded-full"
        />

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-lg leading-relaxed"
        >
          Intelion is revolutionizing <strong>financial technology</strong>  
          by integrating **AI-powered analytics**, **secure blockchain**,  
          and **next-gen automation**. We empower businesses to achieve  
          **efficiency, transparency, and trust** in the digital era.
        </motion.p>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#FFA62B] to-[#FF7B00] text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            🌍 Discover More
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
