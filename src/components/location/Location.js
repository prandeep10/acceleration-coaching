import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Location.css';

function Location() {
  return (
    <section className="location-section">
      <div className="location-icon">
        <FaMapMarkerAlt /> <h2>We are located at Sundarbari, Jalukbari, Guwahati-13</h2>
      </div>
      <div className="location-details">
        <p>
          Location: <a href="https://www.google.com/maps/place/Bright+Career+Coaching/@26.1497118,91.6717465,17z/data=!3m1!4b1!4m6!3m5!1s0x375a45622494c837:0xcce60ba9c22d692!8m2!3d26.1497118!4d91.6717465!16s%2Fg%2F11y3_3hkbs?entry=ttu" target="_blank" rel="noopener noreferrer">View on Map</a>
        </p>
        <p>
          Contact: <a href="tel:+19365122778">936-512-2778</a>
        </p>
      </div>
      <div className="map-container">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14092.78829842762!2d91.6717465!3d26.1497118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a45622494c837%3A0xcce60ba9c22d692!2sBright%20Career%20Coaching!5e0!3m2!1sen!2sin!4v1649828475979!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;
