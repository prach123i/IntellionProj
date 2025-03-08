import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <h1 className="text-xl font-bold tracking-wide">Intelion</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "Services", "Industries", "Market Research", "Company", "Brands"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-r from-blue-800 to-purple-800 text-center py-4 space-y-4">
          {["Home", "Services", "Industries", "Market Research", "Company", "Brands"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="block py-2 hover:text-gray-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
