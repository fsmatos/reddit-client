import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  subredditsReducer  from "../Features/allSubreddits/allSubredditsSlice"
import postsReducer from "../Features/allPosts/allPostsSlice"

const rootReducer = combineReducers({
    subreddits: subredditsReducer,
    posts: postsReducer,
});

export const store = configureStore({ reducer: rootReducer });