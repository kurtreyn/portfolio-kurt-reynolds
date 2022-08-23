import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProjectsContainer from '../components/ProjectsContainer';
import projectsIcon from '../assets/icons/projects-icon.png';
import logo from '../assets/images/logo.png';
import githubIcon from '../assets/icons/icon-github.png';
import linkedinIcon from '../assets/icons/icon-linkedin.png';
import '../styles/homeStyle.css';

export default function Home({ isLoggedIn, setIsLoggedIn }) {
  const [showProjects, setShowProjects] = useState(false);

  // const handleShowProjects = () => {
  //   setShowProjects(!showProjects);
  // };
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="header-section">
          <div className="left-header">
            <div className="logo-wrapper">
              <img src={logo} alt="logo" className="home-logo" />
            </div>
          </div>
          <div className="right-header">
            <div className="icon-wrapper">
              <img
                src={linkedinIcon}
                alt="linkedin icon"
                className="home-icon"
              />
              <img src={githubIcon} alt="github icon" className="home-icon" />
            </div>
          </div>
        </div>

        <div className="body-section">
          <div className="left-body">
            <div className="left-top">
              <span className="left-top-text text-color">Welcome</span>
            </div>
            <div className="left-bottom">
              <span className="left-bottom-text text-color">
                My name is Kurt Reynolds, and I am a full stack software
                engineer with a focus on the front-end and mobile.
                <br />I have a passion for creating and learning and have used
                that to develop numerous projects, including mobile apps,
                e-commerce, back-end servers, and more.
              </span>
            </div>
          </div>
          <div className="right-boxy"></div>
        </div>
      </div>
    </div>
  );
}
