import React from "react";
import './Grid.css';
import {Navbar} from '../../Components/Navbar/Navbar';
import { Footer } from "../../Components/Footer/Footer";
import { Filter } from "../../Components/Filter/Filter";
import { Subreddit } from "../../Components/Subreddit/Subreddit";
import { Post } from "../../Components/Post/Post";
import { AllSubreddits } from "../../Features/allSubreddits/AllSubreddits";

export const Grid = () => {
  return (
    <div className="container">
        <header>
            <Navbar />
        </header>
        <aside>
            <AllSubreddits />
        </aside>
        <div className="filter">
            <Filter />
        </div>
        <main>
            <Post />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  );
};