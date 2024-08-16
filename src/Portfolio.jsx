import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://sstudio-backend.onrender.com/projects");
        const lastThreeProjects = response.data.slice(-3);
        setProjects(lastThreeProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600">
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800 dark:text-gray-200 tracking-tight">
          Our Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl group"
            >
              <img
                loading="lazy"
                src={project.images[0]}
                alt={project.name}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 transition-colors duration-500 group-hover:text-pink-600">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-500 group-hover:text-gray-400">
                  {project.owner}
                </p>
                <Link
                  to={`/projects/${project.name}`}
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full shadow-md transform transition-transform duration-500 hover:scale-110 hover:from-pink-600 hover:to-red-600"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/all-projects"
            className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full shadow-md transform transition-transform duration-500 hover:scale-110 hover:from-pink-600 hover:to-red-600"
          >
            See More Projects
          </Link>
          <Link
            to="/allphoto"
            className="inline-block ml-8 mt-8 px-4 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full shadow-md transform transition-transform duration-500 hover:scale-110 hover:from-pink-600 hover:to-red-600"
          >
            All Photos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
