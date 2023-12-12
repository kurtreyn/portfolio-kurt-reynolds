import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setRefreshPosts } from '../redux/controls';
import FirebaseClass from '../classes/FirebaseClass';
import AlertClass from '../classes/AlertClass';
import '../styles/projectSettingsStyle.css';

export default function ProjectSettings() {
  const { loading } = useSelector((state) => state.controls);
  const dispatch = useDispatch();
  const fb = new FirebaseClass();
  const ac = new AlertClass();
  const formRef = useRef(null);

  async function handlePost(e) {
    e.preventDefault();
    const projectName = formRef.current['project-name'].value;
    const pageUrl = formRef.current['page-url'].value;
    const codeUrl = formRef.current['code-url'].value;
    const description = formRef.current['project-description'].value;
    const image = formRef.current['image-input'].files;
    try {
      dispatch(setLoading(true));
      await fb.makePost(projectName, pageUrl, codeUrl, description, image);
      dispatch(setLoading(false));
      ac.successAlert('Post submitted!');

      dispatch(setRefreshPosts(true));
    } catch (error) {
      ac.errorAlert('Error submitting post', error);
    }

    formRef.current.reset();
  }

  return (
    <div className="project-settings-container">
      <div className="project-settings-header">
        <h1 className="project-settings-header-text">Project Settings</h1>
      </div>
      <div className="project-settings-inner-container">
        <div className="project-settings-body">
          <form action="" className="project-settings-form" ref={formRef}>
            <input
              type="text"
              id="project-name"
              placeholder="project name"
              className="project-settings-input"
            />

            <input
              type="text"
              id="page-url"
              placeholder="page url"
              className="project-settings-input"
            />
            <input
              type="text"
              id="code-url"
              placeholder="code url"
              className="project-settings-input"
            />
            <textarea
              type="text"
              id="project-description"
              placeholder="project description"
              className="project-settings-input"
            />
            <label for="image-input" className="project-settings-label">
              Select a project image:
            </label>
            <input
              id="image-input"
              type="file"
              className="project-settings-input"
            />
          </form>
          <div className="project-settings-button-wrapper">
            <button
              className="project-settings-button"
              disabled={loading}
              onClick={handlePost}>
              <span className="project-settings-button-text">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
