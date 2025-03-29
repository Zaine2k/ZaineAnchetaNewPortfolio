import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';

// Component Imports
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

// AOS
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div>
      <Navbar />
      <hr className="divider" data-aos='fade-up'/> 

      <Element name="hero"><Hero /></Element>
      <Element name="skills"><Skills /></Element>

      <hr className="divider" data-aos='fade-down'/> 
      <Navbar />
      <hr className="divider" data-aos='fade-up'/> 

      <Element name="experience"><Experience /></Element>
      <Element name="projects"><Projects /></Element>
      <hr className="divider" data-aos='fade-up'/>
      <Navbar /> 
      <hr className="divider" data-aos='fade-up'/>
      <Element name="contact"><Contact /></Element>
    </div>
  );
};

export default App;
