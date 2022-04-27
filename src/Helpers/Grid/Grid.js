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
        <aside>
            <AllSubreddits />
        </aside>
        <div className="filter">
            <Filter />
        </div>
        <main>
            <AllPosts />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  );
};