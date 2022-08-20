import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import '../styles/mainStyle.css';

export default function Main() {
  return (
    <div className="main-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          //   element={<Login currentUser={currentUser} />}
        />
        <Route
          exact
          path="/signup"
          //   element={<Signup currentUser={currentUser} />}
        />
        <Route
          exact
          path="/profile"
          //   element={<Profile currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}
