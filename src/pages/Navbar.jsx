import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const links = ["About Us", "Services", "Portfolio", "Team", "Contact"];

  return (
    <nav className="bg-blue-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl items-center flex space-x-1 font-bold text-white">
            <img className="w-12 h-12 rounded-full" src={logo} alt="logo" />
            <span className="text-shadow-white">DreamTech</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase().replace(/\s+/g, "")}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-600 cursor-pointer font-medium"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-2xl text-white">
            {navOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase().replace(/\s+/g, "")}
                smooth={true}
                duration={500}
                onClick={() => setNavOpen(false)}
                className="text-gray-700 hover:text-blue-600 cursor-pointer font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
