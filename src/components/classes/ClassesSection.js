import React from 'react';
import './ClassesSection.css'; // Import CSS file for custom styling

const ClassesSection = () => {
  const subjects = [
    { name: 'Mathematics', color: '#FFD700' }, // Gold
    { name: 'Physics', color: '#87CEEB' },      // Sky Blue
    { name: 'Chemistry', color: '#90EE90' },    // Light Green
    { name: 'Biology', color: '#FFA07A' },      // Light Salmon
    { name: 'English', color: '#D8BFD8' },      // Thistle
    { name: 'Social-Science', color: '#FFB6C1' } // Light Pink
  ];

  return (
    <section className="classes-section">
      <h2>All Subjects for Classes 5-12</h2>
      <div className="subject-cards">
        {subjects.map((subject, index) => (
          <div key={index} className="subject-card" style={{ backgroundColor: subject.color }}>
            <h3>{subject.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassesSection;
