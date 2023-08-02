import React from "react";
import Cart from "./Cart";

const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals sec-padding sec-bg">
        <div className="container">
          <div className="heading row">
            <div className="heading-left row">
              <img
                src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
                alt="newImage"
              />
              <h4>New Arrivals </h4>
            </div>
            <div className="heading-right">
              <span>View all</span>
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
