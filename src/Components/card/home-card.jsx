import React from "react";
import "./cards.css";
import Navbar from "../navbar/navbar";
import JASNASphoto from "../../Assets/Images/JAS-headshot-8-bit-1.jpg";
import ThiefBoxArt from "../../Assets/Images/Thief-box-art-1.png";

const homecard = () => {
  return (
    <div>
      <div class="container-flex">
        <div class="row">
          <div class="col-3">
            <Navbar />
            <div className="img-row">
              <img
                src={ThiefBoxArt}
                alt="Thief video game box art"
                class="d-none d-sm-block"
              />
            </div>
          </div>
          <div class="col-sm-9">
            <img
              src={JASNASphoto}
              alt="Justin Sykes Headshot Tuned"
              ALIGN="right"
              style={{ width: "275px", height: "275px" }}
            />
            <span className="press-start-2p-regular">
              <section>
                <p>Hey there, welcome to my 80's themed portfolio!</p>
                <br />
                <br />
                <div class="text-bg-primary p-5 fs-3">
                  AGILE DELIVERY PROFESSIONAL
                </div>
                <br />
                <p>
                  <em>
                    I am an experienced Product and Agile Delivery Professional
                    with 15+ years of corporate and state agency experience,
                    focusing on driving the successful delivery of high-quality
                    products by acting as the bridge between business objectives
                    and technical execution. Leveraging a Master of Science
                    degree in Technology Management and a Certified Scrum
                    Product Owner (CSPO) certification, my expertise lies in
                    defining product vision, prioritizing features, and
                    maximizing the value delivered by development teams.
                  </em>
                </p>
                <p>
                  My core competencies include: full-stack web development, new
                  (software) product development, agile coaching and training,
                  development team building, collaborating, and demonstrating
                  empathy.
                </p>
                <p>
                  I'm rooted in the charming community of Mechanicsville, VA,
                  where I share life's adventures with my lovely wife and our
                  amazing son. In my journey through technology and business, I
                  bring a unique blend of old-school vibes and forward-thinking
                  strategies.
                </p>
                <p>
                  Beyond the desk, you'll often find me on the pickleball court,
                  honing my skills and enjoying the game at least four times a
                  week around RVA. I’m also avid Steelers fan who lives and
                  breathes the black and gold. My favorite PC video game of all
                  time is a the timeless classic: Thief - The Dark Project and
                  continue to play fan made missions to this day.
                </p>
              </section>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homecard;
