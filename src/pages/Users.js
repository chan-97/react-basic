import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import axios from 'axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return(
    <>
      <h1>Users</h1>
      {loading ?
        <Spinner /> : 
        <ul>
          {users.map((user) => {
            return (
              <div onClick={() => navigate(`/user/${user.id}`)} className="card mb-2" key={user.id}>
                <div className="card-body">{user.name}</div>
              </div>
            )
          })}
        </ul>
      }
    </>
  )
}