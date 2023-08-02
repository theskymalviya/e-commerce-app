import React from "react";
import Sdata from "./Sdata";
import { Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slidecard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((val, index) => {
          return (
            <div className="slide"  key={index}>
              <div className="left">
                <h1>{val.title}</h1>
                <p>{val.desc}</p>
                <Button
                  sx={{
                    backgroundColor: "var(--theme-color)",
                    color: "#fff",
                    textTransform: "capitalize",
                    padding: "5px 15px",
                    "&:hover": {
                      backgroundColor: "var(--theme-color)", // Define the hover background color
                      color: "#fff",
                    },
                  }}
                >
                  Visit Collection
                </Button>
              </div>
              <div className="right">
                <img src={val.cover} alt={val.cover} />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Slidecard;
