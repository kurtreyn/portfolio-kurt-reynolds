import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/navbarStyle.css';

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="navbar-outer-container">
      <div className="navbar-inner-container">
        <div className="left-side-nav">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" className="nav-logo" />
          </div>
        </div>
        <div className="middle-nav"></div>
        <div className="right-side-nav">
          <div className="menu-wrapper">
            {!isLoggedIn && (
              <span className="menu-text">
                <a href="/login" className="menu-text">
                  Login
                </a>
              </span>
            )}
            {isLoggedIn && <span className="menu-text">Log Out</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
