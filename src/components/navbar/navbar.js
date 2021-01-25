import React from 'react';
import './navbar.css';
import {
    Link
  } from "react-router-dom";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import {useAuth} from '../../contexts/AuthContext';


const Navbar = () => {
  const adminLinks = document.querySelectorAll('admin-link');
  const loggedOutLinks = document.querySelectorAll('logged-out');

  const {currentUser} = useAuth();
  if (currentUser) {
      //toggle UI elements
      adminLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
      //toggle UI elements
      adminLinks.forEach(item => item.style.display = 'none');
      loggedOutLinks.forEach(item => item.style.display = 'block');
  }

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
                  <Link to="/login"><div className="navlink logged-out">Log In</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/signup"><div className="navlink logged-out">Sign Up</div></Link>
                  </Col>
                  <Col sm>
                  <a><div className="navlink admin-link">Log Out</div></a>
                  </Col>
                  </Row>
                </Container>
            </nav>
          </div>
        
      );
    }
    

export default Navbar;