import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setWhere } from "../../Features/allPosts/allPostsSlice";
import './Subreddit.css';

export const Subreddit = (props) => {
  const dispatch = useDispatch();
  const {name, subs, icon, display_name_prefixed} = props;

  return (
    <div className="individual-subreddit">
        <Link className="subreddit-info" onClick={() => dispatch(setWhere(display_name_prefixed))} to={display_name_prefixed.replace("r/","")}>
            <div><img className="subreddit-image" src={icon} alt=""/></div>
            <div className="subreddit-text">
                <h3 className="subreddit-title">{name}</h3>
                <p className="subreddit-subs">{subs}</p>
            </div>
        </Link>
    </div>
  );
};
