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

  return (
    <section className="project-details">
      <h1 className="text-3xl font-bold mt-20">{name}</h1> {/* Styled h1 */}
      <h2 className="text-xl font-semibold">Project Owner: {owner}</h2> {/* Styled h2 */}
      <p className="mt-2">{work_done}</p> {/* Styled p */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <img src={image} alt={`${name} Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;



