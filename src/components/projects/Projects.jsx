import React from 'react';
import './Projects.css';

// Image Imports
import btmic from '../../assets/BTMIC-git.png';
import styxlab from '../../assets/styx-lab-thumb.png';
import portfolio from '../../assets/portfolio-thumbnail.png';
import hap from '../../assets/hap-git.png';

const Projects = () => {
  return (
    <div>
      <div className="project-container">
        <h2 className="header-project" data-aos='fade-up'>Projects.</h2>
        <p className='header-project-text' data-aos='fade-up'>A collection of my work so far.</p>

        <div className="project-grid">

          <div className="textbox-project" data-aos='fade-up'>
            <p className="project-title">Portfolio Website</p>
            <p className="project-text">You're viewing it right now!</p>
            <div className="project-logo">

            </div>
            <img className="project-image" src={portfolio} alt="Portfolio Website" />
          </div>

          <div className="textbox-project" data-aos='fade-up'>
            <p className="project-title">Styx Labs Website</p>
            <p className="project-text">Under Construction.</p>
            <div className="project-logo">

            </div>
            <img className="project-image" src={styxlab} alt="Styx Labs Website" /> 
          </div>

          <div className="textbox-project" data-aos='fade-up'>
            <p className="project-title">Brain Tumor MRI Image Classifier</p>
            <p className="project-text">
              Designed a Convolutional Neural Network (CNN) to classify brain MRI images into “tumor” vs. “no tumor.”
              Leveraged data augmentation (e.g., rotation, zoom) and iterative tuning of model depth, dropout, and learning rates.
              The model achieved an 85–90% accuracy.
            </p>
            <div className="project-logo">
            </div>
            <img className="project-image" src={btmic} alt="Brain Tumor Classifier" />
            
          </div>

          <div className="textbox-project" data-aos='fade-up'>
            <p className="project-title">Heart Disease Predictor</p>
            <p className="project-text">
              A heart disease predictor project using Python, Pandas, scikit-learn, NumPy and Seaborn.
              I developed and trained a Random Forest Classifier model to predict if a patient has heart disease based on health attributes.
              The model achieved an accuracy of 85%.
            </p>
            <div className="project-logo">

            </div>
            <img className="project-image"  src={hap} alt="Heart Disease Predictor" />
          </div>

          <div className="textbox-project" data-aos='fade-up'>
            <p className="project-title">Financial Tracker</p>
            <p className="project-text">
              A simple finance tracker project made with Python, Matplotlib, Pandas and Streamlit.
              The dashboard allows the user to add transactions and see breakdowns by category.
            </p>
            <div className="project-logo">

            </div>
          </div>

          <div className="textbox-project" data-aos='fade-up'>
            <p className="project-title">Brick Breaker Game</p>
            <p className="project-text">
              A brick breaker game clone programmed in Java using JavaFX. I handled the life system, basic physics, and debugging.
            </p>
            <div className="project-logo">

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
