import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr className="divider" />
      <Hero />
      <hr className="divider" />   
      <Skills />
      <hr className="divider" />   
      <Experience />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Contact />
      
      
    </div>
  )
}

export default App
