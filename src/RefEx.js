import React,{createRef} from 'react';

export default class RefEx extends React.Component{
    constructor(){
        super();
        this.inputRef = createRef();
    }

    getVal(){
        console.warn(this.inputRef.current.value);
        this.inputRef.current.style.color = 'red';
        this.inputRef.current.style.backgroundColor='black';


    }

    render(){

        return(
            <>
             <h1>Ref In React</h1>
             <input type="text" ref={this.inputRef}/>
             <button onClick={()=>this.getVal()}>Check Ref</button>
            </>
        )
    }
}