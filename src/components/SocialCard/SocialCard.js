import React, { Component } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Profile from '../Profile/Profile';
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
    website: '',
  };

  render() {
    return (
      <div className="social-card">
        <Jumbotron className="social-card__jumbotron">
          <Logo className="social-card__logo" url={this.state.logo} />
          <Title className="social-card__title" title={this.state.title} />
          <Profile className="social-card__profile" name={this.state.profile.name} image={this.state.profile.image} />
        </Jumbotron>
      </div>
    );
  }
}

export default SocialCard;
