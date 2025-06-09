import React from 'react';
import SidebarNavigation from '../components/Sidebar'; // Assuming you have a Sidebar component
import './css/Experiance.css'; // Assuming you have a CSS file for styling

const Experience = () => {
  return (
    <div className="experience-container">
      <SidebarNavigation />
      <div className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">Experience</h1>
          
          <div className="experience-item">
            <div className="job-header">
              <div className="job-info">
                <h3 className="job-title">Software Developer</h3>
                <p className="company-name">Aalions Infotech Solutions Inc.</p>
              </div>
              <div className="job-duration">FEB 2025 - Present</div>
            </div>
            
            <div className="job-description">
              <div className="achievement">
                <span className="bullet-icon">⚡</span>
                <p>Developed interactive, responsive front‑end pages using React.js and Tailwind CSS within a component-based architecture, ensuring modern UI/UX standards.


</p>
              </div>
             
              <div className="achievement">
                <span className="bullet-icon">⚡</span>
                <p> Built robust RESTful APIs in Node.js and Express following MVC patterns, powering dynamic features like cost estimation in pricing modules.</p>
              </div>
              <div className="achievement">
                <span className="bullet-icon">⚡</span>
                <p>Modeled backend data with MongoDB (Mongoose), optimizing schema design and queries for performance and scalability.
                </p>
              </div>

              <div className="achievement">
                <span className="bullet-icon">⚡</span>
                <p>Integrated version control best practices using Git and GitHub: feature branching, pull requests, code reviews, and CI workflows.

                </p>
              </div>

              <div className="achievement">
                <span className="bullet-icon">⚡</span>
                <p>Collaborated across teams in Agile sprints, translating UI mockups to functional web pages and delivering full-stack solutions efficiently.

                </p>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="job-header">
              <div className="job-info">
                <h3 className="job-title">Packaged Application Development Associate</h3>
                <p className="company-name">Accenture.</p>
              </div>
              <div className="job-duration">July 2024 - Jan 2025</div>
            </div>
            
            <div className="job-description">
              <div className="achievement">
                <span className="bullet-icon">⚡</span>
                <p>Developed and customized Siebel applets and views to support critical business processes for Vodafone, ensuring seamless UI/UX integration within the Siebel CRM environment.</p>
              </div>
              <div className="achievement">
                <span className="bullet-icon">⚡</span>
                <p>Implemented and configured Siebel Business Components, Business Objects, and Siebel Workflows tailored to Vodafone's operational needs.</p>
              </div>
              <div className="achievement">
                <span className="bullet-icon">⚡</span>
                <p>Built and maintained Siebel Adapters and Integration Objects to facilitate seamless communication with external systems and third-party applications.</p>
              </div>
              <div className="achievement">
                <span className="bullet-icon">⚡</span>
                <p>Maintained comprehensive documentation for custom components, ensuring knowledge transfer and smooth onboarding of new team members.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;