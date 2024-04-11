import React from "react";
import "./navbar.css";
import JASlogo from "../../Assets/JAS-circ-logo.png";
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
                ></img>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/bio">
                  Bio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/portfolio">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Recipes
                </a>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
