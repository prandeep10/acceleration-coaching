import React, { useState, useEffect } from 'react';
import './Text.css';

const Text = () => {
  const [textData, setTextData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newTextData, setNewTextData] = useState({});

  useEffect(() => {
    fetchTextData();
  }, []);

  const fetchTextData = () => {
    fetch('https://brightcareers-backend.onrender.com/text')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch text data');
        }
        return response.json();
      })
      .then((data) => {
        setTextData(data);
        setNewTextData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching text data:', error);
        setIsLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTextData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewTextData(textData);
  };

  const handleSaveClick = () => {
    // Send PUT request to update text data
    fetch('https://brightcareers-backend.onrender.com/text', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTextData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update text data');
        }
        // Update textData with new data
        setTextData(newTextData);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating text data:', error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-container">
      <h2>About Us</h2>
      <div className="about-section">
        {isEditing ? (
          <textarea
            name="about_section_content"
            value={newTextData.about_section_content}
            onChange={handleInputChange}
          />
        ) : (
          <p>{textData.about_section_content}</p>
        )}
      </div>
      <div className="about-section">
        {isEditing ? (
          <textarea
            name="about_content"
            value={newTextData.about_content}
            onChange={handleInputChange}
          />
        ) : (
          <p>{textData.about_content}</p>
        )}
      </div>
      <div className="contact-section">
        <h3>Contact</h3>
        {isEditing ? (
          <input
            type="text"
            name="contact_number"
            value={newTextData.contact_number}
            onChange={handleInputChange}
          />
        ) : (
          <p>Contact Number: {textData.contact_number}</p>
        )}
      </div>
      <div className="edit-buttons">
        {isEditing ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Text;
