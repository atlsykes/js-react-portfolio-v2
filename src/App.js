import "./App.css";
import Home from "./Containers/home/home";
import Footer from "./Components/footer/footer";
import Bio from "./Containers/bio/bio";
import Portfolio from "./Containers/portfolio/portfolio";
import Recipes from "./Containers/recipes/recipes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Navbar has to be integrated at the card level due to it's vertical nature, but Footer can be integrated here

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
      <div className="row">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
