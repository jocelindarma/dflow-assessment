import React from "react";
import { PRODUCTS } from "../sampledata";
import { Product } from "./Product";
import "./Shop.css"

export const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
