import React from 'react';
import './Experience.css';
import StyxLogo from '../../assets/Styx Logo.png';
import GGGLogo from '../../assets/GGG-logo.png';
import LPLogo from '../../assets/LP-logo.jpg';
import LDSLogo from '../../assets/LDS-logo.png';

const Experience = () => {
  return (
    <div>
      <div className='experience-container' data-aos='fade-down'> 
        <h2 className='header-work' data-aos='fade-right'>Work Experience.</h2>
        <p className='header-work-text'data-aos='fade-right'>
          These experiences have shaped my ability to solve problems and collaborate.
        </p>

        <div className="textbox-work"data-aos='fade-up'>
          <div className="work-flex">
            <div className="work-text">
              <p className='job-title-text'>Co-Founder / Software Developer</p>
              <p className='job-company'>Styx Labs | Calgary, AB</p>
              <p className='job-time'>March 2025 - Present | Hybrid</p>
              <p className='job-description'></p>
            </div>
            <img src={StyxLogo} alt="Styx Logo" className="work-logo" />
          </div>
        </div>

        <div className="textbox-work"data-aos='fade-up'>
          <div className="work-flex">
            <div className="work-text">
              <p className='job-title-text'>Software Developer Intern</p>
              <p className='job-company'>LP Tax Services, LLC | Las Vegas, Nevada</p>
              <p className='job-time'>March 2025 - Present | Remote</p>
              <p className='job-description'></p>
            </div>
            <img src={LPLogo} alt="LP Logo" className="work-logo" />
          </div>
        </div>

        <div className="textbox-work"data-aos='fade-up'>
          <div className="work-flex">
            <div className="work-text">
              <p className='job-title-text'>Music Producer / Sound Designer</p>
              <p className='job-company'>Glass Gecko Games | Calgary, AB</p>
              <p className='job-time'>February 2025 - Present | Hybrid</p>
              <p className='job-description'></p>
            </div>
            <img src={GGGLogo} alt="GGG Logo" className="work-logo" />
          </div>
        </div>

        <div className="textbox-work"data-aos='fade-up'>
          <div className="work-flex">
            <div className="work-text">
              <p className='job-title-text'>Website Developer</p>
              <p className='job-company'>The Church of Jesus Christ of Latter-day Saints: Memorial Ward | Calgary, AB</p>
              <p className='job-time'>January 2025 - Present | Hybrid</p>
              <p className='job-description'></p>
            </div>
            <img src={LDSLogo} alt="LDS Logo" className="work-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
