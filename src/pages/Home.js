import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, setRefreshPosts } from '../redux/controls';
import SideBar from '../components/SideBar';
import ProjectsContainer from '../components/ProjectsContainer';
import projectsIcon from '../assets/icons/icon-web-development.png';
import logo from '../assets/images/logo.png';
import githubIcon from '../assets/icons/icon-github.png';
import linkedinIcon from '../assets/icons/icon-linkedin.png';
import chevronUp from '../assets/icons/chevron-up.svg';
import chevronDown from '../assets/icons/chevron-down.svg';
import FirebaseClass from '../classes/FirebaseClass';
import GlobalClass from '../classes/GlobalClass';
import '../styles/homeStyle.css';

export default function Home({ isLoggedIn }) {
  const { posts, refreshPosts, loading } = useSelector(
    (state) => state.controls
  );
  const [showProjects, setShowProjects] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [sortedPosts, setSortedPosts] = useState(null);
  const dispatch = useDispatch();
  const fb = new FirebaseClass();
  const gc = new GlobalClass();
  const postLen = new GlobalClass();

  if (posts) {
    postLen.setLength(posts.length);
  }

  async function fetchNewPosts() {
    const newPosts = await fb.fetchPosts();
    dispatch(setPosts(newPosts));
    dispatch(setRefreshPosts(false));
  }

  // for initial component load
  useEffect(() => {
    if (posts) {
      setSortedPosts(gc.sortData(posts));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postLen.getLength()]);

  //  for when new posts are added
  useEffect(() => {
    if (refreshPosts) {
      fetchNewPosts()
        .then(() => {
          setSortedPosts(gc.sortData(posts));
        })
        .catch((err) => {
          console.log('error refreshing posts: ', err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshPosts]);

  const handleShowProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="home-container">
      {!showProjects && (
        <div className="home-content">
          <div className="header-section">
            <div className="left-header">
              <div className="logo-wrapper">
                <img src={logo} alt="logo" className="home-logo" />
              </div>
            </div>
            <div className="right-header">
              <div className="icon-wrapper">
                <a
                  href="https://www.linkedin.com/in/kurt-reynolds-447ab632/"
                  target={'_blank'}
                  rel="noreferrer">
                  <img
                    src={linkedinIcon}
                    alt="linkedin icon"
                    className="home-icon"
                  />
                </a>
                <a
                  href="https://github.com/kurtreyn?tab=repositories"
                  target={'_blank'}
                  rel="noreferrer">
                  <img
                    src={githubIcon}
                    alt="github icon"
                    className="home-icon margin-for-icon"
                  />
                </a>
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
                  engineer.
                  <br />I have a passion for creating and learning and have used
                  that to develop numerous professional and personal projects.
                </span>
              </div>
            </div>
            <div className="right-body">
              <div className="right-top">
                <span className="right-top-text text-color">Projects</span>
              </div>
              <div className="right-bottom">
                <div
                  className="home-projects-icon-wrapper"
                  onClick={handleShowProjects}>
                  <img
                    src={projectsIcon}
                    alt="projects icon"
                    className="home-projects-icon"
                  />
                  <span className="home-projects-text text-color">
                    View Projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <div
              className="sidebar-block"
              onClick={() => setShowSideBar(!showSideBar)}>
              <img
                src={!showSideBar ? chevronDown : chevronUp}
                alt="down arrow"
                className="toggle-icon"
              />
            </div>
            {showSideBar && <SideBar isLoggedIn={isLoggedIn} />}
          </div>
        </div>
      )}

      {showProjects && (
        <ProjectsContainer
          showProjects={showProjects}
          setShowProjects={setShowProjects}
          posts={sortedPosts}
        />
      )}
    </div>
  );
}
