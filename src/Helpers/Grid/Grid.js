import React from "react";
import './Grid.css';
import {Navbar} from '../../Components/Navbar/Navbar';
import { Footer } from "../../Components/Footer/Footer";
import { Filter } from "../../Components/Filter/Filter";
import { Subreddit } from "../../Components/Subreddit/Subreddit";

export const Grid = () => {
  return (
    <div className="container">
        <div className="nav-bar">
            <Navbar />
        </div>
        <div className="subreddit">
            <Subreddit />
        </div>
        <div className="filter">
            <Filter />
        </div>
        <div className="post"></div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  );
};