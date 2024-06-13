import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../components/Banner/Banner.css'; 
import '../../components/Card/Card.css'; 
import bannerImage from '../../assets/images/Banner1.png';
import logementsData from '../../assets/logements.json'; 

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Simuler le fetch en utilisant les données importées directement
    const data = logementsData.slice(0, 6).map(item => ({
      title: item.title,
      image: item.cover
    }));
    setCardData(data);
  }, []);

  return (
    <main >
      <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
      <div class="home-content">
        <div class="cards-container">
          {cardData.map((card, index) => (
            <Card 
              key={index} 
              title={card.title} 
              image={card.image} 
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
