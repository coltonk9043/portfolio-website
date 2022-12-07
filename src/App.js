import React from 'react'
import './App.css';
import NavBar from './components/NavigationBar';
import Footer from './components/Footer';

import Projects from "./sites/Projects";
import Experience from "./sites/Experience";
import Printing from "./sites/Printing";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <body>
      <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<Projects to="/projects" />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/3dprinting" element={<Printing />} />
        </Routes>
      </Router>
      <Footer />
    </body>
    
  );
}

export default App;
