import React from "react";
import ChildComp from "./ChildComp";

class CompWillUnmount extends React.Component
{
    constructor(){
        super();
        this.state={
            show:true
        }
    
    }

    

    

    render() {
        // console.warn('Render');
      return (
        <div>
         { 
            this.state.show ? <ChildComp/> : <h1>Child Component Removed</h1>
         }
          <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
        </div>
      )
    }
}

export default CompWillUnmount;