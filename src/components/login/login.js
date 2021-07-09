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

    return ( 

        <div>
<form className="loginform" onSubmit={handleSubmit}>

 
<div className="centerme">
            <p>Need an account? <Link to="/signup">Sign Up</Link></p>
        </div>
{error && <Alert variant="danger">{error}</Alert>}

<div className="logincard">

    <div className="form-group">
<input className=" formstyle" ref={emailRef} type="text" id="email" name="email" placeholder="Email" />

</div>

    <div className="form-group">
        <input className=" formstyle" ref={passwordRef} type="text" id="password" name="password" placeholder="Password" />
  
</div>
<div className="col-md-12">
            <input type="submit" className="submitbtns" value="Log In" />
        </div>
        </div>

</form>
        </div>
     );
    }




 
export default Login;