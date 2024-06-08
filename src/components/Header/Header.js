import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ logo, links }) => {
  const location = useLocation();

  return (
    <header className="home-header">
      <img src={logo} alt="Kasa logo" className="home-logo" />
      <nav className="home-nav">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`home-nav-link ${location.pathname === link.path ? "underline-on-active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
