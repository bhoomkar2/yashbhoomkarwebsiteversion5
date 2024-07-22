// src/components/Projects.js

import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-text">
          <h2>Sentimental Hub</h2>
          <h2>(24 Hour DEVKRAFT Hackathon Winner Project In Machine Learning Domain)</h2>
          <p>
            • Developed a sentiment analysis platform for YouTube Comments<br />
            • Developed and Deployed a Chrome Extension that extracts YouTube Video URL and passes it to the Machine Learning Model<br />
            • Developed a website using Streamlit for the sentiment analysis platform<br />
            • Worked with technologies such as Hugging Face ML Models, MongoDB, Chrome Extension Services, etc.<br />
          </p>
        </div>
      </div>

      <div className="video-container">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/5MkG7A7R6Fo"
          title="YouTube video player"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h2>PICT Educational Platform - EduBuddy </h2>
          <h2>(2nd Year Final Project) </h2>
          <p>
          • Developed Online Education Platform for PICT College using the MERN Stack and deployed the project on Vercel.<br />
• Implemented - Notes taking feature, YouTube Videos Embedding, Login-Authentication, etc.

          </p>
        </div>
      </div>

      <div className="margin">
          <a href="https://drive.google.com/file/d/1FQ9qG07smUri6YPA9b_UK3TEwSTxMFXN/view?usp=sharing" className="button" target="_blank" rel="noopener noreferrer">View Project Synopsis</a>
        </div>

        <div className="about-container">
        <div className="about-text">
          <h2>PICT OLX </h2>
          <h2>(Faster experience of buying and selling of books with multiple Payment Gateways)</h2>
          <p>
          • This was a solo 5-hour rapid development project challenge. Developed Ecommerce website using MERN stack.<br />
• Successfully integrated multiple payment gateways such as Stripe and Plural by Pine Labs.

          </p>
        </div>
      </div>

      <div className="video-container">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/7Hd-1BH0-tI"
          title="YouTube video player"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Projects;
