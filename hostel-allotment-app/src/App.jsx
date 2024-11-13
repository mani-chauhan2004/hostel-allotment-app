import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegisterPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
}
