import React, {useRef, useState} from 'react';
import {
    Link
  } from "react-router-dom";
  import './signup.css';
  import { Container } from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import {Alert} from 'react-bootstrap';




const SigningUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup, currentUser} = useAuth();
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


        
    }

    return (

        <div>
        <div className="centerme">
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>

        <form className="loginform" onSubmit={handleSubmit}>
        <Container className="align-items-center w-100">
        <h2>Sign Up</h2>
        {currentUser && currentUser.email}
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="email">Email</label>
        <input className="form-control" type="text" ref={emailRef} id="email" name="email" placeholder="Email" />
        </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="text" ref={passwordRef} id="password" name="password" placeholder="Password" />
        </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="password">Password Confirmation</label>
                <input className="form-control" type="text" id="passwordConfirm" ref={passwordConfirmRef} name="passwordConfirm" placeholder="Password Confirmation" />
        </div>
        </div>
        <div className="col-md-12">
                    <input type="submit" disabled={loading}className="btn btn-success btn-send" value="Log In" />
                </div>
                </Container>
        </form>
                </div>
      );
}
 
export default SigningUp;