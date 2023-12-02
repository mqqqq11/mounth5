import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: {
        count: 0
    },
    reducers: {
        countIncrement(state) {
            state.count += 1
        }
    }
});

export const countActions = countSlice.actions
export const countReducer = countSlice.reducer