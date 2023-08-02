import React, { useRef, useState, useEffect } from "react";
import { Button, IconButton } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menu = useRef();
 

  useEffect(() => {
    if (menu.current) {
      const handleClick = (e) => {
        if (
          menu.current.classList.contains("active") &&
          e.target.classList.contains("nav-link")
        ) {
          setShowMenu(false);
        }
      };

      menu.current.addEventListener("click", handleClick);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="row">
            <div className="categories">
              <Button
                startIcon={<CategoryIcon />}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  backgroundColor: "#f6f9fc",
                  color: "#000",
                  textTransform: "capitalize",
                  padding: "15px 30px",
                  fontSize: "var(--fs-lg)",
                  fontWeight: "600",
                }}
              >
                Categories
              </Button>
            </div>
            <nav className="navlink">
              <IconButton
                aria-label="search"
                className={showMenu ? "hide" : "menubtn"}
                size="large"
                onClick={() => toggleMenu(!showMenu)}
                sx={{
                  color: "var(--theme-color)",
                }}
              >
                <MenuIcon fontSize="inherit" />
              </IconButton>
              <ul
                className={showMenu ? "menu row active" : "menu row"}
                ref={menu}
              >
                <IconButton
                  aria-label="search"
                  className="closebtn"
                  size="large"
                  onClick={() => toggleMenu(!showMenu)}
                  sx={{
                    color: "var(--theme-color)",
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
                <li>
                  <NavLink to="/" className="nav-link ">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pages" className="nav-link ">
                    Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/users" className="nav-link">
                    User Account
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/vendor" className="nav-link ">
                    Vender Account
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/track" className="nav-link ">
                    Track My Order
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-link ">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
