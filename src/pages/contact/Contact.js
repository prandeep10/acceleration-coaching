import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // State variables to hold form data and submission status
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state variable

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with form data
    const formData = {
      name: name,
      email: email,
      message: message
    };

    // Send POST request to Express backend
    fetch('https://brightcareers-backend.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Message sent successfully!');
        // Update state to indicate successful submission
        setIsSubmitted(true);
        // Optionally, you can reset the form fields here
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Error sending message');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <section className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        {isSubmitted ? ( // Conditional rendering based on submission status
          <div className="success-message">Message sent successfully!</div>
        ) : (
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        )}
        <div className="map-container">
          <iframe
            className="map"
            title="Location"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2122.2575005064577!2d91.66574255878214!3d26.14079935207817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374503ac37396f79%3A0x951ab314dd7c50fc!2sJalukbari%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1645656653692`}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
