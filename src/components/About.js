import React from "react";
import { image } from "../data/data.js"; // Confirm this path is correct

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a brief description about me.</p>
      <img src={image} alt="I made this" /> {/* Ensure the alt text matches exactly */}
    </div>
  );
}

export default About;
