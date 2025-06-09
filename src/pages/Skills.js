import React, { useState, useEffect } from 'react';
import './css/Skills.css';
import SidebarNavigation from '../components/Sidebar'; // Assuming you have a Sidebar component
const SkillsExperience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  
  const techSkills = [
    { name: 'HTML5', size: 'medium', position: { top: '45%', right: '15%' }, delay: 0 },
    { name: 'CSS3', size: 'large', position: { top: '65%', right: '25%' }, delay: 0.5 },
    { name: 'JavaScript', size: 'large', position: { top: '25%', right: '8%' }, delay: 1 },
    { name: 'React', size: 'medium', position: { top: '35%', left: '65%' }, delay: 1.5 },
    { name: 'TypeScript', size: 'large', position: { bottom: '15%', right: '5%' }, delay: 2 },
    { name: 'Tailwind', size: 'medium', position: { top: '55%', left: '70%' }, delay: 2.5 },
    { name: 'Bootstrap', size: 'small', position: { top: '20%', left: '75%' }, delay: 3 },
    { name: 'Java', size: 'small', position: { top: '70%', left: '68%' }, delay: 3.5 },
    { name: 'JSON', size: 'medium', position: { top: '10%', right: '20%' }, delay: 4 },
    { name: 'REST', size: 'medium', position: { top: '15%', left: '55%' }, delay: 4.5 },
    { name: 'Git', size: 'small', position: { top: '5%', right: '12%' }, delay: 5 },
    { name: 'C/C++', size: 'medium', position: { top: '8%', right: '2%' }, delay: 5.5 },
    { name: 'ML', size: 'medium', position: { top: '40%', right: '35%' }, delay: 6 },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="skills-container">
      {/* Sidebar */}
      <SidebarNavigation/>

      {/* Main Content */}
      <div className="main-content">
        {/* Code Tags */}
        <div className="code-tag opening-tag">&lt;body&gt;</div>
        <div className="code-tag closing-tag">&lt;/body&gt;</div>
        <div className="code-tag html-tag">&lt;/html&gt;</div>

        {/* Content Section */}
        <div className="content-section">
          <h1 className="main-title">
            Skills &<br />
            Experience
          </h1>
          <div className="title-tag">&lt;/h1&gt;</div>

          <div className="description">
            <p>
              Expert in Software development including technologies like{' '}
              <span className="highlight">HTML5</span>,{' '}
              <span className="highlight">CSS3</span>,{' '}
              <span className="highlight">JavaScript</span>,{' '}
              <span className="highlight">Java</span>,{' '}
              <span className="highlight">Node Js</span>,{' '}
              <span className="highlight">React</span>,{' '}
              <span className="highlight">TypeScript</span>,{' '}
              <span className="highlight">Rest API</span>,{' '}
              <span className="highlight">Bootstrap</span>,{' '}
              <span className="highlight">MVC Architecture</span>,{' '}
              <span className="highlight">Git</span>, and{' '},
              <span className="highlight">Spring</span>, and{' '}
              <span className="highlight">Spring Boot</span>.
            </p>
            <br />
            <p>
              I'm not a designer but I have a good sense of aesthetics, and
              experience in responsive,  web design. I put special effort
              into optimizing my code and providing the best user experience. I
              would love to give you any kind of support also after the project's
              completion. I guarantee a commitment during work on your project.
            </p>
            <br />
            <p>
              Visit my{' '}
              <a href="https://linkedin.com/in/harshad-gore-971ab7204" className="link">LinkedIn</a>{' '}
              profile for more details. Also you can checkout my
              cv on this{' '}
              <a href="https://drive.google.com/file/d/1McOf-_0xVow1FMIvXrRqvVEDB4X3mZ9D/view?usp=sharing" className="link">link</a>, or feel free to give a peek on some of my blog{' '}
              <a href="https://medium.com/@harshadgore004" className="link">posts</a>.
            </p>
          </div>
        </div>

        {/* Floating Tech Skills */}
        <div className="tech-skills">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className={`tech-skill ${skill.size}`}
              style={{
                ...skill.position,
                animationDelay: `${skill.delay}s`
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>

       
       

        {/* Mouse Follower */}
        <div 
          className="mouse-follower"
          style={{
            left: mousePosition.x,
            top: mousePosition.y
          }}
        />
      </div>
    </div>
  );
};

export default SkillsExperience;