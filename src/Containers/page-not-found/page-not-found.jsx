import React from "react";
import CHimage from "../../Assets/Images/C&H_poised_downhill-image.png";
import { HomeIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";

const pageNotFound = () => {
  return (
    <div>
      <h1 className="press-start-2p-regular">
        UH-OH ... PAGE NOT FOUND!!!
        <br />
        <br />
        <Link to="/">
          <HomeIcon size={100} />
        </Link>
        <br />
        <br />
        <img
          src={CHimage}
          alt="Calvin & Hobbs racing downhill in a red wagon"
          width="1000"
          height="600"
          className="img-fluid"
        />
      </h1>
    </div>
  );
};

export default pageNotFound;
