import React from "react";

class ShouldCompUpdate extends React.Component
{
    constructor(){
        super();
        this.state={
            count:0
        }
        console.warn('constructor')
    }

    shouldComponentUpdate(){
         console.warn('ShouldComponetUpdate',this.state.count);
         if(this.state.count>5 && this.state.count<10)
            return true; 
         else
            return false;
    }

    

    render() {
        // console.warn('Render');
      return (
        <div>
          <h1>Should Component Update {this.state.count}</h1>
          <button onClick={()=>this.setState({count:this.state.count+1})}>Update State</button>
        </div>
      )
    }
}

export default ShouldCompUpdate;