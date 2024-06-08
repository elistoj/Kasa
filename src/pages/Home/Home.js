import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../components/Banner/Banner.css'; 
import '../../components/Card/Card.css'; 
import bannerImage from '../../assets/images/Banner1.png';

const Home = () => {
  const cardData = [
    { description: 'Titre de la location ' },
    { description: 'Titre de la location ' },
    { description: 'Titre de la location ' },
    { description: 'Titre de la location' },
    { description: 'Titre de la location' },
    { description: 'Titre de la location' },
  ];

  const bannerData = {
    title: "Chez vous, partout et ailleurs",
    image: bannerImage
  };

  return (
    <div className="home">
      <Banner title={bannerData.title} image={bannerData.image} />
      <div className="home-content">
        <div className="cards-container">
          {cardData.map((card, index) => (
            <Card 
              key={index} 
              description={card.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
