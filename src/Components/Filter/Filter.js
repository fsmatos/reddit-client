import React from "react";
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCertificate, faFire, faArrowTrendUp, faChartSimple } from '@fortawesome/free-solid-svg-icons'

export const Filter = () => {
  return (
    <div className="filter-container">
        <div className="all">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <h2 className="filter-text">All</h2>
        </div>
        <div className="hot">
            <FontAwesomeIcon className="icon" icon={faFire} />
            <h2 className="filter-text">Hot</h2>
        </div>
        <div className="new">
            <FontAwesomeIcon className="icon" icon={faCertificate} />
            <h2 className="filter-text">New</h2>
        </div>
        <div className="rising">
            <FontAwesomeIcon className="icon" icon={faArrowTrendUp} />
            <h2 className="filter-text">Rising</h2>
        </div>
        <div className="top">
            <FontAwesomeIcon className="icon" icon={faChartSimple} />
            <h2 className="filter-text">Top</h2>
        </div>
    </div>
  );
};