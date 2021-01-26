import React from 'react';
import banner from '../../images/test.png';
import './header.css';
import { Card, Button } from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const {currentUser, logout} = useAuth();
    const history = useHistory()


async function handleLogout() {

        try {
            await logout()
            history.push('/')
        } catch(e) {
            console.log('failed to log out')
        }
    }

    function handleSignup() {
        history.push('/signup')
    }

    function handleLogin() {
        history.push('/login')
    }


    return (
        <div>
        <img className='banner' src={banner} alt='channel banner'></img>
        <Card style={{width: '15rem', height: '5.5rem', position: 'absolute', right: 0, top: 0, opacity: 0.7, background: 'white'}}>
        <Card.Body>
            <Card.Title>
                <Card.Text>
                <p className="logged-message">Logged in as:</p>
                <p className='user-email'>{currentUser && currentUser.email}</p>
                </Card.Text>
            </Card.Title>
            <Button onClick={handleLogout} variant="primary" style={{position: 'absolute', bottom: 0}}>Log Out</Button>
            <Button onClick={handleLogin} variant="primary" style={{position: 'absolute', bottom: 10}}>Log In</Button>
            <Button onClick={handleSignup} variant="primary" style={{position: 'absolute', bottom: 20}}>Sign Up</Button>
        </Card.Body>
        </Card>
        </div>
    )
}

export default Header;
