import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className='collapse-title'>{title}</h3>
        <span className="arrow">
          {isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
        </span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
