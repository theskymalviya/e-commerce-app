import React from "react";
import FlashCard from "./FlashCard";
import BoltIcon from "@mui/icons-material/Bolt";

const FlashDeal = ({productItems, addToCart}) => {
  return (
    <>
      <section className="flashdeal sec-padding sec-bg">
        <div className="container">
          <div className="heading row">
            <BoltIcon sx={{color: "var(--theme-color)", marginRight:"10px"}}/>
            <h4>Flash Deal</h4>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeal;
