import React,{forwardRef} from "react"

function ForwardRefEx(props,inputReference){
    return(
        <>
         <input type="text" ref={inputReference}/>
        </>
    )
}

export default forwardRef(ForwardRefEx);