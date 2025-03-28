import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-logo">Zaine Ancheta</div>
        
        <ul className="nav-menu">
            <li>Home</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Skills</li>
            <li className="nav-contact">Contact Me</li>
        </ul>
    </div>
  )
}

export default Navbar