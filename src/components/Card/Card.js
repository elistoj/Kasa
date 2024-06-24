import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, title, image }) => {
  return (
    <Link to={`/logement/${id}`} className="card-link"> {/* Utilisation de Link pour créer un lien dynamique */}
      <div className="card"> {/* Conteneur principal de la carte */}
        <img src={image} alt={title} className="card-image" /> {/* Image du logement */}
        <div className="card-title">{title}</div> {/* Titre du logement */}
      </div>
    </Link>
  );
};

export default Card; 
