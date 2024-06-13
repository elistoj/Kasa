// RouterApp.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/A-propos/A-propos'; 
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import logoHeader from './assets/images/logo.png';
import logoFooter from './assets/images/LOGO2.png';
import './App.css';

const RouterApp = () => {
  const headerData = {
    logoPath: logoHeader,
    links: [
      { path: '/', label: 'Accueil' },
      { path: '/about', label: 'À propos' }, 
    ],
  };

  const footerData = {
    logoPath: logoFooter,
    text: '© 2020 Kasa. All rights reserved',
  };

  return (
    <Router>
      <Header logo={headerData.logoPath} links={headerData.links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer logo={footerData.logoPath} text={footerData.text} />
    </Router>
  );
};

export default RouterApp;
