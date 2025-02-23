 import React from 'react'
 import {  FiSun, FiMoon } from 'react-icons/fi';
import { NavLink } from 'react-router'
 
 const Navbar = ({darkMode, setDarkMode}) => {
   return (
    <> 
  
  <div className={` flex justify-between items-center px-6 sm:px-10  py-4 fixed top-0 w-full left-0 z-10 transition-all duration-300  
      ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
       <h1 className='font-bold text-lg sm:text-xl whitespace-nowrap '>Ashutosh Rathod</h1> 
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-4  ">

       <NavLink to="/"  className={({ isActive }) =>
    isActive ? "text-red-500" : ""
  }>
          Home
       </NavLink >
       <NavLink to="/about"  className={({ isActive }) =>
    isActive ? "text-red-500 " :  ""
  }>
        About
       </NavLink>
       <NavLink to="/skills"  className={({ isActive }) =>
    isActive ? "text-red-500 " : ""
  }>
        Skills
       </NavLink>
       <NavLink to="/projects"  className={({ isActive }) =>
    isActive ? "text-red-500 " : ""
  }>
        Projects
       </NavLink>
       <NavLink to="/contact"  className={({ isActive }) =>
    isActive ? "text-red-500 " : ""
  }>
        Contact
       </NavLink>
        </nav> 
        <button className="text-2xl" onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? " Light Mode" : " Dark Mode"}
          > {darkMode ? <FiSun/> : <FiMoon/>}</button>  
       
     </div>
     </>
   )
 }
 
 export default Navbar
 
 