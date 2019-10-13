import React, { Component } from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Header.scss'

class Header extends Component {
  static propTypes = {
    about: PropTypes.bool,
    works: PropTypes.bool,
    contact: PropTypes.bool,
  }

  static defaultProps = {
    about: false,
    works: false,
    contact: false,
  }

  isAbout = () => {
    const { about } = this.props
    if (about) return <Link to="/a-propos" className="navbar-item-active">A propos de moi</Link>
    return <Link to="/a-propos" className="navbar-item">A propos de moi</Link>
  }

  isWorks = () => {
    const { works } = this.props
    if (works) return <Link to="/mes-projets" className="navbar-item-active">Mes projets</Link>
    return <Link to="/mes-projets" className="navbar-item">Mes projets</Link>
  }

  isContact = () => {
    const { contact } = this.props
    if (contact) return <Link to="/me-contacter" className="navbar-item-active">Me contacter</Link>
    return <Link to="/me-contacter" className="navbar-item">Me contacter</Link>
  }

  linkedInRedirect= () => {
    window.open(
      "https://www.linkedin.com/in/alexandrebuisson/",
      "_blank"
    )
  }

  githubRedirect= () => {
    window.open(
      "https://github.com/alexandrebuisson/",
      "_blank"
    )
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-brand"><Link className="logo" to="/">Alexandre Buisson</Link></div>
          <div className="navbar-pages">
            {this.isAbout()}
            {this.isWorks()}
            {this.isContact()}
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-menu">
            <LinkedInIcon onClick={this.linkedInRedirect} className="linkedin"/>
            <img onClick={this.githubRedirect} className="github" style={{ width: 22 }} src="/assets/github-logo.svg" alt="github logo" />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
