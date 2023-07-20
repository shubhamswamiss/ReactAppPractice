import { useState } from "react";

function ConditionalRendering(){
    const[loggedIn,setLoggedIn]=useState(1)
    return(
        <div>
            {loggedIn==1?
             <h1>Welcome User 1</h1>
             :loggedIn==2 ? <h1>Welcome User 2</h1>
             :<h1>Welcome User 3</h1>
            }
        </div>
    )
}

export default ConditionalRendering;