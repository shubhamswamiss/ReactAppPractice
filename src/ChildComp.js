import React from "react";

export default class ChildComp extends React.Component
{
    componentWillUnmount(){
        alert('Component Removed')
    }
    render(){
        return(
            <div>
                <h1>Child Component</h1>
            </div>
        )
    }
}