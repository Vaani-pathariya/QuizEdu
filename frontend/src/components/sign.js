import React from 'react';
import back from "../asserts/backg.png"
import "./signup.css"
import {Link} from "react-router-dom"
const Signup_design=()=>{
    return (
        <div className='signup-flex'>
            <img src={back} width="50%" height="100%"></img>
                <div class="cover-signup">
                
                <h1>Signup</h1>
				<p class="para">Let's create an account</p>
           		
           		   <input type="text" placeholder="username"/>
           		
           		
           		   <input type="email" placeholder="email"/>
            	
                
                    <input type="Password" placeholder="Password"/>
              
            	
            	<button className='btn'>Sign up</button>
                <p className="signup-line">Already have an account? <span><Link to="/">Login</Link></span></p>
                </div>
                
        </div>
    )
}
export default Signup_design;