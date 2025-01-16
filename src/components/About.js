import React from "react";
import { image } from "../data/data";

function About() {
  return (
  
  <div id ="about">
    <h2>About Me</h2>
    <p> I'm passionate about creating beautiful and functional web applications.
        With expertise in React and modern web technologies, I love turning ideas
        into reality through code.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
};
export default About;
