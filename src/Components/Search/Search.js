import React from "react";
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Search = () => {
  return (
    <div className="search-container">
        <input className="input" placeholder="Search"/>
        <FontAwesomeIcon icon= {faMagnifyingGlass} className="magnifying-glass"/>
    </div>
  );
};
