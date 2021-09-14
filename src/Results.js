import React from "react";
import Phonetic from "./Phonetic";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.response) {
    return (
      <div className="Results">
        <h2>{props.response.word}</h2>
        {props.response.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
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
