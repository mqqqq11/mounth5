import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk(
  'edit/fetchPosts',
  async() => {
    const response = await axios.get('https://dummyjson.com/posts')
    return response.data
  }
)

export const fetchEditPosts = createAsyncThunk(
  'edit/fetchEditPosts',
  async({postId, newPost}) => {
    const response = await axios.post(`https://dummyjson.com/posts/${postId}`, {title: newPost})
    return response.data
  }
)

const EditSlice = createSlice({
  name:'edit',
  initialState: {
    editPostsMassive: [],
    loading: false,
    error: null
  },
  reducers: {
    setPosts: (state, actions) => {
      state.editPostsMassive = actions.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.editPostsMassive = action.payload
      state.loading = false
    })
    .addCase(fetchPosts.rejected, (state, actions) => {
      state.error = actions.error.message
    })
  }
})

export const EditActions = EditSlice.actions
export const EditReducer = EditSlice.reducer