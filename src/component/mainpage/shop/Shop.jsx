import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";



const Shop = ({shopItems, addToCart }) => {
  return (
    <>
      <section className="shop sec-bg sec-padding">
        <div className="container">
          <div className="row">
            <Catg />
            <div className="shopSlide">
              <div className="heading row">
                <div className="heading-left row ">
                  <h4>Mobile Phones</h4>
                </div>
                <div className="heading-right row ">
                  <span>View all</span>
                 
                </div>
              </div>
              <div className="product-content">
                <ShopCart shopItems={shopItems} addToCart={addToCart}  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
