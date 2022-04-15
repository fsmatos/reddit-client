import React, { useEffect } from "react";
import './AllPosts.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "./allPostsSlice";
import { Post } from "../../Components/Post/Post";
import reddit from '../../Assets/reddit-logo-16.png'

export const AllPosts = () => {
    const dispatch = useDispatch();
    const { posts, loading, hasErrors } = useSelector(postsSelector);

    // Dispatch thunk when component first mounts
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Cannot display posts...</p>
    }

    return (
        <div>
            {renderPosts()}
            {posts.map((post) => 
                <Post link={post.permalink} author={post.author} title={post.title} sub={post.subreddit_name_prefixed} score={post.score} numOfComments={post.number_of_comments}  subredditId = {post.subreddit_id} image={post.url_overridden_by_dest} comments={post.comments} time={new Date(post.created_utc)}/>
            )}
        </div>
    )
}