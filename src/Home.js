import React, { Component } from 'react';
import './Home.css';
import StarBackground from "./Components/StarBackground";
import {Container, Row, Col} from "react-bootstrap";

class Home extends Component {
  render() {
    
  return (

    <Container fluid className="website-body">
      
        <Row className="Header">
          <Col>
          <h1 className="Title">Mehak Sarang</h1>
          </Col>

          <Col className="Links">
            <p><a href="https://www.linkedin.com/in/mehak-sarang/">LinkedIn</a></p>
            <p><a href="https://twitter.com/mehaksarang">Twitter</a></p>
            <p><a href="https://drive.google.com/file/d/1ktDgG-YCFV2JEQ4q_MDBpk2OGjoHpQ-G/view?usp=sharing">Resume</a></p>
          </Col>

        </Row>

      <StarBackground />
         
    </Container>


  );
}
}

export default Home;
