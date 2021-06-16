import React, {useRef, useState, useEffect} from 'react';
import {useAuth} from '../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import './userlogin.css';
import {Alert} from 'react-bootstrap';
import Person from '../../../images/person.svg';
import Lock from '../../../images/lock.svg';
import {db} from '../../../firebase/firebaseconfig';
import {auth} from '../../../firebase/firebaseconfig';
import {toast} from 'react-toastify';
import {Badge} from 'antd';

const {Ribbon} = Badge;



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
    let greeting = '';

   

    if (currentUser && currentUser.email) {
        //toggle UI elements
        message = `Logged In`;
        greeting = `Welcome ${username}`;
        console.log(auth);
        loggedIn.forEach(item => item.style.display = 'block');
        loggedOut.forEach(item => item.style.display = 'hidden');
    } else {
        //toggle UI elements
        greeting = '';
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
          toast.success(`Welcome back!`);
          history.push('/')
        } catch(e) {
            toast.error('Failed to sign in!');
        }
     
    }






async function handleLogout() {


        try {
            await logout()
            history.push('/');
            toast.success('Logout Successful!');
        } catch(e) {
            toast.error('Failed to log out!');
        }
    }

    function handleSignup() {
        history.push('/signup')
    }


    return ( 
        
        <div className="loginholder loginbox loginshader">
            
        <div className="container">
        
    <div className="d-flex justify-content-center">
    <Ribbon  id="logged-out" text={message} color="green" size="large">
        <div className="card">
            <div className="card-header cardheader welcome">
            <br/>
            </div>
        <div className="card-body">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="logged-out"><img src={Person} id="logged-out" alt="user sprite"/></span>
                    </div>
                    <p>{greeting}</p>
                    <input type="text" id="logged-out" ref={emailRef} className="form-control" placeholder="Username"></input>
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="logged-out" ><img src={Lock} id="logged-out" alt="a lock"/></span>
                    </div>
                    <input type="password" id="logged-out" ref={passwordRef} className="form-control" placeholder="Password"></input>
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
        </Ribbon>
    </div>
</div>

        </div>
        

     );
}
 
export default userLogin;