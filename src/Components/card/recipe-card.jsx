import React, { useState } from "react";
import "./cards.css";
import recipesList from "../../recipes.json";
const recipe = recipesList.elements;
// listOne = ingredients list & listTwo = steps list
let listOne = [];
let listTwo = [];
let card = 0;
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

const Recipecard = () => {
  const [currentCardIL, setCardIL] = useState([]);
  const [currentCardSL, setCardSL] = useState([]);
  //After passing card number to this function, build 2 lists: ingredients list & steps list to
  //be rendered in the respective location in the modal
  const buildList = (cardNumber) => {
    console.log(`current recipe card: ${cardNumber}`);
    listOne = [];
    for (let i = 0; i <= recipe[cardNumber].ingredientsList.length - 1; i++) {
      listOne.push(
        React.createElement(
          "li",
          null,
          recipe[cardNumber].ingredientsList[i].text
        )
      );
      setCardIL(listOne);
      listTwo = [];
      for (let j = 0; j <= recipe[cardNumber].steps.length - 1; j++) {
        listTwo.push(
          React.createElement("li", null, recipe[cardNumber].steps[j].text)
        );
        setCardSL(listTwo);
      }
    }
  };

  return (
    <div>
      <div className="m-1">
        <div class="list-group" width="50 rem">
          <button
            type="button"
            class="list-group-item list-group-item-action list-group-item-info"
            data-bs-toggle="modal"
            data-bs-target="#recipeCardModal"
            onClick={() => {
              card = 0;
              buildList(card);
            }}
          >
            Blueberry Pancakes
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action list-group-item-info"
            data-bs-toggle="modal"
            data-bs-target="#recipeCardModal"
            onClick={() => {
              card = 1;
              buildList(card);
            }}
          >
            Buttermilk Biscuits
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action list-group-item-info"
            data-bs-toggle="modal"
            data-bs-target="#recipeCardModal"
            onClick={() => {
              card = 2;
              buildList(card);
            }}
          >
            Buttermilk Pancakes
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action list-group-item-info"
            data-bs-toggle="modal"
            data-bs-target="#recipeCardModal"
            onClick={() => {
              card = 3;
              buildList(card);
            }}
          >
            Waffles
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action list-group-item-info"
            data-bs-toggle="modal"
            data-bs-target="#recipeCardModal"
            onClick={() => {
              card = 4;
              buildList(card);
            }}
          >
            Instapot Party Chicken Wings
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action list-group-item-info"
            data-bs-toggle="modal"
            data-bs-target="#recipeCardModal"
            onClick={() => {
              card = 5;
              buildList(card);
            }}
          >
            Instapot Carnitas
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action list-group-item-info"
            data-bs-toggle="modal"
            data-bs-target="#recipeCardModal"
            onClick={() => {
              card = 6;
              buildList(card);
            }}
          >
            Instapot Chicken Stock
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action list-group-item-info"
            data-bs-toggle="modal"
            data-bs-target="#recipeCardModal"
            onClick={() => {
              card = 7;
              buildList(card);
            }}
          >
            Instapot Ribs
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action list-group-item-info"
            data-bs-toggle="modal"
            data-bs-target="#recipeCardModal"
            onClick={() => {
              card = 8;
              buildList(card);
            }}
          >
            Instapot Chicha Morada
          </button>
        </div>
        {/* recipe card modal */}
        {/* when we render the modal, currentCardIL and currentCardSL stats are rendered as list arrays in the ul and ol elements in order to
        both dynamically render lists and force partial screen refresh at the node */}
        <div
          class="modal fade"
          id="recipeCardModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-8" id="recipeCardModal">
                  {recipe[card].title}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h3>Ingredients</h3>
                <ul>{currentCardIL}</ul>
                <br />
                <h3>Steps</h3>
                <ol>{currentCardSL}</ol>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipecard;
