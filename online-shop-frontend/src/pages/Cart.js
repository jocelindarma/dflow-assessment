import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { PRODUCTS } from "../sampledata";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css"

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: Rp {totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
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
          <button onClick={() => navigate("/")}> Continue Shopping </button>
        </div>
      )}
    </div>
  );
};