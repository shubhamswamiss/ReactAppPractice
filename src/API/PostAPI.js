import { useState } from "react";

const PostAPI = () => {
   const[title,setTitle]=useState('');
   const[author,setAuthor]=useState('');
   
   const saveUser = () => {
    console.warn(title,author);
    let data={title,author};
    fetch('http://localhost:3001/posts',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((result)=>{
       result.json().then((resp)=>{
        console.warn('Fetch Method Response :', resp);
       })
    })
   }

    return(
        <>
         <h1>POST API Example</h1>
         <span>Title :</span> <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/><br/><br/>
         <span>Author :</span> <input type="text" name='author'value={author} onChange={(e)=>setAuthor(e.target.value)}/><br/><br/>
         <button onClick={saveUser}>Save New User</button>   

        </>
    )
}

export default PostAPI;