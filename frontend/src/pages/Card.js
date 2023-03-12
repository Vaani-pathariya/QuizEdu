import { useState } from "react";
import { ref,set } from "firebase/database";
import {db} from '../firebaseConfig';
const Card=(props)=>{
    const queryString=window.location.search;
    const urlParams=new URLSearchParams(queryString);
    const final_code=urlParams.get('code')
    const [question,setQuestion]=useState("");
    const [right,setRight]=useState("");
    const [opt1,setOp1]=useState("");
    const [opt2,setOp2]=useState("");
    const [opt3,setOp3]=useState("");
    const handle_ques=(event)=>{
        setQuestion(event.target.value)
    }
    const handleop1=(event)=>{
        setOp1(event.target.value)
    }
    const handleop2=(event)=>{
        setOp2(event.target.value)
    }
    const handleop3=(event)=>{
        setOp3(event.target.value)
    }
    const handleright=(event)=>{
        setRight(event.target.value)
    }
    const handle_click_submit=()=>{
        set(ref(db,`/Code/${final_code}/Questions/Question${props.no}`),{
            option1:opt1,
            option2:opt2,
            option3:opt3,
            question:question,
            rightoption:right
        })
    }
    return(
        <div>
            <h1>Question No. {props.no}</h1>
            <input type="text" placeholder="enter question" onChange={handle_ques} value={question}></input>
            <input type="text" placeholder="enter the right answer" onChange={handleright} value={right}></input>
            <input type="text" placeholder="enter option" onChange={handleop1} value={opt1}></input>
            <input type="text" placeholder="enter option" onChange={handleop2} value={opt2}></input>
            <input type="text" placeholder="enter option" onChange={handleop3} value={opt3}></input>
            <button onClick={handle_click_submit}>Enter</button>
        </div>
    )
}
export default Card;