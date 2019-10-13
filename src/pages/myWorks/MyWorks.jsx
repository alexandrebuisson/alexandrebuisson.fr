import React from 'react';
import Header from '../../components/header/Header'

class MyWorks extends React.PureComponent {
  render() { 
    return ( 
      <div className="works-container">
        <Header works />
      </div>
    )
  }
}
 
export default MyWorks;
