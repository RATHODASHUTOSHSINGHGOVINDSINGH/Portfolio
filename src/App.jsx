 
import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import React from 'react'
import { Route } from 'react-router'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
 import { useState,useEffect } from 'react'
import Footer from './Components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)
   
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);

  }, [darkMode])
  
 
  return (
    // Navbar is a common component that will be displayed on every page.
    <div className= "min-h-screen w-full flex flex-col">
    <BrowserRouter>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
    <div className='pt-16 flex-grow '> 
    <Routes>
      <Route path='/' index element={<> <Home/></>}></Route>
      <Route path='/about' element={<> <About/></>}></Route>
      <Route path='/skills' element={<> <Skills/></>}></Route>
      <Route path='/projects' element={<> <Projects/></>}></Route>
      <Route path='/contact' element={<> <Contact/></>}></Route>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter> 
    </div>
     
  )
}

export default App
