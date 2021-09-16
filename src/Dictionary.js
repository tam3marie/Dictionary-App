import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [response, setResponse] = useState(null);

  function handleResponse(response) {
    setResponse(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    // API Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <hr className="thick-break" />
      <hr className="thin-break" />
      <form onSubmit={search}>
        <div className="row">
          <span className="col-4">
            <span className="form-header-left">Look up any word!</span>
          </span>
          <span className="col-4">
            <input
              type="search"
              placeholder="Type a word"
              onChange={handleKeywordChange}
            />
            <input type="submit" value="Search" />
          </span>
          <span className="col-4">
            <span className="form-header-right">Discover anything!</span>
          </span>
        </div>
      </form>
      <hr className="thin-break" />
      <hr className="thick-break" />
      <Results response={response} />
    </div>
  );
}
