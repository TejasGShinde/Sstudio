import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiUrl = 'https://sstudio-backend.onrender.com/projects/';

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
    const [editingProjectId, setEditingProjectId] = useState(null);

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

            if (editingProjectId) {
                await axios.put(`${apiUrl}updateProject/${editingProjectId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                toast.success("Project updated successfully!");
                setEditingProjectId(null);
            } else {
                await axios.post(apiUrl, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                toast.success("Project added successfully!");
            }

            setFormData({
                name: '',
                owner: '',
                work_done: '',
                images: []
            });
            fetchProjects();
        } catch (error) {
            toast.error("Error adding/updating project!");
            console.error('Error adding/updating project:', error);
        }
    };

    const handleSubmitPhotos = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            photosData.photos.forEach((photo) => {
                formDataToSend.append("photos", photo);
            });
            await axios.post(`${apiUrl}addphoto`, formDataToSend, {
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

    const handleEdit = (project) => {
        setFormData({
            name: project.name,
            owner: project.owner,
            work_done: project.work_done,
            images: [] // Images will be handled separately
        });
        setEditingProjectId(project._id);
    };

    const handleCancelEdit = () => {
        setFormData({
            name: '',
            owner: '',
            work_done: '',
            images: []
        });
        setEditingProjectId(null);
    };

    return (
        <div className="container mx-auto p-4">
            <ToastContainer />
            <section className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">{editingProjectId ? "Edit Project" : "Add a New Project"}</h2>
                <form onSubmit={handleSubmitProject} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Project Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="owner" className="block text-sm font-medium text-gray-700">Owner</label>
                        <input
                            type="text"
                            name="owner"
                            id="owner"
                            value={formData.owner}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="work_done" className="block text-sm font-medium text-gray-700">Work Done</label>
                        <textarea
                            name="work_done"
                            id="work_done"
                            value={formData.work_done}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
                        <input
                            type="file"
                            name="images"
                            id="images"
                            multiple
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
                        >
                            {editingProjectId ? "Update Project" : "Add Project"}
                        </button>
                        {editingProjectId && (
                            <button
                                type="button"
                                onClick={handleCancelEdit}
                                className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </section>
            <section className="max-w-4xl mx-auto px-4 py-8 mt-20">
                <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <li key={project._id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
                            <img src={project.images[0]} alt={project.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-700">{project.owner}</p>
                                <div className="flex justify-between">
                                    <button
                                        onClick={() => handleEdit(project)}
                                        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300 text-center"
                                    >
                                        Edit Project
                                    </button>
                                    <button
                                        onClick={() => handleDelete(project._id)}
                                        className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-700 transition-colors duration-300 text-center"
                                    >
                                        Delete Project
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Add Photos</h2>
                <form onSubmit={handleSubmitPhotos} className="space-y-4">
                    <div>
                        <label htmlFor="photos" className="block text-sm font-medium text-gray-700">Photos</label>
                        <input
                            type="file"
                            name="photos"
                            id="photos"
                            multiple
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
                    >
                        Add Photos
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddProjectForm;
