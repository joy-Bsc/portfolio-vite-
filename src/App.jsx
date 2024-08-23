import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Work from './pages/Work';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Work />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;