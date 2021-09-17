import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("newspaper");
  const [response, setResponse] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResponse(response.data[0]);
  }
  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    // Dictionary API Documentation: https://dictionaryapi.dev/
    // Pexels API Documentation: https://www.pexels.com/api/documentation/?

    let pexelsApiKey =
      "563492ad6f917000010000012c6f5877edff4cb0b9346f01a7b0ce57";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let pexelHeader = { Authorization: `Bearer ${pexelsApiKey}` };
    let apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiDictionaryUrl).then(handleDictionaryResponse);
    axios
      .get(pexelsApiUrl, {
        headers: pexelHeader,
      })
      .then(handlePexelsResponse);
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
          <input
            className="search-box"
            type="search"
            placeholder="Look up any word: discover anything...
"
            onChange={handleKeywordChange}
          />
          <input className="search-btn" type="submit" value="Search" />
        </form>
        <hr className="thin-break" />
        <hr className="thick-break" />
        <Results response={response} />
        <Photos photos={photos} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
