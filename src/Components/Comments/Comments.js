import React, {useState, useEffect} from "react";
import './Comments.css';
import { useDispatch } from "react-redux";
import { fetchComments } from "../../Features/allPosts/allPostsSlice";

export const Comments = (props) => {
    const dispatch = useDispatch();
    const {link, comments} = props;
    const [showMore, setShowMore] = useState(false);
    const [color, setColor] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(false);

    //Time conversion + how long is the post published
    const getCommentTime = (time) => {
        const commentDate = new Date(time*1000);
        const commentLocaleTimeString =  commentDate.toLocaleTimeString([], {hour: '2-digit'});

        const now = new Date();
        let hour = now.getHours();

        return hour -  commentLocaleTimeString
    }

    //Control how many comments show up
    const commentsFirstHalf = comments.slice(0, comments.length/2);
    const commentsSecondHalf = comments.slice(comments.length/2, comments.length-1);

    const showAllComments = () => {
        if(showMore) {
            return (
                <div className="comments-show">
                    <ul>
                        {commentsFirstHalf.map(comment => 
                            <li className="individual-comment">
                                <div className="author-comment-info">
                                    <h3 className="author-comment-name">{comment.author}</h3>
                                    <p>{comment.body}</p>
                                </div>
                                <p className="comment-time">{getCommentTime(comment.created_utc)} hours ago</p>
                            </li>
                        )}
                        {(commentsSecondHalf).map(commentSecond => 
                            <li className="individual-comment">
                                <div className="author-comment-info">
                                    <h3 className="author-comment-name">{commentSecond.author}</h3>
                                    <p>{commentSecond.body}</p>
                                </div>
                                <p className="comment-time">{getCommentTime(commentSecond.created_utc)} hours ago</p>
                            </li>    
                        )}
                    </ul>
                    <button onClick={() => setShowMore(!showMore)} className="show-more-button">Show Less</button>
                </div>
            )
            setShowMore(false)
        } else {
            return (
                <div className="comments-show">
                    <ul>
                        {commentsFirstHalf.map(comment => 
                            <li className="individual-comment">
                                <div className="author-comment-info">
                                    <h3 className="author-comment-name">{comment.author}</h3>
                                    <p>{comment.body}</p>
                                </div>
                                <p className="comment-time">{getCommentTime(comment.created_utc)} hours ago</p>
                            </li>
                        )}
                    </ul>
                    <button onClick={() => setShowMore(!showMore)} className="show-more-button">Show More</button>
                </div>
            )
        }
    }
    
    //Manage comments hover color 
    let newBackgroundColor;
    if (!backgroundColor) {
      newBackgroundColor = "#f2f2f2";
    } else {
      newBackgroundColor = "#D0D5D9";
    }
  
    //Manage comments color when clicked
    let newColor;
    if (!color) {
        newColor = "#575759";
    } else {
        newColor = "#F23005";
    }
    
    useEffect(() => {
        dispatch(fetchComments(`https://www.reddit.com/${link}.json`))
    },[dispatch]);

    return (
        showAllComments()
    );
}