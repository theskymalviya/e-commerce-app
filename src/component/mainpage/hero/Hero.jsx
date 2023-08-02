import React from "react";
import Categories from "./Categories";
import Slider from "./Slider";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <Categories />
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
