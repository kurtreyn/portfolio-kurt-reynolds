import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthRoute from '../routes/AuthRoute';
import ProjectSettings from '../pages/ProjectSettings';
import Login from '../pages/Login';
import Home from '../pages/Home';
import '../styles/mainStyle.css';

export default function Main({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="main-container">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          exact
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          exact
          path="/project_settings"
          element={
            <AuthRoute isLoggedIn={isLoggedIn}>
              <ProjectSettings />
            </AuthRoute>
          }
        />
      </Routes>
    </div>
  );
}
