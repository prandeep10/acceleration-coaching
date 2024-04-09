import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [founders, setFounders] = useState([]);
  const [aboutContent, setAboutContent] = useState('');

  useEffect(() => {
    fetchGalleryImages();
    fetchFounders();
    fetchAboutContent();
  }, []);

  const fetchGalleryImages = () => {
    fetch('https://brightcareers-backend.onrender.com/images')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch gallery images');
        }
        return response.json();
      })
      .then((data) => {
        setGalleryImages(data);
      })
      .catch((error) => {
        console.error('Error fetching gallery images:', error);
        // Handle error here (e.g., show error message to the user)
      });
  };
  
  const fetchFounders = () => {
    fetch('https://brightcareers-backend.onrender.com/founders')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch founders data');
        }
        return response.json();
      })
      .then((data) => {
        setFounders(data);
      })
      .catch((error) => {
        console.error('Error fetching founders data:', error);
        // Handle error here (e.g., show error message to the user)
      });
  };

  const fetchAboutContent = () => {
    fetch('https://brightcareers-backend.onrender.com/text')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch about content');
        }
        return response.json();
      })
      .then((data) => {
        setAboutContent(data.about_content);
      })
      .catch((error) => {
        console.error('Error fetching about content:', error);
        // Handle error here (e.g., show error message to the user)
      });
  };

  return (
    <div className="about-container">
      <div className="about-section">
        <h2>About Us</h2>
        <p className="about-description">
          {aboutContent}
        </p>
        <div className="location-section">
          <h3>Our Location</h3>
          <p>Sundarbari, Jalukbari, Guwahati-13</p>
        </div>
      </div>
      <div className="gallery-section">
        <h3>Photo Gallery</h3>
        <div className="photo-grid">
          {galleryImages.map((image) => (
            <img key={image.id} src={`${image.url}`} alt={`Photo ${image.id}`} />
          ))}
        </div>
      </div>
      <div className="founders-section">
        <h3>About the Founders</h3>
        {founders.map((founder) => (
          <div key={founder.id} className="founder">
            <img src={`https://brightcareers-backend.onrender.com/founders/${founder.image}`} alt={`Founder ${founder.id}`} />
            <div className="founder-details">
              <h4>{founder.name}</h4>
              <p>{founder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
