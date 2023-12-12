import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebarStyle.css';

export default function SideBar({ isLoggedIn, showSideBar }) {
  return (
    <div
      className={
        showSideBar
          ? 'transition-animate sidebar-container'
          : 'sidebar-container'
      }>
      <div className="sidebar-content-wrapper">
        <Link to="/demos" className="sidebar-text">
          Demos
        </Link>
        <Link to="/algorithms" className="sidebar-text">
          Algorithm Simulator
        </Link>
        <Link to="/login" className="sidebar-text">
          Login
        </Link>
        {isLoggedIn ? (
          <Link to="/admin" className="sidebar-text">
            Project Settings
          </Link>
        ) : null}
      </div>
    </div>
  );
}
