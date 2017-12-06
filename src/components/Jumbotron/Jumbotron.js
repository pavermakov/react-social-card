import React from 'react';
import './Jumbotron.css';

const Jumbotron = ({ className, children }) => (
  <div className={`${className} jumbotron`}>
    { children }
  </div>
);

export default Jumbotron;
