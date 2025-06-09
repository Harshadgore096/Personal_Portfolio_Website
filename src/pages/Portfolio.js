import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Portfolio.css'; // Your existing styles
import SidebarNavigation from '../components/Sidebar';

const portfolioItems = [
  {
    id: 1,
    title: 'Sorting Visualizer',
    description: 'Data Structures and Algorithms Visualizer',
    category: 'Web Development',
    image: './sorting_visualizer.png',
    color: '#2c3e50',
    size: 'medium',
    href: "https://sorting-visualizer-harshad-gore.netlify.app/",
    code: "https://github.com/Harshadgore096/Sorting_visualizer",
  },
  {
    id: 2,
    title: 'Crypto Tracker',
    description: 'Crtypto Price Tracker',
    category: 'Web Development',
    image: './crypto_tracker.png',
    color: '#2c3e50',
    size: 'large',
    href: "https://mycryptodimetrek.netlify.app/",
    code: "https://github.com/Harshadgore096/Cryptocurrency_Tracker_Project",
  },
  
  {
    id: 3,
    title: 'Fox Solution ',
    description: 'Business Solution Website',
    category: 'Private : Associated With Aalions Infotech',
    image: './Fox-solution.png',
    color: '#2c3e50',
    size: 'large',
    href: "",
    code: "",
  },
  {
    id: 4,
    title: 'Key Logger',
    description: 'key logger using Node.js',
    category: 'Backend Development',
    image: './what_is_keylogger_software.webp',
    color: '#2c3e50',
      size: 'medium',
      href: "",
    code: "https://github.com/Harshadgore096/Key_Logger_Project",
  },
  {
    id: 5,
    title: 'Blockchain using Node.js',
    description: 'Blockchain Implementation using Node.js',
    category: 'Backend Development',
    image: './1693292_d06a.webp',
    color: '#2c3e50',
    size: 'large',
    href: "",
    code: "https://github.com/Harshadgore096/Blockchain_Using_Javascript-Node.js-",
  },
  
];

const PortfolioShowcase = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    navigate(`/projects/${item.id}`, { state: { item } });
  };

  const openInNewTab = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="portfolio-container">
      <SidebarNavigation />
     
      <div className="main-content">
      <h1 className="page-title">Projects</h1>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`portfolio-item ${item.size}`}
              style={{ backgroundColor: item.color }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleCardClick(item)}
            >
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              {hoveredItem === item.id && (
                <div className="portfolio-overlay visible">
                  <div className="portfolio-content">
                    <h3 className="portfolio-title">{item.title}</h3>
                    <p className="portfolio-description">{item.description}</p>
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-actions">
                      {item.href && (
                        <button
                          onClick={(e) => openInNewTab(e, item.href)}
                          className="btn-view"
                        >
                          View Project
                        </button>
                      )}
                      {item.code && (
                        <button
                          onClick={(e) => openInNewTab(e, item.code)}
                          className="btn-code"
                        >
                          View Code
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default PortfolioShowcase;
