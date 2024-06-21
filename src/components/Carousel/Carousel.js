import React, { useState } from 'react';
import './Carousel.css';

const CarouselComponent = ({ pictures, title }) => {
  // État local pour suivre l'indice de la diapositive actuellement affichée
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  // Vérifie s'il faut afficher les flèches de navigation et l'index de la diapositive actuelle
  const showArrowsAndIndex = pictures.length > 1;

  return (
    <div className="carousel-container">
      {showArrowsAndIndex && (
        // Flèche pour la diapositive précédente, cliquable pour appeler prevSlide
        <div className="left-arrow" onClick={prevSlide}>
          &lt;
        </div>
      )}
      {/* Conteneur du carousel */}
      <div className="carousel">
        {/* Mapping des images pour les afficher comme des slides */}
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlideIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
          >
            <img src={picture} alt={`Vue de ${title} - ${index + 1}`} />
            {showArrowsAndIndex && (
              <p className="slide-index">
                {index + 1} / {pictures.length}
              </p>
            )}
          </div>
        ))}
      </div>
      {showArrowsAndIndex && (
        // Flèche pour la diapositive suivante, cliquable pour appeler nextSlide
        <div className="right-arrow" onClick={nextSlide}>
          &gt;
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;
