import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import JASlogo from "../../Assets/Images/JAS-circ-logo-1.png";
//Navbar has to be integrated at the card level due to it's vertical nature

const navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <span className="press-start-2p-regular">
            <ul class="navbar-nav">
              <li>
                <img
                  src={JASlogo}
                  alt="JAS circular logo"
                  width="180"
                  height="180"
                  style={{ marginBottom: "50%" }}
                ></img>
              </li>
              <li class="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/bio">Bio</Link>
              </li>
              <li class="nav-item">
                <Link to="/portfolio">Projects</Link>
              </li>
              <li class="nav-item">
                <Link to="/recipes">Recipes</Link>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
