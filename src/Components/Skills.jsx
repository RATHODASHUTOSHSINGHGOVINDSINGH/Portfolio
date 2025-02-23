 import React from 'react'
 
 const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg"},
        { name: "CSS", icon: "/icons/css-svgrepo-com.svg" },
        { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
        { name: "React", icon: "/icons/react-svgrepo-com.svg" },
        { name: "Bootstrap", icon: "/icons/bootstrap-4-logo-svgrepo-com.svg " },
        { name: "TailwindCSS", icon: "/icons/tailwindcss-icon-svgrepo-com.svg" },
        
        
        
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "/icons/nodejs-logo-svgrepo-com.svg" },
        { name: "Express.js", icon: "/icons/express-svgrepo-com.svg" },
        { name: "MongoDB", icon: "/icons/mongo-svgrepo-com.svg" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "NPM", icon: "/icons/npm-svgrepo-com.svg" },
      ],
    },
  ];
  
   return (
      <>
        <section id="skills" className="skills py-12">
        <h2>Skills</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {skillsData.map((category, index) => (
            <div className="flex flex-col items-center m-5 " key={index}>
              <h3>{category.category}</h3>
              {category.skills.map((skill, i) => (
                <div className="flex flex-col items-center m-2  " key={i}>
                  <img  src={skill.icon} alt={skill.name} width="50" height="50" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      
      
      </>
   )
 }
 
 export default Skills
 