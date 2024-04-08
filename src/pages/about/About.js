import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [founders, setFounders] = useState([]);

  useEffect(() => {
    fetchGalleryImages();
    fetchFounders();
  }, []);

  const fetchGalleryImages = () => {
    fetch('http://localhost:3000/api/galleryapi.php')
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
      });
  };

  const fetchFounders = () => {
    fetch('http://localhost:3000/api/foundersapi.php')
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
      });
  };

  return (
    <div className="about-container">
      <div className="about-section">
        <h2>About Us</h2>
        <p className="about-description">
          Welcome to Bright Career Coaching, a premier institute established in 2003 with a steadfast commitment to nurturing academic excellence and fostering holistic growth among students from classes V to XII.
          At Bright Career Coaching, we believe in the power of education to transform lives and shape futures. With this belief at our core, we strive to provide comprehensive coaching that goes beyond textbooks, instilling in students a passion for learning and a thirst for knowledge. Our team of experienced and dedicated educators is committed to guiding students through their academic journey, helping them build a strong foundation in subjects ranging from Mathematics and Science to Languages and Social Sciences. Through our meticulously crafted curriculum, personalized attention, and innovative teaching methodologies, we empower students to unleash their full potential and achieve academic success.
          We understand that each student is unique, with their own set of strengths, weaknesses, and aspirations. That's why we offer customized learning solutions tailored to meet the individual needs of every student. Whether it's exam preparation, conceptual clarity, or skill enhancement, our goal is to provide a supportive environment where students can thrive academically and personally.
          At Bright Career Coaching, we not only focus on academic excellence but also emphasize the development of critical thinking, problem-solving abilities, and effective communication skills – essential attributes for success in today's competitive world.
          Join us at Bright Career Coaching and embark on a transformative journey towards a brighter future. Together, let's unlock the doors to endless possibilities and pave the way for lifelong learning and achievement.
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
            <img key={image.id} src={image.image_url || `about/${image.image}`} alt={`Photo ${image.id}`} />
          ))}
        </div>
      </div>
      <div className="founders-section">
        <h3>About the Founders</h3>
        {founders.map((founder) => (
          <div key={founder.id} className="founder">
            <img src={founder.image_url || `faculty/${founder.image}`} alt={`Founder ${founder.id}`} />
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
