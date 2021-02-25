import React, {useRef, useState} from 'react';
import {useAuth} from '../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import './userlogin.css';
import {Alert} from 'react-bootstrap';
import Person from '../../../images/person.svg';
import Lock from '../../../images/lock.svg';



const userLogin = () => {
    const {currentUser, logout} = useAuth();
    const history = useHistory()
    let message = 'Sign In';
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
        <div className="loginholder loginbox">
        <div className="container">
    <div className="d-flex justify-content-center">
        <div class="card">
            <div className="card-header cardheader">
                <p style={{fontWeight: 'bold'}}>{message}</p>
            </div>
        <div className="card-body">
            <form autocomplete="off" onSubmit={handleSubmit}>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><img src={Person} /></span>
                    </div>
                    <input type="text" ref={emailRef} className="form-control" placeholder="Username"></input>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><img src={Lock} /></span>
                    </div>
                    <input type="password" ref={passwordRef} class="form-control" placeholder="Password"></input>
                </div>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="form-group">
                    <input type="submit" value="Login" id="logged-out" className="btn btn-primary btn-block"></input>
                    <input  type="button" onClick={handleLogout} value="Log Out" id="logged-in" className="btn btn-primary btn-block"></input>
                </div>
            
            </form>
        </div>
        <div className="card-footer" id="logged-out">
            <div className="d-flex justify-content-center links">
                <div className="marginbox">
                Don't have an account?  
                </div>
                <button type="button" className="btn btn-info" onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
        </div>
    </div>

</div>




        </div>

     );
}
 
export default userLogin;