import React, { useState, useEffect } from 'react';
import {FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [contactNumber, setContactNumber] = useState('');

  useEffect(() => {
    fetchContactNumber();
  }, []);

  const fetchContactNumber = async () => {
    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/text');
      if (!response.ok) {
        throw new Error('Failed to fetch contact number');
      }
      const data = await response.json();
      setContactNumber(data.contact_number);
    } catch (error) {
      console.error('Error fetching contact number:', error);
      // If fetching fails, set a fallback contact number
      setContactNumber('1234567890');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Location</h3>
          <p>Sundarbari, Jalukbari, GHY-13</p>
        </div>
        <div className="footer-section">
          <h3>Contact Details</h3>
          <p>{contactNumber}</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/accelerationcoachingclasses/" className="social-icon" target='_blank'>
             <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Acceleration Coaching. All rights reserved.</p>
        <p>Designed & Developed by <a href="https://webartstudio.online" target="_blank" rel="noopener noreferrer">webartstudio.online</a></p>
      </div>
    </footer>
  );
};

export default Footer;
