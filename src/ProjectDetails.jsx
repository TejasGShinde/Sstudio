// import React from 'react'

// const ProjectDetails = () => {
//   return (
//     <div>ProjectDetails</div>
//   )
// }

// export default ProjectDetails
import React from "react";
import { useParams } from "react-router-dom"; // Import useParams hook

const ProjectDetails = () => {
  const { projectId } = useParams(); // Access project ID from URL parameter

  // Find the corresponding project data based on project ID
  const project = projectsData.projects.find(
    (project) => project.name === projectId
  );

  if (!project) {
    return <div>Project not found!</div>; // Handle case where project ID is not found
  }

  const { name, owner, work_done, images } = project; // Destructure project data

  return (
    <section className="project-details">
      <h2>{name}</h2>
      <h3>Project Owner: {owner}</h3>
      <p>{work_done}</p>
      <div className="project-images">
        {images.map((image) => (
          <img src={image} alt={name} key={image} />
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
