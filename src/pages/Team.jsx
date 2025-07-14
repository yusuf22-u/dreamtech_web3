import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../assets/logo.jpg'
import lamin from '../assets/images.jpg'
import mariama from '../assets/isatou.png'
import jatta from '../assets/p3.png'

const teamMembers = [
  {
    name: "Yusupha Darboe",
    role: "CEO & Software Lead",
    degree: "BSc in Information Systems",
    profilePic: `${logo}`,
    socials: {
      linkedin: "https://linkedin.com/in/yusuphadarboe",
      twitter: "https://twitter.com/yusuphadarboe",
    },
  },
  {
    name: "Lamin Ceesay",
    role: "Marketing & PR",
    degree: "Master’s in Public Relations",
    profilePic: `${lamin}`,
    socials: {
      linkedin: "https://linkedin.com/in/lamin-ceesay",
      twitter: "https://twitter.com/lamin-ceesay",
    },
  },
  {
    name: "Mariama Mbemga",
    role: "Front-End Developer",
    degree: "BSc in Information Systems",
    profilePic: `${mariama}`,
    socials: {
      linkedin: "https://linkedin.com/in/mariama-mbemga",
    },
  },
  {
    name: "Muhammed Y. Barry",
    role: "Back-End Developer",
    degree: "BSc in Geography",
    profilePic: `${logo}`,
    socials: {
      linkedin: "https://linkedin.com/in/muhammed-barry",
      twitter: "https://twitter.com/muhammedbarry",
    },
  },
  {
    name: "Lamin Kanyi",
    role: "Graphic Designer",
    degree: "BSc in Information Technology",
    profilePic: `${logo}`,
    socials: {
      linkedin: "https://linkedin.com/in/lamin-kanyi",
    },
  },
  {
    name: "Saikou S Darboe",
    role: "Communication and Marketing",
    degree: "Msc in Public Administractions",
    profilePic: `${jatta}`,
    socials: {
      twitter: "https://twitter.com/lamin-jatta",
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-transform hover:-translate-y-1"
            >
              <img
                src={member.profilePic}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-blue-200"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-1">{member.name}</h3>
              <p className="font-medium">{member.role}</p>
              <p className="text-sm mt-1 text-gray-600">{member.degree}</p>
              <div className="mt-4 flex justify-center space-x-4">
                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 text-xl"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {member.socials?.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-xl"
                  >
                    <FaTwitter />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
