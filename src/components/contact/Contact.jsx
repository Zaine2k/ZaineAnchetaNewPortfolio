import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className='contact-container'>
        <h1 className='header-contact'>Contact Me</h1>
        <p className='contact-text'>Let's Collaborate!</p>
        <div className="contact-links">
          <p>📧 <a href="mailto:zaine@example.com">zaineancheta123@gmail.com</a></p>
          <p>💼 <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/yourgithub" target="_blank">GitHub</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contact