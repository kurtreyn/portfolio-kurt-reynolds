import React from 'react';
import Project from './Project';
import { projectsData } from '../data/projectsData';
import closeIcon from '../assets/icons/close-icon.svg';
import '../styles/projectsContainerStyle.css';

export default function ProjectsContainer({ showProjects, setShowProjects }) {
  const handleCloseProjects = () => {
    setShowProjects(!showProjects);
  };
  return (
    <div className="projects-container">
      <header className="projects-container-header">
        <div
          className="projects-container-close-button-wrapper"
          onClick={handleCloseProjects}
        >
          <img
            src={closeIcon}
            alt="close icon"
            className="projects-close-icon"
          />
        </div>
      </header>

      <div className="projects-container-body">
        {projectsData.map((project) => {
          return (
            <Project
              key={project.id}
              projectImage={project.image}
              title={project.title}
              codeLink={project.code_link}
              pageLink={project.page_link}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}
