import React from 'react';
import './Website.css';

const Website = ({ className, name, url }) => (
  <a className={`${className} website`} href={ url } target="_blank">
    { name }
  </a>
);

export default Website;
