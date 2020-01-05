import React from 'react';
import Header from '../../components/header/Header'
import Links from '../../components/referenceLinks'
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
            <p className="name">Alexandre Buisson</p>
            <button onClick={this.myCV}>Voir mon CV</button>
          </div>
          <div className="right-content">
            <h1 className="title">A propos de moi</h1>
            <p>Jeune développeur Javascript et passionné, il y a maintenant plus de 2 ans que je me suis lancé dans l'aventure et l'apprentissage du développement web. Curieux et créatif je me suis formé à la <Links url="https://wildcodeschool.fr" name="Wild Code School" />. Je travaille actuellement en tant que Développeur Front-end chez Centre Ouest Informatique (filiale informatique de <Links url="https://www.fimeco-walter-allinial.com/" name="Fimeco" />). </p>
            <p>Spécialisé sur le framework <Links url="https://reactjs.org/" name="React" /></p>
          </div>

          <div className="skills">
  
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
