export default function ChildToParent(props){
  const data = 'Shubham Swami';
  const data2 = {name:'shubham',email:'shubham@gamil.com',contact:123}
     return(
       <>
        <h1>Send Data Child To Parent</h1>
        <h4>User Name : {data2.name}</h4>
        <button onClick={()=>props.alert(data2)}>Click Me</button>
       </>
     )
}