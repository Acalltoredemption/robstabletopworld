import React from 'react';



const Login = () => {
    return ( 
        <div>
<form id="login-form">


<div className="col-md-6">
    <div className="form-group">
        <label for="username">Username</label>
<input className="form-control" type="text" id="username" name="username" placeholder="Username" />
</div>
</div>
<div className="col-md-6">
    <div className="form-group">
        <label for="password">Password</label>
        <input className="form-control" type="text" id="username" name="username" placeholder="Username" />
</div>
</div>
<div class="col-md-12">
            <input type="submit" class="btn btn-success btn-send" value="Log In" />
        </div>
</form>
        </div>
     );
}
 
export default Login;