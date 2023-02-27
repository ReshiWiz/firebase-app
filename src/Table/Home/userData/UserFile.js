import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../../../service/Api";

export default function UserTable() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    let response = await getUsers();
    setUserInfo(response.data);
    console.log(response.data);
  };

  const deleteUserInfo = async (id) => {
    await deleteUser(id);
    getAllUser();
  };
  // handle the event to delete

  return (
    <div>
      <div style={{ margin: "4rem" }}>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr className="tr-top">
              {/* {userInfo.id} */}
              {/* <th>user.id</th> */}
              <th>id</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>age</th>
              <th>email</th>
              <th>city</th>
              <th>zip</th>
              <th>state</th>
              <th>company_name</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* {userInfo && userInfo.length > 0
              ? userInfo.map((elem) => { */}
            {userInfo && userInfo.length > 0
              ? userInfo.map((elem) => {
                  return (
                    <tr key={elem._id}>
                      <td>{elem._id}</td>
                      <td>{elem.firstName}</td>
                      <td>{elem.lastName}</td>
                      <td>{elem.age}</td>
                      <td>{elem.email}</td>
                      <td>{elem.city}</td>
                      <td>{elem.zip}</td>
                      <td>{elem.state}</td>
                      <td>{elem.company}</td>
                      <td>
                        {/* <a href="/edit">local</a> */}

                        <Link to={`/edit/${elem._id}`}>
                          <Button className="m-2" variant="secondary">
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          className="m-2"
                          onClick={() => deleteUserInfo(elem._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : navigate("/warning")}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
