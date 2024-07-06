import React from "react";
import './Login.css';

function Login(){
    return(
        <div className="login">
            <div className="login-container">
                <div className="login-title">Login</div>
                <div className="login-subheading">Email</div>
                <input className="login-input" type="email" ></input>
                <div className="login-subheading">Password</div>
                <input className="login-input" type="password" ></input>
                <button className="login-btn">Login</button>
            </div>
        </div>
    )
}

export default Login;
