import React from 'react';
import './Rate.scss';

const Rate = ({ rating }) => {
  const maxRating = 5; // Définit la note maximale possible, en l'occurrence 5 étoiles

  return (
    <div className="rate-container"> {/* Conteneur pour la notation */}
      {/* Utilisation de Array.from pour créer un tableau de longueur maxRating */}
      {Array.from({ length: maxRating }, (_, index) => (
        <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
        // Pour chaque élément dans le tableau, crée un span avec une classe 'star'
        // La classe 'filled' est ajoutée si l'index est inférieur à la note actuelle (rating)
        // ★ est utilisé pour représenter chaque étoile
      ))}
    </div>
  );
};

export default Rate;








