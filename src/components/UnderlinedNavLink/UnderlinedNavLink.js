import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './UnderlinedNavLink.scss';

const UnderlinedNavLink = ({ to, label }) => {
  const location = useLocation();

  return (
    <NavLink
      to={to}
      className={`home-nav-link ${location.pathname === to ? "underline-on-active" : ""}`}
    >
      {label}
    </NavLink>
  );
};

export default UnderlinedNavLink;
