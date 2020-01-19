import React from 'react';
import Header from '../../components/header/Header'
import Links from '../../components/referenceLinks'
import './ContactMe.scss'

class ContactMe extends React.PureComponent {
  render() {
    const currentYear = new Date().getFullYear()
    return ( 
      <div className="contact-container">
        <Header contact />
        <div className="justify-content">
          <div className="contact-parent">
            <div className="mailContainer">
              <h1>mon mail: <a href="mailto:buissonalexandre16@gmail.com">buissonalexandre16@gmail.com</a></h1>
            </div>
            <p>Vous souhaitez discuter de sujets techs divers, me parler de votre projet, me poser des questions ou vous avez une demande particulière ?</p>
            <p>N'hésitez pas, vous êtes au bon endroit. Le plus simple est de m'envoyer un mail ou de me contacter sur mon <Links name="LinkedIn" url="https://www.linkedin.com/in/alexandrebuisson/" /></p>
          </div>
        </div>
        <footer>
          <p>Alexandre Buisson &copy; {currentYear}</p>
        </footer>
      </div>
    )
  }
}
 
export default ContactMe;
