import React from "react";

import "./Photos.css";

export default function Photos(props) {
  console.log(props);
  if (props.photos) {
    return (
      <div className="Photos">
        <hr />
        <div className="row">
          <h2>A Little IMAGE-ination</h2>

          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={props.keyword}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
