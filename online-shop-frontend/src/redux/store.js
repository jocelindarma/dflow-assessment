import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducer';

export default configureStore({
  reducer: {
    products: productsReducer,
  }
})