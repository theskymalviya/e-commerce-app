import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
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
        {Tdata.map((val, index) => {
          return (
            <div className="box">
              <div className="product" key={index}>
                <div className="nametop d_flex">
                  <span className="tleft">{val.para}</span>
                  <span className="tright">{val.desc}</span>
                </div>
                <div className="img">
                  <img src={val.cover} alt={val.cover} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
