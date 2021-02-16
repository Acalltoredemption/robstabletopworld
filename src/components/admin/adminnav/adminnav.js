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
  const loggedInAdmin = document.querySelectorAll('#logged-in-admin')
  const loggedIn = document.querySelectorAll('#logged-in');
  const loggedOut = document.querySelectorAll('#logged-out');

  if (currentUser && currentUser.email) {
      //toggle UI elements
      loggedIn.forEach(item => item.style.display = 'block');
      loggedOut.forEach(item => item.style.display = 'none');
      if (currentUser.uid === 'cw67NhgIsDhyAdp2AMEuFm11a2G2'){
       loggedInAdmin.forEach(item => item.style.display = 'block');
       
    }
  } else {
      //toggle UI elements
      loggedIn.forEach(item => item.style.display = 'none');
      loggedOut.forEach(item => item.style.display = 'block');
      loggedInAdmin.forEach(item => item.style.display = 'none');
  }

    return (
        
          <div className="adminnavlinks">
            <nav>
                <Container> 
                    <Row>
                  <Col sm>
                  <Link to="/makeblog" id="logged-in-admin"><div className="navlink admin-link">Make Blogpost</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/makeevent" id="logged-in-admin"><div className="navlink admin-link">Make Event</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/blogedit" id="logged-in-admin"><div className="navlink admin-link">View Blogs</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/addmerch" id="logged-in-admin"><div className="navlink admin-link">Add Merch</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/approve" id="logged-in-admin"><div className="navlink admin-link">View Submissions</div></Link>
                  </Col>
                  </Row>
                </Container>
            </nav>
          </div>
        
      );
    }
    

export default AdminNav;