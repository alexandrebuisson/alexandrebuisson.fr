import React from 'react';
import Header from '../../components/header/Header'
import Cards from '../../components/cards/Cards'
import './MyWorks.scss'

class MyWorks extends React.PureComponent {
  render() { 
    return ( 
      <div className="works-container">
        <Header works />
        <div className="works-content">
          <h1 className="title">Mes projets</h1>
          <div className="cardsParent">
            <div className="cardsContainer">
              <Cards title="Quiz Experience" description="blablabla" image="assets/quiz-card.PNG" url="https://quiz.alexandrebuisson.fr" />
              <Cards title="Quiz Experience" description="blablabla" image="assets/quiz-card.PNG" url="https://quiz.alexandrebuisson.fr" />
              <Cards title="Quiz Experience" description="blablabla" image="assets/quiz-card.PNG" url="https://quiz.alexandrebuisson.fr" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default MyWorks;
