import React, { useEffect } from "react";
import './AllSubreddits.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits, subredditsSelector } from "./allSubredditsSlice";
import { Subreddit } from "../../Components/Subreddit/Subreddit";
import reddit from "../../Assets/reddit-logo-16.png"

export const AllSubreddits = () => {
    const dispatch = useDispatch();
    const { subreddits, loading, hasErrors } = useSelector(subredditsSelector);

    // Dispatch thunk when component first mounts
    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [dispatch]);

    const renderSubreddits = () => {
        if (loading) return <p>Loading subreddits...</p>
        if (hasErrors) return <p>Cannot display subreddits...</p>
    }

    return (
        <div className="subreddit-container">
            <div className="featured-subreddits">
                <h2>FEATURED SUBREDDITS</h2>
            </div>
            <hr></hr>
            <ul className='subreddits-list'>
                {subreddits.map((subreddit) => 
                        <li className="subreddit-page"><Subreddit id={subreddit.data.id} name={subreddit.data.display_name_prefixed} subs={subreddit.data.subscribers} icon={subreddit.data.icon_img===""?reddit:subreddit.data.icon_img}/></li>
                    )}
            </ul>
        </div>
    )
}