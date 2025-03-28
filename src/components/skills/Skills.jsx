import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div>
        
        <div className="skills-container">
            <h2 className="header-skills">Technical Skills</h2>
            <p className='header-skill-text'>A look at my technical expertise and tools.</p>

            <div className="skills-grid">
                <div className="textbox-skills">
                <p className="skill-title">Data Science and Data Analytics</p>
                <p className="skill-text">I have experience with Python, Python Data Science Libraries 
                    (Pandas, NumPy, Matplotlib, Seaborn, TensorFlow and SciKit-Learn), R, Microsoft Excel and PowerBI for data analysis, visualization, and AI.</p>
                </div>
                <div className="textbox-skills">
                <p className="skill-title">Frontend Development</p>
                <p className="skill-text">I have knowledge and experience with HTML, CSS, JavaScript and frameworks like React, Tailwind and Bootstrap.</p>
                </div>
                <div className="textbox-skills">
                <p className="skill-title">Game Development / Music Production</p>
                <p className="skill-text">I develop games in Godot using languages C# and GDScript. 
                    I do pixel art and animating using Aseprite, basic 3D modelling with Blender and sound production/audio mixing using FL Studio.</p>
                </div>
                <div className="textbox-skills">
                <p className="skill-title">General Programming Skills</p>
                <p className="skill-text">I have experience in other languages such as Java and C#.
                    I also have experience with project management and using GitHub for project management and version control.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills