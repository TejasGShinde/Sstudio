import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/projects/';

const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    work_done: '',
    images: []
  });

  const handleChange = (e) => {
    if (e.target.name === "images") {
      // Handling images separately
      const selectedImages = Array.from(e.target.files);
      setFormData({ ...formData, images: [...formData.images, ...selectedImages] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("owner", formData.owner);
      formDataToSend.append("work_done", formData.work_done);
      formData.images.forEach((image) => {
        formDataToSend.append("images", image);
      });
      await axios.post(apiUrl, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Optionally, you can redirect the user to the projects page after successful submission
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-24">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Project Name" required />
      <input type="text" name="owner" value={formData.owner} onChange={handleChange} placeholder="Owner" required />
      <input type="text" name="work_done" value={formData.work_done} onChange={handleChange} placeholder="Work Done" required />
      <input type="file" name="images" onChange={handleChange} multiple accept="image/*" />
      <input type="submit" value="Add Project" />
    </form>
  );
};

export default AddProjectForm;
