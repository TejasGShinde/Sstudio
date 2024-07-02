import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 mt-20">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800 dark:text-gray-200">
        Our Projects
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <li
            key={project.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <Link to={`/projects/${project.name}`} className="block">
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-semibold">Owner:</span> {project.owner}
                </p>
                <Link
                  to={`/projects/${project.name}`}
                  className="inline-block w-full px-4 py-2 bg-red-600 text-white font-semibold text-center rounded-md shadow-lg hover:bg-pink-700 transition-colors duration-300"
                >
                  See Details
                </Link>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
