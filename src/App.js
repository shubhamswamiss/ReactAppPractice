import React, { useState ,useEffect,useRef } from "react";
import "./App.css";
import Student from "./Student";
import GetInputBoxValue from "./GetInputBoxValue";
import Toggle from "./Toggle";
import FormEx from "./Form";
import ConditionalRendering from "./ConditionalRendering";
import PassFunAsProp from "./PassFunAsProp";
import Members from "./Members";
import ClassComp from './ClassComp';
import CompDidMount from "./CompDidMount";
import CompDidUpdate from "./CompDidUpdate";
import ShouldCompUpdate from "./ShouldCompUpdate";
import CompWillUnmount from "./CompWillUnmount";
import UseEffectWithStateProps from "./UseEffectWithStateProps";
import StyleInReact from "./StyleInReact";
import Button from 'react-bootstrap/Button';
import ArrayList from './ArrayList';
import NestedArrayList from "./NestedArrayList";
import ReuseComp from "./ReuseComp";
import ChildToParent from "./ChildToParent";
import Purecomp from "./PureComp";
import UseMemoEx from "./UseMemoEx";
import RefEx from "./RefEx";
import RefWithFunComp from "./RefWithFunComp";
import ForwardRefEx from "./ForwardRefEx";
import ControlledComp from "./ControlledComp";
import HighOrderComp from "./HighOrderComp";
import BasicRouting from './BasicRouting';
import DynamicRouting from "./Routing/DynamicRouting";
import GetAPI from "./API/GetAPI";
import PostAPI from './API/PostAPI'
import DeleteAPI from "./API/DeleteAPI";
import PreFilledForm from './API/PreFilledForm';

function App() {
  let item = 'Shubham';
  let inputRef = useRef(null);
  const [name, setName] = useState("Shubham");
  const[data,setData]=useState(10);
  const[count,setCount]=useState(100);
  
  
  function getData(){
    alert('Hello from app')
  }

  function parentAlert(data){
    console.log(data)
    alert('hello from app : '+data.name);  
  }

  useEffect(()=>{
   console.log('UseEffect called'); 
  })



  // function updateInput(){
  //   inputRef.current.value = '10';
  //   inputRef.current.style.color='red';
  //   inputRef.current.focus();

  // }

 return (
    <div className="App" style={{ backgroundColor: "skyblue", margin: 20 }}>
      {/* Props and State Example */}
      {/* <Student name={name} email='epps@gmail.com' other={{address:'delhi',mobile:'123'}}/>
       <button onClick={()=>{setName('Swami')}}>Update</button> */}
      {/* Get Input Box Example  */}
      {/* <GetInputBoxValue/> */}
      {/* <Toggle/> */}
      {/* <FormEx/> */}
      {/* <ConditionalRendering/> */}
      {/* <PassFunAsProp data={getData}/> */}
      {/* <Members data={getData}/> */}
      {/* <ClassComp name={name}/>
      <button onClick={()=>setName('Swami')}>Update Name</button> */}
      {/* <CompDidMount/> */}
      {/* <CompDidUpdate/> */}
      {/* <ShouldCompUpdate/> */}
      {/* <CompWillUnmount/> */}
      {/* <h1>App Component</h1> */}
      {/* <UseEffectWithStateProps count={count} data={data}/>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setData(data+1)}>Update Data</button> */}
      {/* <StyleInReact/> */}
      {/* <Button variant="primary">Primary</Button>{' '} */}
      {/* <ArrayList/> */}
      {/* <NestedArrayList/> */}
      {/* <ReuseComp/> */}
      {/* <ChildToParent alert={parentAlert}/> */}
      {/* <Purecomp/> */}
      {/* <UseMemoEx/> */}
      {/* <RefEx/> */}
      {/* <RefWithFunComp/> */}
      
      {/* <h1>forwardRef in React</h1>
      <ForwardRefEx ref={inputRef}/>
      <button onClick={updateInput}>Update InputBox</button> */}
      {/* <ControlledComp/> */}
      {/* <HighOrderComp/> */}
      {/* <BasicRouting/> */}
      {/* <DynamicRouting/> */}
      {/* <GetAPI/> */}
      {/* <PostAPI/> */}
      {/* <DeleteAPI/> */}
      <PreFilledForm/>
    </div>
  );
}

export default App;
