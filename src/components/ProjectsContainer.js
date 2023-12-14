import React from 'react';
import Project from './Project';
import closeIcon from '../assets/icons/close-icon.svg';
import '../styles/projectsContainerStyle.css';

export default function ProjectsContainer({
  posts,
  showProjects,
  setShowProjects,
}) {
  if (posts.length > 0) {
    // console.log('we have posts!');
  }
  const handleCloseProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="projects-container">
      <header className="projects-container-header content">
        <div
          className="projects-container-close-button-wrapper"
          onClick={handleCloseProjects}>
          <img
            src={closeIcon}
            alt="close icon"
            className="projects-close-icon content"
          />
        </div>
      </header>

      <div className="projects-container-body content">
        {posts.length > 0 &&
          posts.map((post, index) => {
            return (
              <Project
                key={index}
                id={post.id}
                projectImage={post.images}
                title={post.project_name}
                codeLink={post.code_url}
                pageLink={post.page_url}
                description={post.description}
              />
            );
          })}
      </div>
    </div>
  );
}
