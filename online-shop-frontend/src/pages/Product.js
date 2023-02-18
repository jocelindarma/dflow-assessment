import React from 'react'

export const Product = (props) => {
  const { id, name, price } = props.data;
  return (
    <div className="product">
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Rp {price}</p>
      </div>
      <button className="addToCartBtn">Add to Cart</button>
    </div>
  )
}
