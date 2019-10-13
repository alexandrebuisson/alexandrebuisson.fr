import React from 'react';
import Header from '../../components/header/Header'
import './AboutMe.scss'

class AboutMe extends React.PureComponent {
  render() {
    return (
      <div className="about-container">
        <Header about />
        <div className="about-content">
          <h1 className="title">A propos de moi</h1>
          <div className="photo-container">
            <img className="photo" src="/assets/PHOTO.jpeg" alt="alexandre buisson" />
          </div>
          <p>
            Jeune déveoppeur web. J'aime apprendre de nouvelles choses.
          </p>
          <div className="skills">
  
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
