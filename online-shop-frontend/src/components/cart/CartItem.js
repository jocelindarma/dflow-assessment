import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const CartItem = (props) => {
  const { id, name, price, imageUrl } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={imageUrl} alt={name} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: Rp {price}</p>
        <div className="counter">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
