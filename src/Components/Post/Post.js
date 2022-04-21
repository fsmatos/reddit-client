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

  //Manage time of posts
  const postTime = (time) => {
    const postUTC = time;
    const todayUTC = Math.round(new Date().getTime()/1000);
    const dif = todayUTC - postUTC;

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

  //Manage profile pictures
  let objectSubreddit = {};
  subreddits.map((subreddit) =>  {
      objectSubreddit = {
          ...objectSubreddit,
          [`${[subreddit.id]}`] : subreddit.icon_img
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
            <div className="post-author">
                <img className="post-subreddit-image" src={objectSubreddit[subredditId]===""||objectSubreddit[subredditId]===undefined?reddit:objectSubreddit[subredditId]}></img>
                <div className="post-author-subreddit">
                    <h3 className="post-on-subreddit">{sub}</h3>
                    <p className="post-by">{author}</p>
                </div>
            </div>
            <div className="post-text">
                <h2 className="post-title">{title}</h2>
            </div>
            <div className="post-image">{/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image)?<img className="post-image-thumbnail" src={image}/>:<img style={{display:"none"}}/>}</div>
            <div className="post-rate">
                <p>{postTime(time)}</p>
                <Vote score={score}/>
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