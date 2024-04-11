import React from "react";
import { LinkExternalIcon } from "@primer/octicons-react";
import "./cards.css";
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

const portfoliocard = (props) => {
  return (
    <div>
      <div className="m-4">
        <div class="card" style={{ width: "18rem;" }} id={props}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* recipe card modal trigger */}
            <button
              type="button"
              class="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#recipeCardModal"
            >
              <LinkExternalIcon size={48} />
            </button>
            {/* recipe card modal */}
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
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">...</div>
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
      </div>
    </div>
  );
};

export default portfoliocard;
