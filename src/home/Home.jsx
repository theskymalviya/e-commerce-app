import React from "react";
import Hero from "../component/mainpage/hero/Hero";
import FlashDeal from "../component/mainpage/flashDeal/FlashDeal";
import TopCat from "../component/mainpage/topcat/TopCat";
import NewArrivals from "../component/mainpage/newarrivals/NewArrivals";
import Discount from "../component/mainpage/discount/Discount";
import Shop from "../component/mainpage/shop/Shop";
import Annocument from "../component/mainpage/annocument/Annocument";
import Wrapper from "../component/mainpage/wrapper/Wrapper";

const Home = ({ productItems, addToCart, shopItems }) => {
  return (
    <>
      <Hero />
      <FlashDeal productItems={productItems} addToCart={addToCart} />
      <TopCat />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper /> 
    </>
  );
};

export default Home;
