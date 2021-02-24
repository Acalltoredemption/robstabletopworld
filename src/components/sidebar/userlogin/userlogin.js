import React, {useRef, useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import {useAuth} from '../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import './userlogin.css';
import {Alert} from 'react-bootstrap';
import Person from '../../../images/person.svg';



const userLogin = () => {
    const {currentUser, logout} = useAuth();
    const history = useHistory()
    let message = '';
    let adminmessage = '';
    const loggedIn = document.querySelectorAll('#logged-in');
    const loggedOut = document.querySelectorAll('#logged-out');
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    
  
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


   async function handleSubmit(e) {
        e.preventDefault()
     
        try {
            setError('')

          await login(emailRef.current.value, passwordRef.current.value);
          history.push('/')
        } catch(e) {
            setError('Failed to sign in!')
        }
     
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


        <div className="container">
    <div className="d-flex justify-content-center h-100">
        <div class="card">
            <div className="card-header">
                <h5>Sign In</h5>
            </div>
        <div className="card-body">
            <form autocomplete="off" onSubmit={handleSubmit}>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><img href={Person}></img></span>
                    </div>
                    <input type="text" ref={emailRef} className="form-control" placeholder="username"></input>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                    </div>
                    <input type="password" ref={passwordRef} class="form-control" placeholder="password"></input>
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="form-group">
                    <input type="submit" value="Login" id="logged-out" className="btn float-right login_btn"></input>
                    <input type="submit" value="Log Out" id="logged-in" className="btn float-left logout_btn"></input>
                </div>
            
            </form>
        </div>
        <div className="card-footer">
            <div id="logged-out" className="d-flex justify-content-center links">
                Don't have an account? <button className="btn btn-outline-info" id="logged-out" onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
        </div>
    </div>

</div>




        </div>

     );
}
 
export default userLogin;