import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './Search.css';
import { setSearchTerm } from "../../Features/allPosts/allPostsSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
  const [localSearchTerm, setLocalSearchTerm] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (localSearchTerm != '') {
      const termsArray = localSearchTerm.split(" ")
      const firstValue = termsArray.splice(0,1)
      const lastURLValue = termsArray.join("%20")
      dispatch(setSearchTerm(`search.json?q=${firstValue}+%20+${lastURLValue}`))
    } else {
      dispatch(setSearchTerm(''))
    }
    
  }

  return (
    <div className="search-container">
        <input className="input" placeholder="Search" onChange={event => {setLocalSearchTerm(event.target.value)}}/>
        <FontAwesomeIcon icon= {faMagnifyingGlass} className="magnifying-glass" onClick={handleSubmit}/>
    </div>
  );
};
