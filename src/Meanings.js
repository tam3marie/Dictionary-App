import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h6 className="part-of-speech mt-3">
        <em>
          {props.meaning.partOfSpeech}
          (s)
        </em>
      </h6>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <div className="definition-section">
                <strong>Definition: </strong>
                <span className="definition">{definition.definition}</span>
                <div className="example-section">
                  <strong>Put it all together in a sentence: </strong>
                  <em className="example">{definition.example}</em>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <div className="definition-section">
                <strong>Definition: </strong>
                <span className="definition">{definition.definition}</span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
