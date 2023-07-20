import React from "react";

class CompDidMount extends React.Component
{
    constructor(){
        super();
        this.state={
            name:'Anil'
        }
        console.warn('constructor')
    }

    componentDidMount(){
        console.warn('ComponentDidMount')
    }

    render() {
        console.warn('Render');
      return (
        <div>
          <h1>Componet Did Mount Life Cycle {this.state.name}</h1>
          <button onClick={()=>this.setState({name:'EPPS'})}>Update Name</button>
        </div>
      )
    }
}

export default CompDidMount;