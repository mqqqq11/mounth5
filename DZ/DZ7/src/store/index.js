import { configureStore } from "@reduxjs/toolkit";
import {storeReducer} from "./storeSlicer";
import { basketReducer } from "./basketSlicer";


export const store = configureStore({
    reducer: {
        store: storeReducer,
        basket: basketReducer
    }
})