import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: false,
    subreddits: [],
};

// Slice
const subredditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        getSubreddits: state => {
            state.loading = true
        },
        getSubredditsSuccess: (state, { payload }) => {
            state.subreddits = payload
            state.loading = false
            state.hasErrors = false
        },
        getSubredditsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

// Selector
export const subredditsSelector = state => state.subreddits

// Actions
export const { getSubreddits, getSubredditsSuccess, getSubredditsFailure } = subredditsSlice.actions;

// Reducer
export default subredditsSlice.reducer

// Asynchronous thunk action
export function fetchSubreddits() {
    return async dispatch => {
        dispatch(getSubreddits())
        try {
            const response = await fetch('https://www.reddit.com/subreddits.json');
            const data = await response.json();
            dispatch(getSubredditsSuccess(data.data.children));
        } catch (error) {
            dispatch(getSubredditsFailure());
        }
    }
}