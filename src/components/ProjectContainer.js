import React from 'react';
import '../styles/projectContainerStyle.css';

export default function ProjectContainer({
  id,
  title,
  codeLink,
  pageLink,
  projectImage,
  description,
}) {
  const handleNavigate = (sourceLink) => {
    window.open(sourceLink);
  };

  return (
    <div className="project-container" id={id}>
      <div className="project-image-container reflection">
        <img src={`${projectImage}`} alt={title} className="project-image" />
        <img
          src={`${projectImage}`}
          alt={title}
          className="project-image-reflection"
        />
      </div>
      <div className="project-info-container">
        <div className="project-title-section">
          <h2 className="project-title">{title}</h2>
        </div>
        <div className="project-description-section">
          <p className="project-description">{description}</p>
        </div>
        <div className="project-links-container">
          <a className="project-link page-link" href={pageLink}>
            View Project
          </a>
          <a className="project-link code-link" href={codeLink}>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
