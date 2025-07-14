import React from "react";

const projects = [
  {
    title: "School Management System",
    description:
      "Built a complete student data and academic records platform for several private schools in Kanifing.",
  },
  {
    title: "Hospital Patient Record System",
    description:
      "Developed a web-based patient management solution for a regional clinic.",
  },
  {
    title: "NGO Website & Portal",
    description:
      "Designed and deployed a full-featured site for a youth empowerment NGO, including a document submission and event calendar system.",
  },
  {
    title: "Business Promotion Campaigns",
    description:
      "Helped over 20 small businesses increase visibility through digital marketing and content management.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
