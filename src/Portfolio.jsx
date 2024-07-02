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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects");
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
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800 dark:text-gray-200">Our Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.name} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <img src={project.images[0]} alt={project.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.owner}</p>
                <Link to={`/projects/${project.name}`} className="inline-block mt-4 px-6 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-pink-700 transition-colors duration-300">
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/all-projects" className="inline-block mt-8 px-8 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-pink-700 transition-colors duration-300">
            See More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
