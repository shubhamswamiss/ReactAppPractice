import Table from "react-bootstrap/Table";

export default function NestedArrayList() {
  const users = [
    {
      name: "Anil",
      email: "anil@gamil.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "45", city: "Delhi", country: "India" },
        { Hn: "121", city: "Mumbai", country: "India" },
        { Hn: "18", city: "Chennai", country: "India" },
      ],
    },

    {
      name: "Sunil",
      email: "sunil@gamil.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "45", city: "Delhi", country: "India" },
        { Hn: "121", city: "Mumbai", country: "India" },
        { Hn: "18", city: "Chennai", country: "India" },
      ],
    },

    {
      name: "Sanju",
      email: "sanju@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "45", city: "Delhi", country: "India" },
        { Hn: "121", city: "Mumbai", country: "India" },
        { Hn: "18", city: "Chennai", country: "India" },
      ],
    },

    {
      name: "Sagar",
      email: "sagar@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "45", city: "Delhi", country: "India" },
        { Hn: "121", city: "Mumbai", country: "India" },
        { Hn: "18", city: "Chennai", country: "India" },
      ],
    },
  ];

  return (
    <div>
      <h1>List With Nested Array</h1>
      <Table variant="dark" striped>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
          {
             users.map((item, index) => (
            <tbody key={index}>
            <tr>
              <td>{index+1}</td>  
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Table variant="dark" striped>
                    <thead>
                        <tr>
                        <th>Index</th>   
                        <th>Hn</th>
                        <th>City</th>
                        <th>Country</th>
                        </tr>
                    </thead>
                 
                    {
                    item.address.map((data,index) => (
                     <tbody key={index}>
                      <tr>
                        <td>{index+1}</td>
                        <td>{data.Hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                  </tbody>
                    ))}
                </Table>
              </td>
            </tr>
        </tbody>
          ))
          }
      </Table>
    </div>
  );
}
