import React from 'react';
import Header from '../../components/header/Header'
import './AboutMe.scss'

class AboutMe extends React.PureComponent {

  myCV = () => {
    window.open(
      "https://drive.google.com/file/d/1gomN7gYlDtzu_-Wizaui9tP5V2wg-mis/view?usp=sharing",
      "_blank"
    )
  }

  render() {
    return (
      <div className="about-container">
        <Header about />
        <div className="about-content">
          <div className="left-content">
            <div className="photo-container">
              <img className="photo" src="/assets/PHOTO.jpeg" alt="alexandre buisson" />
            </div>
              <p>Alexandre Buisson</p>
              <button onClick={this.myCV}>Voir mon CV</button>
          </div>

          <div className="skills">
  
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
