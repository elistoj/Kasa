import React from 'react';
import './Footer.css';

const Footer = ({ logo, text }) => {
  return (
    <footer className="home-footer">
      <img src={logo} alt="Kasa logo footer" className="footer-logo" />
      <p className="footer-text">{text}</p>
    </footer>
  );
};

export default Footer;
