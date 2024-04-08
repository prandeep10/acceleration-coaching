import React, { useState, useEffect } from 'react';
import './OurStudentsPage.css'; // Import CSS file for custom styling

const OurStudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3000/api/studentapi.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setStudents(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
          setStudents(fallbackData);
      });
  };

  // Fallback static data if API request fails
  const fallbackData = [
    { name: 'Pranjit Lahkar', percentage: 95, image: 'Pranjit-Lahkar-96.jpeg' },
    { name: 'Manas Kr. Das', percentage: 94, image: 'Manas-krDas-94.4.jpeg' },
    { name: 'Princi Sarma', percentage: 94.4, image: 'Princi-Sharma-93.jpeg' },
    { name: 'Hiyashree', percentage: 95.2, image: 'hiyashree.jpeg' },
    // Add more students as needed
  ];

  return (
    <div className="students-container">
      <h2>Our Students</h2>
      <div className="students-grid">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <img src={`http://localhost:3000/${student.image}`} alt={student.name} />
            <div className="student-details">
              <h3>{student.name}</h3>
              <p>Percentage: {student.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStudentsPage;
