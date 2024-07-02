import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.success("Project added successfully!");
            setFormData({
                name: '',
                owner: '',
                work_done: '',
                images: []
            });
        } catch (error) {
            toast.error("Error adding project!");
            console.error('Error adding project:', error);
        }
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit} className=" mt-28">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Project Name" required />
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="owner" value={formData.owner} onChange={handleChange} placeholder="Owner" required />
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="work_done" value={formData.work_done} onChange={handleChange} placeholder="Work Done" required />
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="file" name="images" onChange={handleChange} multiple accept="image/*" />
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-gray-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" type="submit" value="Add Project" />
                </div>
            </form>
        </div>
    );
};

export default AddProjectForm;
