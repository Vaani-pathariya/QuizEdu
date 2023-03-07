import { useState } from "react";
import {Link} from "react-router-dom"
const CreateQuiz=()=>{
    const [code,setCode]=useState(0);
    const [pass,setPass]=useState("");
    const handleClick=()=>{
         //10 digit number generation
        let max=9999999999;
        let min=1000000000;
        let result=Math.floor(Math.random()*(max-min+1))
        setCode(result)
    };
    const final_generated=()=>{
        if (code===0)
        return "";
        else 
        return code;
    };
    const next_page=()=>{
        if (final_generated()==="" || pass==="")
        return "/account/createquiz";
        else 
        return `/account/questions/?code=${code}`
    }
    const handlePassword=(event)=>{
        setPass(event.target.value)
    }
    const sendtodb=async()=>{
        const res=await fetch('https://quiz-e29a0-default-rtdb.firebaseio.com/Code.json',{
        method:"POST",
        Headers:{
            "Content-Type":"application/json"
        }
    }
        )
    }
    return (
        <div>
            <h1>Random Code:</h1>
            <button onClick={handleClick}>Go</button>
            <div className="generated">{final_generated()}</div>
            <div>Add Password</div>
            <input type="password" placeholder="password" onChange={handlePassword} value={pass}></input>
            <Link to={next_page()} onClick={sendtodb}><button>Proceed</button></Link>
        </div>

    )
}
export default CreateQuiz;
