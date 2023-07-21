import {useParams} from 'react-router-dom'
function Users(){
    const {id,name}=useParams();
    console.log()
    return(
        <>
        <h4>User Component</h4>
        <h4>Id : {id}</h4>
        <h4>Name : {name}</h4>
        <h2>api</h2>
        </>
    )
}

export default Users;