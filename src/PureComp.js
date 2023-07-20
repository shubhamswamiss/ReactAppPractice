import { PureComponent } from "react";

export default class Purecomp extends PureComponent{
    constructor(){
        super();
        this.state={
            count:1
        }
    }

    render(){
        console.warn('Check re-Rendering');
        return(
            <>
             <h1>Pure Component is used to prevent Re-rendering</h1> 
            <h1>Pure Component In React {this.state.count}</h1>
            <button onClick={()=>this.setState({count:0})}>Update Count</button>
            </>
        )
    }
}