import React from 'react';
import './adminnav.css';
import {
    Link
  } from "react-router-dom";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import {useAuth} from '../../../contexts/AuthContext';


const AdminNav = () => {
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
        
          <div className="adminnavlinks">
            <nav>
                <Container> 
                    <Row>
                  <Col sm>
                  <Link to="/makeblog" id="logged-in"><div className="navlink admin-link">Make Blogpost</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/makeevent" id="logged-in"><div className="navlink admin-link">Make Event</div></Link>
                  </Col>
                  </Row>
                </Container>
            </nav>
          </div>
        
      );
    }
    

export default AdminNav;