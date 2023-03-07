import { useState } from "react";

const Card=(props)=>{
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
    return(
        <div>
            <h1>Question No. {props.no}</h1>
            <input type="text" placeholder="enter question" onChange={handle_ques}></input>
            <input type="text" placeholder="enter the right answer" onChange={handleright}></input>
            <input type="text" placeholder="enter option" onChange={handleop1}></input>
            <input type="text" placeholder="enter option" onChange={handleop2}></input>
            <input type="text" placeholder="enter option" onChange={handleop3}></input>
        </div>
    )
}
export default Card;