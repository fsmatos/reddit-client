import React from "react";
import './Grid.css';
import {Navbar} from '../../Components/Navbar/Navbar';
import { Footer } from "../../Components/Footer/Footer";
import { Filter } from "../../Components/Filter/Filter";
import { Subreddit } from "../../Components/Subreddit/Subreddit";
import { Post } from "../../Components/Post/Post";
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
        <div className="post">
            <Post />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  );
};