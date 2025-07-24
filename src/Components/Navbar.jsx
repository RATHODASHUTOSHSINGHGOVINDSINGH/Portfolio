import React, { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 w-full left-0 z-10 transition-all duration-300 p-4 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center px-6 sm:px-10 py-4">
           
          <Link  to="/" className="text-xl font-bold " aria-label="Ashutosh Rathod Portfolio">
          Ashutosh Rathod
          </Link>

          {/* Mobile Controls - Dark Mode + Hamburger */}
          <div className="sm:hidden flex items-center gap-3">
            <button
              className="text-xl"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex flex-wrap justify-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Dark Mode Toggle */}
          <button
            className="text-2xl hidden sm:block"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="sm:hidden flex flex-col items-center gap-4 mt-4 pb-4  ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "hover:text-red-500 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
