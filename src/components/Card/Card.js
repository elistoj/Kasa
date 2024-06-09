import React from 'react';
import './Card.css';

const Card = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
