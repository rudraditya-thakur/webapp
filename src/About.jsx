import React from 'react';
import { Navbar } from './components';

const About = () => {
  return (
    <div className="w-screen mx-auto py-3 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="text-left">
        <h1 className="text-3xl font-extrabold text-[#569199]">About Medmind Innovision</h1>
        <p className="mt-4 text-lg text-[#569199]">
          Medmind Innovision is a pioneering endeavor committed to revolutionizing healthcare through the strategic application of artificial intelligence (AI) and cutting-edge technologies. Our mission is to redefine the landscape of medical diagnostics, particularly in the early detection of rare diseases, to ensure timely interventions and improved patient outcomes.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-extrabold text-[#569199]">Vision</h2>
        <p className="mt-4 text-lg text-[#569199]">
          At Medmind Innovision, our vision extends beyond conventional medical practices. We envision a future where AI-driven solutions empower individuals to take proactive steps in managing their health and well-being. By leveraging the power of AI, we aim to enhance diagnostic accuracy, personalize treatment plans, and implement predictive analytics, ultimately fostering a healthier tomorrow for individuals and communities worldwide.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-extrabold text-[#569199]">Team</h2>
        <p className="mt-4 text-lg text-[#569199]">
          Our dynamic team comprises four exceptionally talented individuals, each bringing a unique set of skills and expertise to the table:
          <ul className="list-disc pl-8 mt-2">
            <li>Naman Goel: The visionary leader with a passion for leveraging technology to drive positive change in healthcare.</li>
            <li>Rudraditya Thakur: The technical powerhouse, proficient in machine learning and data analytics, dedicated to pushing the boundaries of AI technologies.</li>
            <li>Naman Lalwani: The creative mind, known for his innovative approaches to problem-solving and user-centric design.</li>
            <li>Bhavesh: The meticulous executor, ensuring seamless coordination and execution of projects with his exceptional project management skills.</li>
          </ul>
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-extrabold text-[#569199]">Impact</h2>
        <p className="mt-4 text-lg text-[#569199]">
          The societal impact of Medmind Innovision projects is profound. By focusing on early detection of rare diseases and preventive healthcare measures, we aim to alleviate the burden on healthcare systems, improve patient outcomes, and foster a proactive approach to health management.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-extrabold text-[#569199]">Join Us</h2>
        <p className="mt-4 text-lg text-[#569199]">
          Join us on our transformative journey to redefine healthcare through innovation and technology. Together, we can make a meaningful impact on the lives of individuals and communities worldwide.
        </p>
      </div>
    </div>
  );
};

export default About;