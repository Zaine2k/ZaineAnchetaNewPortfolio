import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

// Icons
import { GoDotFill } from "react-icons/go";
import { IoIosHome } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaLink } from "react-icons/fa";

const Navbar = () => {
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

      <ul className="nav-menu">
        <li data-aos="fade-down">
          <Link to="hero" smooth={true} duration={1000} offset={-70}>Home</Link>
          <div className="button-icons">
            <IoIosHome />
          </div>
        </li>
        <li data-aos="fade-down">
          <Link to="skills" smooth={true} duration={1000} offset={-70}>Skills</Link>
          <div className="button-icons">
            <FaBrain />
          </div>
        </li>
        <li data-aos="fade-down">
          <Link to="experience" smooth={true} duration={1000} offset={-70}>Experience</Link>
          <div className="button-icons">
            <FaTools />
          </div>
        </li>
        <li data-aos="fade-down">
          <Link to="projects" smooth={true} duration={1000} offset={-70}>Projects</Link>
          <div className="button-icons">
            <IoExtensionPuzzle />
          </div>
        </li>
        <li className="nav-contact" data-aos="fade-down">
          <Link to="contact" smooth={true} duration={1000} offset={-70}>Contact Me</Link>
          <div className="button-icons">
          <FaLink />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
