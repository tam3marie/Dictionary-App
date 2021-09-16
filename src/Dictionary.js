import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("newspaper");
  const [response, setResponse] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResponse(response.data[0]);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    // API Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <hr className="thick-break" />
        <hr className="thin-break" />
        <form onSubmit={handleSubmit}>
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
              <input className="search-btn" type="submit" value="Search" />
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
  } else {
    load();
    return "loading...";
  }
}
