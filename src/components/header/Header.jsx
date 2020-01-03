import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
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

  constructor(props) {
    super(props)
    this.state = {
      hideNav: false,
      drawer: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize)
    window.removeEventListener("click", this.toggle)
  }

  resize() {
      let currentHideNav = (window.innerWidth <= 840)
      if (currentHideNav !== this.state.hideNav) {
          this.setState({ hideNav: currentHideNav })
      }
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

  toggle = () => {
    const { drawer } = this.state
    if (!drawer) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }
    this.setState({
      drawer: !drawer,
    })
  }

  handleOutsideClick = (e) => {
    if (this.node === null) return false 
    if (this.node.contains(e.target)) {
      return
    }

    this.toggle()
  }

  navbarBrand = () => {
    const { hideNav, drawer } = this.state
    if (hideNav && drawer) return <CloseIcon className="drawer" onClick={this.toggle} style={{ color: '#fff', cursor: 'pointer' }} />
    if (hideNav && !drawer ) return <MenuIcon className="drawer" onClick={this.toggle} style={{ color: '#fff', cursor: 'pointer' }} />
    return (
      <div className="navbar-brand"><Link className="logo" to="/">Alexandre Buisson</Link></div>
    )
  }

  navbarRight = () => {
    const { hideNav } = this.state
    if (hideNav) return <Link className="logo" to="/">Alexandre Buisson</Link>
    return (
      <div className="navbar-menu">
        <LinkedInIcon onClick={this.linkedInRedirect} className="linkedin"/>
        <GitHubIcon onClick={this.githubRedirect} className="github"/>
      </div>
    )
  }

  drawerPages = () => {
    const { hideNav, drawer } = this.state
    if (hideNav && drawer) {
      return (
        <div className="drawer-pages" ref={node => { this.node = node; }}>
          <div className="drawer-items">
            {this.isAbout()}
          </div>
          <div className="drawer-items">
            {this.isWorks()}
          </div>
          <div className="drawer-items">
            {this.isContact()}
          </div>
        </div>
      )
    }
    return null
  }
  

  render() {
    const { drawer } = this.state
    const marginBot = () => (!drawer ? 'margin' : '')
    return (
      <div>
        <div className={`navbar ${marginBot()}`}>
          <div className="navbar-left">
            {this.navbarBrand()}
            <div className="navbar-pages">
              {this.isAbout()}
              {this.isWorks()}
              {this.isContact()}
            </div>
          </div>
          <div className="navbar-right">
            {this.navbarRight()}
          </div>
        </div>
        {this.drawerPages()}
      </div>
    )
  }
}

export default Header
