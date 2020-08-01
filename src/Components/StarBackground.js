import React, { Component } from 'react';
import './StarBackground.css';
import {Row, Col, Container} from "react-bootstrap";
import Card from './Animation.js';

class StarBackground extends Component {
    render() {
    return (
        <React.Fragment>
            

        <Row className="body" fluid>
            <Col className="card-column"> 
                <Card 
                    wrapper="wrapper wrapper-1"
                    cardtitle="About"
                    />
            </Col>
           <Row>
                <Col className="night-sky">   
                    <div className="star-container-1">
                        <div class='star twinkle-star-1'></div>
                    </div>

                    <div className="star-container-2">
                        
                        <div class='star twinkle-star-2'></div>
                    </div>
                    
                    <div className="star-container-3">
                    <button className="button"><a href="/#mypublications">Publications</a></button>
                        <div class='star twinkle-star-3'></div>
                    </div>

                    <div className="star-container-4">
                        <div class='star twinkle-star-4'></div>
                    </div>

                    <div className="star-container-5">
                        <div class='star twinkle-star-5'></div>
                    </div>

                    <div class='line line-1'></div>
                    <div class='line line-2'></div>
                    <div class='line line-3'></div>
                    <div class='line line-4'></div>
                </Col>
            </Row>
            </Row>
            </React.Fragment>
        )
    }
};

export default StarBackground;