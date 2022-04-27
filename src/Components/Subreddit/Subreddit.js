import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWhere, postsSelector } from "../../Features/allPosts/allPostsSlice";
import './Subreddit.css';

export const Subreddit = (props) => {
  const dispatch = useDispatch();
  const {where} = useSelector(postsSelector);
  const {name, subs, icon, display_name_prefixed} = props;

  let newColor;
  if(where === `${display_name_prefixed}/.json`) {
    newColor = "#D0D5D9";
  } else {
    newColor = "#f2f2f2";
  }

  return (
    <div onClick={() => dispatch(setWhere(`${display_name_prefixed}/.json`))} className="individual-subreddit">
        <div className={where===`${display_name_prefixed}/.json`?'subreddit-info active-subreddit':'subreddit-info'}>
            <div><img className="subreddit-image" src={icon} alt=""/></div>
            <div className="subreddit-text">
                <h3 className="subreddit-title">{name}</h3>
                <p className="subreddit-subs">{subs}</p>
            </div>
        </div>
    </div>
  );
};
