import React,{useEffect,useState} from "react";
import Table from 'react-bootstrap/Table';

function DeleteAPI(){
 const[users,setUsers]=useState([]);

useEffect(()=>{
    getList();
},[])

const getList = () =>{
    fetch('http://localhost:3001/posts').then((result)=>{
        result.json().then((resp)=>{
            console.warn('Result',resp);
            setUsers(resp);
        })
    })
}
 
console.warn(users);
  
const deleteUser = (id) => {
  fetch(`http://localhost:3001/posts/${id}`,{
    method:'DELETE'
  }).then((result)=>{
     result.json().then((resp)=>{
        console.warn('Fetch Mehthod Response :',resp);
        getList();
     })
  })
}

  return(
    <>
    <h1>Delete Data with API Call</h1>
     <Table bordered hover  striped>
        <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th></th>
        </tr>  
        </thead>
        <tbody>
          {
            users.map((item,index)=>
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
            </tr>
            )
          }
        </tbody>
    


     </Table>
    </>
  )
}

export default DeleteAPI;