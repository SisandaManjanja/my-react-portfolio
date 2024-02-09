import React from 'react';
import CV from '../../assets/Rasif Taghizade Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        About
      </a>
      
    </div>
  );
};

export default CTA;
