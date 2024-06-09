import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../components/Banner/Banner.css'; 
import '../../components/Card/Card.css'; 
import bannerImage from '../../assets/images/Banner1.png';

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => setCardData(data.slice(0, 6).map(item => ({
        title: item.title,
        image: item.cover  
      }))))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
      <div className="home-content">
        <div className="cards-container">
          {cardData.map((card, index) => (
            <Card 
              key={index} 
              title={card.title} 
              image={card.image} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
