import React, { useState } from 'react';
import ProjectsContainer from '../components/ProjectsContainer';
import projectsIcon from '../assets/icons/projects-icon.png';
import '../styles/homeStyle.css';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setShowProjects(!showProjects);
  };
  return (
    <div className="home-container">
      <header className="home-header-section">
        <h1 className="home-header">Kurt Reynolds' Portfolio</h1>
      </header>

      <section className="home-projects-section">
        <div className="home-left-projects-section">
          {!showProjects && (
            <div className="home-content">
              <span className="home-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                architecto a officia, repellat quia asperiores totam possimus
                quae. Vitae ex incidunt itaque. Commodi, rerum ratione. Magnam
                fuga cupiditate doloribus delectus.
              </span>
            </div>
          )}
        </div>
        <div className="home-right-projects-section">
          {!showProjects && (
            <div
              className="projects-icon-container"
              onClick={handleShowProjects}
            >
              <img
                src={projectsIcon}
                alt="projects icon"
                className="projects-icon"
              />
              <span className="projects-icon-subtext">View Projects</span>
            </div>
          )}
        </div>
        {showProjects && (
          <ProjectsContainer
            showProjects={showProjects}
            setShowProjects={setShowProjects}
          />
        )}
      </section>
    </div>
  );
}
