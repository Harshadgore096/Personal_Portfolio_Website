import React, { useEffect, useState } from 'react';
import './css/Education.css'; // Import the CSS file for styling
import SidebarNavigation from '../components/Sidebar';
const EducationPage = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars for background
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 100; i++) {
        starArray.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1,
          animationDelay: Math.random() * 3
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institution: "MIT Arts Commerce and Science College",
      year: "2021-2024",
      description: "9.67"
    },
    {
      degree: "HSC",
      institution: "Cambridge Junior College,Pune",
      year: "2019-2020",
      description: "74.15 %"
    },
    {
      degree: "SSC",
      institution: "MPMVK SCHOOL",
      year: "2017-2018",
      description: "94.80 %"
    }
  ];

  

  return (
    <div className="education-container">
      {/* Animated background stars */}
      <div className="stars-background">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Navigation Sidebar */}
     <SidebarNavigation/>
      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          <div className="code-tags">
            <span className="code-tag">&lt;h1&gt;</span>
          </div>
          
          <h1 className="main-title">Education</h1>
          
          <div className="code-tags">
            <span className="code-tag">&lt;/h1&gt;</span>
          </div>

          <div className="education-grid">
            {educationData.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <span className="education-year">{edu.year}</span>
                </div>
                <h4 className="institution-name">{edu.institution}</h4>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>

          

          <div className="code-tags bottom-tags">
            <span className="code-tag">&lt;/body&gt;</span>
            <br />
            <span className="code-tag">&lt;/html&gt;</span>
          </div>

         
        </div>
      </main>
    </div>
  );
};

export default EducationPage;