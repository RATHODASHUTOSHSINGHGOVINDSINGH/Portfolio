import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="flex justify-center items-center py-12">
        <div className="max-w-2xl w-full p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            I am Ashutosh Rathod, a BTech IT student at Silver Oak University, passionate about building fast, scalable, and user-friendly web applications.
          </p>

          <h3 className="text-lg font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
            <div className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              HTML
            </div>
            <div className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              CSS
            </div>
            <div className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              JavaScript
            </div>
            <div className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              React.js
            </div>
            <div className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              Node.js
            </div>
            <div className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              MongoDB
            </div>
            <div className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              Tailwind CSS
            </div>
            <div className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg">
              Firebase
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Certifications</h3>
          <ul className="list-disc pl-5 mb-6">
            <li>Responsive Web Design freeCodeCamp</li>
            <li>Modern JavaScript: ES6 Basics Coursera</li>
          </ul>

          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4 justify-center">
            <a href="https://www.linkedin.com/in/ashutoshrathod" target="_blank" rel="noopener noreferrer"
               className="text-blue-500 font-semibold hover:text-blue-700">
              LinkedIn
            </a>
            <a href="https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH" target="_blank" rel="noopener noreferrer"
               className="text-blue-500 font-semibold hover:text-blue-700">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
