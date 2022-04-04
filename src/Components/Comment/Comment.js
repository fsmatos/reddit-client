import React, {useState} from "react";
import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export const Comment = () => {
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
        <div onMouseEnter={() => setBackgroundColor(!backgroundColor)} onMouseLeave={() => setBackgroundColor(!backgroundColor)} onClick={() => {setColor(!color)}} style={{color:newColor, backgroundColor:newBackgroundColor}} className="comments-container">
            <FontAwesomeIcon className="comments-icon" icon={faComments} />
            <a className="post-share-comments">Comments</a>
        </div>
    );
}