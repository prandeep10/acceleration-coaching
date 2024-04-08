import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <section className="courses-container">
      <h2>All Subjects for Classes V-XII</h2>
      <div className="course-cards">
        <div className="course-card math">
          <h3>Mathematics</h3>
        </div>
        <div className="course-card physics">
          <h3>Physics</h3>
        </div>
        <div className="course-card chemistry">
          <h3>Chemistry</h3>
        </div>
        <div className="course-card biology">
          <h3>Biology</h3>
        </div>
        <div className="course-card english">
          <h3>English</h3>
        </div>
        <div className="course-card social-science">
          <h3>Social Science</h3>
        </div>
      </div>
    </section>
  );
};

export default Courses;
