import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Subreddit.css';


export const Subreddit = (props) => {
  const {id, name, subs, icon, title} = props;

  return (
    <div className="individual-subreddit">
        <Link className="subreddit-info" to={title}>
            <div><img className="subreddit-image" src={icon} alt=""/></div>
            <div className="subreddit-text">
                <h3 className="subreddit-title">{name}</h3>
                <p className="subreddit-subs">{subs}</p>
            </div>
        </Link>
    </div>
  );
};
