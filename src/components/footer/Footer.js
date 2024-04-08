import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Location</h3>
          <p>Sundarbari, Jalukbari, GHY-13</p>
        </div>
        <div className="footer-section">
          <h3>Contact Details</h3>
          <p>info@example.com</p>
          <p>+1234567890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
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
