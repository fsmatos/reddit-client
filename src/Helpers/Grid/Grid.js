import React from "react";
import './Grid.css';
import {Navbar} from '../../Components/Navbar/Navbar';
import { Footer } from "../../Components/Footer/Footer";
import { Filter } from "../../Components/Filter/Filter";
import { AllSubreddits } from "../../Features/allSubreddits/AllSubreddits";
import { AllPosts } from "../../Features/allPosts/AllPosts";

export const Grid = () => {
  return (
    <div className="container">
        <header>
            <Navbar />
        </header>
        <div className="filter">
            <Filter />
        </div>
        <main>
            <AllSubreddits className="all-subreddits"/>
            <AllPosts className="all-posts"/>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  );
};