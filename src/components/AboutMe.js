import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/hero-bg22.png'; // Adjust path as needed

const AboutSection = () => {
  return (
    <section
      id="aboutme"
      className="min-h-screen px-6 py-20 bg-cover bg-center bg-no-repeat text-gray-800 dark:text-gray-200"
      style={{ backgroundImage: `url('/bcgrnd1.jpg')` }}
    >
      {/* Section Title */}
      <div
        className="container mx-auto text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        {/* <p className="text-lg max-w-4xl mx-auto">
          I'm a full-stack developer with a passion for building intuitive, user-friendly web applications. With experience in React, Node.js, PHP, Ajax, Express.js and modern UI frameworks like Tailwind CSS, I focus on creating elegant and efficient code. I love solving problems, designing smooth user experiences,
          and constantly learning new technologies. I also enjoy collaborating on open-source projects and contributing to the dev community.
        </p> */}
      </div>

      {/* Content Section */}
      <div
        className="container mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-col lg:flex-row items-start gap-10 justify-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:w-1/3">
            <img src={profileImage} alt="Profile" className="w-full max-w-sm rounded-lg shadow-md" />
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-2/3 content">
            <h2 className="text-3xl font-semibold mb-4">Designer & Web Developer.</h2>
            <p className="italic text-gray-600 dark:text-gray-300 mb-6">
              Hard work and dedication are the foundation of every great achievement.
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <ul className="space-y-3">
                <li><strong>🎂 Birthday:</strong> <span>Nov 7, 1997</span></li>
                <li><strong>🌐 Website:</strong> <span>www.example.com</span></li>
                <li><strong>📞 Phone:</strong> <span>+63 909 4114685</span></li>
                <li><strong>🏙️ City:</strong> <span>Muntinlupa, Manila</span></li>
              </ul>
              <ul className="space-y-3">
                <li><strong>🔢 Age:</strong> <span>27</span></li>
                <li><strong>🎓 Degree:</strong> <span>Bachelor</span></li>
                <li><strong>📧 Email:</strong> <span>Jadehaha12@gmail.com</span></li>
                <li><strong>💼 Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>

            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              Embracing responsibilities takes dedication and courage, but it opens the door to real growth and meaningful opportunities.
              Some strive to achieve greatness and push beyond limits. Challenges may arise, but with patience and persistence,
              obstacles become stepping stones. True success comes from wholeheartedly committing to your duties and overcoming
              resistance with resilience and determination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
