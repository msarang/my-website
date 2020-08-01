import React, { Component } from 'react';
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {   
  return (
    <Router basename="/">
         <Route exact path="/" component={Home}/>
   </Router>
  );
}
}

export default App;
