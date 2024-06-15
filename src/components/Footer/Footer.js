import React from 'react';
import logoFooter from '../../assets/images/LOGO2.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="home-footer">
      <img src={logoFooter} alt="Kasa logo footer" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
