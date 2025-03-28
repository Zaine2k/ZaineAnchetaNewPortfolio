import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-logo" data-aos='fade-down'>PORTFOLIO.
          <p className='logo-text' data-aos='fade-left'>Computer Science and Data Science</p>
        </div>
        
        <ul className="nav-menu">
            <li data-aos='fade-down'>Home</li>
            <li data-aos='fade-down'>Skills</li>
            <li data-aos='fade-down'>Experience</li>
            <li data-aos='fade-down'>Projects</li>
            <li className="nav-contact" data-aos='fade-down'>Contact Me</li>
        </ul>
    </div>
  )
}

export default Navbar