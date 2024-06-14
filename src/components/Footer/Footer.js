import React from 'react';
import logoFooter from '../../assets/images/LOGO2.png';
import './Footer.css';

const Footer = () => {
  const footerText = '© 2020 Kasa. All rights reserved';

  return (
    <footer className="home-footer">
      <img src={logoFooter} alt="Kasa logo footer" className="footer-logo" />
      <p className="footer-text">{footerText}</p>
    </footer>
  );
};

export default Footer;
