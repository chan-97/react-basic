import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import routes from "./routes";
import { Nav } from "./components/Nav";
import "./App.css";

export default function App() {
  return(
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          {routes.map(route => {
            return <Route key={route.path} path={route.path} element={<route.component />} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}