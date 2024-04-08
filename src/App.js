import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route components
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Courses from './pages/courses/Courses';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Admin from './pages/admin/Admin';

const App = () => {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <Navbar/>
      <Routes> {/* Render Routes component for routing */}
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/courses" element={<Courses/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/admin" element={<Admin/>} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
