import React, {useRef, useState} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import './login.css';
import {
    Link
  } from "react-router-dom";
  import {Alert} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory()
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)


   async function handleSubmit(e) {
        e.preventDefault()
     
        try {
            setError('')
            setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value);
          console.log(emailRef, passwordRef);
          history.push('/')
        } catch(e) {
            setError('Failed to sign in!')
        }
        setLoading(false)


        
    }

    return ( 
        <div>
<form className="loginform" onSubmit={handleSubmit}>


<div className="centerme">
            <p>Need an account? <Link to="/signup">Sign Up</Link></p>
        </div>
{error && <Alert variant="danger">{error}</Alert>}
<div className="col-md-6">
    <div className="form-group">
        <label htmlFor="email">Email</label>
<input className="form-control" ref={emailRef} type="text" id="email" name="email" placeholder="Email" />
</div>
</div>
<div className="col-md-6">
    <div className="form-group">
        <label htmlFor="password">Password</label>
        <input className="form-control" ref={passwordRef} type="text" id="password" name="password" placeholder="Password" />
</div>
</div>
<div className="col-md-12">
            <input type="submit" className="btn btn-success btn-send" value="Log In" />
        </div>
</form>
        </div>
     );
    }




 
export default Login;