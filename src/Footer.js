import React from "react";
import logo from "./images/logo-cyan-2.png";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <hr className="thick-break mt-3" />
      <hr />
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
      <a
        href="https://www.starieknightdesigns.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={logo}
          className="img-fluid"
          alt="Starie Knight Designs Logo"
        />
      </a>
      <hr />
      <hr className="thick-break mb-5" />
    </div>
  );
}
