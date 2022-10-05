import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const deleteUser = async (id) => {
    await axios.delete(API_URL + id);
    callGetApi();
  };

  const updateUser = ({ firstName, lastName, checked, id }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("checked", checked);

    navigate("/update");
  };

  const callGetApi = async () => {
    const res = await axios.get(API_URL);
    setApiData(res.data);
  };

  useEffect(() => {
    callGetApi();
  }, []);

  return (
    <Table singleLine className="r_container">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>FirstName</Table.HeaderCell>
          <Table.HeaderCell>LastName</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Remove</Table.HeaderCell>
          <Table.HeaderCell>Edit</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {apiData.map((data) => (
          <Table.Row key={data.id}>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
            <Table.Cell>{data.checked ? "checked" : "Not Checked"}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => deleteUser(data.id)}>Delete</Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => updateUser(data)}>update</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default Read;
