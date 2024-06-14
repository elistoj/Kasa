import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../../assets/logements.json';
import NotFound from '../NotFound/NotFound';
import Collapse from '../../components/Collapse/Collapse';
import CarouselComponent from '../../components/Carousel/Carousel';
import Tags from '../../components/Tags/Tags';
import Rate from '../../components/Rate/Rate';
import './Fiche-Logement.css';

const FicheLogement = () => {
  const { id } = useParams();

  const logement = logementsData.find(item => item.id === id);

  if (!logement) {
    return <NotFound />;
  }

  const uniquePictures = Array.from(new Set(logement.pictures));

  console.log("Logement:", logement);

  return (
    <main>
      <CarouselComponent pictures={uniquePictures} title={logement.title} />

      <div className="carousel-name">
        <h1>{logement.title}</h1>
      </div>

      <p className='location'>{logement.location}</p>

      <div className="rateTags">
        <Tags tags={logement.tags} />
        <div className="nameRate">
          <Rate rating={logement.rating} />
          <div className="host-info">
            <div className="host-name">
              <span>{logement.host.name.split(' ')[0]}</span>
              <span>{logement.host.name.split(' ')[1]}</span>
            </div>
            <img src={logement.host.picture} alt={`Host ${logement.host.name}`} />
          </div>
        </div>
      </div>

      <div className="collapses-container-log">
        <Collapse title="Description" className="collapse-logement description-collapse">
          <div className="collapse-logement-content">
            <p>{logement.description}</p>
          </div>
        </Collapse>

        {logement.equipments && (
          <Collapse title="Équipements" className="collapse-logement amenities-collapse">
            <div className="collapse-logement-content">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </Collapse>
        )}
      </div>
    </main>
  );
};

export default FicheLogement;
