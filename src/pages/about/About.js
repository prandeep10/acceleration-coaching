import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [founders, setFounders] = useState([]);
  const [aboutContent, setAboutContent] = useState('');
  const [apiURLWorking, setApiURLWorking] = useState(true); // Initially assume API is working

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetchGalleryImages();
    fetchFounders();
    fetchAboutContent();
  };

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
        // Fetch images from fallback API
        fetchGalleryImagesFallback();
      });
  };

  const fetchGalleryImagesFallback = () => {
    // Fetch images from local directory
    const fallbackImages = [
      { id: 1, url: '/about/about1.jpeg' },
      { id: 2, url: '/about/about2.jpeg' },
      { id: 3, url: '/about/about3.jpeg' },
      { id: 4, url: '/about/about4.jpeg' }
      // Add more fallback images as needed
    ];
    setGalleryImages(fallbackImages);
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
        // Fetch founders from fallback API
        fetchFoundersFallback();
      });
  };

  const fetchFoundersFallback = () => {
    // Fetch founders from local directory
    const fallbackFounders = [
      { id: 1, image: 'founder1.jpeg', name: 'Founder 1', description: 'Description of Founder 1' },
      { id: 2, image: 'founder2.jpeg', name: 'Founder 2', description: 'Description of Founder 2' }
      // Add more fallback founders as needed
    ];
    setFounders(fallbackFounders);
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
        fetchAboutContentFallback();
      });
  };

  const fetchAboutContentFallback = () => {
    // Fetch about content from fallback API
    fetch('/data/Data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch about content from fallback API');
        }
        return response.json();
      })
      .then((data) => {
        setAboutContent(data.about_content);
      })
      .catch((error) => {
        console.error('Error fetching about content from fallback API:', error);
        setAboutContent('Fallback about content goes here');
      });
  };

  useEffect(() => {
    // Check API status after fetching data
    checkAPIStatus();
  }, [galleryImages, founders, aboutContent]);

  const checkAPIStatus = () => {
    fetch('https://brightcareers-backend.onrender.com/founders') // Try reaching the API endpoint
      .then((response) => {
        if (response.ok) {
          setApiURLWorking(true); // If the API is reachable, set apiURLWorking to true
        } else {
          setApiURLWorking(false); // If the API is not reachable, set apiURLWorking to false
        }
      })
      .catch((error) => {
        console.error('Error checking API status:', error);
        setApiURLWorking(false); // If there's an error, set apiURLWorking to false
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
            <img src={apiURLWorking ? `https://brightcareers-backend.onrender.com/founders/${founder.image}` : `/founders/${founder.image}`} alt={`Founder ${founder.id}`} />
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
