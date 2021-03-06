import React from "react";
import { NavLink } from "react-router-dom";

export function Nav() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink 
          className="navbar-brand" 
          to="/"
        >
          Home
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                style={({ isActive }) => ({ color: isActive ? "red" : "gray" })}
                className="nav-link" 
                aria-current="page" 
                to="/movies"
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                style={({ isActive }) => ({ color: isActive ? "red" : "gray" })}
                className="nav-link" 
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}