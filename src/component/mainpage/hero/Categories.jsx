import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((val, index) => {
          return (
            <div className="box" key={index}>
              <img src={val.cateImg} alt={val.cateImg} />
              <span>{val.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
