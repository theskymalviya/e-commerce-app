import React from "react";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ CartItem }) => {
  return (
    <>
      <header className="header">
        <Head />
        <Search CartItem={CartItem} />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
