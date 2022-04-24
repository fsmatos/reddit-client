import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setWhere } from "../../Features/allPosts/allPostsSlice";
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCertificate, faFire, faArrowTrendUp, faChartSimple } from '@fortawesome/free-solid-svg-icons'

export const Filter = () => {
  const dispatch = useDispatch();
  return (
        <div className="filter-container">
            <Link onClick={() => dispatch(setWhere("all"))} className="all" to="all">
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <p className="filter-text">All</p>
            </Link>
            
            <Link onClick={() => dispatch(setWhere("hot"))} className="hot" to="hot">
                <FontAwesomeIcon className="icon" icon={faFire} />
                <p className="filter-text">Hot</p>
            </Link>
            
            
            <Link onClick={() => dispatch(setWhere("new"))} className="new" to="new">
                <FontAwesomeIcon className="icon" icon={faCertificate} />
                <p className="filter-text">New</p>
            </Link>
            
           
            <Link onClick={() => dispatch(setWhere("rising"))} className="rising" to="rising">
                <FontAwesomeIcon className="icon" icon={faArrowTrendUp} />
                <p className="filter-text">Rising</p>
            </Link>
            
            <Link onClick={() => dispatch(setWhere("top"))} className="top" to="top">
                <FontAwesomeIcon className="icon" icon={faChartSimple} />
                <p className="filter-text">Top</p>
            </Link>  
        </div>
  );
};