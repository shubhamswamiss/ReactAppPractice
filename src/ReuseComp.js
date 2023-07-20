import React from "react"
import ReuseCompEX from "./ReuseCompEX"
import Table from 'react-bootstrap/Table'
export default function ReuseComp(){
 const users = [
        {name:'Sudhir',email:'sudhir@gmail.com',contact:123},
        {name:'Anil',email:'anil@gmail.com',contact:253},
        {name:'Ram',email:'ram@gmail.com',contact:486},
        {name:'Sham',email:'sham@gmail.com',contact:798}
 ]

    return(
        <div>
           <h1>Reuse Component With List</h1>
           <Table>
           
             
         

           {
            users.map((item,i)=>
            <tbody>
              
            <tr>
            <td><ReuseCompEX data={item}/></td>
            </tr>
            </tbody>
            )
           }
           </Table>
        </div>
    )
}