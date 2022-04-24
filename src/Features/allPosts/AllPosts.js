import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './AllPosts.css';
import { useDispatch, useSelector } from "react-redux";
import { resetPosts, fetchPosts, postsSelector } from "./allPostsSlice";
import { Post } from "../../Components/Post/Post";

export const AllPosts = (props) => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { posts, loading, hasErrors, searchTerm } = useSelector(postsSelector);

    // Dispatch thunk when component first mounts
    useEffect(() => {
        dispatch(resetPosts());
        if(id==='hot' || id==='rising' || id==='top' || id==='new') {
            dispatch(fetchPosts(id+"/.json"))
        } else if(id === searchTerm){
            dispatch(fetchPosts(`search.json?q=${id}`))
        } else if(!id) {
            dispatch(fetchPosts(`r/all/.json`))
        } else {
            dispatch(fetchPosts(`r/${id}/.json`))
        }
    },[searchTerm,id]);

    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Cannot display posts...</p>
    }

    return (
        <div>
            {renderPosts()}
            {posts.map((post, key) => 
                <Post key={key} link={post.permalink} author={post.author} title={post.title} sub={post.subreddit_name_prefixed} score={post.score} numOfComments={post.number_of_comments}  subredditId = {post.subreddit_id} image={post.url_overridden_by_dest} comments={post.comments} time={post.created_utc}/>
            )}
        </div>
    )
}