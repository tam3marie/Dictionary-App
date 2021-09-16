import React from "react";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h3>
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
