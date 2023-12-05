
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchStore = createAsyncThunk(
    "store/fetchStore",
    async () => {
        const response = await axios.get('https://dummyjson.com/products')
        return response.data
    }
)

const storeSlice = createSlice({
    name: 'store',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {
        setStore (state, action) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStore.pending, (state) => {
            state.error = null
            state.loading = true
        })
        builder.addCase(fetchStore.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload
        })
        builder.addCase(fetchStore.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const storeActions = storeSlice.actions
export const storeReducer = storeSlice.reducer