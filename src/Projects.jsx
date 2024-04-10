import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import img4 from "./2.jpg"
import img3 from "./3.jpg"
import img2 from "./4.jpg"
const projectsData = {
  // Replace with your actual project data here (consider fetching from an API)
  "projects": [
    {
      "name": "Modern Loft Renovation",
      "owner": "John and Jane Smith",
      "work_done": "Complete interior redesign including living room, kitchen, and bedroom. Added contemporary furniture and lighting fixtures.",
      "images": [
         img4,
         img4,
        "modern_loft_3.jpg",
        "modern_loft_4.jpg",
        "modern_loft_5.jpg",
        "modern_loft_6.jpg"
      ]
    },
    {
      "name": "Cozy Cottage Makeover",
      "owner": "David and Emily Brown",
      "work_done": "Transformed a traditional cottage into a cozy retreat. Renovated the kitchen, bathroom, and outdoor patio.",
      "images": [
         img3,
        "cozy_cottage_2.jpg",
        "cozy_cottage_3.jpg",
        "cozy_cottage_4.jpg",
        "cozy_cottage_5.jpg",
        "cozy_cottage_6.jpg"
      ]
    },
    {
      "name": "Urban Chic Apartment",
      "owner": "Michael Johnson",
      "work_done": "Renovated an urban apartment with a focus on modern, industrial design. Redesigned the living space, bedroom, and home office.",
      "images": [
        img2,
        "urban_chic_2.jpg",
        "urban_chic_3.jpg",
        "urban_chic_4.jpg",
        "urban_chic_5.jpg",
        "urban_chic_6.jpg"
      ]
    }
  ],
};

const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 mt-20"> {/* Added mt-20 for top margin */}
      <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.projects.map((project) => (
          <li key={project.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/projects/${project.name}`} className="block">
              <img src={project.images[0]} alt={project.name} className="w-full h-48 object-cover" />
              {/* <img src={img4} alt={project.name} className="w-full h-48 object-cover" /> */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700">{project.owner}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
