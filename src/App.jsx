import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterComponent from "./components/Filter.jsx";
import { Data } from "./data";

function App() {
  return (
    <>
      <FilterComponent />
      <h2>Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Category</th>
            <th>Type</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.category}</td>
              <td>{item.type}</td>
              <td>{item.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
