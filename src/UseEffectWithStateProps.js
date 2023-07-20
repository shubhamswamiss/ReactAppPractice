import React ,{useEffect, useState} from "react";

function UseEffectWithStateProps(props){

 useEffect(()=>{
    console.log('Count :',props.count)

 },[props.count])
    
    
    // useEffect(()=>{
    //   console.warn('use effect called')
    // },[data])

    // useEffect(()=>{
    //    alert('Count :'+count)
    //   },[count])

    return(
        <div>
            <h1>UseEffect With State and Props</h1>
            <h2>Count : {props.count}</h2>
            <h2>Data : {props.data}</h2>

            {/* <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setData(data+1)}>Update Data</button> */}

        </div>
    )
}

export default UseEffectWithStateProps;