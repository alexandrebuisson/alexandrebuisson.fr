import React from 'react';
import Header from '../../components/header/Header'
import Links from '../../components/referenceLinks'
import Skills from '../../components/skills'
import './AboutMe.scss'

class AboutMe extends React.PureComponent {

  myCV = () => {
    window.open(
      "https://drive.google.com/file/d/1gomN7gYlDtzu_-Wizaui9tP5V2wg-mis/view?usp=sharing",
      "_blank"
    )
  }

  render() {
    const currentYear = new Date().getFullYear()
    return (
      <div className="about-container">
        <Header about />
        <div className="about-content">
          <div className="left-content">
            <div className="responsive">
              <div className="photo-container">
                <img className="photo" src="/assets/PHOTO.jpeg" alt="alexandre buisson" />
              </div>
            </div>
            <p className="name">Alexandre Buisson</p>
            <button onClick={this.myCV}>Voir mon CV</button>
          </div>
          <div className="right-content">
            <h1 className="title">A propos de moi</h1>
            <p>Jeune développeur Javascript et passionné, il y a maintenant plus de 2 ans que je me suis lancé dans l'aventure et l'apprentissage du développement web. Curieux et créatif je me suis formé à la <Links url="https://wildcodeschool.fr" name="Wild Code School" />. Je travaille actuellement en tant que Développeur Front-end chez Centre Ouest Informatique (filiale informatique de <Links url="https://www.fimeco-walter-allinial.com/" name="Fimeco" />). </p>
            <p>Spécialisé sur le framework <Links url="https://reactjs.org/" name="React" /> de Facebook, je développe des applications web et mobile (React Native). J'utilise également <Links url="https://nodejs.org/en/" name="Node.js" /> pour la création d'api REST.</p>
            <p>Actuellement je m'intéresse aux technologies suivantes <Links url="https://en.wikipedia.org/wiki/Socket.IO" name="Socket.IO" />, <Links url="https://www.nginx.com/" name="NGINX" /> et <Links url="https://www.gatsby.org/" name="GatsbyJS" /></p>
          </div>
        </div>
        <div className="separator-parent">
          <div className="separator" />
        </div>
        <div className="skills">
          <div className="mySkills">
            <h3 className="subtitle">Mes compétences</h3>
              <div className="container">
                <div className="skillsContainer">
                  <Skills logo="assets/logo_html.png" name="HTML" color="#9d2b13" url="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language" />
                  <Skills logo="assets/logo_css.png" name="CSS" color="#1f71b6" url="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade" />
                  <Skills logo="assets/logo_js.png" name="JavaScript" color="#333430" url="https://fr.wikipedia.org/wiki/JavaScript" />
                  <Skills logo="assets/logo_reactjs.png" name="React" color="#61dafb" url="https://reactjs.org/" />
                  <Skills logo="assets/logo_nodejs.png" name="Node.js" color="#7abd15" url="https://nodejs.org/en/" />
                  <Skills logo="assets/logo_mysql.png" name="MySQL" color="#f29111" url="https://www.mysql.com/fr/" />
                </div>
             </div>
          </div>
          <div className="focusingSkills">
            <h3 className="subtitle">Je m'intéresse à</h3>
            <div className="container">
              <div className="skillsContainer">
                <Skills logo="assets/logo_socketio.png" name="Socket.IO" color="#000000" url="https://en.wikipedia.org/wiki/Socket.IO" />
                <Skills logo="assets/logo_nginx.png" name="NGINX" color="#0d974d" url="https://www.nginx.com/" />
                <Skills logo="assets/logo_gatsby.png" name="GatsbyJS" color="#663399" url="https://www.gatsbyjs.org/" />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Alexandre Buisson &copy; {currentYear}</p>
        </footer>
      </div>
    )
  }
}

export default AboutMe
