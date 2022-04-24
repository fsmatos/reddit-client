import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Grid.css';
import {Navbar} from '../../Components/Navbar/Navbar';
import { Footer } from "../../Components/Footer/Footer";
import { Filter } from "../../Components/Filter/Filter";
import { AllSubreddits } from "../../Features/allSubreddits/AllSubreddits";
import { AllPosts } from "../../Features/allPosts/AllPosts";

export const Grid = () => {
  return (
    <Router>
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
                <Routes>
                    <Route exact path='/' element={<AllPosts />}></Route>
                    <Route exact path='/:id' element={<AllPosts />}></Route>
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    </Router>
  );
};