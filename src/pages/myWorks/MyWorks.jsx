import React from 'react';
import Header from '../../components/header/Header'
import Cards from '../../components/cards/Cards'
import Links from '../../components/referenceLinks'
import './MyWorks.scss'

class MyWorks extends React.PureComponent {
  render() {
    const quizDescription = (
      <p>Jeu de quiz multijoueurs utilisant une api Node.js et socket.io (pour la connexion), ainsi que l'api <Links name="OpenTrivia DB" url="https://opentdb.com/" /></p>
    )
    const easylunchDescription = (
      <p>Application de réservation pour manger le midi avec ses collègues, une api REST en Node.js.</p>
    )
    const portfolioDescription = (
      <p>Mon site web portfolio (vous êtes actuellement dessus) réalisé entièrement avec React.</p>
    )
    const quizTags = [
      {id: 0, label: '#React'},
      {id: 1, label: '#Node.js'},
      {id: 2, label: '#Socket.io'},
    ]
    const easylunchTags = [
      {id: 0, label: '#React'},
      {id: 1, label: '#Node.js'},
    ]
    const alexandrebuissonTags = [
      {id: 0, label: '#React'},
      {id: 1, label: '#Nginx'},
    ]
    const currentYear = new Date().getFullYear()
    return ( 
      <div className="works-container">
        <Header works />
        <div className="works-content">
          <h1 className="title">Mes projets</h1>
          <div className="cardsParent">
            <div className="cardsContainer">
              <Cards title="Quiz Experience" description={quizDescription} tags={quizTags} image="assets/quiz-card.PNG" url="https://quiz.alexandrebuisson.fr" />
              <Cards title="EasyLunch" description={easylunchDescription} tags={easylunchTags} image="assets/easylunch-card.PNG" url="https://easylunch.alexandrebuisson.fr" />
              <Cards title="alexandrebuisson.fr" description={portfolioDescription} tags={alexandrebuissonTags} image="assets/home-card.PNG" url="https://alexandrebuisson.fr" />
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
 
export default MyWorks;
