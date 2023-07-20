function Student(props){
    console.log(props);
    return(
        <div className="App">
            <h1>Student Name is: {props.name} </h1>
             <h2>Email Id is : {props.email}</h2>
             <h3>Address : {props.other.address}</h3>
             <h4>Phone:{props.other.mobile}</h4>
        </div>
    )
}

export default Student;