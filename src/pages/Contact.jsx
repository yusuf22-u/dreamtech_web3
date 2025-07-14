import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Contact Us</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Have a project or idea in mind? We'd love to hear from you. Reach out using the info below.
        </p>
        <div className="space-y-6">
          <div className="flex justify-center items-center space-x-3">
            <FaPhoneAlt className="text-blue-600" />
            <span>+220 3026025 / +220 6533287</span>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <FaEnvelope className="text-blue-600" />
            <span>dreamtech27site@gmail.com</span>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>Bakau Newtown, Opp. Independence Stadium, The Gambia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
