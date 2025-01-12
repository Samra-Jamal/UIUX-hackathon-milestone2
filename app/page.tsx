"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';  // Adjust the path if necessary
import Home from './home';
import About from './about';
import Contact from './contact';
import './App.css';  // Ensure this file exists

function App() {
  return (
    <Router>
      <Navbar /> {/* The Navbar will stay at the top across all pages */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />        {/* Home Page */}
          <Route path="/about" element={<About />} />  {/* About Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

