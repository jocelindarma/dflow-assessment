import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const Product = (props) => {
  const { id, name, price, imageUrl } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Rp {price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
