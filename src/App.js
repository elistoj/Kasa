import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/A-propos/A-propos'; 
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import FicheLogement from './pages/Fiche-Logement/Fiche-Logement';

const RouterApp = () => {
  const footerData = {
    text: '© 2020 Kasa. All rights reserved',
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer text={footerData.text} />
    </Router>
  );
};

export default RouterApp;
