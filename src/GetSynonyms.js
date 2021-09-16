import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="GetSynonyms">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
