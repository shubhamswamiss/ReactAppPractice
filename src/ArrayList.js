import Table from 'react-bootstrap/Table';

export default function ArrayList(){
  //  const students = ['Anil','Sunil','Sameer','Rohan'];
      const students = [
        {name:'Sudhir',email:'sudhir@gmail.com',contact:123},
        {name:'Anil',email:'anil@gmail.com',contact:253},
        {name:'Ram',email:'ram@gmail.com',contact:486},
        {name:'Sham',email:'sham@gmail.com',contact:798}


      ]   
    // Map Looping
    // students.map((item)=>{
    //     console.log('My Name is :'+item)
    // });

    return(
        <div>
            <h1>Handle Array With List</h1>
            <Table striped bordered hover size='sm' style={{width:'50%'}}>
            <thead>
             <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>  
             </tr>
             </thead>
            {
                students.map((data,index)=>
                 data.contact === 798 ?
                <tbody key={index}>
                 <tr>  
                    <td>{index+1}</td>     
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                </tr>
                </tbody>:null
                )
            }

           </Table>
        </div>
    )
}