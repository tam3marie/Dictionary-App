import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Starie Knight Dictionary</h1>
        <p>Extra! Extra! Read All About It!</p>
        <Dictionary />
      </div>
    </div>
  );
}
