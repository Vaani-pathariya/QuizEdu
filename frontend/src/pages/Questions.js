import { useState } from "react";
import Card from "./Card";

const Questions=()=>{
    const [number,setNumber]=useState(0);
    const handle_number=(event)=>{
        setNumber(event.target.value)
    }
    return (
        <div>
            <h1>enter the number of questions</h1>
            <input type="number" placeholder="enter no." onChange={handle_number}></input>
            <Card no={1}/>
        </div>
    )
}
export default Questions;