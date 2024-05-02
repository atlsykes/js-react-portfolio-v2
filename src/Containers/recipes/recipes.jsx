import React from "react";
import Recipecard from "../../Components/card/recipe-card";
import Navbar from "../../Components/navbar/navbar";
import BurgertimeGameImage from "../../Assets/Images/burgertime-game-image-1.png";
import "./recipes.css";

const recipes = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <Navbar />
        </div>
        <div className="col-sm-9">
          <div className="container-flex">
            <div className="container">
              <div className="recipe-container">
                <Recipecard />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src={BurgertimeGameImage}
              height="300"
              alt="Burgertime video game screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default recipes;
