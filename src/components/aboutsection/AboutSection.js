import React from 'react';
import './AboutSection.css'; 
import aboutImage from './about-image.jpg'; 

const AboutSection = () => {
  return (
    <section className="about-section-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to Bright Career Coaching, a premier institute established in 2003 with a steadfast commitment to nurturing academic excellence and fostering holistic growth among students from classes V to XII. At Bright Career Coaching, we believe in the power of education to transform lives and shape futures. With this belief at our core, we strive to provide comprehensive coaching that goes beyond textbooks, instilling in students a passion for learning and a thirst for knowledge. Our team of experienced and dedicated educators is committed to guiding students through their academic journey, helping them build a strong foundation in subjects ranging from Mathematics and Science to Languages and Social Sciences. Through our meticulously crafted curriculum, personalized attention, and innovative teaching methodologies, we empower students to unleash their full potential and achieve academic success.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About" />
      </div>
    </section>
  );
};

export default AboutSection;
