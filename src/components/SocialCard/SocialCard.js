import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Profile from '../Profile/Profile';
import Annotation from '../Annotation/Annotation';
import Description from '../Description/Description';
import Website from '../Website/Website';
import './SocialCard.css';

class SocialCard extends Component {
  state = {
    logo: 'https://mblt.ru/system/speakers/company_logos/000/000/024/original/mobio_logofooter1.png',
    title: 'React is awesome, and here is why ...',
    profile: {
      name: 'Pavel Ermakov',
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAfXAAAAJDAxZWE4NTAwLThiYTgtNDViNC05ZmNmLWYwOTRhNDY2ODZiNA.jpg',
    },
    description: 'Stop procrastinating and start learning React.js today!',
    website: {
      name: 'github.com',
      url: 'https://github.com/pavermakov',
    },
  };

  render() {
    return (
      <div className="social-card">
        <Jumbotron className="social-card__jumbotron">
          <Logo className="social-card__logo" url={this.state.logo} />
          <Title className="social-card__title" title={this.state.title} />
          <Profile className="social-card__profile" name={this.state.profile.name} image={this.state.profile.image} />
        </Jumbotron>

        <Annotation>
          <Title className="social-card__title social-card__title_small" title={this.state.title} isSmall />
          <Description className="social-card__description" description={this.state.description} />
          <Website className="social-card__website" url={this.state.website.url} name={this.state.website.name} />
        </Annotation>
      </div>
    );
  }
}

export default SocialCard;
