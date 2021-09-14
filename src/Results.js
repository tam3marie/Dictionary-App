import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.response) {
    return (
      <div className="Results">
        <h2>{props.response.word}</h2>
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
