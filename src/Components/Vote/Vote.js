import React, {useState} from "react";
import './Vote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

export const Vote = (props) => {
  const {score} = props;
  const [vote, setVote] = useState(score);
  //Manage like and dislike colors on number of votes
  let colorVoteUp;
  let colorVoteDown;
  let colorVote; 

  if (vote === score) {
      colorVote = "#575759"
      colorVoteUp = "#575759"
      colorVoteDown = "#575759";
  } else if (vote === (score+1)) {
      colorVote = "#7AE582"
      colorVoteUp = "#7AE582";
      colorVoteDown = "#575759";
  } else if (vote === (score-1)) {
      colorVote = "#D90429"
      colorVoteUp = "#575759";
      colorVoteDown = "#D90429";
  } else {
      setVote(vote);
  }
    return (
        <div className="vote-container">
            <FontAwesomeIcon style={{color:colorVoteUp}} onClick={() => vote===score||vote===(score-1)?setVote(score+1):setVote(score)} className="arrow like" icon={faArrowUp} />
            <p style={{color:colorVote}} className="classification-number">{vote}</p>
            <FontAwesomeIcon style={{color:colorVoteDown}} onClick={() => vote===score||vote===(score+1)?setVote(score-1):setVote(score)}  className="arrow dislike" icon={faArrowDown} />
        </div>
    )
}
