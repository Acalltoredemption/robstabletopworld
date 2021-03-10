import React from 'react';
import './navbar.css';
  import
    {NavLink}
   from "react-router-dom";
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
                  <NavLink exact to="/"  activeStyle={{ fontWeight: "bold"}}><div className="navlink">Home</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/about" activeStyle={{ fontWeight: "bold"}}><div className="navlink">About Me</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/contact" activeStyle={{ fontWeight: "bold" }}><div className="navlink">Contact Me</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/art" activeStyle={{ fontWeight: "bold" }}><div className="navlink">Art Showcase</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/community" activeStyle={{ fontWeight: "bold" }}><div className="navlink">Our Community</div></NavLink>
                  </Col>
                  <Col sm id="logged-in">
                  <NavLink to="/submissions" id="logged-in" activeStyle={{ fontWeight: "bold" }}><div className="navlink" id="logged-in">Submissions</div></NavLink>
                  </Col>

                  </Row>
                </Container>
            </nav>
          </div>
        
      );
    }
    

export default Navbar;