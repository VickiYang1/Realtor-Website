import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Listings from './Components/Listings';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import SmallNavbar from './Components/SmallNavbar';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/' ? <Navbar /> : <SmallNavbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
