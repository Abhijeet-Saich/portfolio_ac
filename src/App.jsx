import React from 'react';
import {Routes,Route } from 'react-router-dom';
import './App.css';

//importing components
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App = () => {
  return (
    <div className='main'> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App