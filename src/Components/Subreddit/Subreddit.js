import React, {useState} from "react";
import './Subreddit.css';


export const Subreddit = (props) => {
  const {id, name, subs, icon} = props;

  return (
    <div className="individual-subreddit">
        <div className="subreddit-info">
            <div><img className="subreddit-image" src={icon} alt=""/></div>
            <div className="subreddit-text">
                <h3 className="subreddit-title">{name}</h3>
                <p className="subreddit-subs">{subs}</p>
            </div>
        </div>
    </div>
  );
};
