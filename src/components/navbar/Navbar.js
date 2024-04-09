import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi'; // Import hamburger menu icon
import { Link } from 'react-router-dom'; // Import Link component for routing
import './Navbar.css'; // Import CSS file for custom styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactNumber, setContactNumber] = useState('');
  const navbarRef = useRef(null);

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
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="brand">
        <Link to="/" className="logo">Bright Careers</Link> {/* Use Link component for routing */}
      </div>
      <div className={`menu-items ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li> {/* Use Link component for routing */}
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li> {/* Use Link component for routing */}
          <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li> {/* Use Link component for routing */}
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li> {/* Use Link component for routing */}
        </ul>
      </div>
      <div className="contact">
        <span>Contact: <a href={`tel:${contactNumber}`} className="phone">{contactNumber}</a></span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu />
      </div>
    </nav>
  );
};

export default Navbar;
