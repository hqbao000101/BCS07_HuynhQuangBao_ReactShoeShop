import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/productReducer";

export const store = configureStore({
  reducer: {
    project: (state = "EX3 - REACT - SHOESHOP", action) => {
      return state;
    },
    product: productReducer,
  },
});
