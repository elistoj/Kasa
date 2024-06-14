import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className} ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className="collapse-title">{title}</h3>
        <span className="arrow">
          {isOpen ?  <i className="fas fa-chevron-down"></i>: <i className="fas fa-chevron-up"></i>}
        </span>
      </div>
      <div className="collapse-content">
        {children}
      </div>
    </div>
  );
};

export default Collapse;
