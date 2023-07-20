import { useState,useMemo } from "react"

export default function UseMemoEx(){
    const[count,setCount]=useState(0);
    const[item,setItem]=useState(10);

    const multiCountMemo = useMemo(function multiCount(){
        console.log('multiCount');
      return count*5;

    },[count])
    
    // function multiCount(){
    //     console.log('multiCount Called');
    //     return count*5;
    // }

    return(
        <>
         <h1>useMemo Hook In React</h1>
         <h2>Count : {count}</h2>
         <h2>Item : {item}</h2>
         <h2>{multiCountMemo}</h2>
         <button onClick={()=>setCount(count+1)}>Update Count</button>
         <button onClick={()=>setItem(item*5)}>Update Item</button>
        </>
    )
}