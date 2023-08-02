import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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

  const data = (val) => {
    return (
      <div className="box">
        <div className="product" key={val.id}>
          <div className="img">
            <img src={val.cover} width="100%" alt={val.cover} />
          </div>
          <p className="product-title">{val.name}</p>
          <span>{val.price}</span>
        </div>
      </div>
    );
  };
  return (
    <>
      <Slider {...settings}>{Ddata.map(data)}</Slider>
    </>
  );
};

export default Dcard;
