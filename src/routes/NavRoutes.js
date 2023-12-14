import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProjectSettings from '../pages/ProjectSettings';
import Algorithms from '../pages/Algorithms';
import Demos from '../pages/Demos';

export default function NavRoutes() {
  return (
    <Routes>
      <Route
        path="/admin"
        element={<ProtectedRoute>{<ProjectSettings />}</ProtectedRoute>}
      />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/demos" element={<Demos />} />
      <Route path="/algorithms" element={<Algorithms />} />
    </Routes>
  );
}
