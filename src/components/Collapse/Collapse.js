import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, children, className }) => {
  // État local pour déterminer si le collapse est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className} ${isOpen ? 'open' : ''}`}>
      {/* En-tête du collapse, cliquable pour ouvrir ou fermer */}
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className="collapse-title">{title}</h3>
        <span className="arrow">
          <i className={`fas ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
        </span>
      </div>
      <div className="collapse-content">
        {children} {/* Les enfants (contenu) à afficher dans le collapse */}
      </div>
    </div>
  );
};

export default Collapse;