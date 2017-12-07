import React from 'react';
import './Description';

const Description = ({ className, description }) => (
  <p className={`${className} description`}>
    { description }
  </p>
);

export default Description;
