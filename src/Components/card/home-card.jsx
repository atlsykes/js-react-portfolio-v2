import React from "react";
import CHPic from "../../Assets/C&H_poised_downhill-image.png";
import "./cards.css";

const homecard = () => {
  return (
    <div>
      <div class="row">
        <div class="col-4">
          <img id="CH-image" src={CHPic} alt="Calvin & Hobbs Baby!" />
        </div>
        <div class="col-8">
          <h1>
            I’m a child of the 80’s… and yes, feel free to use my recipes as
            well.
            <br />
            <br />
            Impactful Agile Methodologies Professional with extensive experience
            working with software development teams. Highly skilled in IIOT
            power generation and possesses a strong background in solutions.
            Expert in new (software) product development, agile training and
            coaching.
            <br />
            <br />
            Adept at team building, collaborating, and demonstrating empathy.
            Savvy in a broad range of technologies including full stack web
            development at a junior developer level. Recognized among team
            members as being empathetic, supportive, flexible, articulate, and
            detail oriented.
            <br />
            <br />
            I’m an avid Steelers fan and pickleball player. Favorite video game:
            Thief- The Dark Project
          </h1>
        </div>
      </div>
    </div>
  );
};

export default homecard;
