import Table from "react-bootstrap/Table";

export default function ReuseCompEX(props) {
  return (
    <Table>
 

      <tr>
        <td>{props.data.name}</td>
        <td>{props.data.email}</td>
        <td>{props.data.contact}</td>
      </tr>
    </Table>
  );
}
