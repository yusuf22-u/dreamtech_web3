import React from "react";
import { Link } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-purple-100 min-h-screen pt-24 flex items-center justify-center">
      <div className="max-w-7xl px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
          Build Beautiful <span className="text-blue-600">Web Solutions</span><br />
          That Make a Difference
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We create modern, scalable, and user-friendly applications for startups, businesses, and organizations.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md font-medium transition"
          >
            View Portfolio <FiArrowRight className="ml-2" />
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full font-medium transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
