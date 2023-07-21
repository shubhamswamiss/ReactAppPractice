import React,{useEffect,useState} from "react";
import Table from 'react-bootstrap/Table';

function PreFilledForm(){
 const[users,setUsers]=useState([]);
 const[title,setTitle]=useState('');
 const[author,setAuthor]=useState('');

useEffect(()=>{
    getList();
},[])

const getList = () =>{
    fetch('http://localhost:3001/posts').then((result)=>{
        result.json().then((resp)=>{
            console.warn('Result',resp);
            setUsers(resp);
            setTitle(resp[0].title);
            setAuthor(resp[0].author);
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

const selectUser = (id) => {
    console.log(users[id-1]);
    let item = users[id-1];
    setTitle(item.title);
    setAuthor(item.author);
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
                <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
            </tr>
            )
          }
        </tbody>
    


     </Table>

     <div>
        <input type="text" value={title} /><br/><br/>
        <input type="text" value={author} /><br/><br/>
        <button>Updata User</button>
     </div>
    </>
  )
}

export default PreFilledForm;