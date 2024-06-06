import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import JASlogo from "../../Assets/Images/JAS-circ-logo-1.png";
import { MailIcon } from "@primer/octicons-react";
import { MarkGithubIcon } from "@primer/octicons-react";
import LIlogo from "../../Assets/Images/In-Blue-48.png";
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
                <Link to="/" role="navigation">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/bio" role="navigation">
                  Bio
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/portfolio" role="navigation">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/recipes" role="navigation">
                  Recipes
                </Link>
              </li>
              <li>
                <a
                  href="mailto: atlsykes1@att.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MailIcon size={48} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/atlsykes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MarkGithubIcon size={48} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/justin-sykes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LIlogo} alt="LinkedIn logo" />
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
