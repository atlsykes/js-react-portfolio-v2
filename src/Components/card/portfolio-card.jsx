import React from "react";
import "./cards.css";
import TestImage from "../../Assets/test-card-image.jpeg";

const portfoliocard = (props) => {
  return (
    <div>
      <div className="m-4">
        <div className="card" style={{ width: "18rem" }} id={props}>
          <img src={TestImage} class="card-img-top" alt="test image" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfoliocard;
