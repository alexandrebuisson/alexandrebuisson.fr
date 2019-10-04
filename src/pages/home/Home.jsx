import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <div className="overlay" id="particles"></div>
        <div className="home-container">
          <div className="content">
            <div className="title">
              <h1>Hello !</h1>
            </div>
              <Link className='js-open-about' href="#">
                <i className='pe-7s-user'></i>
                <span>About Me</span>
              </Link>

              <Link className='js-open-works' href="#">
                <i className='pe-7s-albums'></i>
                <span>My Works</span>
              </Link>
              <Link className='js-open-contact' href="#">
                <i className='pe-7s-chat'></i>
                <span>Contact Me</span>
              </Link>
          </div>
          <footer>
            <p> Alexandre Buisson &copy; 2019</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default Home
