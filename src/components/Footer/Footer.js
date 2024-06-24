import React from 'react';
import logoFooter from '../../assets/images/LOGO2.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="home-footer"> {/* Élément footer avec classe CSS 'home-footer' */}
      <img src={logoFooter} alt="Kasa logo footer" className="footer-logo" /> {/* Logo affiché avec une classe 'footer-logo' */}
      <p className="footer-text">© 2020 Kasa. All rights reserved</p> {/* Texte de droits d'auteur */}
    </footer>
  );
};

export default Footer;