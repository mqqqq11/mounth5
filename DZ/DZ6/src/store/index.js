import { configureStore } from "@reduxjs/toolkit";

import { productsReducer } from "./productsSlice";
import { countReducer } from "./count";


export const store = configureStore({
    reducer: {
        products: productsReducer,
        count: countReducer
    },
})