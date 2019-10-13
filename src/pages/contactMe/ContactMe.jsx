import React from 'react';
import Header from '../../components/header/Header'

class ContactMe extends React.PureComponent {
  render() { 
    return ( 
      <div className="contact-container">
        <Header contact />
      </div>
    )
  }
}
 
export default ContactMe;
