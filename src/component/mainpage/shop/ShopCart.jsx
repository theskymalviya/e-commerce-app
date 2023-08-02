import React from "react"
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";

const ShopCart = ({ shopItems, addToCart }) => {

  return (
    <>
      {shopItems.map((val, index) => {
        return (
            <div className="box" key={index}>
            <div className="product">
              <div className="product-img">
                <span className="discount">{val.discount}% off</span>
                <img src={val.cover} alt={val.cover} />
                <div className="product-like">
                  <label>0</label>
                  <FavoriteBorderIcon />
                </div>
              </div>
              <div className="product-details">
                <p className="product-title">{val.name}</p>
                <div className="rate">
                  <StarRateIcon sx={{ color: "#ffcd4e" }} />
                  <StarRateIcon sx={{ color: "#ffcd4e" }} />
                  <StarRateIcon sx={{ color: "#ffcd4e" }} />
                  <StarRateIcon sx={{ color: "#ffcd4e" }} />
                  <StarRateIcon sx={{ color: "#ffcd4e" }} />
                </div>
                <div className="price">
                  <p className="product-price">{val.price}.00</p>
                  <Button onClick={() => addToCart(val)}
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
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart