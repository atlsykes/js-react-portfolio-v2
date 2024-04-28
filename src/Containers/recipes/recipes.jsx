import React from "react";
import Recipecard from "../../Components/card/recipe-card";
import Navbar from "../../Components/navbar/navbar";
import "./recipes.css";

const recipes = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
        <div className="col-3">
          <div className="container">
            <div className="recipe-container">
              <Recipecard />
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default recipes;
