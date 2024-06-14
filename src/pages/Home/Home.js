import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../components/Banner/Banner.css'; 
import '../../components/Card/Card.css'; 
import bannerImage from '../../assets/images/Banner1.png';
import logementsData from '../../assets/logements.json'; 
import './Home.css'

const Home = () => {
  const cardData = logementsData.map(item => ({
    id: item.id,
    title: item.title,
    image: item.cover
  }));

  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
      <section className="home-content">
        <div className="cards-container">
          {cardData.map((card, index) => (
            <Card 
              key={index} 
              id={card.id}
              title={card.title} 
              image={card.image} 
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
