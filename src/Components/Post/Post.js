import React from "react";
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong, faUpLong, faComments } from '@fortawesome/free-solid-svg-icons'

export const Post = () => {
  return (
    <div className="post-container">
        <div className="individual-post">
            <div className="post-text">
                <div className="post-author">
                    <div className="post-subreddit-image"></div>
                    <h3 className="post-on-subreddit">Subreddit Title</h3>
                    <p className="post-by">Posted by...</p>
                </div>
                <div className="post-description">
                    <h2 className="post-title">Title</h2>
                </div>
                <div className="post-share">
                    <p>Time</p>
                    <div className="post-vote">
                        <FontAwesomeIcon className="arrow" icon={faUpLong} />
                        <h2 className="classification-number">#number</h2>
                        <FontAwesomeIcon className="arrow" icon={faDownLong} />
                    </div>
                    <div className="post-comments">
                        <FontAwesomeIcon className="comments-icon" icon={faComments} />
                        <a className="post-share-comments">Comments</a>
                    </div>
                </div>
            </div>
            <div className="post-image"></div>
        </div>
    </div>
  );
};