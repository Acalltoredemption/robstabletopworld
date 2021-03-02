import React from 'react';
import './adminnav.css';
import {
    Link
  } from "react-router-dom";
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import {useAuth} from '../../../contexts/AuthContext';
  import UserLogin from '../../../components/sidebar/userlogin/userlogin';


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
                  <Link to="/makeblog" id="logged-in-admin"><div className="navlink admin-link">Make Blogpost</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/makeevent" id="logged-in-admin"><div className="navlink admin-link">Vid of the Week</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/blogedit" id="logged-in-admin"><div className="navlink admin-link">View Blogs</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/approve" id="logged-in-admin"><div className="navlink admin-link">Art Submissions</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/communitysubmissions" id="logged-in-admin"><div className="navlink admin-link">Community Submissions</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/warandpieces" id="logged-in-admin"><div className="navlink admin-link">War & Pieces</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/comments" id="logged-in-admin"><div className="navlink admin-link">Message Inbox</div></Link>
                  </Col>
                  <Col sm>
                  <Link to="/articlecomments" id="logged-in-admin"><div className="navlink admin-link">Article Comments</div></Link>
                  </Col>
                  </Row>
                </Container>
            </nav>
          </div>
          <UserLogin className="resizer" />
          </div>
        
      );
    }
    

export default AdminNav;