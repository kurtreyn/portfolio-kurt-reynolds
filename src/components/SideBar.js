import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebarStyle.css';

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content-wrapper">
        <Link to="/users/login" className="sidebar-text">
          Login
        </Link>
      </div>
    </div>
  );
}
