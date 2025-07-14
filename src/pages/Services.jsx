import React from "react";
import { FaGlobe, FaDatabase, FaPaintBrush, FaLaptopCode, FaBullhorn } from "react-icons/fa";

const services = [
  { title: "Website Development", icon: <FaGlobe /> },
  { title: "Web Content Management", icon: <FaLaptopCode /> },
  { title: "Custom Web Applications", icon: <FaLaptopCode /> },
  { title: "Database Management", icon: <FaDatabase /> },
  { title: "Graphic Design", icon: <FaPaintBrush /> },
  { title: "Social Media Promotion", icon: <FaBullhorn /> },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-blue-600 text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
