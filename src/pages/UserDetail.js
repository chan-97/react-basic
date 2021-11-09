import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import axios from "axios";

export default function UserDetail() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setUser(res.data));
  }, [])

  return(
    <>
      <h1>UserDetail</h1>
      {!user ? 
        <Spinner /> :
        <div className="card mb-2">
          <div className="card-body">{user.name}</div>
          <div className="card-body">{user.email}</div>
          <div className="card-body">{user.phone}</div>
        </div>
      }
    </>
  )
}