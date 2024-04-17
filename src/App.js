import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route components
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Courses from './pages/courses/Courses';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Admin from './pages/admin/Admin';
import StudentCrud from './pages/about/adminpanel/studentcrud/StudentCrud';
import FacultyCrud from './pages/about/adminpanel/facultycrud/FacultyCrud';
import FoundersCrud from './pages/about/adminpanel/founderscrud/FoundersCrud';
import Text from './pages/about/adminpanel/text/Text';
import Gallery from './pages/about/adminpanel/gallery/Gallery';

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
        <Route path="/studentcrud" element={<StudentCrud/>} /> 
        <Route path="/facultycrud" element={<FacultyCrud/>} /> 
        <Route path="/founderscrud" element={<FoundersCrud/>} /> 
        <Route path="/texts" element={<Text/>} /> 
        <Route path="/gallery" element={<Gallery/>} /> 
          
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
