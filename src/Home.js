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

      <Container className="container" fluid>
            <Row className="publications" id="mypublications">
                <Col><h1>Publications</h1></Col>

                <Col>
                <p><b>BOOK CHAPTERS</b></p>
                <p>
                Sarang, M., <a href="https://link.springer.com/chapter/10.1007/978-3-030-38912-3_9">Changing Objectives in Achieving Space Sovereignty in Latin America</a>, in: Space Fostering Latin American Societies, Froelich, A. (Ed.), Southern Space Studies, Springer International Publishing, Switzerland,  May 2020. 
                </p>
                <p>
                Sarang, M., <a href="https://www.springerprofessional.de/en/hope-at-the-frontier-firefly-and-the-value-of-space-exploration/17031594">Hope at the Frontier: Firefly and the Value of Space Exporation</a>, in: Outer Space and Popular Culture - Influences and Interrelations, Froelich, A.(Ed.), Southern Space Studies, Springer International Publishing, Switzerland, pp. 159-165, 2020                </p>
                <p>
                <p><b>CONFERENCE PROCEEDINGS</b></p>
                Froelich, A., Sarang, M., and Siebrits, A., <a href="https://iafastro.directory/iac/paper/id/49293/summary/">Space R&D to Enhance Life in Emerging Space Countries in Africa and Latin America</a>, IAC-19-E4.2.6, 70th International Astronautical Congress, Washington, D.C., USA, 2019, October 2019.                </p>
                <p>
                Schingler, J.K., Guglin, J., Sarang, M., and Ekblaw, A., <a href="https://iafastro.directory/iac/paper/id/54218/summary/">Lunar Mission Technology and Standards Review; towards international collaboration and safe, secure democratization of lunar access</a>, IAC-19- A5.1.10, 70th International Astronautical Congress, Washington, D.C., USA, 2019, October 2019.                </p>
                <p>
                Ekblaw, A., Chawla, R., Sarang, M., Cleverly, G., and Paradiso, J., <a href="https://iafastro.directory/iac/paper/id/52478/summary/">BlockSat: on-demand access to shared-use satellite constellations</a>, IAC-19-B4.3.1, 70th International Astronautical Congress, Washington, D.C., USA, 2019, October 2019.</p>
                <p>
                <p><b>CASE STUDIES AND REPORTS</b></p>
                Weinzierl, Matthew C., Sarang, M., and Lucas, K. <a href="https://store.hbr.org/product/spacex-economies-of-scale-and-a-revolution-in-space-access/720027?sku=720027-PDF-ENG">SpaceX, Economies of Scale, and a Revolution in Space Access</a>. Harvard Business School Case 720-027, April 2020.</p>
                <p>
                Weck, Olivier L. de, Siddiqui, A., Moraguez, M., Trujillo, A., Lordos, G., and Sarang, M. <a href="https://www.nasa.gov/sites/default/files/atoms/files/commercial_space_technology_roadmap.pdf">“Commercial Space Technology Roadmap.”</a> MIT, October 2018.</p>
                </Col>
            </Row>
        </Container>
         
    </Container>


  );
}
}

export default Home;
