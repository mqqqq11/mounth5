import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await axios.get('https://dummyjson.com/posts')
        return response.data
    }
)

const PostsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsMassive: [],
        loading: false,
        error: null
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    },
    extraReducers: (buldier) => {
        buldier.addCase(fetchPosts.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.postsMassive = action.payload
            state.loading = false
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const PostsActions = PostsSlice.actions
export const PostsReducer = PostsSlice.reducer