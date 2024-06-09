import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import logoHeader from './assets/images/logo.png';
import logoFooter from './assets/images/LOGO2.png';
import './App.css';

const App = () => {
  const [accommodations, setAccommodations] = useState([]);
  
  useEffect(() => {
    fetch('/logements.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }
        setAccommodations(data.slice(0, 6));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
        <Route path="/" element={<Home accommodations={accommodations} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer logo={footerData.logoPath} text={footerData.text} />
    </Router>
  );
};

export default App;
