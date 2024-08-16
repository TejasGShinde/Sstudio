import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://sstudio-backend.onrender.com/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 mt-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 dark:text-gray-200 tracking-tight">
        Our Interior Design Projects
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <li
            key={project.name}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <Link to={`/projects/${project.name}`} className="block">
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-64 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-500 group-hover:text-pink-600">
                  {project.name}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-semibold">Owner:</span> {project.owner}
                </p>
                <Link
                  to={`/projects/${project.name}`}
                  className="inline-block w-full px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold text-center rounded-full shadow-md transform transition-transform duration-500 hover:scale-110 hover:from-pink-600 hover:to-red-600"
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
