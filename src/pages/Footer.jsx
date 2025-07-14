import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-semibold text-lg">DreamTech © {new Date().getFullYear()}</p>
        <p className="text-sm mt-1">
          Empowering Institutions Through Technology | Built with ❤️ in The Gambia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
