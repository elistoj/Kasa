import React from 'react';
import NotFoundContent from '../../components/NotFoundContent/NotFoundContent';
import '../../components/NotFoundContent/NotFoundContent';

const NotFound = () => {
  return (
    <NotFoundContent
      text="404"
      errorMessage="Oups! La page que vous demandez n'existe pas."
      linkText="Retourner sur la page d’accueil"
      linkUrl="/"
    />
  );
};

export default NotFound;
