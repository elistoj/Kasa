import React from 'react';
import './Card.css'; 

const Card = ({ description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
export default Card;
