import React from "react";
import Portfoliocard from "../../Components/card/portfolio-card";
import Navbar from "../../Components/navbar/navbar";
import projects from "../../projects.json";
import PitfallGameImage from "../../Assets/Images/Pitfall-Tout_A.png";
const project = projects.elements;

const portfolio = () => {
  // const [cardData, setCardData] = useState([]);
  return (
    <div>
      <div class="container-flex">
        <div className="row">
          <div className="col-3">
            <Navbar />
          </div>
          <div className="col-md-9">
            <div className="card-gallery">
              {/*dynamically render cards with projects.json data*/}
              {project.map((proj) => (
                <Portfoliocard
                  key={proj.id}
                  title={proj.title}
                  image={proj.image}
                  description={proj.description}
                  GH={proj.GH}
                  deploy={proj.deploy}
                />
              ))}
            </div>
          </div>
          <div className="row">
            <img
              src={PitfallGameImage}
              height="300"
              class="img-fluid"
              alt="Pitfall video game screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
