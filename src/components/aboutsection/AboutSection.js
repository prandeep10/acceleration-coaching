import React, { useState, useEffect } from 'react';
import './AboutSection.css';
import aboutImage from './about-image.jpg';

const AboutSection = () => {
  const [aboutSectionContent, setAboutSectionContent] = useState('');

  useEffect(() => {
    fetchAboutSectionContent();
  }, []);

  const fetchAboutSectionContent = async () => {
    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/text');
      if (!response.ok) {
        throw new Error('Failed to fetch about section content');
      }
      const data = await response.json();
      setAboutSectionContent(data.about_section_content);
    } catch (error) {
      console.error('Error fetching about section content:', error);
    }
  };

  return (
    <section className="about-section-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>{aboutSectionContent}</p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About" />
      </div>
    </section>
  );
};

export default AboutSection;
