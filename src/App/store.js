import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  subredditsReducer  from "../Features/allSubreddits/allSubredditsSlice"

const rootReducer = combineReducers({
    subreddits: subredditsReducer,
});

export const store = configureStore({ reducer: rootReducer });