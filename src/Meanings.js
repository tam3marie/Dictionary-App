import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h6 className="part-of-speech mt-2">
        <em>{props.meaning.partOfSpeech}~</em>
      </h6>
      {props.meaning.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <div className="definition-section">
                <strong>Definition: </strong>
                <span className="definition">{definition.definition}</span>
                <div className="example-section">
                  <strong className="example-header">
                    The <span>Write</span> Practice Makes Perfect:
                  </strong>
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
