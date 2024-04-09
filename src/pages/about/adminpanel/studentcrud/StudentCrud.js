// StudentCrud.js

import React, { useState, useEffect } from 'react';
import './StudentCrud.css';

const StudentCrud = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', percentage: '', image: null });
  const [uploadStatus, setUploadStatus] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/students');
      if (!response.ok) {
        throw new Error('Failed to fetch students.');
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleFileChange = (event) => {
    setNewStudent({ ...newStudent, image: event.target.files[0] });
  };

  const handleChange = (event) => {
    setNewStudent({ ...newStudent, [event.target.name]: event.target.value });
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', newStudent.image);
    formData.append('name', newStudent.name);
    formData.append('percentage', newStudent.percentage);

    try {
      const response = await fetch('https://brightcareers-backend.onrender.com/students', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed.');
      }

      setUploadStatus('Upload successful!');
      fetchStudents();
    } catch (error) {
      console.error('Error uploading student:', error);
      setUploadStatus('Upload failed. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://brightcareers-backend.onrender.com/students/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Delete failed.');
      }

      setDeleteStatus('Delete successful!');
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
      setDeleteStatus('Delete failed. Please try again.');
    }
  };

  return (
    <div className="student-crud-container">
      <h2>Student CRUD</h2>
      <div className="add-student-section">
        <h3>Add Student</h3>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="percentage" placeholder="Percentage" onChange={handleChange} />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Add</button>
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
      <div className="students-section">
        <h3>Students</h3>
        <div className="student-list">
          {students.map((student) => (
            <div key={student.id} className="student-item">
              <img src={`https://brightcareers-backend.onrender.com/students/${student.image}`} alt={student.name} />
              <p>Name: {student.name}</p>
              <p>Percentage: {student.percentage}</p>
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </div>
          ))}
        </div>
        {deleteStatus && <p>{deleteStatus}</p>}
      </div>
    </div>
  );
};

export default StudentCrud;
