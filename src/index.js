import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Récupération de l'élément DOM avec l'ID 'root' où l'application React sera montée
const root = document.getElementById('root');

// Création d'un root React avec ReactDOM.createRoot et montée dans l'élément 'root'
ReactDOM.createRoot(root).render(
  // Utilisation de React.StrictMode pour activer le mode strict en développement
  <React.StrictMode>
    {/* Montage du composant principal de l'application */}
    <App />
  </React.StrictMode>
);

// Appel de la fonction pour mesurer et rapporter les performances de l'application
reportWebVitals();
