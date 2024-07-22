// src/components/About.js

import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-text">
          <h2>Connect With Me !</h2>
          <p><strong>I m currently looking for Internship Opportunities</strong></p>
          <p>
            
Here is my LinkedIn profile. I warmly invite you to send me a connection request and join my professional network. I actively update my LinkedIn account with my latest projects, achievements, and industry insights. With over 700 connections, I'm always eager to connect with like-minded professionals and expand my network. Looking forward to connecting with you!
            

          </p>
        </div>
        <div className="button-container">
          <a href="https://www.linkedin.com/in/yash-bhoomkar-7aa460213" className="button" target="_blank" rel="noopener noreferrer">LinkedIn Yash Bhoomkar</a>
        </div>
      </div>

      <div className="about-container">
  <div className="button-container_2">
    <a href="mailto:bhoomkar04@gmail.com" className="button">Email Me</a>
  </div>
  <div className="about-text">
    <p>
    If you have any questions or just want to connect, feel free to send me an email. I am always open to engaging conversations and am here to help with any inquiries you might have. Don't hesitate to reach out—I'm always happy to hear from you and look forward to connecting!</p>
  </div>
</div>

<div className="about-container">
  
  <div className="about-text">
    <p>I have a public Instagram account under the name @yaxh_publix, where I regularly share updates on my coding challenges, guitar performances, and reels showcasing various other talents. I would love for you to follow me and stay tuned for my latest content and creative endeavors.</p>
  </div>
  <div className="button-container_2">
    <a href="https://www.instagram.com/yaxh_publix?igsh=cXF6a25udDIybjc0" className="button">Instagram Account</a>
  </div>
</div>


      

    </div>
  );
};

export default Contact;
