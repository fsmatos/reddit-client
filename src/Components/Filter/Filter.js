import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWhere, postsSelector } from "../../Features/allPosts/allPostsSlice";
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Filter = () => {
  const {where, filters} = useSelector(postsSelector);
  const dispatch = useDispatch();

  return (
        <div className="filter-container">
            {filters.map((filter, key) => {
                return (
                    <div key={key} onClick={() => dispatch(setWhere(filter.link))} className={where===filter.link?`${filter.className} active`:filter.className} >
                        <FontAwesomeIcon className="icon" icon={filter.icon} />
                        <p>{filter.name}</p>
                    </div>
                )
            })}
        </div>
  );
};