import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi'; // Import hamburger menu icon
import { Link } from 'react-router-dom'; // Import Link component for routing
import './Navbar.css'; // Import CSS file for custom styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Function to close navbar when clicking outside
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener to detect clicks outside the navbar
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <span>Contact: <a href="tel:123-456-7890" className="phone">123-456-7890</a></span>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu />
      </div>
    </nav>
  );
};

export default Navbar;
