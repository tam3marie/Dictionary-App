import React from "react";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Starie Knight Dictionary</h1>
          <p>Extra! Extra! Read All About It!</p>
        </div>
        <Dictionary />
        <Footer />
      </div>
    </div>
  );
}
