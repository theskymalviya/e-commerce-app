import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Button
      onClick={onClick}
      className="arrowBtn next"
      size="small"
      sx={{
        color: "var(--theme-color)",
        border: "1px solid var(--theme-color)",
        minWidth: "initial",
        borderRadius: "50%",
        padding: "10px",
        "&:hover": {
          backgroundColor: "var(--theme-color)",
          color: "var(--white-text)",
        },
      }}
    >
      <ArrowForwardIosIcon />
    </Button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Button
      onClick={onClick}
      className="arrowBtn prev"
      size="small"
      sx={{
        color: "var(--theme-color)",
        border: "1px solid var(--theme-color)",
        minWidth: "initial",
        borderRadius: "50%",
        padding: "10px",
        "&:hover": {
          backgroundColor: "var(--theme-color)",
          color: "var(--white-text)",
        },
      }}
    >
      <ArrowBackIosNewIcon />
    </Button>
  );
};

const FlashCard = ({ productItems, addToCart }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((val, index) => {
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
                    <Button
                      onClick={() => addToCart(val)}
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
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
