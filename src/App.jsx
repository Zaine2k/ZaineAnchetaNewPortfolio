import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

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
  );
};

export default App;
