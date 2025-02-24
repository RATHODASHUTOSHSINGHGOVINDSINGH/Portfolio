import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <> 
      <div className={`fixed top-0 w-full left-0 z-10 transition-all duration-300 p-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="flex   justify-between items-center px-6 sm:px-10 py-4">
          <h1 className='font-bold text-lg sm:text-xl whitespace-nowrap'>Ashutosh Rathod</h1> 
          
          {/* Hamburger Menu Button */}
          <button className="sm:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex flex-wrap justify-center gap-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-500" : "")}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "text-red-500" : "")}>About</NavLink>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? "text-red-500" : "")}>Skills</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-red-500" : "")}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-red-500" : "")}>Contact</NavLink>
          </nav> 
          
          {/* Dark Mode Toggle */}
          <button className="text-2xl hidden sm:block" onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Light Mode" : "Dark Mode"}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>  
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="sm:hidden flex flex-col items-center gap-4 mt-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-500" : "")} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "text-red-500" : "")} onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? "text-red-500" : "")} onClick={() => setMenuOpen(false)}>Skills</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-red-500" : "")} onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-red-500" : "")} onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <button className="text-2xl mt-2" onClick={() => { setDarkMode(!darkMode); setMenuOpen(false); }}
              aria-label={darkMode ? "Light Mode" : "Dark Mode"}>
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
