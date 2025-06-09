import React from 'react';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import EducationPage from './pages/Education';
import ExperiencePage from './pages/Experiance';
import PortfolioShowcase from './pages/Portfolio';
import SkillsExperience from './pages/Skills';
import ContactPage from './pages/Contact';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/education" element={<EducationPage />} />
    <Route path="/experience" element={<ExperiencePage />} />
    <Route path="/portfolio" element={<PortfolioShowcase />} />
    <Route path="/skills" element={<SkillsExperience />} />
    <Route path="/contact" element={<ContactPage />} />
    {/* Add more routes as needed */}
   </Routes>
   </BrowserRouter>  );
}

export default App;
