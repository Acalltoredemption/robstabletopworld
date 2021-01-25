import React from 'react';
import banner from '../../images/test.png';
import './header.css';
import { Card, Button } from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';


const Header = () => {
    const {currentUser} = useAuth();
    return (
        <div>
        <img className='banner' src={banner} alt='channel banner'></img>
        <Card style={{width: '15rem', height: '7rem', position: 'absolute', right: 0, top: 0, opacity: 0.7,}}>
        <Card.Body>
            <Card.Title>
                <Card.Text>
                <p className="logged-message">Logged in as:</p>
                <p className='user-email'>{currentUser && currentUser.email}</p>
                </Card.Text>
            </Card.Title>
            <Button variant="primary" style={{position: 'absolute', bottom: 0,}}>Log Out</Button>
        </Card.Body>
        </Card>
        </div>
    )
}

export default Header;