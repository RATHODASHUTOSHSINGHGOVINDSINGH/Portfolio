import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        " A dynamic, fully responsive portfolio built with React. It showcases projects and skills with smooth navigation using React Router. Designed for easy use, accessibility, SEO, and high performance.",
      tech: ["React", "React Router", "Tailwind CSS", "React Hook Form"],
    },
    {
      title: "Task Management App",
      description:
        "  A simple and easy-to-use to-do list app with add, delete, and edit features. Helps manage tasks smoothly with a clean interface.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Snake Water Gun Game",
      description:
        " A fun interactive game where players compete against an AI with random moves. Features smooth animations and an engaging design..",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="py-16 text-center" >
      <h2 className="text-3xl font-bold  mb-8">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4  ">
        {projects.map(({ title, description, tech }, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full sm:w-80 p-4 "
          >
            <h3 className="text-xl font-semibold ">{title}</h3>
            <p className=" mt-2 text-sm">{description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {tech.map((techItem, i) => (
                <span
                  key={i}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
