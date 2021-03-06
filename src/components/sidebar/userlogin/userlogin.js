import React, {useRef, useState, useEffect} from 'react';
import {useAuth} from '../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import './userlogin.css';
import {Alert} from 'react-bootstrap';
import Person from '../../../images/person.svg';
import Lock from '../../../images/lock.svg';
import {db} from '../../../firebase/firebaseconfig';
import {auth} from '../../../firebase/firebaseconfig';


const userLogin = () => {
    const {currentUser, logout} = useAuth();
    const history = useHistory()
    let message = 'Sign In';
    const loggedIn = document.querySelectorAll('#logged-in');
    const loggedOut = document.querySelectorAll('#logged-out');
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [username, setUsername] = useState([]);
   

    if (currentUser && currentUser.email) {
        //toggle UI elements
        message = 'Welcome';
        loggedIn.forEach(item => item.style.display = 'block');
        loggedOut.forEach(item => item.style.display = 'hidden');
    } else {
        //toggle UI elements
        message = 'Log in or Sign up';
        loggedIn.forEach(item => item.style.display = 'hidden');
        loggedOut.forEach(item => item.style.display = 'block');
        
    }

    useEffect(() => {
        auth.onAuthStateChanged(function(user){
            if(user){
                var theusersEmail = user.email;
                var nameCapitalized = theusersEmail.charAt(0).toUpperCase() + theusersEmail.slice(1);
                fetchUsername(nameCapitalized);
            }
        })
        const fetchUsername =  (nameCapitalized) => {
            
             db.collection('usernames').doc(nameCapitalized).get().then(snapshot => {
                if (snapshot.exists){
                    console.log('Found user data');
                     var data = snapshot.data();
                     setUsername(data.username.toString());
                     console.log(username);
                } else {
                    console.log('no such document');
                }
            })
        }
    }, []);


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


    return ( 
        <div className="loginholder loginbox">
        <div className="container">
    <div className="d-flex justify-content-center">
        <div className="card">
            <div className="card-header cardheader welcome">
                <p id="logged-out" style={{fontWeight: 'bold'}}>{message} </p><b id="logged-in">{message} <h5 className="username">{username}</h5></b>
            </div>
        <div className="card-body">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><img src={Person} alt="user sprite"/></span>
                    </div>
                    <input type="text" ref={emailRef} className="form-control" placeholder="Username"></input>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><img src={Lock} alt="a lock"/></span>
                    </div>
                    <input type="password" ref={passwordRef} className="form-control" placeholder="Password"></input>
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