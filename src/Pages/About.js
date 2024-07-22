// src/components/About.js

import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Yash Bhoomkar, a passionate ML engineer and developer. I'm currently pursuing Third Year Computer Engineering from Pune Institute of Computer Technology and B.S. Degree in Data Science from IIT Madras.
          </p>
        </div>
        <div className="button-container">
          <a href="https://drive.google.com/uc?export=view&id=1xIB_6rWFPFPnr-MW_k2KJNaIHd__tBGM" className="button" target="_blank" rel="noopener noreferrer">VIEW IIT Admission Letter</a>
        </div>
      </div>

      <div className="about-container">
        <div className="button-container_2">
          <a href="https://drive.google.com/file/d/1lnmJWlziMG5bPMwy9d9wjsBGaPheTpal/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">VIEW RECENT MARKSHEET</a>
        </div>
        <div className="about-text">
          <p>
            As a computer engineering student, I have studied Operating Systems, Database Management Systems, Computer Networks, and Software Engineering. I am a dedicated student who has gained extensive knowledge from these courses. My current CGPA is 9.32, with my highest CGPA being 9.77.
          </p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-text">
        <h2>Experience</h2>
          <p>
            <strong>1. QShift AI PVT LTD | AIGPT  </strong><br />
            <strong>GenAI Engineer | Machine Learning Research Intern | Web Development Intern</strong><br /><br />

            Developed an end-to-end product for social media marketing using GenAI technologies.<br />
            Worked with OpenAI APIs, Stable Diffusion, and other image-generating AIs.<br />
            Reduced post designers' efforts by 55%.<br />
            Deployed the entire product on Microsoft Azure Services.<br /><br />

            Built a website using the MERN stack and deployed it on Azure Cloud.<br />
            Implemented APIs from APIfy and utilized Python libraries, including Selenium, for data fetching.
          </p>

          <p>
            <strong>2. Pune Institute of Computer Technology IEEE</strong><br />
            <strong>Student Professor</strong><br /><br />

            • Conducted free C++ fundamental courses for freshmen and free fundamental Data Structures and Algorithms Course in C++
          </p>
          <p>
            <strong>3. Pune Institute of Computer Technology Robotics Department</strong><br />
            <strong>Software Developer</strong><br /><br />
            <strong>Project 1 Embedded C - Programming for Locomotion </strong><br />

            • Worked on Robocon’23 PICT bot. Used Embedded C in Arduino IDE<br />
            <strong>Project 2 – Robocon ’24 Bot Programming </strong><br />

            • Developed locomotion for tank drive-based bot and implemented OpenCV for object detection.
          </p>
        </div>
        <div className="button-container_2">
          <a href="https://drive.google.com/file/d/1aLn4t2T4fI_UqLgXlbYP_cIgcNOQpGpu/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">VIEW OFFER LETTER</a>
        </div>
        
      </div>
      <div className="about-container">
        <div className="about-text">
          
        </div>
        
      </div>
      
      <div className='projects-button'>        
          <Link to="/projects" className="button">
          Have a look at my Projects
        </Link>

        <Link to="/contact" className="button">
          Connect with me
        </Link>
      

        </div>

    </div>
  );
};

export default About;
