import React from 'react';
import './Title.css';

const Logo = ({ className, title, isSmall }) => (
  isSmall ? <h4 className={`${className} title`}>{title}</h4> : <h1 className={`${className} title`}>{title}</h1>
);

export default Logo;
