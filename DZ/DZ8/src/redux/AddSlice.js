import { createSlice, nanoid } from "@reduxjs/toolkit";

const AddSlice = createSlice({
    name: 'add',
    initialState: {
        items: []
    },
    reducers: {
        setAdd: (state, action) => {
            state.items.push({
                id: nanoid(), 
                name: action.payload
            })
        }
    }
})

export const AddActions = AddSlice.actions
export const AddReducer = AddSlice.reducer