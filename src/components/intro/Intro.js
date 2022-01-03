import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
        showCursor:true,
        backDelay: 1500,
        backSpeed: 70, 
        strings: ["Developer", "Disigner", "Creator"]
    })
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="asset/photoOfMe.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello There, I'm</h2>
          <h1> Mychal Stanciu</h1>
          <h3>
            Full Stack <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="asset/downArrow.png" alt="down" />
        </a>
      </div>
    </div>
  );
};
