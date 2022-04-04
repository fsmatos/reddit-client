import React, {useState} from "react";
import './Vote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export const Vote = () => {
  const [vote, setVote] = useState(0);
  //Manage like and dislike colors on number of votes
  let colorVoteUp;
  let colorVoteDown;
  let colorVote; 

  if (vote === 0) {
      colorVote = "#575759"
      colorVoteUp = "#575759"
      colorVoteDown = "#575759";
  } else if (vote === 1) {
      colorVote = "#7AE582"
      colorVoteUp = "#7AE582";
      colorVoteDown = "#575759";
  } else if (vote === -1) {
      colorVote = "#D90429"
      colorVoteUp = "#575759";
      colorVoteDown = "#D90429";
  } else {
      setVote(0);
  }
    return (
        <div className="vote-container">
            <FontAwesomeIcon style={{color:colorVoteUp}} onClick={() => vote===0||vote===-1?setVote(1):setVote(0)} className="arrow like" icon={faArrowUp} />
            <p style={{color:colorVote}} className="classification-number">{vote}</p>
            <FontAwesomeIcon style={{color:colorVoteDown}} onClick={() => vote===0||vote===1?setVote(-1):setVote(0)}  className="arrow dislike" icon={faArrowDown} />
        </div>
    )
}
