import React, { Component } from 'react';
import './StarBackground.css';
import {Row, Col, Container} from "react-bootstrap";
import Card from './Animation.js';
import { ScrollTo } from "react-scroll-to";

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

                    <button className="button">
                        <ScrollTo>
                            {({ scroll }) => (
                                <a onClick={() => scroll({ ref: this.myRef, x: 20, y: 1200, smooth: true})}>
                                Publications</a>
                            )}
                        </ScrollTo>
                        </button>

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
            
            <Container className="container" ref={this.myRef} fluid>
                <Row className="publications">
                
                    <Col className="title-column"><h1 className="TitleTwo">Publications</h1></Col>

                    <Col>
                    <p className="BodyText"><b>BOOK CHAPTERS</b></p>
                    <p className="BodyText">
                    Sarang, M., <a href="https://link.springer.com/chapter/10.1007/978-3-030-38912-3_9">Changing Objectives in Achieving Space Sovereignty in Latin America</a>, in: Space Fostering Latin American Societies, Froelich, A. (Ed.), Southern Space Studies, Springer International Publishing, Switzerland,  May 2020. 
                    </p>
                    <p className="BodyText">
                    Sarang, M., <a href="https://www.springerprofessional.de/en/hope-at-the-frontier-firefly-and-the-value-of-space-exploration/17031594">Hope at the Frontier: Firefly and the Value of Space Exporation</a>, in: Outer Space and Popular Culture - Influences and Interrelations, Froelich, A.(Ed.), Southern Space Studies, Springer International Publishing, Switzerland, pp. 159-165, 2020                </p>
                    <p className="BodyText">
                    <p className="BodyText"><b>CONFERENCE PROCEEDINGS</b></p>
                    Froelich, A., Sarang, M., and Siebrits, A., <a href="https://iafastro.directory/iac/paper/id/49293/summary/">Space R&D to Enhance Life in Emerging Space Countries in Africa and Latin America</a>, IAC-19-E4.2.6, 70th International Astronautical Congress, Washington, D.C., USA, 2019, October 2019.                </p>
                    <p className="BodyText">
                    Schingler, J.K., Guglin, J., Sarang, M., and Ekblaw, A., <a href="https://iafastro.directory/iac/paper/id/54218/summary/">Lunar Mission Technology and Standards Review; towards international collaboration and safe, secure democratization of lunar access</a>, IAC-19- A5.1.10, 70th International Astronautical Congress, Washington, D.C., USA, 2019, October 2019.                </p>
                    <p className="BodyText">
                    Ekblaw, A., Chawla, R., Sarang, M., Cleverly, G., and Paradiso, J., <a href="https://iafastro.directory/iac/paper/id/52478/summary/">BlockSat: on-demand access to shared-use satellite constellations</a>, IAC-19-B4.3.1, 70th International Astronautical Congress, Washington, D.C., USA, 2019, October 2019.</p>
                    <p className="BodyText"><b>CASE STUDIES AND REPORTS</b></p>
                    <p className="BodyText">Weinzierl, Matthew C., Sarang, M., and Lucas, K. <a href="https://store.hbr.org/product/spacex-economies-of-scale-and-a-revolution-in-space-access/720027?sku=720027-PDF-ENG">SpaceX, Economies of Scale, and a Revolution in Space Access</a>. Harvard Business School Case 720-027, April 2020.</p>
                    <p className="BodyText">
                    Weck, Olivier L. de, Siddiqui, A., Moraguez, M., Trujillo, A., Lordos, G., and Sarang, M. <a href="https://www.nasa.gov/sites/default/files/atoms/files/commercial_space_technology_roadmap.pdf">“Commercial Space Technology Roadmap.”</a> MIT, October 2018.</p>
                    </Col>
                    
                </Row>
        </Container>
            </React.Fragment>
        )
    }
};

export default StarBackground;