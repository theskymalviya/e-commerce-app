import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
  return (
    <>
      <div className='content row product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <p className="product-title">{val.name}</p>
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart