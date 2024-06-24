import React from 'react';
import './Banner.scss';

const Banner = ({ title, image }) => (
  <div className="banner"> {/* Conteneur principal de la bannière */}
    <img src={image} alt="Banner" className="banner-img" /> {/* Image de la bannière avec un texte alternatif */}
    <div className="banner-title">{title}</div> {/* Titre de la bannière */}
  </div>
);

export default Banner; 

