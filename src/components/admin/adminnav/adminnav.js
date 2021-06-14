import React from 'react';
import './adminnav.css';
import {
    NavLink
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
          <div>
          <div className="adminnavlinks">
            <nav>
                <Container> 
                    <Row>
                  <Col sm>
                  <NavLink to="/makeblog" id="logged-in-admin" activeStyle={{ fontWeight: "bold"}}><div className="navlink admin-link">Make Blogpost</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/makeevent" id="logged-in-admin" activeStyle={{ fontWeight: "bold"}}><div className="navlink admin-link">Vid of the Week</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/blogedit" id="logged-in-admin" activeStyle={{ fontWeight: "bold"}}><div className="navlink admin-link">View Blogs</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/approve" id="logged-in-admin" activeStyle={{ fontWeight: "bold"}}><div className="navlink admin-link">Art Submissions</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/communitysubmissions" id="logged-in-admin" activeStyle={{ fontWeight: "bold"}}><div className="navlink admin-link">Community Submissions</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/warandpieces" id="logged-in-admin" activeStyle={{ fontWeight: "bold"}}><div className="navlink admin-link">War & Pieces</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/comments" id="logged-in-admin" activeStyle={{ fontWeight: "bold"}}><div className="navlink admin-link">Message Inbox</div></NavLink>
                  </Col>
                  <Col sm>
                  <NavLink to="/articlecomments" id="logged-in-admin" activeStyle={{ fontWeight: "bold"}}><div className="navlink admin-link">Article Comments</div></NavLink>
                  </Col>
                  </Row>
                </Container>
            </nav>
          </div>
          </div>
        
      );
    }
    

export default AdminNav;