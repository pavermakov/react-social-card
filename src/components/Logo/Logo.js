import React from 'react';
import './Logo.css';

const Logo = ({ className, url }) => (
  <img className={`${className} logo`} src={url} alt="logo" />
);

export default Logo;
