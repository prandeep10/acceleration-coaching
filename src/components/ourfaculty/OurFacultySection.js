import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './OurFacultySection.css'; // Import CSS file for custom styling

const OurFacultySection = () => {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3000/api/facultyapi.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch faculty data');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setFacultyData(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching faculty data:', error);
        // Fallback to static data if API request fails
        setFacultyData(fallbackData);
      });
  };

  // Static data if API request fails
  const fallbackData = [
    {
      image: '/faculty/founder1.jpeg',
      name: 'Altaf Hussain',
      subject: 'Mathematics',
      description: 'M.Sc ( Mathematics ), Gauhati University, 23 years of experience as a teacher.'
    },
    {
      image: '/faculty/founder2.jpeg',
      name: 'H. M. SAJIDUR RAHMAN',
      subject: 'Physics',
      description: 'B.Sc in Physics. 3-years teaching experience'
    }
  ];

  return (
    <section className="faculty-section">
      <h2>Our Faculty</h2>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false} showThumbs={false} className="carousel-wrapper">
        {facultyData.map((faculty, index) => (
          <div key={index} className="faculty-card">
            <img src={faculty.image} alt={`Faculty ${index + 1}`} className="faculty-image" />
            <div className="faculty-details">
              <h3>{faculty.name}</h3>
              <p><strong>Subject:</strong> {faculty.subject}</p>
              <p>{faculty.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default OurFacultySection;
