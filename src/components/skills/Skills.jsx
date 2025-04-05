import React from 'react'
import './Skills.css'

// Data Science
import { SiPython } from "react-icons/si";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { SiPandas } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiRstudioide } from "react-icons/si";

// Frontend
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

// Game Dev / Music
import { SiGodotengine } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import { SiAseprite } from "react-icons/si";
import { RiBlenderFill } from "react-icons/ri";

// General
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

const Skills = () => {
  return (
    <div>
        
        <div className="skills-container">
            <h2 className="header-skills" data-aos='fade-up'>Technical Skills.</h2>
            <p className='header-skill-text'data-aos='fade-up'>A look into my technical expertise and tools.</p>

            <div className="skills-grid">
                <div className="textbox-skills-1" data-aos='fade-up'>
                <p className="skill-title" >Data Science and Data Analytics</p>
                <p className="skill-text">I have experience with Python, Python Data Science Libraries 
                    (Pandas, NumPy, Matplotlib, Seaborn, TensorFlow and SciKit-Learn), R, Microsoft Excel and PowerBI for data analysis, visualization, and AI.</p>
                    <div className="skill-icons">
                        <SiPython size={50} title="Python" />
                        <PiMicrosoftExcelLogo size={50} title="Excel" />
                        <SiPandas size={50} title="Pandas"/>
                        <SiScikitlearn size={50} title="SKlearn"/>
                        <SiNumpy size={50} title="Numpy"/>
                        <SiTensorflow size={50} title="TensorFlow"/>
                        <SiRstudioide size={50} title="RStudio"/>
                    </div>
                </div>
                <div className="textbox-skills-2"data-aos='fade-up'>
                <p className="skill-title">Frontend Development</p>
                <p className="skill-text">I have knowledge and experience with HTML, CSS, JavaScript and frameworks/libraries like 
                    React.js, Next.js, Tailwind and Bootstrap.</p>
                    <div className="skill-icons">
                        <FaHtml5 size={50} title="HTML"/>
                        <FaCss3Alt size={50} title="CSS"/>
                        <IoLogoJavascript  size={50} title="JavaScript"/>
                        <FaReact size={50} title="React"/>
                        <SiNextdotjs size={50} title="Next"/>
                        <RiTailwindCssFill size={50} title="Tailwind"/>
                        <FaBootstrap size={50} title="Bootstrap"/>
                    </div>
                </div>
                <div className="textbox-skills-3"data-aos='fade-up'>
                <p className="skill-title">Game Development / Music Production</p>
                <p className="skill-text">I develop games in Godot using languages C# and GDScript. 
                    I do pixel art and animating using Aseprite, basic 3D modelling with Blender and sound production/audio mixing using FL Studio.</p>
                    <div className="skill-icons">
                        <SiGodotengine size={50} title="Godot"/>
                        <FaUnity size={50} title="Unity"/>
                        <SiAseprite size={50} title="Aseprite"/>
                        <RiBlenderFill size={50} title="Blender"/>
                    </div>
                </div>
                <div className="textbox-skills-4"data-aos='fade-up'>
                <p className="skill-title">General Programming Skills</p>
                <p className="skill-text">I have experience in other languages such as Java and C#.
                    I also have experience with project management and using GitHub for version control.</p>
                    <div className="skill-icons">
                        <FaJava size={50} title="Java"/>
                        <TbBrandCSharp size={50} title="CSharp"/>
                        <FaGithub size={50} title="Github"/>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills