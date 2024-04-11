import React, { useState } from "react";
import Portfoliocard from "../../Components/card/portfolio-card";
import Navbar from "../../Components/navbar/navbar";
const cardArrayOne = [1, 2, 3];
const cardArrayTwo = [1, 2, 3];
let j = 0;

const portfolio = (cards) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
        <div className="col-md-10">
          <div className="container">
            <div className="card-gallery">
              {cardArrayOne.map((card) => (
                <Portfoliocard key={card.id} />
              ))}
            </div>
            <div className="card-gallery">
              {cardArrayTwo.map((card) => (
                <Portfoliocard key={card.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
