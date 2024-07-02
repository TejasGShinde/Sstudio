// import React from 'react'

// const ProjectDetails = () => {
//   return (
//     <div>ProjectDetails</div>
//   )
// }

// export default ProjectDetails

// import React from "react";
// import { useParams } from "react-router-dom"; // Import useParams hook

// const ProjectDetails = () => {
//   const { projectId } = useParams(); // Access project ID from URL parameter

//   // Find the corresponding project data based on project ID
//   const project = projectsData.projects.find(
//     (project) => project.name === projectId
//   );

//   if (!project) {
//     return <div>Project not found!</div>; // Handle case where project ID is not found
//   }

//   const { name, owner, work_done, images } = project; // Destructure project data

//   return (
//     <section className="project-details">
//       <h2>{name}</h2>
//       <h3>Project Owner: {owner}</h3>
//       <p>{work_done}</p>
//       <div className="project-images">
//         {images.map((image) => (
//           <img src={image} alt={name} key={image} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/projects/${projectId}`);
                setProject(response.data);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        fetchProjectDetails();
    }, [projectId]);

    if (!project) {
        return <div>Loading...</div>;
    }

    const { name, owner, work_done, images } = project;

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setSelectedImage(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]);
    };

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setSelectedImage(images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]);
    };

    return (
        <section className="project-details">
            <div className="container mx-auto px-4 py-8 mt-20">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                    See Our Work Done <span className="text-pink-600 dark:text-pink-500">In {owner}'s House</span>
                </h1>
                <p className="text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-8">
                    This work is done with passion and vision.
                </p>
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{name}</h2>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{work_done}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
                            onClick={() => {
                                setSelectedImage(image);
                                setCurrentIndex(index);
                            }}
                        >
                            <img src={image} alt={`${name} Image ${index + 1}`} className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative bg-white rounded-lg overflow-hidden">
                            <button
                                className="absolute top-0 right-0 m-4 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
                                onClick={() => setSelectedImage(null)}
                            >
                                &#10005;
                            </button>
                            <button
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
                                onClick={handlePrevImage}
                            >
                                &#10094;
                            </button>
                            <button
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
                                onClick={handleNextImage}
                            >
                                &#10095;
                            </button>
                            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen object-contain" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectDetails;






