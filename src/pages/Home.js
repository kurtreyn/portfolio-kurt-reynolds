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
              <div className="home-text-wrapper">
                <span className="home-text">
                  Welcome to my portfolio. I have a pasion for creativity and
                  for continuously learning. Developing software is one way I do
                  this. Being able to create something from start to finish is a
                  rewarding experience. As well, I love to continue to learn new
                  technologies and continuously imporove my skills.
                </span>
              </div>
              <div className="home-icons-wrapper-outer">
                <span className="technology-text">
                  Currently proficient in the following technologies:
                </span>
                <div className="home-icons-wrapper-inner-level-one">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />
                </div>
                <div className="home-icons-wrapper-inner-level-two">
                  <span className="technology-text">
                    Currently learning the following technologies:
                  </span>
                </div>
                <div className="home-icons-wrapper-inner-level-three">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                    alt="icon"
                    className="home-icon"
                  />

                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg"
                    alt="icon"
                    className="home-icon"
                  />
                </div>
              </div>
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
