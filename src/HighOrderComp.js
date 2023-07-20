import React, { useState } from "react";

 function HighOrderComp(){

    return(
        <>
        <h1>High Order Component</h1>
        <HOCRed cmp={Counter} />
        <HOCGreen cmp={Counter}/>
        <HOCYellow cmp={Counter}/>
        </>
    )


}

function HOCRed(props){
    return <h4 style={{backgroundColor:'orange',width:100}}>Orange : <props.cmp/></h4>
}

function HOCGreen(props){
    return <h4 style={{backgroundColor:'green', width:100}}>Green : <props.cmp/></h4>
}

function HOCYellow(props){
    return <h4 style={{backgroundColor:'yellow',width:100}}>Blue : <props.cmp/></h4>
}

function Counter(){
    const[count,setCount]=useState(0)
    
    return(
        <>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Update</button>
        </>
    )
}
export default HighOrderComp;