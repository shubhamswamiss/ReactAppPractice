import { useState } from "react";

function Toggle() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
      {
        status ? <h1>Hello World</h1> : null
      }
    </div>
  );
}

export default Toggle;
