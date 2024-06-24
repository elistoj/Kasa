import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import '../../components/Banner/Banner.scss'; 
import '../../components/Card/Card.scss'; 
import bannerImage from '../../assets/images/Banner1.png';
import logementsData from '../../assets/logements.json'; 
import './Home.scss'

const Home = () => {
  // Transforme les données des logements en données utilisables par les cartes
  const cardData = logementsData.map(item => ({
    id: item.id,
    title: item.title,
    image: item.cover
  }));

  return (
    <main>
      {/* Composant Banner avec un titre et une image spécifiques */}
      <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
      <section className="home-content">
        <div className="cards-container"> {/* Conteneur pour afficher les cartes */}
          {/* Mapping à travers les données des cartes pour afficher chaque carte */}
          {cardData.map((card, index) => (
            <Card 
              key={index} // Clé unique pour chaque carte
              id={card.id} // ID du logement associé à la carte
              title={card.title} // Titre du logement associé à la carte
              image={card.image} // Image de couverture du logement associé à la carte
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;