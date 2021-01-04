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
                    <Col sm={2}>
                  <Link to="/">Home</Link>
                  </Col>
                  <Col sm={2}>
                  <Link to="/about">About Me</Link>
                  </Col>
                  <Col sm={2}>
                  <Link to="/users">Contact Me</Link>
                  </Col>
                  <Col sm={2}>
                  <Link to="/youtube">Youtube</Link>
                  </Col>
                  <Col sm={2}>
                  <Link to="/twitter">Twitter</Link>
                  </Col>
                  </Row>
                </Container>
            </nav>
          </div>
        </Router>
      );
    }
    

export default Navbar;