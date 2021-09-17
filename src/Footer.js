import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <hr className="thick-break mt-3" />
      <hr className="thin-break" />

      <div className="open-source">
        <a
          href="https://github.com/tam3marie/Dictionary-App"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>{" "}
        by{" "}
        <a
          href="https://www.starieknightdesigns.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tammy Knight
        </a>
        <br />
        <a
          href="https://dictionary-app-tknight.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Hosted
        </a>{" "}
        on{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </div>
      <hr className="thin-break" />
      <hr className="thick-break mb-5" />
    </div>
  );
}
