import React from 'react';
import './attribute.css';

 const Attribute = ({ title, text }) => (
  <div className="hw__features-container__feature">
    <div className="hw__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="hw__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Attribute ;