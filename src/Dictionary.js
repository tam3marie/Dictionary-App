import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <div className="row">
          <span className="col-4">
            <span>Look up any word!</span>
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
            <span>Discover anything!</span>
          </span>
        </div>
      </form>
    </div>
  );
}
