 import React from 'react'
 import { useState ,useEffect } from 'react'
 const Home = () => {
  const [texts] = useState( 
    [
      
      "Aspiring React JS Developer",
      " Aspiring Full Stack Developer",
      "MERN Stack Enthusiast",
      "Tech Explorer",
    ]
  )
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval
  
    
  }, [index])
  
   return (
     <div >
       <h1 className='text-4xl'>Ashutosh Rathod</h1>
       <p className='text-3xl font-bold  text-purple-400 '>{texts[index]}</p>
       <div className="flex space-x-4 mt-6 justify-center">
        <a
          href="https://github.com/RATHODASHUTOSHSINGHGOVINDSINGH"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-white bg-gray-500    hover:bg-blue-700 rounded-lg transition text-lg font-medium shadow-md"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ashutoshrathod"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2   text-white bg-gray-500 hover:bg-blue-700 rounded-lg transition text-lg font-medium shadow-md "
        >
          LinkedIn
        </a>
        </div>
      </div>
     
   )
 }
 
 export default Home
 