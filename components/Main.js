import React from "react";

export default function Main() {
  return (
    <main className="main--container">
      <div className="judith--header">
        <h3 className="main--heading">Judith Jean-Francois</h3>
        <h4 className="main--h4--one">Frontend Developer | UX Designer</h4>
        <span className="main--website">
          <a href="https://jud1th1.github.io/">jud1th1.github.io</a>
        </span>
      </div>

      <div className="btn--class">
        <button className="main--btn btn--email">
          <img
            src="../images/envelope-solid.svg"
            className="email"
            alt="email Icon"
          />{" "}
          <a href="jf.jud1th1@gmail.com">Email</a>
        </button>
        <button className="main--btn btn--linkedin">
          <img
            src="../images/linkedin.svg"
            className="linkedin"
            alt="Linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/judith-jean-francoisdesigner/">
            LinkedIn
          </a>
        </button>
      </div>

      <div className="main--about--interest">
        <h3>About</h3>
        <p>
          Hello! I'm Judith, a certified Junior Front-End Developer and UX
          Designer with a drive for designing and programming beautiful
          accessible applications. When I'm not crafting engaging digital
          experiences, you can find me exploring my love of art, savoring a
          delicious cup of coffee, or spending time with my beloved cats.
        </p>
        <h3>Open for Work!</h3>
        <p>
          Currently seeking employment opportunities where I can contribute my
          skills and grow in a collaborative and dynamic environment. With my
          passion for innovation and dedication to quality, I bring a unique
          perspective and skill set to every project I work on.
        </p>
      </div>
    </main>
  );
}
