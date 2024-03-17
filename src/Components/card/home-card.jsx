import React from "react";
import "./homecard.css";
import Navbar from "../navbar/navbar";

const homecard = () => {
  return (
    <div>
      <div class="container-flex">
        <div class="row">
          <div class="col-2">
            <Navbar />
          </div>
          <div class="col-10">
            <span className="press-start-2p-regular">
              <h1>
                I’m a child of the 80’s… and yes, feel free to use my recipes as
                well.
                <br />
                <br />
                <i>Impactful Agile Methodologies Professional</i> with extensive
                experience working with software development teams. Highly
                skilled in IIOT power generation and possesses a strong
                background in solutions. Expert in new (software) product
                development, agile training and coaching.
                <br />
                <br />
                Adept at team building, collaborating, and demonstrating
                empathy. Savvy in a broad range of technologies including full
                stack web development at a junior developer level. Recognized
                among team members as being empathetic, supportive, flexible,
                articulate, and detail oriented.
                <br />
                <br />
                I’m an avid Steelers fan and pickleball player. My favorite
                video game of all time! >> Thief - The Dark Project.
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homecard;
