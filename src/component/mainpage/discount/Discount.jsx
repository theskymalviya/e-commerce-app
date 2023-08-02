import React from "react";
import Dcard from "./Dcard";

const Discount = () => {
  return (
    <>
      <section className="Discount sec-padding sec-bg">
        <div className="container">
          <div className="heading row">
            <div className="heading-left row  ">
              <img
                src="https://img.icons8.com/windows/32/fa314a/gift.png"
                alt="gft"
              />
              <h4>Big Discounts</h4>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  );
};

export default Discount;
