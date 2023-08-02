import React from "react";
import TopCart from "./TopCart";
import CategoryIcon from "@mui/icons-material/Category";

const TopCat = () => {
  return (
    <>
      <section className="TopCate sec-padding sec-bg">
        <div className="container">
          <div className="heading row">
            <div className="heading-left row">
              <CategoryIcon
                sx={{ color: "var(--theme-color)", marginRight: "10px" }}
              />
              <h4>Top Categories</h4>
            </div>
            <div className="heading-right">
              <span>View all</span>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCat;
