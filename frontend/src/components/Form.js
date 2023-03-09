import React from 'react'
import './login.css';
const Form=()=> {
    return(
        <section>
    <div className="cover">
        <h1>Login</h1>
        <p className="para">Welcome back! Please enter your details</p>
        <input type="text" placeholder="username"/> 
        <input type="password" placeholder="password"/>
        <div className="login-btn">Login</div>
        <p className="signup-line">Don't have an account? <span><a href ="signup">Signup</a></span></p>
    </div>
    <div className="cov"></div>
    </section>
    )  
}
export default Form
