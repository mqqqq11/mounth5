import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basketArray: []
}

const BasketSlice = createSlice({
    name: 'BasketSlice',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            console.log(action.payload)
            state.basketArray.push(action.payload)
        },
        removeFromBasket: (state, action) => {
            state.basketArray = state.basketArray.filter (
                (item) => item.id !== action.payload
            )
        },
        editBasketItem: (state, action) => {
            const itemIndex = state.basketArray.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex !== -1) {
                state.basketArray[itemIndex].count = action.payload.count
            }
        },
    }
})

export const BasketAction = BasketSlice.actions
export const BasketReducer = BasketSlice.reducer