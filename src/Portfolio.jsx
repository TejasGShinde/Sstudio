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
import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import Img1 from "./3.jpg";
import Img2 from "./4.jpg";
import Img3 from "./5.jpg";

const Portfolio = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={Img1} alt="Project Image" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Project Title</h3>
              <p className="text-gray-700">This project is so cool, even my cat approves! </p>
              <Link to="/projects" className="block text-pink-600 hover:underline mt-4">
                See Details
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={Img2} alt="Project Image" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Project Title</h3>
              <p className="text-gray-700">This project is so cool, even my cat approves! </p>
              <Link to="/projects" className="block text-pink-600 hover:underline mt-4">
                See Details
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={Img3} alt="Project Image" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Project Title</h3>
              <p className="text-gray-700">This project is so cool, even my cat approves! </p>
              <Link to="/projects" className="block text-pink-600 hover:underline mt-4">
                See Details
              </Link>
            </div>
          </div>
          {/* Repeat for other projects */}
        </div>
        {/* See More Button (optional, can be removed) */}
        <Link to="/all-projects" className="text-pink-600 hover:underline mt-4">
          See More Projects
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
