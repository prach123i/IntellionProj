import { motion } from "framer-motion";

const Features = () => {
  const features = [
    { title: "AI-Powered Solutions", desc: "Leveraging AI to optimize financial services." },
    { title: "Secure Transactions", desc: "End-to-end encryption for ultimate security." },
    { title: "Blockchain Integration", desc: "Transparency and efficiency with blockchain." },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Key Features</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md text-gray-900"
          >
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
