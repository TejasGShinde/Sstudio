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
    <section className="max-w-4xl mx-auto px-4 py-8 mt-20">
      <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <li key={project.name} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <Link to={`/projects/${project.name}`} className="block">
              <img src={project.images[0]} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700">{project.owner}</p>
                <Link to={`/projects/${project.name}`} className="block text-pink-600 hover:underline mt-4">
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
