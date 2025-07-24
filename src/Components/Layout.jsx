import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "false" ? false : true; 
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());  
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
