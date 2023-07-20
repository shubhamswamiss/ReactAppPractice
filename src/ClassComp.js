import React, { Component } from "react";

class ClassComp extends Component {
//   constructor(){
//       super();
//       this.state={
//           data:'Shubham',
//           email:'shubham@gmail.com'
//       }
//       console.log('constructor');
      
//   }
 
  render() {
    console.log("Render Method :", this.props);
    // console.warn('State Data :',this.state.email);
    return (
      <>
        {/* <h1>Hello Form Class Component {this.state.data}</h1> */}
        <h1>Class Component {this.props.name}</h1>
        {/* <button onClick={()=>this.setState({email:'swami@gmail.com'})}>Update State</button> */}
      </>
    );
  }
}

export default ClassComp;
