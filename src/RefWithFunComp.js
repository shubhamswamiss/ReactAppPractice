import React,{useRef} from "react";

export default function RefWithFunComp(){
  let inputRef = useRef(null);
   
  function handleInput(){
    console.warn('function called');
    inputRef.current.value='1000';
    inputRef.current.focus();
    inputRef.current.style.color="red";
  }

    return(
        <>
         <h1>useRef With Functional Component</h1>
         <input type="text" ref={inputRef} />
         <button onClick={handleInput}>Handle Input</button>
        </>
    )
}