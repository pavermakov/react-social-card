import React from 'react';
import './Profile.css';

const Profile = ({ className, name, image }) => (
  <div className={`${className} profile`}>
    <div className="profile__item">
      <span className="profile__name">{ name }</span>
    </div>

    <div className="profile__item">
      <img className="profile__image" src={image} alt="profile" />
    </div>
  </div>
);

export default Profile;
