import React from "react";
import "./cards.css";
import Navbar from "../navbar/navbar";
import JASNASphoto from "../../Assets/Images/JAS-NAS-8bit-photo.png";
import ThiefBoxArt from "../../Assets/Images/Thief-box-art-1.png";

const homecard = () => {
  return (
    <div>
      <div class="container-flex">
        <div class="row">
          <div class="col-3">
            <Navbar />
            <div className="img-row">
              <img src={JASNASphoto} />
            </div>
          </div>
          <div class="col-9">
            <img src={ThiefBoxArt} ALIGN="right" HSPACE="10" />
            <span className="press-start-2p-regular">
              <h1>
                <p>
                  I’m a child of the 80’s… and yes, feel free to use my recipes
                  as well.
                </p>
                <p>
                  <i>Impactful Agile Methodologies Professional</i> with
                  extensive experience working with software development teams.
                  Highly skilled in IIOT power generation and possesses a strong
                  background in solutions. Expert in new (software) product
                  development, agile training and coaching.
                </p>
                <p>
                  Adept at team building, collaborating, and demonstrating
                  empathy. Savvy in a broad range of technologies including full
                  stack web development at a junior developer level. Recognized
                  among team members as being empathetic, supportive, flexible,
                  articulate, and detail oriented.
                </p>
                <p>
                  I’m an avid Steelers fan and pickleball player. My favorite
                  video game of all time! {">>"} Thief - The Dark Project.
                </p>
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homecard;
