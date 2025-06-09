import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, User, CodeXml, CardSim, FolderLock, Mail, Linkedin, Github, Briefcase, SwatchBook, Menu, X } from 'lucide-react';
import './css/Sidebar.css'; // Import the CSS file for styling

export default function SidebarNavigation() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? 'sidebar-mobile-open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <button className="logo-icon" onClick={() => handleNavigation('/')}>
            H
          </button>
        </div>
        
        {/* Navigation Icons */}
        <nav className="sidebar-nav">
          <button className="nav-button" onClick={() => handleNavigation('/about')}>
            <User size={20} />
            <span className="nav-text">About</span>
          </button> 
         
          <button className="nav-button" onClick={() => handleNavigation('/education')}>
            <GraduationCap size={20} />
            <span className="nav-text">Schools</span>
          </button>
         
          <button className="nav-button" onClick={() => handleNavigation('/skills')}>
            <CodeXml size={20} />
            <span className="nav-text">Skills</span>
          </button>
          
          <button className="nav-button" onClick={() => handleNavigation('/experience')}>
            <Briefcase size={20} />
            <span className="nav-text">Experience</span>
          </button>
          
          <button className="nav-button" onClick={() => handleNavigation('/portfolio')}>
            <FolderLock size={20} />
            <span className="nav-text">Projects</span>
          </button>
          
          <button className="nav-button" onClick={() => handleNavigation('/contact')}>
            <Mail size={20} />
            <span className="nav-text">Contact</span>
          </button>
        </nav>

        {/* Social Icons at bottom */}
        <div className="sidebar-social">
          <button 
            className="social-button" 
            onClick={() => window.open('https://linkedin.com/in/harshad-gore-971ab7204', '_blank')}
          >
            <Linkedin size={15} />
            <span className="social-text">LinkedIn</span>
          </button>
          
          <button 
            className="social-button" 
            onClick={() => window.open('https://github.com/Harshadgore096', '_blank')}
          >
            <Github size={15} />
            <span className="social-text">Github</span>
          </button>
          
          <button 
            className="social-button" 
            onClick={() => window.open('https://leetcode.com/u/harshadgore004/', '_blank')}
          >
            <CardSim size={15} />
            <span className="social-text">LeetCode</span>
          </button>
          
          <button 
            className="social-button" 
            onClick={() => window.open('https://medium.com/@harshadgore004', '_blank')}
          >
            <SwatchBook size={15} />
            <span className="social-text">Articles</span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}
    </>
  );
}