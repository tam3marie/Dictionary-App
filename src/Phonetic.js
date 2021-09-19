import React from "react";
import useSound from "use-sound";
import "./Phonetic.css";

export default function Phonetic(props) {
  const [play] = useSound(props.phonetic.audio);

  return (
    <div className="Phonetic mt-3">
      <i className="fas fa-volume-up" onClick={play}></i>
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
