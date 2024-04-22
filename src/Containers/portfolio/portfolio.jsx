import React from "react";
import Portfoliocard from "../../Components/card/portfolio-card";
import Navbar from "../../Components/navbar/navbar";
import projects from "../../projects.json";
const project = projects.elements;

const portfolio = () => {
  // const [cardData, setCardData] = useState([]);
  return (
    <div>
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
        <div className="col-md-10">
          <div className="container">
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
        </div>
      </div>
    </div>
  );
};

export default portfolio;
