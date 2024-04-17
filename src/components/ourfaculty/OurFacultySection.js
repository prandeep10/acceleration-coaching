import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './OurFacultySection.css'; // Import CSS file for custom styling

const OurFacultySection = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [apiUrlWorking, setApiUrlWorking] = useState(true); // Assuming API URL is working by default

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/faculty');
      if (!response.ok) {
        throw new Error('Failed to fetch faculty data');
      }
      const data = await response.json();
      setFacultyData(data);
      setApiUrlWorking(true); // Set apiUrlWorking to true if fetching is successful
    } catch (error) {
      console.error('Error fetching faculty data:', error);
      // If fetching fails, set apiUrlWorking to false
      setApiUrlWorking(false);
      // Fallback to static data if API request fails
      setFacultyData(fallbackData);
    }
  };

  // Static data if API request fails
  const fallbackData = [
    {
      image: 'founder1.jpeg',
      name: 'Altaf Hussain',
      subject: 'Mathematics',
      description: 'M.Sc ( Mathematics ), Gauhati University, 23 years of experience as a teacher.'
    },
    {
      image: 'founder2.jpeg',
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
            <img src={`${apiUrlWorking ? 'https://brightcareers-backend.onrender.com/' : ''}faculty/${faculty.image}`} alt={`Faculty ${index + 1}`} className="faculty-image" />
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
