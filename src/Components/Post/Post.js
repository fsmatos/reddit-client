import React, {useState} from "react";
import './Post.css';
import { Vote } from "../Vote/Vote";
import { subredditsSelector } from "../../Features/allSubreddits/allSubredditsSlice";
import { useSelector } from "react-redux";
import reddit from "../../Assets/reddit-logo-16.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { Comments } from "../Comments/Comments";

export const Post = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const {author, title, sub, score, numOfComments, subredditId, image, link, comments, time} = props;
  const { subreddits } = useSelector(subredditsSelector);

  
  //Time conversion + how long is the post published
  const postDate = new Date(time*1000);
  const postLocaleTimeString =  postDate.toLocaleTimeString([], {hour: '2-digit'});

  const now = new Date();
  let hour = now.getHours();

  const postTime = hour -  postLocaleTimeString;

  //Manage profile pictures
  let objectSubreddit = {};
  subreddits.map((subreddit) =>  {
      objectSubreddit = {
          ...objectSubreddit,
          [`${[subreddit.data.id]}`] : subreddit.data.icon_img
      }
    });

    const [color, setColor] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(false);
    
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

  return (
    <div className="post-container">
        <div className="individual-post">
            <div className="post-text">
                <div className="post-author">
                    <div><img className="post-subreddit-image" src={objectSubreddit[subredditId]===""||objectSubreddit[subredditId]===undefined?reddit:objectSubreddit[subredditId]}/></div>
                    <div className="post-subreddit-info">
                        <h3 className="post-on-subreddit">{sub}</h3>
                        <p className="post-by">{author}</p>
                    </div>
                </div>
                <div className="post-description">
                    <h2 className="post-title">{title}</h2>
                </div>
            </div>
            <div className="post-image">{/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image)?<img className="post-image-thumbnail" src={image}/>:<img style={{display:"none"}}/>}</div>
            <div className="post-share">
                <div className="post-time">
                    <p>{postTime} hours ago</p>
                </div>
                <div className="post-vote">
                    <Vote score={score}/>
                </div>
                <div className="post-comments" onClick={() => setShow(!show)}>
                    <div onMouseEnter={() => setBackgroundColor(!backgroundColor)} onMouseLeave={() => setBackgroundColor(!backgroundColor)} onClick={() => {setColor(!color)}} style={{color:newColor, backgroundColor:newBackgroundColor}} className="comment-button">
                        <FontAwesomeIcon className="comments-icon" icon={faComments} />
                        <a className="post-share-comments">{numOfComments}</a>
                    </div>
                </div>
            </div>
            {show?<div className="comment-container"><Comments link={link} comments={comments}/></div>:null}
        </div>
    </div>
  );
};