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
  const {currentUser} = useAuth();

  const loggedIn = document.querySelectorAll('#logged-in');
  const loggedOut = document.querySelectorAll('#logged-out');

  if (currentUser && currentUser.email) {
      //toggle UI elements
      loggedIn.forEach(item => item.style.display = 'block');
      loggedOut.forEach(item => item.style.display = 'none');
  } else {
      //toggle UI elements
      loggedIn.forEach(item => item.style.display = 'none');
      loggedOut.forEach(item => item.style.display = 'block');
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
                  <Link to="/art"><div className="navlink">Art Showcase</div></Link>
                  </Col>
                  <Col sm id="logged-in">
                  <Link to="/submissions" id="logged-in"><div className="navlink" id="logged-in">Submissions</div></Link>
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

                  </Row>
                </Container>
            </nav>
          </div>
        
      );
    }
    

export default Navbar;