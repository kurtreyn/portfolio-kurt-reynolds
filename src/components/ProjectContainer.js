import React from 'react';
import storytellerImage from '../assets/images/storyteller-thumbnail-960x540.jpg';
import '../styles/projectContainerStyle.css';

export default function ProjectContainer({
  id,
  title,
  codeLink,
  pageLink,
  projectImage,
  description,
}) {
  return (
    <div className="project-container" id={id}>
      <div className="project-image-container reflection">
        <img src={`${projectImage}`} alt={title} className="project-image" />
      </div>
      <div className="project-info-container">
        <div className="project-title-section">
          <h2 className="project-title">{title}</h2>
        </div>
        <div className="project-description-section">
          <p className="project-description">{description}</p>
        </div>
        <div className="project-buttons-container">
          <button className="project-button page-button">View Project</button>
          <button className="project-button code-button">View Code</button>
        </div>
      </div>
    </div>
  );
}
