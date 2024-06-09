import React from 'react';
import './NotFoundContent.css';

const NotFoundContent = ({ text, errorMessage, linkText, linkUrl }) => {
  return (
    <div className="not-found">
      <h1>{text}</h1>
      <p>{errorMessage}</p>
      <a href={linkUrl} className="back-home-link">{linkText}</a>
    </div>
  );
};

export default NotFoundContent;
