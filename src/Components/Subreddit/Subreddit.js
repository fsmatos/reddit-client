import React from "react";
import './Subreddit.css';

export const Subreddit = () => {
  return (
    <div className="subreddit-container">
        <div className="featured-subreddits">
            <h2>FEATURED SUBREDDITS</h2>
        </div>
        <hr></hr>
        <ul className="subreddits-list">
            <li className="subreddit-page">
                <div className="subreddit-image"></div>
                <div className="subreddit-info">
                    <h3 className="subreddit-title">Subreddit Title</h3>
                    <p className="subreddit-subs">No. Subscribers</p>
                </div>
            </li>
            <li className="subreddit-page">
                <div className="subreddit-image"></div>
                <div className="subreddit-info">
                    <h3 className="subreddit-title">Subreddit Title</h3>
                    <p className="subreddit-subs">No. Subscribers</p>
                </div>
            </li>
            <li className="subreddit-page">
                <div className="subreddit-image"></div>
                <div className="subreddit-info">
                    <h3 className="subreddit-title">Subreddit Title</h3>
                    <p className="subreddit-subs">No. Subscribers</p>
                </div>
            </li>
            <li className="subreddit-page">
                <div className="subreddit-image"></div>
                <div className="subreddit-info">
                    <h3 className="subreddit-title">Subreddit Title</h3>
                    <p className="subreddit-subs">No. Subscribers</p>
                </div>
            </li>
            <li className="subreddit-page">
                <div className="subreddit-image"></div>
                <div className="subreddit-info">
                    <h3 className="subreddit-title">Subreddit Title</h3>
                    <p className="subreddit-subs">No. Subscribers</p>
                </div>
            </li>
            <li className="subreddit-page">
                <div className="subreddit-image"></div>
                <div className="subreddit-info">
                    <h3 className="subreddit-title">Subreddit Title</h3>
                    <p className="subreddit-subs">No. Subscribers</p>
                </div>
            </li>
            <li className="subreddit-page">
                <div className="subreddit-image"></div>
                <div className="subreddit-info">
                    <h3 className="subreddit-title">Subreddit Title</h3>
                    <p className="subreddit-subs">No. Subscribers</p>
                </div>
            </li>
        </ul>
    </div>
  );
};