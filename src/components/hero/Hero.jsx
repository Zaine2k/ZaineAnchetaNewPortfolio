import React from 'react'
import './Hero.css' 
const Hero = () => {
  return (
    <div className='intro'>
      <div className="main-container">
        <h3 className='intro-header'data-aos='fade-right'>Hello, my name is</h3>
        <h1 data-aos='fade-right'>Zaine Ancheta</h1>
        <p className="intro-text" data-aos='fade-right'>
          I'm a passionate Computer Science & Data Science student studying at the University of Calgary 
          who loves programming, software development and data science.
        </p>
      </div>
    </div>
  )
}

export default Hero
