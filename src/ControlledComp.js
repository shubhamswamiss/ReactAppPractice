import React,{useState} from "react"

export default function ControlledComp(){
    let [val,setVal]=useState('10');

    return(
        <>
        <h2>Controlled Component In React</h2>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <h3>Value : {val}</h3> 
        </>
    )
}