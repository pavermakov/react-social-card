import React from 'react';
import './Jumbotron.css';

const Jumbotron = ({ className, children }) => (
  <div className={`${className} jumbotron`}>
    <div className="jumbotron__wrapper">
      { children }
    </div>
  </div>
);

export default Jumbotron;
