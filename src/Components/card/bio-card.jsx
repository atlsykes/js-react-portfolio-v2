import React from "react";
import "./cards.css";
import Navbar from "../navbar/navbar";
import SteelersLogo from "../../Assets/Images/steelers-logo-1.png";
import PickeballIcon from "../../Assets/Images/pickball-icon.png";

const biocard = () => {
  return (
    <div>
      <div class="container-flex">
        <div class="row">
          <div class="col-3">
            <Navbar />
            <div className="img-row">
              <img
                src={SteelersLogo}
                alt="Steelers football logo"
                width="200"
                height="200"
                class="d-none d-sm-block"
              />
            </div>
          </div>
          <div class="col-sm-9">
            <img
              src={PickeballIcon}
              alt="Pickleball black & white icon"
              ALIGN="right"
              HSPACE="10"
              width="220"
              height="220"
              class="d-none d-sm-block"
            />
            <span className="press-start-2p-regular">
              <section>
                <p>
                  SOFT/ESSENTIAL SKILLS
                  <br />
                  <br />
                  Agile Methodologies - Scrum - Kanban - SDLC - Servant
                  Leadership - Active Listening - Demonstrating Empathy -
                  Collaboration - Networking - Problem-Solving - Feedback Loops
                  - Agile Coaching & Training - Mentorship - Data Analysis -
                  Data Visualization - Performance Metrics - Adaptability -
                  Passion for Technology - Creativity
                  <br />
                  <br />
                  TOOLING/TECHNICAL SKILLS
                  <br />
                  <br />
                  Jira - Confluence - Visual Studio Code - Git - GitHub - HTML5
                  - CSS3 - JavaScript (^ES6) - JQuery - Web, Server, 3rd party
                  API’s - Node.js - MySQL - MongoDB - Reactjs - Visual Studio
                  Code - Postman - MySQL Workbench
                  <br />
                  <br />
                  CORPORATE EXPERIENCE
                  <br />
                  <br />
                  <ul>
                    <li>
                      VIRGINIA STATE POLICE (CONTRACT),
                      <em>Scrum Master</em>; North Chesterfield, VA 2024 - 2025
                    </li>
                    <li>
                      MOLINA HEALTHCARE (CONTRACT), <em>Senior Scrum Master</em>
                      ; Mechanicsville, VA 2023 - 2024
                    </li>
                    <li>
                      CAPITAL ONE, <em>Principal Agile Delivery Lead</em>;
                      Richmond, VA, 2021 - 2023
                    </li>
                    <li>
                      GE DIGITAL,{" "}
                      <em>
                        Senior Staff Technical Program Manager, New Product
                        Introduction
                      </em>
                      ; Atlanta, GA, 2018 – 2021
                    </li>
                    <li>
                      GE POWER DIGITAL, <em>Staff Agile Transformer</em>;
                      Atlanta, GA 2015 – 2018
                    </li>
                    <li>
                      GE POWER DIGITAL,{" "}
                      <em>Program Manager, New Product Introduction</em>;
                      Atlanta, GA 2010 – 2014
                    </li>
                  </ul>
                  <br />
                  MILITARY EXPERIENCE
                  <br />
                  <br />
                  UNITED STATES NAVY,{" "}
                  <em>Electrician’s Mate, Nuclear Trained</em>; U.S.S. Long
                  Beach (CGN-9), 1989 - 1995
                  <br />
                  <br />
                  EDUCATION & PROFESSIONAL TRAINING
                  <br />
                  <br />
                  <ul>
                    <li>
                      GEORGIA INSTITUTE OF TECHNOLOGY, Atlanta, GA Certificate,
                      Full Stack Flex Web Development Bootcamp
                    </li>
                    <li>
                      SOUTHERN POLYTECHNIC STATE UNIVERSITY, Marietta, GA,
                      Master of Science (Management of Technology Program)
                    </li>
                    <li>
                      THOMAS A. EDISON STATE COLLEGE, Trenton, NJ Bachelor of
                      Science (BS), Applied Science and Technology in Nuclear
                      Engineering Technology
                    </li>
                    <li>
                      UNITED STATES NAVY NUCLEAR POWER PROGRAM, Orlando, FL &
                      Goose Creek, SC, Electrician’s Mate, Nuclear Trained
                    </li>
                  </ul>
                  <br />
                  AWARDS/CERTIFICATIONS/IP
                  <br />
                  <br />
                  <ul>
                    <li>
                      Virginia State Police, Commendation - Rap Back (Plan B)
                      Implementation, 2025
                    </li>
                    <li>
                      Full Stack Flex Web Development, Georgia Tech Professional
                      Education Boot Camp, 2022
                    </li>
                    Certified Scrum Master (CSM), Trained by Dr. Jeff
                    Sutherland/Scrum Inc., Scrumalliance.org, 2016
                    <li>
                      Certified Scrum Product Owner (CSPO), Trained by Dr. Jeff
                      Sutherland/Scrum Inc., Scrumalliance.org, 2016
                    </li>
                    <li>
                      Project Management Professional, Project Management
                      Institute, issued 2016, expired 2020
                    </li>
                    <li>
                      US 9019095 B2 (US Patent), Systems and Methods for
                      Integrating Alarm Processing and Presentation of Alarms
                      for a Power Generation System, General Electric Company,
                      Pub. Date: April 28, 2015
                    </li>
                    <li> Six Sigma Green Belt, General Electric, 2007</li>
                  </ul>
                </p>
              </section>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default biocard;
