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
                Welcome to my portfolio. I have a pasion for creativity and for
                continuously learning. Developing software is one way I do this.
                Being able to create something from start to finish is a
                rewarding experience. As well, I love to continue to learn new
                technologies and continuously imporove my skills.
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
