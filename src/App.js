import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/a-propos"/>
        <Route path="/mes-projets"/>
        <Route path="/me-contacter"/>
      </Switch>
    </div>
  );
}

export default App;
