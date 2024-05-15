import React from "react";
import "./cards.css";
import Navbar from "../navbar/navbar";
import JASNASphoto from "../../Assets/Images/JAS-NAS-8bit-photo.png";
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
                alt="8-bit of Justin and son Nathan"
                class="d-none d-sm-block"
              />
            </div>
          </div>
          <div class="col-sm-9">
            <img
              src={JASNASphoto}
              alt="Thief video game box art"
              ALIGN="right"
              class="d-none d-sm-block"
            />
            <span className="press-start-2p-regular">
              <h1>
                <p>Hey there, fellow 80s aficionados!</p>
                <p>
                  I'm rooted in the charming community of Mechanicsville, VA,
                  where I share life's adventures with my lovely wife and our
                  amazing son. In my journey through technology and business, I
                  bring a unique blend of old-school vibes and forward-thinking
                  strategies.
                </p>
                <p>
                  <i>Full-Stack Web Developer</i>
                  <br />
                  With a Master of Science degree in Technology Management and a
                  wealth of experience coaching agile teams, my path has been a
                  mix of innovation and growth. In the professional arena, I
                  wield the skills of a full stack web developer, specializing
                  in the MERN technology stack. Whether it's crafting seamless
                  user experiences or fine-tuning backend performance, I thrive
                  on the challenges and rewards of building robust web
                  applications from the ground up.
                </p>
                <p>
                  I am also adept at agile development team building,
                  collaborating, and demonstrating empathy. I have been
                  recognized among team members and co-workers as being
                  empathetic, supportive, flexible, articulate, and detail
                  oriented.
                </p>
                <p>
                  Beyond the desk, you'll often find me on the pickleball court,
                  honing my skills and enjoying the game at least four times a
                  week around RVA. I’m also avid Steelers fan who lives and
                  breathes the black and gold. My favorite video game of all
                  time is a the timeless classic: Thief - The Dark Project and
                  continue to play fan made missions to this day.
                </p>
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homecard;
