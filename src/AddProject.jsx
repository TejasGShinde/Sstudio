import React, { useState, useEffect } from 'react';
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

    const [photosData, setPhotosData] = useState({
        photos: []
    });

    const [projects, setProjects] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(apiUrl);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`${apiUrl}photos`);
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchProjects();
        fetchPhotos();
    }, []);

    const handleChange = (e) => {
        if (e.target.name === "images" || e.target.name === "photos") {
            const selectedFiles = Array.from(e.target.files);
            if (e.target.name === "images") {
                setFormData({ ...formData, images: [...formData.images, ...selectedFiles] });
            } else {
                setPhotosData({ ...photosData, photos: [...photosData.photos, ...selectedFiles] });
            }
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmitProject = async (e) => {
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
            fetchProjects();
        } catch (error) {
            toast.error("Error adding project!");
            console.error('Error adding project:', error);
        }
    };

    const handleSubmitPhotos = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            photosData.photos.forEach((photo) => {
                formDataToSend.append("photos", photo);
            });
            await axios.post(`${apiUrl}photos`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success("Photos added successfully!");
            setPhotosData({
                photos: []
            });
            fetchPhotos();
        } catch (error) {
            toast.error("Error adding photos!");
            console.error('Error adding photos:', error);
        }
    };

    const handleDelete = async (projectId) => {
        try {
            await axios.delete(`${apiUrl}${projectId}`);
            setProjects(projects.filter(project => project._id !== projectId));
            toast.success("Project deleted successfully!");
        } catch (error) {
            toast.error("Error deleting project!");
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmitProject} className="mt-28">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Project Name"
                        required
                    />
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="owner"
                        value={formData.owner}
                        onChange={handleChange}
                        placeholder="Owner"
                        required
                    />
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="work_done"
                        value={formData.work_done}
                        onChange={handleChange}
                        placeholder="Work Done"
                        required
                    />
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="file"
                        name="images"
                        onChange={handleChange}
                        multiple
                        accept="image/*"
                    />
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-gray-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        type="submit"
                        value="Add Project"
                    />
                </div>
            </form>

            <form onSubmit={handleSubmitPhotos} className="mt-8">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="file"
                        name="photos"
                        onChange={handleChange}
                        multiple
                        accept="image/*"
                    />
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-gray-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                        type="submit"
                        value="Add Photos"
                    />
                </div>
            </form>

            <section className="max-w-4xl mx-auto px-4 py-8 mt-20">
                <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <li key={project._id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                            <img src={project.images[0]} alt={project.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-700">{project.owner}</p>
                                <button
                                    onClick={() => handleDelete(project._id)}
                                    className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-700 transition-colors duration-300 text-center"
                                >
                                    Delete Project
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-8 mt-20">
                <h2 className="text-2xl font-bold mb-4">All Photos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {photos.map((photo, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                            <img src={photo.url} alt={`Photo ${index + 1}`} className="w-full h-48 object-cover" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AddProjectForm;
