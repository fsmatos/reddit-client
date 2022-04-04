import React, {useState} from "react";
import './Post.css';
import { Vote } from "../Vote/Vote";
import { Comment } from "../Comment/Comment";

export const Post = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="post-container">
        <div className="individual-post">
            <div className="post-text">
                <div className="post-author">
                    <div className="post-subreddit-image"></div>
                    <div className="post-subreddit-info">
                        <h3 className="post-on-subreddit">Subreddit Title</h3>
                        <p className="post-by">Posted by...</p>
                    </div>
                </div>
                <div className="post-description">
                    <h2 className="post-title">Title</h2>
                </div>
            </div>
            <div className="post-image"></div>
            <div className="post-share">
                <p>Time</p>
                <div className="post-vote">
                  <Vote />
                </div>
                <div className="post-comments" onClick={() => setShow(!show)}>
                    <Comment />
                </div>
            </div>
            {show? <div className="comment-container">
                        <ul className="comment-list">
                            <li className="individual-comment">
                                <div class="author-comment-image"></div>
                                <div class="author-comment-info">
                                    <h3 className="author-comment-name">Author</h3>
                                    <p>Comment</p>
                                </div>
                                <div class="author-comment-time">
                                    <p>Time</p>
                                </div>
                            </li>
                            <li className="individual-comment">
                                <div class="author-comment-image"></div>
                                <div class="author-comment-info">
                                    <h3 className="author-comment-name">Author</h3>
                                    <p>Comment</p>
                                </div>
                                <div class="author-comment-time">
                                    <p>Time</p>
                                </div>
                            </li>
                            <li className="individual-comment">
                                <div class="author-comment-image"></div>
                                <div class="author-comment-info">
                                    <h3 className="author-comment-name">Author</h3>
                                    <p>Comment</p>
                                </div>
                                <div class="author-comment-time">
                                    <p>Time</p>
                                </div>
                            </li>
                        </ul>
                    </div> : null}
        </div>
    </div>
  );
};