import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <section className="cart-items">
        <div className="container row">
          <div className="cart-details">
            {CartItem.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}

            {CartItem.map((item, index) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product row" key={index}>
                  <div className="img">
                    <img src={item.cover} alt={item.cover} />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
    
                    <div className="cartControl row">
                      <Button
                        onClick={() => addToCart(item)}
                        sx={{
                          border: "1px solid var(--theme-color)",
                          minWidth: "initial",
                          padding: "initial",
                          color: "var(--theme-color)",
                          "&:hover": {
                            backgroundColor: "var(--theme-color)",
                            color: "#fff",
                          },
                        }}
                      >
                        <AddIcon />
                      </Button>
                      <Button
                        onClick={() => decreaseQty(item)}
                        sx={{
                          border: "1px solid var(--theme-color)",
                          minWidth: "initial",
                          padding: "initial",
                          color: "var(--theme-color)",
                          "&:hover": {
                            backgroundColor: "var(--theme-color)",
                            color: "#fff",
                          },
                        }}
                      >
                        <RemoveIcon />
                      </Button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
