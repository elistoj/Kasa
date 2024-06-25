import React, { useEffect } from 'react';
import './Banner.scss';

const Banner = ({ title = '', image }) => {
  useEffect(() => {
    const updateBannerText = () => {
      const bannerTitleElement = document.querySelector('.banner-title');
      if (bannerTitleElement && title) {
        if (window.innerWidth <= 480) {
          const text = title.replace(/,/g, ',\n');
          bannerTitleElement.innerText = text;
        } else {
          bannerTitleElement.innerText = title.replace(/\n/g, '');
        }
      }
    };

     updateBannerText();

     window.addEventListener('resize', updateBannerText);

     return () => {
      window.removeEventListener('resize', updateBannerText);
    };
  }, [title]);

  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-img" />
      <div className="banner-title">{title}</div>
    </div>
  );
};

export default Banner;
