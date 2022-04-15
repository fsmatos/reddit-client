import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    posts: [],
}

const postsSlices = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPosts: state => {
            state.loading = true
        },
        getPostsSuccess: (state, {payload}) => {
            payload.map(post => state.posts = [
                ...state.posts,
                post = {
                    id: post.data.id,
                    title:post.data.title,
                    author:post.data.author,
                    score:post.data.score,
                    created_utc:post.data.created_utc,
                    subreddit_name_prefixed:post.data.subreddit_name_prefixed,
                    subreddit_id: post.data.subreddit_id.replace("t5_",""),
                    url_overridden_by_dest:post.data.url_overridden_by_dest,
                    permalink:post.data.permalink,
                    number_of_comments:post.data.num_comments,
                    comments: [],
                }
            ])
            state.loading = false
            state.hasErrors = false
        },
        getPostsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        getComments: (state, {payload}) => {
            const parent_id = payload[0].data.parent_id.replace("t3_","");
            state.posts.map(post => {
                if(post.id === parent_id) {
                    post.comments = payload.map(comment => comment = {
                        id: comment.data.id,
                        author: comment.data.author,
                        body: comment.data.body,
                        created_utc: comment.data.created_utc,
                        parent_id: comment.data.parent_id,
                        subreddit: comment.data.subreddit,
                        subreddit_id: comment.data.subreddit_id
                    })
                }
            })
        }
    },
});

export const { getPosts, getPostsSuccess, getPostsFailure, getComments } = postsSlices.actions
export const postsSelector = state => state.posts
export default postsSlices.reducer

export function fetchPosts() {
    return async dispatch => {
        dispatch(getPosts())
        try {
            const response = await fetch('https://www.reddit.com/r/popular/.json')
            const data = await response.json()
            dispatch(getPostsSuccess(data.data.children))
        } catch(error) {
            dispatch(getPostsFailure())
        }
    }
}

export function fetchComments(link) {
    return async dispatch => {
        const response = await fetch(link)
        const data = await response.json()
        dispatch(getComments(data[1].data.children))
    }
}
