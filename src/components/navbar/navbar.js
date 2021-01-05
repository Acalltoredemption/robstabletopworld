import React from 'react';
import './navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';


const Navbar = () => {

    return (
        <Router>
          <div className="navlinks">
            <nav>
                <Container>
                    <Row>
                    <Col sm>
                  <Link to="/"><div className="navlink">Home</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/about"><div className="navlink">About Me</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/users"><div className="navlink">Contact Me</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/youtube"><div className="navlink">Youtube</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/twitter"><div className="navlink">Twitter</div></Link>
                  </Col>
                  </Row>
                </Container>
            </nav>
          </div>
        </Router>
      );
    }
    

export default Navbar;