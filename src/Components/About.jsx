import React from "react";

const About = () => {
  return (
    <>
          <section id="about" className="flex justify-center items-center   ">
      <div className="max-w-md w-full  p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg mb-4 ">
        I am Ashutosh Rathod, a BTech IT student at Silver Oak University, passionate about building fast, scalable, and user-friendly web applications.
        </p>

        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="bg-blue-500 hover:bg-blue-700 p-3 text-white rounded-2xl">
            HTML
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 p-3 text-white rounded-2xl "> 
            CSS
          </button>
          <button className=" bg-blue-500 hover:bg-blue-700 p-3 text-white rounded-2xl">JavaScript

          </button>
          <button className="bg-blue-500 hover:bg-blue-700 p-3 text-white rounded-2xl">React.js</button>
          <button className="bg-blue-500 hover:bg-blue-700 p-3 text-white rounded-2xl">Node.js</button>
          <button className="bg-blue-500 hover:bg-blue-700 p-3 text-white rounded-2xl">MongoDB</button>
        </div>

        <h3 className="text-lg font-semibold mb-4">Certifications</h3>
        <ul className="list-disc pl-5 mb-6">
          <li>
          Responsive Web Design freeCodeCamp   </li>
          <li> 
          Modern JavaScript​: ES6 Basics Coursera</li>
        </ul>

        <h3 className="text-lg font-semibold mb-4 ">Connect</h3>
        <div className="flex space-x-4 justify-center">
          <a href="https://www.linkedin.com/in/ashutoshrathod" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700">
            LinkedIn
          </a>
          <a href="https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-700">
            GitHub
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
