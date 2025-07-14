import React from "react";

const testimonials = [
  {
    name: "Mr. Wandifa Cham",
    title: "HR at President's International Award",
    message:
      "DreamTech transformed the way our organization handles data. Their solution was fast, reliable, and tailored to our needs.",
  },
  {
    name: "Mr. Ebrima Darboe",
    title: "Chairman, at Charity 4 Gambia",
    message:
      "The website built by them helped our customer to reach us. Truly efficient and easy to use.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 text-gray-800" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 mb-4">“{t.message}”</p>
              <div>
                <p className="font-semibold text-blue-700">{t.name}</p>
                <p className="text-sm text-gray-600">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
