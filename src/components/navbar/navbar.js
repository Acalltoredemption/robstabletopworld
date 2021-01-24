import React from 'react';
import './navbar.css';
import {
    Link
  } from "react-router-dom";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';


  const adminLinks = document.querySelectorAll('admin-link');




const Navbar = () => {

    return (
        
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
                  <Link to="/contact"><div className="navlink">Contact Me</div></Link>
                  </Col>
                  <Col sm>
                  <a href="https://www.youtube.com/user/seahawk8601"><div className="navlink">Youtube</div></a>
                  </Col>
                  <Col sm>
                  <a href="https://twitter.com/seahawk860"><div className="navlink">Twitter</div></a>
                  </Col>
                  <Col sm>
                  <a href="https://www.instagram.com/robstabletopworld/"><div className="navlink">Instagram</div></a>
                  </Col>
                  <Col sm>
                  <Link to="/makeblog"><div className="navlink admin-link">Make Blogpost</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/makeevent"><div className="navlink admin-link">Make Event</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/login"><div className="navlink">Log In</div></Link>
                  </Col>
                  </Row>
                </Container>
            </nav>
          </div>
        
      );
    }
    

export default Navbar;