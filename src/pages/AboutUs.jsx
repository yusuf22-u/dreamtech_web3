import logo from '../assets/logo.jpg'

const AboutUs = () => {
  return (
    <section id="aboutus" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-600 mb-6">About Us</h2>
          <p className="text-lg mb-4 leading-relaxed">
            <strong className="text-blue-700">DreamTech</strong> is a software development company focused on building
            custom web applications for organizations and institutions. Our objective is to help organizations transition
            to digital systems by providing efficient, user-friendly, and secure web-based solutions. We specialize in developing systems that enable institutions to effectively manage their data and streamline daily operations.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            DreamTech is an officially registered company under the Registrar of Companies Act in The Gambia. The company was founded by <strong className="text-blue-700">Gambians</strong> with vast skills and experience in software development, data management, information technology, and human resource management.
          </p>

          <h3 className="text-2xl font-semibold mt-8 text-blue-600">Our Vision</h3>
          <p className="text-lg mt-2 mb-4 leading-relaxed">
            To ensure quality and efficient data management in enhancing national digital growth and sustainable transformation.
          </p>

          <h3 className="text-2xl font-semibold mt-6 text-blue-600">Our Mission</h3>
          <p className="text-lg mt-2 leading-relaxed">
            To ensure the delivery of high-quality, innovative software solutions tailored to client needs for efficiency and effectiveness, aligned with the best national and international standards.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src={`${logo}`}
            alt="DreamTech Team"
            className="rounded-2xl shadow-lg w-full h-auto max-w-md object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x400?text=DreamTech";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
