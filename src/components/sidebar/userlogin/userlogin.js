import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {useAuth} from '../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import './userlogin.css';

const userLogin = () => {
    const {currentUser, logout} = useAuth();
    const history = useHistory()
    let message = '';
    let adminmessage = '';
    const loggedIn = document.querySelectorAll('#logged-in');
    const loggedOut = document.querySelectorAll('#logged-out');


    
  
    if (currentUser && currentUser.email) {
        //toggle UI elements
        message = 'Welcome!';
        loggedIn.forEach(item => item.style.display = 'block');
        loggedOut.forEach(item => item.style.display = 'hidden');
        if (currentUser.uid === 'cw67NhgIsDhyAdp2AMEuFm11a2G2'){
            adminmessage= 'You are logged in as Admin'
        }
    } else {
        //toggle UI elements
        message = 'Log in or Sign up';
        loggedIn.forEach(item => item.style.display = 'hidden');
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
        <div className="loginholder">
        <Card style={{width: '30rem', height: '8.5rem', position: 'block', background: 'white'}}>
        <Card.Body> 
            <Card.Title className="logged-message">
                <Card.Text>
                {message}
                {adminmessage}
                <br></br>
                {currentUser && currentUser.email}
                </Card.Text>
            </Card.Title>
            <Button onClick={handleLogout} variant="primary" display="hidden" id="logged-in" style={{position: 'absolute', bottom: 25, width: 100}}>Log Out</Button>
            <Button onClick={handleLogin} variant="primary" display="hidden" id="logged-out" style={{position: 'absolute', bottom: 25, left: 50, width: 100}}>Log In</Button>
            <Button onClick={handleSignup} variant="primary" display="hidden" id="logged-out" style={{position: 'absolute', bottom: 25, right: 50, width: 100}}>Sign Up</Button>
        </Card.Body>
        </Card>
        </div>

     );
}
 
export default userLogin;