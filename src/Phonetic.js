import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic text-center">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      {"  "}
      {props.phonetic.text}
    </div>
  );
}
