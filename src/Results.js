import React from "react";
import Phonetic from "./Phonetic";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.response) {
    return (
      <div className="Results mt-4">
        <h2>{props.response.word}</h2>
        {props.response.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        <br />
        <hr className="thick-break mt-2" />
        <hr className="thin-break" />
        <h4>But What Does It All Mean?</h4>
        {props.response.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
