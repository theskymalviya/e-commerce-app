import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead row'>
          <h4>Brands </h4>
          <h4>Shops </h4>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box row' key={index}>
              <img src={value.cateImg} alt={value.cover} />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Catg