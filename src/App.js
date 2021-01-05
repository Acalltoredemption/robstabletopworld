import React from 'react';
import BlogPosts from './components/blogposts/blogposts';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


const App = () => {
return (
    <div className="Homepage">
        
        <Header />
        <NavBar />
       
        <Container>
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

export default App;