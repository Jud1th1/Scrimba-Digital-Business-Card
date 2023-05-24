import React from "react";

export default function Footer() {
  return (
    <footer className="footer--container">
      <a href="https://github.com/Jud1th1/" className="footer--items">
        <img
          src="../images/github.svg"
          className="footer--image"
          alt="Github logo"
        />
      </a>
      <a href="https://codepen.io/Jud1th1" className="footer--items">
        <img
          src="../images/codepen.svg"
          className="footer--image"
          alt="Codepen logo"
        />
      </a>
      <a href="https://dribbble.com/JudithonDribble" className="footer--items">
        <img
          src="../images/dribbble.svg"
          className="footer--image"
          alt="Dribbble logo"
        />
      </a>
      <a href="https://www.behance.net/judithjean-fr" className="footer--items">
        <img
          src="../images/behance.svg"
          className="footer--image"
          alt="Behance logo"
        />
      </a>
    </footer>
  );
}
