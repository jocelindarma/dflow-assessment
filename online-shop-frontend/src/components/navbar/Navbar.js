import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/shop"> DFLOW Indonesia Online Shop </Link>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
};
