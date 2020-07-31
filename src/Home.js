import React, { Component } from 'react';
import './Home.css';
import StarBackground from "./Components/StarBackground";
import {Container, Row, Col} from "react-bootstrap";

class Home extends Component {
  render() {
    
  return (

    <Container fluid className="website-body">
      <div className="Header">
        <h1 className="Title">Mehak Sarang</h1>
      </div>

      <StarBackground />
         
    </Container>


  );
}
}

export default Home;
