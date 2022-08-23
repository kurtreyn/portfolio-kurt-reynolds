import React from 'react';
import linkedinIcon from '../assets/icons/icon-linkedin.png';
import '../styles/footerStyle.css';

export default function Footer() {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="left-side-footer">
          <div className="footer-icon-wrapper">
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              className="footer-icon"
            />
          </div>
        </div>
        <div className="middle-footer">
          <span className="footer-text">Kurt Reynolds: Portfolio</span>
        </div>
        <div className="right-side-footer"></div>
      </div>
    </div>
  );
}
