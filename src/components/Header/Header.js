import React from 'react';
import logoHeader from '../../assets/images/logo.png';
import './Header.css';
import UnderlinedNavLink from '../UnderlinedNavLink/UnderlinedNavLink';

const Header = () => {
  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
  ];

  return (
    <header className="home-header">
      <img src={logoHeader} alt="Kasa logo" className="home-logo" />
      <nav className="home-nav">
        {links.map((link, index) => (
          <UnderlinedNavLink
            key={index}
            to={link.path}
            label={link.label}
          />
        ))}
      </nav>
    </header>
  );
};

export default Header;
