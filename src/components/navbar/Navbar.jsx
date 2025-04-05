import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

// Icons
import { GoDotFill } from "react-icons/go";
import { IoIosHome } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="nav">
      <div className="nav-logo" data-aos='fade-down'>
        Zaine Ancheta.
        <p className="logo-text" data-aos='zoom-in'>
          Computer Science and Data Science Student
        </p>
        <div className="nav-icons">
          <GoDotFill color='#3A86FF'/>
          <GoDotFill color='#fd2832'/>
          <GoDotFill color='#32ca46'/>
          <GoDotFill color='#FFEA00'/>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu} data-aos='fade-down'>
        <GiHamburgerMenu size={30} />
      </div>

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li onClick={closeMenu}>
          <Link to="hero" smooth={true} duration={1000} offset={-70} data-aos='fade-down'>Home</Link>
          <div className="button-icons" data-aos='fade-up'><IoIosHome /></div>
        </li>
        <li onClick={closeMenu}>
          <Link to="skills" smooth={true} duration={1000} offset={-70} data-aos='fade-down'>Skills</Link>
          <div className="button-icons" data-aos='fade-up'><FaBrain /></div>
        </li>
        <li onClick={closeMenu}>
          <Link to="experience" smooth={true} duration={1000} offset={-70} data-aos='fade-down'>Experience</Link>
          <div className="button-icons" data-aos='fade-up'><FaTools /></div>
        </li>
        <li onClick={closeMenu}>
          <Link to="projects" smooth={true} duration={1000} offset={-70} data-aos='fade-down'>Projects</Link>
          <div className="button-icons" data-aos='fade-up'><IoExtensionPuzzle /></div>
        </li>
        <li className="nav-contact" onClick={closeMenu} data-aos='fade-down'>
          <Link to="contact" smooth={true} duration={1000} offset={-70} data-aos='fade-down'>Contact Me</Link>
          <div className="button-icons" data-aos='fade-up'><FaLink /></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
