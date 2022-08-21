import React from 'react';
import '../styles/projectSettingsStyle.css';

export default function ProjectSettings() {
  return (
    <div className="project-settings-container">
      <div className="project-settings-header">
        <h1 className="project-settings-header-text">Project Settings</h1>
      </div>
      <div className="project-settings-inner-container">
        <div className="project-settings-body">
          <form action="" className="project-settings-form">
            <input
              type="text"
              placeholder="project name"
              className="project-settings-input"
            />

            <input
              type="text"
              placeholder="page url"
              className="project-settings-input"
            />
            <input
              type="text"
              placeholder="code url"
              className="project-settings-input"
            />
            <textarea
              type="text"
              placeholder="project description"
              className="project-settings-input"
            />

            <input
              type="file"
              id="file"
              placeholder="upload image"
              className="project-settings-file-selector"
            />
            <label htmlFor="file">Select Image</label>
          </form>
          <div className="project-settings-button-wrapper">
            <button className="project-settings-button">
              <span className="project-settings-button-text">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
