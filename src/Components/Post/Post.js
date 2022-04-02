import React, {useState} from "react";
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong, faUpLong, faComments } from '@fortawesome/free-solid-svg-icons'

export const Post = () => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(false);

  let newBackgroundColor;
  if (!backgroundColor) {
    newBackgroundColor = "#f2f2f2";
  } else {
    newBackgroundColor = "#D0D5D9";
  }

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
                    <div className="post-subreddit-image"></div>
                    <h3 className="post-on-subreddit">Subreddit Title</h3>
                    <p className="post-by">Posted by...</p>
                </div>
                <div className="post-description">
                    <h2 className="post-title">Title</h2>
                </div>
            </div>
            <div className="post-image"></div>
            <div className="post-share">
                <p>Time</p>
                <div className="post-vote">
                    <FontAwesomeIcon className="arrow" icon={faUpLong} />
                    <p className="classification-number">#number</p>
                    <FontAwesomeIcon className="arrow" icon={faDownLong} />
                </div>
                <div onMouseEnter={() => setBackgroundColor(!backgroundColor)} onMouseLeave={() => setBackgroundColor(!backgroundColor)} onClick={() => {setShow(!show); setColor(!color)}} style={{color:newColor, backgroundColor:newBackgroundColor}} className="post-comments">
                    <FontAwesomeIcon className="comments-icon" icon={faComments} />
                    <a className="post-share-comments">Comments</a>
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
            </div>
            <div className="post-image"></div>
            <div className="post-share">
                <p>Time</p>
                <div className="post-vote">
                    <FontAwesomeIcon className="arrow" icon={faUpLong} />
                    <p className="classification-number">#number</p>
                    <FontAwesomeIcon className="arrow" icon={faDownLong} />
                </div>
                <div onMouseEnter={() => setBackgroundColor(!backgroundColor)} onMouseLeave={() => setBackgroundColor(!backgroundColor)} onClick={() => {setShow(!show); setColor(!color)}} style={{color:newColor, backgroundColor:newBackgroundColor}} className="post-comments">
                    <FontAwesomeIcon className="comments-icon" icon={faComments} />
                    <a className="post-share-comments">Comments</a>
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