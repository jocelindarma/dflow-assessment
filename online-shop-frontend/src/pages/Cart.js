import React, { useContext } from "react";
import { useSelector } from 'react-redux'
import { ShopContext } from "../context/ShopContext";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css"

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const products = useSelector(state => state.products)

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {products.map((product) => {
          console.log(product.id)
          return cartItems[product.id] !== 0? <CartItem data={product} /> : null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: Rp {totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <div className="checkout">
          <h1> Your Shopping Cart is Empty</h1>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
        </div>
      )}
    </div>
  );
};