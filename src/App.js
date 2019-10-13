import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import MyWorks from './pages/myWorks/MyWorks'
import AboutMe from './pages/aboutMe/AboutMe'
import ContactMe from './pages/contactMe/ContactMe'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/a-propos" component={AboutMe}/>
        <Route path="/mes-projets" component={MyWorks} />
        <Route path="/me-contacter" component={ContactMe} />
      </Switch>
    </div>
  );
}

export default App;
