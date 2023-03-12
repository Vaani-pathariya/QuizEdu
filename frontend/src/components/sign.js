import React, { useState } from 'react';
import back from "../asserts/backg.png"
import "./signup.css"
import {Link} from "react-router-dom"
const Signup_design=()=>{
    const [code2,setCode2]=useState(0)
    const handleClick_code=()=>{
        //10 digit number generation
       let max=9999999999;
       let min=1000000000;
       let result=Math.floor(Math.random()*(max-min+1))
       setCode2(result)
   };
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