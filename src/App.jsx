import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import React from 'react'
import { Route } from 'react-router'
import About from './Components/About'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Layout from './Components/Layout'
import PageNotFound from './Components/404Page'

function App() {
  return (
    <div className= "min-h-screen w-full flex flex-col">
    <BrowserRouter>
    <div className='pt-16 flex-grow '> 
    <Routes>
      <Route path='/' element={<Layout/>}> 
      <Route  index element={<> <Home/></>}></Route>
      <Route path='/about' element={<> <About/></>}></Route>
      <Route path='/skills' element={<> <Skills/></>}></Route>
      <Route path='/projects' element={<> <Projects/></>}></Route>
      <Route path='/contact' element={<> <Contact/></>}></Route>
      <Route path='*' element={<><PageNotFound/></>}></Route>
      </Route>
    </Routes>
    </div>
    </BrowserRouter> 
    </div>
     
  )
}

export default App
