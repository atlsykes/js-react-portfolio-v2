import React from "react";
import CHimage from "../../Assets/Images/C&H_poised_downhill-image.png";
import { HomeIcon } from "@primer/octicons-react";

const pageNotFound = () => {
  return (
    <div>
      <h1>
        UH-OH ... Page not found!!!
        <br />
        <br />
        <a href="/#">
          <HomeIcon size={100} />
        </a>
        <br />
        <br />
        <img
          src={CHimage}
          alt="Calvin & Hobbs racing downhill in a red wagon"
          width="1000"
          height="600"
        />
      </h1>
    </div>
  );
};

export default pageNotFound;
