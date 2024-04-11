// import React from "react";
// import Img1 from "./3.jpg"
// import Img2 from "./4.jpg"
// import Img3 from "./5.jpg"

// const Portfolio = () => {
//   return (
//     <section id="projects" className="py-16">
//     <div className="container mx-auto px-4">
//       <h2 className="text-4xl font-bold mb-8 text-center">Our Featured Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {/* Project Cards */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img src={Img1} alt="Project Image" className="w-full h-64 object-cover" />
//           <div className="p-6">
//             <h3 className="text-2xl font-bold mb-4">Project Title</h3>
//             <p className="text-gray-700">This project is so cool, even my cat approves! 🐱</p>
//             <a href="#" className="block text-blue-600 hover:underline mt-4">Check it out! </a>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img src={Img2} alt="Project Image" className="w-full h-64 object-cover" />
//           <div className="p-6">
//             <h3 className="text-2xl font-bold mb-4">Project Title</h3>
//             <p className="text-gray-700">This project is so cool, even my cat approves! 🐱</p>
//             <a href="#" className="block text-blue-600 hover:underline mt-4">Check it out! </a>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img  src={Img3} alt="Project Image" className="w-full h-64 object-cover" />
//           <div className="p-6">
//             <h3 className="text-2xl font-bold mb-4">Project Title</h3>
//             <p className="text-gray-700">This project is so cool, even my cat approves! 🐱</p>
//             <a href="#" className="block text-blue-600 hover:underline mt-4">Check it out! </a>
//           </div>
//         </div>
//         {/* Repeat for other projects */}
//       </div>
//       {/* See More Button */}
//       <div className="text-center mt-8">
//         <a href="#" className="text-blue-600 hover:underline">See More Projects</a>
//       </div>
//     </div>
//   </section>
//   );
// };

// export default Portfolio;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Portfolio = () => {
  // Define state to store the last 3 added projects
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Define an async function to fetch the last 3 added projects from the backend
    const fetchProjects = async () => {
      try {
        // Make a GET request to fetch all projects from the backend
        const response = await axios.get("http://localhost:5000/projects");
        // Get the last 3 projects from the response data
        const lastThreeProjects = response.data.slice(-3);
        // Set the last 3 projects in state
        setProjects(lastThreeProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    // Call the fetchProjects function when the component mounts
    fetchProjects();
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {/* Render last 3 projects */}
          {projects.map((project) => (
            <div key={project.name} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <img src={project.images[0]} alt={project.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="text-gray-700">{project.owner}</p>
                <Link to={`/projects/${project.name}`} className="block text-pink-600 hover:underline mt-4">
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* See More Button */}
        <Link to="/all-projects" className="text-pink-600 hover:underline mt-8 block text-center">
          See More Projects
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;

