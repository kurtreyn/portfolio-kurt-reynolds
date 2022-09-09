import React from 'react';
import Project from './Project';
import closeIcon from '../assets/icons/close-icon.svg';
import '../styles/projectsContainerStyle.css';

export default function ProjectsContainer({
  posts,
  showProjects,
  setShowProjects,
}) {
  const handleCloseProjects = () => {
    setShowProjects(!showProjects);
  };

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="projects-container">
      <header className="projects-container-header content">
        <div
          className="projects-container-close-button-wrapper"
          onClick={handleCloseProjects}
        >
          <img
            src={closeIcon}
            alt="close icon"
            className="projects-close-icon content"
          />
        </div>
      </header>

      <div className="projects-container-body content">
        {sortedPosts.map((post, index) => {
          return (
            <Project
              key={index}
              id={post.id}
              projectImage={post.image}
              title={post.title}
              codeLink={post.codeLink}
              pageLink={post.pageLink}
              description={post.description}
            />
          );
        })}
      </div>
    </div>
  );
}
