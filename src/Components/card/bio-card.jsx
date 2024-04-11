import React from "react";
import "./cards.css";
import Navbar from "../navbar/navbar";

const biocard = () => {
  return (
    <div>
      <div class="container-flex">
        <div class="row">
          <div class="col-2">
            <Navbar />
          </div>
          <div class="col-10">
            <span className="press-start-2p-regular">
              <p>
                CORE COMPETENCIES: Servant Leadership | Agile Team Management |
                Agile Training & Coaching | New Product (Software) Development
                <br />
                <br />
                CORPORATE EXPERIENCE:
                <br />
                <ul>
                  <li>
                    MOLINA HEALTHCARE, Mechanicsville, VA, 2023 - Present -
                    Senior Scrum Master
                  </li>
                  <li>
                    CAPITAL ONE, Richmond, VA, 2021 - 2023 - Principal Agile
                    Delivery Lead
                  </li>
                  <li>
                    GE DIGITAL, Atlanta, GA, 2018 – 2021 Senior Staff Technical
                    Program Manager, New Product Introduction
                  </li>
                  <li>
                    GE POWER DIGITAL, Atlanta, GA - Staff Agile Transformer,
                    2015 – 2018
                  </li>
                  <li>
                    GE POWER DIGITAL, Atlanta, GA - Program Manager, New Product
                    Introduction, 2010 – 2014
                  </li>
                </ul>
                MILITARY EXPERIENCE:
                <br />
                UNITED STATES NAVY - USS Long Beach (CGN-9), 1989 - 1995 -
                Electrician’s Mate, Nuclear Trained
                <br />
                <br />
                EDUCATION & PROFESSIONAL TRAINING:
                <br />
                <ul>
                  <li>
                    SOUTHERN POLYTECHNIC STATE UNIVERSITY, Marietta, GA, Master
                    of Science (Management of Technology Program)
                    <li>
                      THOMAS A. EDISON STATE COLLEGE, Trenton, NJ Bachelor of
                      Science (BS), Applied Science and Technology in Nuclear
                      Engineering Technology
                    </li>
                  </li>
                  <li>
                    GEORGIA INSTITUTE OF TECHNOLOGY, Atlanta, GA Certificate,
                    Full Stack Flex Web Development Bootcamp
                  </li>
                  <li>
                    UNITED STATES NAVY NUCLEAR POWER PROGRAM, Orlando, FL; Goose
                    Creek, SC Electrician’s Mate
                  </li>
                </ul>
                CERTIFICATIONS/IP:
                <br />
                <ul>
                  <li>
                    AWS Certified Cloud Practitioner, Amazon Web Services (AWS)
                  </li>
                  <li>
                    2022 Full Stack Flex Web Development, Georgia Tech
                    Professional Education Boot Camp
                  </li>
                  2021 Certified Scrum Master (CSM), Trained by Dr. Jeff
                  Sutherland/Scrum Inc., Scrumalliance.org,
                  <li>
                    2016 Certified Scrum Product Owner (CSPO), Trained by Dr.
                    Jeff Sutherland/Scrum Inc., Scrumalliance.org
                  </li>
                  <li>
                    2016 Project Management Professional, Project Management
                    Institute, expired 2020
                  </li>
                  <li>
                    US 9019095 B2, Systems and Methods for Integrating Alarm
                    Processing and Presentation of Alarms for a Power Generation
                    System, General Electric Company, Pub. Date: April 28, 2015
                  </li>
                  <li> Six Sigma Green Belt, General Electric, 2007</li>
                </ul>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default biocard;
