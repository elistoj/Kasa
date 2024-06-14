import React from 'react';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import bannerImage from '../../assets/images/banner.png';
import textData from '../../assets/text-collapse.json'; 
import './A-propos.css';

const About = () => {
  return (
    <main>
      <Banner image={bannerImage} />
      <section className="apropos-content">
        <div className="collapses-container">
          <Collapse title="Fiabilité" className="reliability-collapse">
            <p>{textData.reliability}</p>
          </Collapse>
          <Collapse title="Respect" className="respect-collapse">
            <p>{textData.respect}</p>
          </Collapse>
          <Collapse title="Service" className="service-collapse">
            <p>{textData.service}</p>
          </Collapse>
          <Collapse title="Sécurité" className="security-collapse">
            <p>{textData.security}</p>
          </Collapse>
        </div>
      </section>
    </main>
  );
};

export default About;
