import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div>
        <div className="project-container">
            <h2 className="header-project">Projects</h2>
            <p className='header-project-text'>A collection of my work so far.</p>

            <div className="project-grid">
                <div className="textbox-project">
                <p className="project-title">Data Science and Data Analytics</p>
                <p className="project-text">I have experience with Python, Python Data Science Libraries 
                    (Pandas, NumPy, Matplotlib, Seaborn, TensorFlow and SciKit-Learn), R, Microsoft Excel and PowerBI for data analysis, visualization, and AI.</p>
                </div>
                <div className="textbox-skills">
                <p className="project-title">Frontend Development</p>
                <p className="project-text">I have knowledge and experience with HTML, CSS, JavaScript and frameworks like React, Tailwind and Bootstrap.</p>
                </div>
                <div className="textbox-skills">
                <p className="project-title">Game Development / Music Production</p>
                <p className="project-text">I develop games in Godot using languages C# and GDScript. 
                    I do pixel art and animating using Aseprite, basic 3D modelling with Blender and sound production/audio mixing using FL Studio.</p>
                </div>
                <div className="textbox-skills">
                <p className="project-title">General Programming Skills</p>
                <p className="project-text">I have experience in other languages such as Java and C#.
                    I also have experience with project management and using GitHub for project management and version control.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects