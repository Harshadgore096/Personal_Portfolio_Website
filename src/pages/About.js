import React, { useState, useEffect } from 'react';
import './css/About.css';
import SidebarNavigation from '../components/Sidebar';


// Sample image placeholder - replace with actual image import



export default function About() {
  const [stars, setStars] = useState([]);

  // Generate random stars for the background
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkle: Math.random() * 2 + 1
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="about-container">
      {/* Starfield Background */}
      <div className="starfield">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.twinkle}s`
            }}
          />
        ))}
      </div>
      
      {/* Background gradient overlay */}
      <div className="bg-overlay"></div>
      
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <SidebarNavigation />
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Left Content */}
        <div className="content-section">
          {/* Code comment */}
          <div className="code-tag">
            &lt;h1&gt;
          </div>
          
          {/* Main heading */}
          <h1 className="main-heading">
            About me
          </h1>
          
          {/* Closing tag */}
          <div className="code-tag-close">
            &lt;/h1&gt;
          </div>
          
          {/* About text paragraphs */}
          <div className="about-text">
            <p>
              I'm very ambitious software developer looking for a role in established IT
              company with the opportunity to work with the latest technologies on challenging
              and diverse projects.
            </p>
            
            <p>
              I'm quietly confident, naturally curious, and perpetually working on improving my
              chops one design problem at a time.
            </p>
            
            <p>
              If I need to define myself in one sentence that would be a family person, son
              of a soldier, a sports fanatic, music enthusiast, and tech-
              obsessed!!!
            </p>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="image-section">
          <div className="image-glow"></div>
          
          {/* Image container */}
          <div className="image-container">
            <img
              src="/mybio.jpg"
              alt="Profile"
              className="profile-image"
            />
            
            {/* Overlay gradient */}
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}