import { Routes,Route,Link } from "react-router-dom";
import Users from "./Users";

function DynamicRouting(){
  let users = [
    {id:1,name:'Home',email:'home@gmail.com'},
    {id:2,name:'About',email:'about@gmail.com'},
    {id:3,name:'Contact',email:'contact@gmail.com'},
    {id:4,name:'Products',email:'products@gmail.com'},
    {id:4,name:'Cart',email:'cart@gmail.com'},
  ]  
    
    return(
        <>
         <h1>React Dynamic Routing</h1>
         {
            users.map((item)=>
            <div><Link to={'/user/'+item.id+'/'+item.name}><h5>{item.name}</h5></Link></div>
            )
         }
         <Routes>
            <Route path='/user/:id/:name' element={<Users/>}/>
         </Routes>

        </>
    )
}

export default DynamicRouting;