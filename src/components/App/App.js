import React from 'react';
import SocialCard from '../SocialCard/SocialCard';
import data from '../../data';
import './App.css';


const App = () => (
  <div className="app">
    <SocialCard data={data} />
  </div>
);

export default App;
