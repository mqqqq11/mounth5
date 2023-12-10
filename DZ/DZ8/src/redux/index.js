import { configureStore } from "@reduxjs/toolkit";

import {PostsReducer} from './PostsSlice'
import { AddReducer } from "./AddSlice";
import { EditReducer } from "./EditSlice";


export const store = configureStore({
    reducer: {
        posts: PostsReducer,
        addPosts: AddReducer,
        editPosts: EditReducer
    }
})