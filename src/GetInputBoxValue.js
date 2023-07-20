import React,{useState} from "react";

function GetInputBoxValue(){
    const[data,setData]=useState(null);
    const[print,setPrint]=useState(false);

    function getData(val){
      console.log(val.target.value);
      setData(val.target.value);
      setPrint(false);
    }
    return(
        <div className="App">
          
           <h1>Get Input Box Value!</h1>
           <input type="text" onChange={getData}/>
            <h3>Input Box Value is : {data}</h3>
            <button onClick={()=>setPrint(true)}>Print</button>
            {
                print ? <h1>{data}</h1> : null

            }
        </div>
    )
}

export default GetInputBoxValue;