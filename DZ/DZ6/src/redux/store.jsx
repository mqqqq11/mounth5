import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './slices/ProductsSlice.jsx'
import { BasketReducer } from './slices/BasketSlice.jsx'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        basket: BasketReducer,
    }
})