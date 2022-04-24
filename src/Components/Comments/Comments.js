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

    //Manage time of comments
    const commentsTime = (time) => {
    const commentUTC = time;
    const todayUTC = Math.round(new Date().getTime()/1000);
    const dif = todayUTC - commentUTC;

    if(dif <= 59) {
        return (`${dif} seconds ago`);
    } else if(dif >= 60 && dif <= 3599) {
        return (`${Math.round(dif / 60)} minutes ago`);
    } else if(dif >= 3600 && dif <= 86399) {
        return (`${Math.round((dif / 60) / 60)} hours ago`);
    } else if(dif >= 86400) {
        return (`${Math.round(((dif/60)/60)/24)} days ago`);
    }
  }

    //Control how many comments show up
    const commentsFirstHalf = comments.slice(0, comments.length/2);
    const commentsSecondHalf = comments.slice(comments.length/2, comments.length-1);

    const showAllComments = () => {
        if(showMore) {
            return (
                <div className="comments-show">
                    <ul>
                        {commentsFirstHalf.map((comment, key) => 
                            <li key={key} className="individual-comment">
                                <div className="author-comment-info">
                                    <h3 className="author-comment-name">{comment.author}</h3>
                                    <p>{comment.body}</p>
                                </div>
                                <p className="comment-time">{commentsTime(comment.created_utc)}</p>
                            </li>
                        )}
                        {(commentsSecondHalf).map(commentSecond => 
                            <li className="individual-comment">
                                <div className="author-comment-info">
                                    <h3 className="author-comment-name">{commentSecond.author}</h3>
                                    <p>{commentSecond.body}</p>
                                </div>
                                <p className="comment-time">{commentsTime(commentSecond.created_utc)}</p>
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
                        {commentsFirstHalf.map((comment, key) => 
                            <li key={key} className="individual-comment">
                                <div className="author-comment-info">
                                    <h3 className="author-comment-name">{comment.author}</h3>
                                    <p>{comment.body}</p>
                                </div>
                                <p className="comment-time">{commentsTime(comment.created_utc)}</p>
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