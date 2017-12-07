import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Profile from '../Profile/Profile';
import Annotation from '../Annotation/Annotation';
import Description from '../Description/Description';
import Website from '../Website/Website';
import './SocialCard.css';

const SocialCard = ({ data }) => (
  <div className="social-card">
    <Jumbotron className="social-card__jumbotron">
      <Logo className="social-card__logo" url={data.logo} />
      <Title className="social-card__title" title={data.title} />
      <Profile className="social-card__profile" name={data.profile.name} image={data.profile.image} />
    </Jumbotron>

    <Annotation className="social-card__annotation">
      <Title className="social-card__title social-card__title_small" title={data.title} isSmall />
      <Description className="social-card__description" description={data.description} />
      <Website className="social-card__website" url={data.website.url} name={data.website.name} />
    </Annotation>
  </div>
);

export default SocialCard;
