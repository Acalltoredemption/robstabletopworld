import React from 'react';
import {
    Link
  } from "react-router-dom";
  import './signup.css';


const SignUp = () => {
    return (

        <div>
        <div className="centerme">
            <p>Already have an account? <Link to="/login"><div>Log In</div></Link></p>
        </div>

        <form className="loginform">
        
        <h2>Sign Up</h2>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="email">Email</label>
        <input className="form-control" type="text" id="email" name="email" placeholder="Email" />
        </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="text" id="password" name="password" placeholder="Password" />
        </div>
        </div>
        <div className="col-md-12">
                    <input type="submit" className="btn btn-success btn-send" value="Log In" />
                </div>
        </form>
                </div>
      );
}
 
export default SignUp;