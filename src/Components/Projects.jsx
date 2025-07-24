import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce App",
      description:
        "  A React ecommerce app with Firebase Auth and Firestore. Each user gets a private, auto-synced cart accessible only after login. Styled with Tailwind CSS and deployed on Vercel",
      tech: ["React", "React Router", "Tailwind CSS","Firestore", "Firebase Auth"],  
      demoLink: "https://react-ecommerce-app-ashutosh-rathod-projects.vercel.app/",
      githubLink: "https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH/react-ecommerce-app"
    },
    {
      title: " Blog App",
      description:
        " A secure blog app built with React, Firebase Auth, and Tailwind CSS. Only authenticated users can add, edit, or delete their own posts, ensuring full content ownership. Clean UI and fully hosted on Vercel.",
      tech: ["React", "React Router","Tailwind CSS", "Firebase Auth"],
      demoLink: "https://blog-app-ashutosh-rathod-projects.vercel.app/",
      githubLink: "https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH/blog-app"
    },
    {
      title: " Todo List App",
      description:
        "  A todo list app built with React and Tailwind CSS that lets users add, edit, delete, and complete tasks with data saved in LocalStorage",
      tech: ["React", "Tailwind CSS", "React Router"],
      demoLink: "https://todo-app-ashutosh-rathod-projects.vercel.app/",
      githubLink: "https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH/todo-app"
    },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {projects.map(({ title, description, tech, image, demoLink, githubLink }, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full sm:w-80  "
          >
             
            
            {/* Project Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="mt-2 text-sm mb-3">{description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
