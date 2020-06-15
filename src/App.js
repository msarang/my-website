import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import { HashRouter, Route } from "react-router-dom";

class App extends Component {
  render() {   
  return (
    <HashRouter basename="/">
         <Route exact path="/" component={Home} />
   </HashRouter>
  );
}
}

export default App;
