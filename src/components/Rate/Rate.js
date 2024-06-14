import React from 'react';
import './Rate.css';

const Rate = ({ rating }) => {
  const maxRating = 5;

  return (
    <div className="rate-container">
      {Array.from({ length: maxRating }, (_, index) => (
        <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
      ))}
    </div>
  );
};

export default Rate;
