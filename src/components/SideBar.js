import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/sidebarStyle.css';

export default function SideBar({ showSideBar }) {
  const { isAuth } = useSelector((state) => state.user);
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
        {isAuth ? (
          <Link to="/admin" className="sidebar-text">
            Edit Projects
          </Link>
        ) : null}
      </div>
    </div>
  );
}
