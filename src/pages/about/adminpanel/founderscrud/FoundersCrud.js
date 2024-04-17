// FoundersCrud.js

import React, { useState, useEffect } from 'react';
import './FoundersCrud.css';
import {Link} from 'react-router-dom';

const FoundersCrud = () => {
  const [founders, setFounders] = useState([]);
  const [newFounder, setNewFounder] = useState({ name: '', image: null, description: '' });
  const [uploadStatus, setUploadStatus] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');

  useEffect(() => {
    fetchFounders();
  }, []);

  const fetchFounders = async () => {
    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/founders');
      if (!response.ok) {
        throw new Error('Failed to fetch founders.');
      }
      const data = await response.json();
      setFounders(data);
    } catch (error) {
      console.error('Error fetching founders:', error);
    }
  };

  const handleFileChange = (event) => {
    setNewFounder({ ...newFounder, image: event.target.files[0] });
  };

  const handleChange = (event) => {
    setNewFounder({ ...newFounder, [event.target.name]: event.target.value });
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', newFounder.image);
    formData.append('name', newFounder.name);
    formData.append('description', newFounder.description);

    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/founders', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed.');
      }

      setUploadStatus('Upload successful!');
      fetchFounders();
    } catch (error) {
      console.error('Error uploading founder:', error);
      setUploadStatus('Upload failed. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://brightcareers-backend.onrender.com/founders/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Delete failed.');
      }

      setDeleteStatus('Delete successful!');
      fetchFounders();
    } catch (error) {
      console.error('Error deleting founder:', error);
      setDeleteStatus('Delete failed. Please try again.');
    }
  };

  if (localStorage.getItem('isLoggedIn') !== 'true') {
    // Redirect to login page or show an error message
    return <div className='warning'>You are not authorized to access this page. Please <Link to="/admin">log in.</Link></div>;
  }

  return (
    <div className="founders-crud-container">
     <div className='back'><Link to="/admin"> Back to Dashboard</Link></div>
      <h2>Founders CRUD</h2>
      <div className="add-founder-section">
        <h3>Add Founder</h3>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Add</button>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
      <div className="founders-section">
        <h3>Founders</h3>
        <div className="founders-list">
          {founders.map((founder) => (
            <div key={founder.id} className="founder">
              <img src={`https://brightcareers-backend.onrender.com/founders/${founder.image}`} alt={founder.name} />
              <p>Name: {founder.name}</p>
              <p>Description: {founder.description}</p>
              <button onClick={() => handleDelete(founder.id)}>Delete</button>
            </div>
          ))}
        </div>
        {deleteStatus && <p>{deleteStatus}</p>}
      </div>
    </div>
  );
};

export default FoundersCrud;
