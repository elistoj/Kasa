import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, title, image }) => {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-title">{title}</div>
      </div>
    </Link>
  );
};

export default Card;
