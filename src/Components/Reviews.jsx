import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    review:
      "Finolity has been instrumental in our digital transformation journey. Their expertise and dedication have helped us achieve remarkable results.",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    position: "CTO, InnovateX",
    review:
      "The team at Finolity is exceptional. They understand our needs and deliver solutions that exceed our expectations.",
    rating: 5,
  },
];

const ReviewStars = ({ rating }) => (
  <div className="flex justify-center text-yellow-400 text-xl">
    {Array.from({ length: rating }).map((_, i) => (
      <FaStar key={i} />
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Review Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <p className="text-lg font-semibold text-gray-700 uppercase tracking-wide">
            Trusted by Businesses Worldwide
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Rated 5 Stars on Clutch & Beyond
          </h2>
        </motion.div>

        {/* Clutch Review Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center mt-8"
        >
          <p className="text-lg font-semibold text-gray-700">Reviewed on</p>
          <div className="flex items-center gap-2 my-2">
            <ReviewStars rating={5} />
          </div>
          <div className="flex items-center gap-2">
            <img src="/clutch-logo.png" alt="Clutch Logo" className="h-8" />
            <p className="text-gray-700 font-semibold">Finolity</p>
          </div>
          <p className="text-gray-500 mt-2">2K+ Verified Reviews</p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10"
        >
          {[
            { value: "08", label: "Years Proven Track Record" },
            { value: "98%", label: "Customer Satisfaction" },
            { value: "470+", label: "Projects Completed" },
            { value: "3 Mins", label: "Average Response Time" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-4xl font-bold text-blue-600">{stat.value}</h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-blue-500 text-3xl mr-3" />
                  <p className="text-gray-700">{review.review}</p>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
