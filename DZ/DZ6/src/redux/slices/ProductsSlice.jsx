import { createSlice } from '@reduxjs/toolkit'
import productsData from '../../json/data.json'

const initialState = {
    productsArray: [...productsData]
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {

    }
})

export const productsAction = productsSlice.actions
export const productsReducer = productsSlice.reducer