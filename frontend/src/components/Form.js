import React, { useState } from 'react'
import './login.css';
import {Link} from "react-router-dom"
const Form=()=> {
    const [username,setUsername]=useState("")
    const [password,setPasslogin]=useState("")
    const handUsername=(event)=>{
        setUsername(event.target.value)
    }
    const handPassword=(event)=>{
        setPasslogin(event.target.value)
    }
    return(
        <section>
    <div className="cover">
        <h1>Login</h1>
        <p className="para">Welcome back! Please enter your details</p>
        <input type="text" placeholder="username" onChange={handUsername}/> 
        <input type="password" placeholder="password" onChange={handPassword}/>
        <Link to="/account"><div className="login-btn" >Login</div></Link>
        <p className="signup-line">Don't have an account? <span><Link to="/signup" >Signup</Link></span></p>
    </div>
    <div className="cov"></div>
    </section>
    )  
}
export default Form
