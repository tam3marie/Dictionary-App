import React from "react";
import Phonetic from "./Phonetic";
import GetSynonyms from "./GetSynonyms";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.response) {
    return (
      <div className="Results mt-4">
        <h2>{props.response.word}</h2>
        <hr className="thick-break mt-3" />
        <hr className="thin-break" />
        <div className="row">
          <div className="col phonetics-section">
            <h3>Say That Again!</h3>
            <h4>{props.response.word}</h4>
            {props.response.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </div>
          <div className="col synonyms-section">
            <h3>
              Synonym Rolls:
              <div className="synonyms-header-l2">Just Like Grammar</div>
              <div className="synonyms-header-l3">Used To Make Them</div>
            </h3>
            {props.response.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <GetSynonyms meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <h5>But What Does It All Mean?</h5>
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
