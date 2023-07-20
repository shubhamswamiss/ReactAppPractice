function PassFunAsProp(props){
  return(
    <div>
       <h1>PassFunAsProp Component</h1>
       <button onClick={()=>props.data()}>Call data function</button>
    </div>
  )
}

export default PassFunAsProp;