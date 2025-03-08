import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Industries from "./Components/Industries";
import MarketResearch from "./Components/MarketResearch";
import CaseStudies from "./Components/CaseStudies";
import Partners from "./Components/Partners";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Reviews from "./Components/Reviews";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Hero />
        <Reviews/>
        <Services />
        <Industries />
        <MarketResearch />
        <CaseStudies />
        <Partners />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;