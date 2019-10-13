import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <div className="overlay" />
          <div className="content">
            <div className="title">
              <h1>Hello !</h1>
            </div>
            <div className="menu">
              <Link className='links' to="/a-propos">
                A propos de moi
              </Link>
              <Link className='links' to="/mes-projets">
                Mes projets
              </Link>
              <Link className='links' to="/me-contacter">
                Me contacter
              </Link>
            </div>
          </div>
          <footer>
            <p> Alexandre Buisson &copy; 2019</p>
          </footer>
        </div>
    )
  }
}

export default Home
