import { onValue } from "firebase/database";
import { useState,useEffect } from "react";
import Card from "./Card";
import {ref} from "firebase/database";
import { db } from "../firebaseConfig"; 

const Questions=()=>{
    const [number,setNumber]=useState(0);
    const handle_number=(event)=>{
        setNumber(event.target.value)
    }
    const queryString=window.location.search;
    const urlParams=new URLSearchParams(queryString);
    const code_link=urlParams.get('code')
    useEffect(()=>{
        onValue(ref(db),snapshot=>{
            const data=snapshot.val();
            if (data !==null){
                console.log(data.Code[code_link].Questions);
            }
        })

    },[]);
    return (
        <div>
            <h1>enter the number of questions</h1>
            <input type="number" placeholder="enter no." onChange={handle_number} value={number}></input>
            <Card no={number}/>
        </div>
    )
}
export default Questions;