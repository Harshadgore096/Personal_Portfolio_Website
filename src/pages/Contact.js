import React, { useState } from 'react';
import './css/ContactPage.css';
import SidebarNavigation from '../components/Sidebar';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      {/* Sidebar */}
    <SidebarNavigation/>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          <div className="html-tag-open">&lt;h&gt;</div>
          
          <h1 className="page-title">Contact me</h1>
          
          <div className="html-tag-close">&lt;/h&gt;</div>
          
          <p className="description">
            I am interested in software Development opportunities – especially ambitious or large 
            projects. However, if you have other request or question, don't hesitate to 
            contact me using below form either.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="form-input full-width"
              required
            />
            
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
              rows="6"
              required
            ></textarea>
            
            <button type="submit" className="submit-btn">
              SEND
            </button>
          </form>
          
          <div className="bottom-tags">
            <div className="tag">&lt;/body&gt;</div>
            <div className="tag">&lt;/html&gt;</div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <div className="location-info">
              <h3>Harshad Gore,</h3>
              <p>Pune,</p>
              <p>Maharastra </p>
              <p>India</p>
              <p>412105</p>
              <br />
              <p>harshadgore004@gmail.com</p>
            </div>
          </div>
          <div className="map-controls">
            <button className="map-control">+</button>
            <button className="map-control">−</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;