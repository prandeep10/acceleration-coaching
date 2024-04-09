// Admin.js

import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/images');
      if (!response.ok) {
        throw new Error('Failed to fetch images.');
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/images', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed.');
      }

      setUploadStatus('Upload successful!');
      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadStatus('Upload failed. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://brightcareers-backend.onrender.com/images/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Delete failed.');
      }

      setDeleteStatus('Delete successful!');
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      setDeleteStatus('Delete failed. Please try again.');
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <div className="upload-section">
        <h3>Upload Image</h3>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
      <div className="images-section">
        <h3>Images</h3>
        <div className="image-list">
          {images.map((image) => (
            <div key={image.id} className="image-item">
              <img src={`https://brightcareers-backend.onrender.com/images/${image.filename}`} alt={image.originalname} />
              <p>{image.originalname}</p>
              <button onClick={() => handleDelete(image.id)}>Delete</button>
            </div>
          ))}
        </div>
        {deleteStatus && <p>{deleteStatus}</p>}
      </div>
    </div>
  );
};

export default Admin;
