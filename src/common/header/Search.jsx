import React, {useEffect}from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Search = ({CartItem}) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let search = document.querySelector('.search');
      if (window.scrollY > 100) {
        search.classList.add("active");
      } else {
        search.classList.remove("active");
      }
    });
  }, []);

  return (
    <>
      <div className="search">
        <div className="container">
          <div className="row">
            <Link to="/" className="logo">4You</Link>
            <div className="search-box">
              <div className="srch-icon">
                <IconButton aria-label="search">
                  <SearchIcon fontSize="inherit" />
                </IconButton>
              </div>
              <input type="text" name="search" placeholder="What do you want.." />
              <div className="srch-cate">All Category</div>
            </div>
            <div className="icons row">
              <div className="user">
                <Tooltip title="User">
                  <IconButton
                    aria-label="user"
                    size="large"
                    sx={{
                      backgroundColor: "#f6f9fc",
                      color: "#000",
                    }}
                  >
                    <PersonIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              </div>
              <Link to="/cart" className="cart">
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    size="large"
                    sx={{
                      backgroundColor: "#f6f9fc",
                      color: "#000",
                    }}
                  >
                    <ShoppingCartIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <span className="cartnum">{CartItem.length === 0 ? "0" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
