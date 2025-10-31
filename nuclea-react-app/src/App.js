
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Contribute from './pages/Contribute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </Router>
  );
}

export default App;
