import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-[#001F3F] to-[#004080] text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left: Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-[#00A9CE]">Intelion</h2>
            <p className="text-gray-300 mt-2">
              Building a smarter, more connected financial future.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h3 className="text-lg font-semibold text-[#00A9CE] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-[#00A9CE] transition">Services</a></li>
              <li><a href="#industries" className="text-gray-300 hover:text-[#00A9CE] transition">Industries</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#00A9CE] transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#00A9CE] transition">Contact</a></li>
            </ul>
          </div>

          {/* Right: Contact & Social Icons */}
          <div className="w-full md:w-1/3 text-right">
            <h3 className="text-lg font-semibold text-[#00A9CE] mb-4">Contact Us</h3>
            <p className="text-gray-300">📞 0612-2500-971</p>
            <p className="text-gray-300">📧 info@finolity.com</p>
            <div className="flex justify-end mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#00A9CE] transition"><FaFacebookF /></a>
              <a href="#" className="text-gray-300 hover:text-[#00A9CE] transition"><FaTwitter /></a>
              <a href="#" className="text-gray-300 hover:text-[#00A9CE] transition"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-300 hover:text-[#00A9CE] transition"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-500 pt-4 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Intelion. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
