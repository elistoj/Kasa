import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import bannerImage from '../../assets/images/banner.png';
import '../../components/Collapse/Collapse.css';
import './A-propos.css'


const About = () => {
  return (
    <main>
      <Banner  image={bannerImage} />
      <div className="apropos-content">
        <div className="collapses-container">
          <Collapse title="Fiabilité">
            <p>Les annonces postees sur Kasa garantissent une fiabilite totale. Les photos sont conformes aux logements, et
              toutes les informations sont regulierement verifiees par nos equipes.
            </p>
          </Collapse>
          <Collapse title="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entralnera une exclusion de notre plateforme.
            </p>
          </Collapse>
          <Collapse title="Service">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entralnera une exclusion de notre plateforme.</p>
          </Collapse>
          <Collapse title="Sécurité">
            <p>La securite est la priorite de Kasa. Aussi bien pour nos hates que pour les voyageurs, chaque logement
              correspond aux criteres de securite etablis par nos services. En laissant une note aussi bien a l'hate qu'au
              locataire, cela permet a nos equipes de verifier que les standards sont bien respectes. Nous organisons
              egalement des ateliers sur la securite domestique pour nos hates.
            </p>
          </Collapse>
        </div>
      </div>
    </main>
  );
};

export default About;
