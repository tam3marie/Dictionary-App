import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h6 className="part-of-speech mt-3">
        <em>{props.meaning.partOfSpeech}</em>
      </h6>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition-section">
              <strong>Definition: </strong>
              {definition.definition}
              <div className="example-section">
                <strong>Yeah, but use it in a sentence: </strong>
                <em>{definition.example}</em>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
