import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from './redux/actions';
import ProjectContainer from './components/ProjectContainer';
import { projectsData } from './data/projectsData';
import './styles/appStyle.css';

function App() {
  return (
    <div className="app-container">
      <div className="projects-section">
        {projectsData.map((project) => {
          return (
            <ProjectContainer
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

export default App;
