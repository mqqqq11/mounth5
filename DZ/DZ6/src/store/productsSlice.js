import { createSlice } from "@reduxjs/toolkit";

import data from "../data/products"

const productsSlice = createSlice({
    name: "products",
    initialState: {
      products: [],
    },
    reducers: {
      productsId(state, action) {
        const productId = action.payload;
        const productToAdd = data.find(
          (product) => product.id === productId
        )
        if (productToAdd) {
          state.products = [...state.products, productToAdd];
        }
      },
    },
  });
  
  export const productsActions = productsSlice.actions;
  export const productsReducer = productsSlice.reducer;