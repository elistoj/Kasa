import React from 'react';
import logoHeader from '../../assets/images/logo.png';
import './Header.scss';
import UnderlinedNavLink from '../UnderlinedNavLink/UnderlinedNavLink';

const Header = () => {
  // Définition des liens de navigation avec leurs chemins et labels
  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
  ];

  return (
    <header className="home-header"> {/* Élément header avec classe CSS 'home-header' */}
      <img src={logoHeader} alt="Kasa logo" className="home-logo" /> {/* Logo affiché avec une classe 'home-logo' */}
      <nav className="home-nav"> {/* Élément nav pour la navigation, avec classe 'home-nav' */}
        {/* Mapping des liens pour créer des composants UnderlinedNavLink */}
        {links.map((link, index) => (
          <UnderlinedNavLink
            key={index}
            to={link.path} // Propriété 'to' pour le chemin du lien
            label={link.label} // Propriété 'label' pour le texte du lien
          />
        ))}
      </nav>
    </header>
  );
};

export default Header;
