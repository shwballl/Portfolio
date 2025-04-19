import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TechSkills from './components/TechSkills'
import Work from './components/Work'
import Education from './components/Education'

function App() {

  return (
    <>
    <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
      <Navbar />
      <About />
      <TechSkills />
      <Work />
      <Education />
      <Projects />
      <Contact />
      </div>
    </>
  )
}

export default App
