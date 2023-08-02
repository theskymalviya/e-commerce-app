import "./App.css";
import { useState } from "react";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Home from "./home/Home";
import Contact from "./component/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sdata from "./component/Sdata";
import Data from "./component/Data";
import Cart from "./common/cart/Cart";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    console.log(product);

    const existingProduct = CartItem.find((item) => item.id === product.id);
  
    if (existingProduct) {
      setCartItem((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };
  

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header CartItem={CartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                productItems={productItems}
                addToCart={addToCart}
                shopItems={shopItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
