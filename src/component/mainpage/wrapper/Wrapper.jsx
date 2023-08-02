import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RecommendIcon from "@mui/icons-material/Recommend";
import { IconButton } from "@mui/material";

const Wrapper = () => {
  const data = [
    {
      cover: <LocalShippingIcon fontSize="inherit" />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <PaymentIcon fontSize="inherit" />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <RecommendIcon fontSize="inherit" />,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <SupportAgentIcon fontSize="inherit" />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ];
  return (
    <>
      <section className="wrapper sec-bg sec-padding">
        <div className="container row">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <IconButton
                    aria-label="cart"
                    size="large"
                    sx={{
                      backgroundColor: "var(--light-grey-bg)",
                      color: "var(--dark-text)",
                    }}
                  >
                    {val.cover}
                  </IconButton>
                </div>
                <p className="product-title">{val.title}</p>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
