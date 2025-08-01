import React from "react";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <div id="Hero" className="w-inherit">
      <div className="hero-container">
        <picture className="center">
          <source srcSet={hero} type="image/png" />
          <img src={hero} alt="Hero Panel" width="100%" height={"100%"} />
        </picture>
        <div className="w-fit p-4 hero-text">
          <h1>Welcome to My E-Portfolio :{")"}</h1>
          <p style={{ fontSize: "0.8em", fontStyle: "italic" }}>
            "This shows My DLP, PPT, Reflection's, Exam, and Documentation"
          </p>
          <h4>
            By:{" "}
            <a
              href="https://www.facebook.com/markyrobs.nasikuyo"
              target="_blank"
              rel="noreferrer"
            >
              Legazpi, Mark Robbin A.
            </a>,
          </h4>
          <h5> From: BTVTEdICT-CP-3D</h5>
        </div>
      </div>
    </div>
  );
}

export default Hero;
