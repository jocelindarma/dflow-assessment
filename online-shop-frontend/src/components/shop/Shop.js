import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { Product } from "./Product";
import { setProducts } from "../../redux/reducer";
import "./Shop.css";

export const Shop = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        dispatch(setProducts(response.data));      
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="shop">
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
