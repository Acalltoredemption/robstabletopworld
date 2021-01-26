import React from 'react';
import banner from '../../images/RobsBanner.jpg';
import './header.css';
import { Card, Button } from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const {currentUser, logout} = useAuth();
    const history = useHistory()
    let message = '';
    const loggedIn = document.querySelectorAll('#logged-in');
    const loggedOut = document.querySelectorAll('#logged-out');
  
    if (currentUser && currentUser.email) {
        //toggle UI elements
        message = 'Logged in as:';
        loggedIn.forEach(item => item.style.display = 'block');
        loggedOut.forEach(item => item.style.display = 'none');
    } else {
        //toggle UI elements
        message = 'Log in or Sign up';
        loggedIn.forEach(item => item.style.display = 'none');
        loggedOut.forEach(item => item.style.display = 'block');
    }

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
                <h4 className="logged-message">{message}</h4>
                <h4 className='user-email'>{currentUser && currentUser.email}</h4>
                </Card.Text>
            </Card.Title>
            <Button onClick={handleLogout} variant="primary" display="none" id="logged-in" style={{position: 'absolute', bottom: 0}}>Log Out</Button>
            <Button onClick={handleLogin} variant="primary" id="logged-out" style={{position: 'absolute', bottom: 0}}>Log In</Button>
            <Button onClick={handleSignup} variant="primary" id="logged-out" style={{position: 'absolute', bottom: 0, left: 100}}>Sign Up</Button>
        </Card.Body>
        </Card>
        </div>
    )
}

export default Header;
