import React from 'react';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';






const Login = () => {
    return ( 
        <div>
<form id="login-form">


<div className="col-md-6">
    <div className="form-group">
        <label for="email">Email</label>
<input className="form-control" type="text" id="email" name="email" placeholder="Email" />
</div>
</div>
<div className="col-md-6">
    <div className="form-group">
        <label for="password">Password</label>
        <input className="form-control" type="text" id="password" name="password" placeholder="Password" />
</div>
</div>
<div class="col-md-12">
            <input type="submit" class="btn btn-success btn-send" value="Log In" />
        </div>
</form>
        </div>
     );
}
const auth = firebase.auth();
const loginForm = document.querySelector('#login-form');


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const userEmail = loginForm['email'].value;
    const passWord = loginForm['password'].value;

    auth.signInWithEmailAndPassword(userEmail, passWord).then(cred => {
        loginForm.reset();
    })
})
 
export default Login;