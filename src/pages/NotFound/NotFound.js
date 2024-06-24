import React from 'react';
import './NotFound.scss'; 

const NotFound = () => {
  return (
    <div className="not-found"> {/* Conteneur principal avec la classe CSS not-found */}
      <h1>404</h1> {/* Titre indiquant l'erreur 404 */}
      <p>Oups! La page que vous demandez n'existe pas.</p> {/* Message d'erreur personnalisé */}
      <a href="/" className="back-home-link">Retourner sur la page d’accueil</a> {/* Lien pour revenir à la page d'accueil */}
    </div>
  );
};

export default NotFound;
