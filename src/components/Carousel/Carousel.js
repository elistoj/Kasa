import React, { useState } from 'react';
import './Carousel.css';

const CarouselComponent = ({ pictures, title }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const showArrowsAndIndex = pictures.length > 1;

  return (
    <div className="carousel-container">
      {showArrowsAndIndex && (
        <div className="left-arrow" onClick={prevSlide}>
          &lt;
        </div>
      )}
      <div className="carousel">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlideIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
          >
            <img src={picture} alt={`View of ${title} - ${index + 1}`} />
            {showArrowsAndIndex && (
              <p className="slide-index">
                {index + 1} / {pictures.length}
              </p>
            )}
          </div>
        ))}
      </div>
      {showArrowsAndIndex && (
        <div className="right-arrow" onClick={nextSlide}>
          &gt;
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;
