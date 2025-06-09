import React from 'react';
import './css/Home.css'; // Import the CSS file for styling
import SidebarNavigation from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
     <SidebarNavigation/>
      {/* Main Content */}
      <main className="home-content">
        <div className="content-wrapper">
          <div className="intro-section">
            <div className="code-tag">&lt;h1&gt;</div>
            <h1 className="main-heading">
              Hi,<br />
              I'm <span className="highlight">H</span>arshad,<br />
              Software developer.
            </h1>
            
            
            <p className="subtitle">Front End Developer /Back End Developer / JavaScript Expert   / Tech Blogger</p>
            
            <button onClick={()=>navigate('./contact')} className="contact-btn">CONTACT ME</button>
          </div>
        </div>

        {/* 3D S Logo */}
        <div className="logo-3d-container">
          <div className="logo-3d">H</div>
        </div>

        {/* Bottom Code Tags */}
        <div className="bottom-tags">
          <div className="code-tag">&lt;/body&gt;</div>
          <div className="code-tag">&lt;/html&gt;</div>
        </div>

        {/* Bottom Right Text */}
      
      </main>

      {/* Coding Text in Top Right */}
      <div className="coding-text">
        coding
      </div>
    </div>
  );
};

export default Home;