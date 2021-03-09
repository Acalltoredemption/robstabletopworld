import React from 'react';
import SideBar from '../sidebar/sidebar';
import BlogPosts from '../blogposts/blogposts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homepage.css';


const Homepage = () => {
    return (
        <div>
        <Container className="containerstyler">
            <Row>
                <Col sm={8}>
       
         <BlogPosts />
        
                </Col>
                <Col>
        
         <SideBar />
       
                </Col>
         </Row>
         </Container>
        </div>
    )
}

export default Homepage;