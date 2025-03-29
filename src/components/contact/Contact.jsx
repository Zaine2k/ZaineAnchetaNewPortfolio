import React from 'react'
import './Contact.css'

// Icons
import { IoMailUnreadSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillFire } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <div className='contact-container' data-aos='fade-down'>
        <h1 className='header-contact'>Contacts and Links.</h1>
        <p className='contact-text'>Let's Collaborate!</p>
        <div className='text-container' data-aos='fade-down'>

          <div className="contact-links">
            <p>
              <a className='email-link' href="mailto:zaineancheta123@gmail.com">zaineancheta123@gmail.com</a>
              <div className="contact-logo">
                <IoMailUnreadSharp size={30} color='#FFD166'/>
              </div>
            </p>

            <p>
              <a className='linkedin-link' href="https://www.linkedin.com/in/zaine-ancheta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <div className="contact-logo">
                  <FaLinkedin size={30} color='#3A86FF'/>
                </div>
            </p>

            <p>
              <a className='github-link' href="https://github.com/Zaine2k" target="_blank" rel="noopener noreferrer">GitHub</a>
              <div className="contact-logo">
                <FaGithub size={30} color='#928dab'/>
              </div>
            </p>

            <p>
              <a className='instagram-link' href="https://www.instagram.com/zaine2k/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <div className="contact-logo">
                <FaSquareInstagram size={30}/>
              </div>
              </p>

            <p>
              <a className='styxlabs-link' href="https://ca.linkedin.com/company/styx-studios" target="_blank" rel="noopener noreferrer">Styx Labs</a>
              <div className="contact-logo">
                <AiFillFire size={30} color='#FF6B35'/>
              </div>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact