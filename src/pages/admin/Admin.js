import React, { useState } from 'react';

const Admin = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [galleryData, setGalleryData] = useState(
    JSON.parse(localStorage.getItem('galleryData')) || []
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSaveImage = () => {
    if (!selectedFile) return; // Do not save if no file is selected

    // Create a FormData object to send the file to the server
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Fetch request to upload the image to the server
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the gallery data with the new image URL
        const newImage = { image_url: data.imageUrl };
        const updatedGalleryData = [...galleryData, newImage];
        setGalleryData(updatedGalleryData);
        localStorage.setItem('galleryData', JSON.stringify(updatedGalleryData));
        setSelectedFile(null); // Clear the selected file state after saving
      })
      .catch((error) => console.error('Error uploading image:', error));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleSaveImage}>Save Image</button>
      <h3>Gallery Data</h3>
      <ul>
        {galleryData.map((image, index) => (
          <li key={index}>
            <img
              src={process.env.PUBLIC_URL + '/data/images/' + image.image_url}
              alt={`Gallery Image ${index + 1}`}
              style={{ maxWidth: '200px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
