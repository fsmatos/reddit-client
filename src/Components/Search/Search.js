import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postsSelector, setSearchTerm, setWhere } from "../../Features/allPosts/allPostsSlice";
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {where, searchTerm} = useSelector(postsSelector);
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const handleSearchInput = (e) => {
    e.preventDefault();
    setLocalSearchTerm(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(localSearchTerm))
    dispatch(setWhere(localSearchTerm))
    navigate(localSearchTerm)
  }

  useEffect(() => {
    if(localSearchTerm === "" && searchTerm === where) {
      navigate(-1)
    } 
  })
  

  return (
    <form className="search-container" onSubmit={onFormSubmit}>
        <input className="input" placeholder="Search" type="search" value={localSearchTerm} onChange={handleSearchInput}/>
        <Link to={localSearchTerm} onClick={() => {dispatch(setSearchTerm(localSearchTerm)); dispatch(setWhere(localSearchTerm))}} type="submit"><FontAwesomeIcon icon= {faMagnifyingGlass} className="magnifying-glass" /></Link>
    </form>
  );
};
