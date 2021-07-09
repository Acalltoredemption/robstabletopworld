import React, {useRef, useState} from 'react';
import {
    Link
  } from "react-router-dom";
  import './signup.css';
  import { Container } from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import {Alert} from 'react-bootstrap';
import {db} from '../../firebase/firebaseconfig';
import history from '../../history/history';
import {toast} from 'react-toastify';
import './signup.css';



const SigningUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)


   async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match!');
        } 
        
        try {
            setError('')
            setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value);
        } catch(e) {
            setError('Failed to create an account!')
        }
        setLoading(false)
        sendUsername();
    }

    const handleChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const sendUsername = (user) => {
        var emailCapitalized = email.charAt(0).toUpperCase() + email.slice(1);
        db.collection('usernames').doc(emailCapitalized).get().then(snapshot => {
            if (snapshot.exists){
                setError('Email already in use!');
            } else {
                db.collection('usernames').doc(emailCapitalized).get().then
                db.collection('usernames').doc(emailCapitalized).set({
                    username: username,
                });
                toast.success('Register success.');
                history.push('/');
            } })
    }


    return (

        <div>
        <div className="centerme">
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>

        <form className="loginform" onSubmit={handleSubmit}>
        <Container>
        
        <div className="logincard">
        {error && <Alert variant="danger">{error}</Alert>}
            <div className="form-group">
             
        <input className="form-control" type="text" className="formstyle" ref={emailRef} onChange={handleEmail} id="email" name="email" placeholder="Email" />
        </div>
            <div className="form-group">
              
        <input className="form-control" type="text" className="formstyle" onChange={handleChange} id="username" name="username" placeholder="Username" />
        </div>
            <div className="form-group">
                
                <input className="form-control" type="text" className="formstyle" ref={passwordRef} id="password" name="password" placeholder="Password" />
        </div>
            <div className="form-group">
            
                <input className="form-control" type="text" className="formstyle" id="passwordConfirm" ref={passwordConfirmRef} name="passwordConfirm" placeholder="Password Confirmation" />
        </div>
        <div className="col-md-12">
        <input type="submit" disabled={loading} className="submitbtns" value="Sign Up" />
                </div>
                </div>
                </Container>
        </form>
                </div>
      );
}
 
export default SigningUp;