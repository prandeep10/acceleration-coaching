// FacultyCrud.js

import React, { useState, useEffect } from 'react';
import './FacultyCrud.css';

const FacultyCrud = () => {
  const [faculty, setFaculty] = useState([]);
  const [newFacultyMember, setNewFacultyMember] = useState({ name: '', image: null, subject: '', description: '' });
  const [uploadStatus, setUploadStatus] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/faculty');
      if (!response.ok) {
        throw new Error('Failed to fetch faculty members.');
      }
      const data = await response.json();
      setFaculty(data);
    } catch (error) {
      console.error('Error fetching faculty members:', error);
    }
  };

  const handleFileChange = (event) => {
    setNewFacultyMember({ ...newFacultyMember, image: event.target.files[0] });
  };

  const handleChange = (event) => {
    setNewFacultyMember({ ...newFacultyMember, [event.target.name]: event.target.value });
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', newFacultyMember.image);
    formData.append('name', newFacultyMember.name);
    formData.append('subject', newFacultyMember.subject);
    formData.append('description', newFacultyMember.description);

    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/faculty', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed.');
      }

      setUploadStatus('Upload successful!');
      fetchFaculty();
    } catch (error) {
      console.error('Error uploading faculty member:', error);
      setUploadStatus('Upload failed. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://brightcareers-backend.onrender.com/faculty/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Delete failed.');
      }

      setDeleteStatus('Delete successful!');
      fetchFaculty();
    } catch (error) {
      console.error('Error deleting faculty member:', error);
      setDeleteStatus('Delete failed. Please try again.');
    }
  };

  return (
    <div className="faculty-crud-container">
      <h2>Faculty CRUD</h2>
      <div className="add-faculty-section">
        <h3>Add Faculty Member</h3>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="subject" placeholder="Subject" onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Add</button>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
      <div className="faculty-section">
        <h3>Faculty Members</h3>
        <div className="faculty-list">
          {faculty.map((member) => (
            <div key={member.id} className="faculty-member">
              <img src={`https://brightcareers-backend.onrender.com/faculty/${member.image}`} alt={member.name} />
              <p>Name: {member.name}</p>
              <p>Subject: {member.subject}</p>
              <p>Description: {member.description}</p>
              <button onClick={() => handleDelete(member.id)}>Delete</button>
            </div>
          ))}
        </div>
        {deleteStatus && <p>{deleteStatus}</p>}
      </div>
    </div>
  );
};

export default FacultyCrud;
