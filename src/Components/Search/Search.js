import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWhere } from "../../Features/allPosts/allPostsSlice";
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const handleSearchInput = (e) => {
    e.preventDefault();
    setLocalSearchTerm(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setWhere(`search.json?q=${localSearchTerm}`))
  }

  useEffect(() => {
    if(localSearchTerm === "") {
      dispatch(setWhere(`r/all/.json`))
    } 
  })
  

  return (
    <form className="search-container" onSubmit={onFormSubmit}>
        <input className="input" placeholder="Search" type="search" value={localSearchTerm} onChange={handleSearchInput}/>
        <FontAwesomeIcon onClick={() => dispatch(setWhere(`search.json?q=${localSearchTerm}`))} icon= {faMagnifyingGlass} className="magnifying-glass" />
    </form>
  );
};
