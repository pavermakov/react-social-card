import React from 'react';
import './Annotation.css';

const Annotation = ({ className, children }) => (
  <div className={`${className} annotation`}>
    { children }
  </div>
);

export default Annotation;
