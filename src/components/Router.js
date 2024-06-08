import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import headerLogo from '../assets/images/logo.png'; 
import footerLogo from '../assets/images/LOGO2.png'; 

const AppRouter = () => {
  const headerData = {
    logoPath: headerLogo,
    links: [
      { path: '/', label: 'Accueil' },
      { path: '/about', label: 'À propos' }
    ]
  };

  const footerData = {
    logoPath: footerLogo,
    text: '© 2020 Kasa. All rights reserved'
  };

  return (
    <Router>
      <Header logo={headerData.logoPath} links={headerData.links} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer logo={footerData.logoPath} text={footerData.text} />
    </Router>
  );
};

export default AppRouter;
