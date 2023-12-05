import { configureStore } from "@reduxjs/toolkit";
import {storeReducer} from "./storeSlicer";


export const store = configureStore({
    reducer: {
        store: storeReducer
    }
})