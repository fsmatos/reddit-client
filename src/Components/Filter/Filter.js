import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCertificate, faFire, faArrowTrendUp, faChartSimple } from '@fortawesome/free-solid-svg-icons'

export const Filter = () => {
  return (
        <div className="filter-container">
            <Link className="all" to="all">
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <p className="filter-text">All</p>
            </Link>
            
            <Link className="hot" to="hot">
                <FontAwesomeIcon className="icon" icon={faFire} />
                <p className="filter-text">Hot</p>
            </Link>
            
            
            <Link className="new" to="new">
                <FontAwesomeIcon className="icon" icon={faCertificate} />
                <p className="filter-text">New</p>
            </Link>
            
           
            <Link className="rising" to="rising">
                <FontAwesomeIcon className="icon" icon={faArrowTrendUp} />
                <p className="filter-text">Rising</p>
            </Link>
            
            <Link className="top" to="top">
                <FontAwesomeIcon className="icon" icon={faChartSimple} />
                <p className="filter-text">Top</p>
            </Link>  
        </div>
  );
};