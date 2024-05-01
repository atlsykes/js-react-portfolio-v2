import React from "react";
import "./cards.css";
import { MarkGithubIcon } from "@primer/octicons-react";
import { RocketIcon } from "@primer/octicons-react";

const portfoliocard = (props) => {
  console.log(props.image);
  return (
    <div>
      <div className="m-4">
        <div className="card" style={{ width: "20rem" }} id={props.id}>
          <img
            src={`/images/${props.image}`}
            class="card-img-top"
            alt="test screen"
          />
          <div class="card-body">
            <h1 class="card-title">{props.title}</h1>
            <p class="card-text">{props.description}</p>
            <a href={props.GH} target="_blank" rel="noreferrer">
              <MarkGithubIcon size={48} />
            </a>
            <a href={props.deploy} target="_blank" rel="noreferrer">
              <RocketIcon size={48} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfoliocard;
