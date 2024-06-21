import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import bannerImage from '../../assets/images/banner.png';
import textData from '../../assets/text-collapse.json'; 
import './A-propos.css';

const About = () => {
  return (
    <main>
      {/* Composant Banner avec une image spécifique */}
      <Banner image={bannerImage} />
      <section className="apropos-content">
        <div className="collapses-container"> {/* Conteneur pour afficher les collapses */}
          {/* Chaque Collapse représente un aspect de l'application */}
          <Collapse title="Fiabilité" className="apropos-collapse-title">
            <p>{textData.reliability}</p> {/* Texte de fiabilité provenant du fichier JSON */}
          </Collapse>
          <Collapse title="Respect" className="apropos-collapse-title">
            <p>{textData.respect}</p>  
          </Collapse>
          <Collapse title="Service" className="apropos-collapse-title">
            <p>{textData.service}</p>  
          </Collapse>
          <Collapse title="Sécurité" className="apropos-collapse-title">
            <p>{textData.security}</p>  
          </Collapse>
        </div>
      </section>
    </main>
  );
};

export default About;
