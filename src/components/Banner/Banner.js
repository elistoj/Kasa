import React from 'react';
import './Banner.css';

const Banner = ({ title, image }) => (
  <div className="banner">
    <img src={image} alt="Banner" className="banner-img" />
    <div className="banner-title">{title}</div>
  </div>
);

export default Banner;
