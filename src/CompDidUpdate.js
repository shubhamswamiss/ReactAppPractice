import React from "react";

export default class CompDidUpdate extends React.Component
{
    constructor(){
        super();
        this.state={
            count:0 
        }
        console.warn('Constructor Called');
    }

    componentDidUpdate(preProps,preState,snapshot){
        console.warn('ComponetDidUpdate Called');
        console.warn('Previous State',preState);
        if(preState.count===this.state.count)
        {
            alert('Data Already Exist');
        
        }
        

    }

    render(){
       console.warn('Render Called');
        return(
            <div>
                <h1>Component Did Update Current State : {this.state.count}</h1>
                {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update State</button> */}
                <button onClick={()=>this.setState({count:1})}>Update</button>
            </div>
        )
    }
}