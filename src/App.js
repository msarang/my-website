import React, { Component } from 'react';
import Home from './Home'
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {   
  return (
    <Router basename="/">
         <Route exact path="/"> <Home /> </Route>
   </Router>
  );
}
}

export default App;
