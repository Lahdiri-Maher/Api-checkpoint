import axios from "axios";
import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const Listofusers = () => {
  const [users, setUssers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setUssers(res.data);
    });
  }, []);
  return (
    <div className="List">
      {users.map(user => (
        <div key={user.id}>
          <ListGroup horizontal>
            <ListGroup.Item className="items">{user.name}</ListGroup.Item>
            <ListGroup.Item className="items">{user.username}</ListGroup.Item>
            <ListGroup.Item className="items">{user.email}</ListGroup.Item>
            <ListGroup.Item className="items">{user.website}</ListGroup.Item>
          </ListGroup>
          <br></br>
        </div>
      ))}
    </div>
  );
};
export default Listofusers;
