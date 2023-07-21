import React,{useEffect,useState} from "react";
import Table from 'react-bootstrap/Table';

function GetAPI(){
 const[data,setData]=useState([]);

useEffect(()=>{
    fetch('http://localhost:3001/posts').then((result)=>{
        result.json().then((resp)=>{
            console.warn('Result',resp);
            setData(resp);
        })
    })
},[])
 
console.warn(data);
  


  return(
    <>
    <h1>Get API Call</h1>
     <Table bordered hover  striped>
        <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>

        </tr>  
        </thead>
        <tbody>
          {
            data.map((item,index)=>
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
            </tr>
            )
          }
        </tbody>
    


     </Table>
    </>
  )
}

export default GetAPI;