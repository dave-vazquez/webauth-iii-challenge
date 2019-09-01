import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './UsersStyles';

const Users = ({ api }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token')
    };

    axios
      .get(`${api}/users`, {
        headers
      })
      .then(res => {
        setUsers(res.data.users);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }, [api]);

  return (
    <Container>
      {users.map(({ id, username, department }) => (
        <div key={id}>
          <span>id: {id}</span>
          <span>username: {username}</span>
          <span>department: {department}</span>
        </div>
      ))}
    </Container>
  );
};

export default Users;
