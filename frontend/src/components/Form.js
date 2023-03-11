import React from 'react'
import './login.css';
import {Link} from "react-router-dom"
const Form=()=> {
    return(
        <section>
    <div className="cover">
        <h1>Login</h1>
        <p className="para">Welcome back! Please enter your details</p>
        <input type="text" placeholder="username"/> 
        <input type="password" placeholder="password"/>
        <div className="login-btn">Login</div>
        <p className="signup-line">Don't have an account? <span><Link to="/signup">Signup</Link></span></p>
    </div>
    <div className="cov"></div>
    </section>
    )  
}
export default Form
