import React from "react";
import { Search } from "../Search/Search";
import './Navbar.css';
import reddit from "../../Assets/reddit-logo.png"

export const Navbar = () => {
  return (
    <div className="nav">
        <div className="logo">
            <img className="reddit-logo" src={reddit} />
            <h1>Reddit <strong>Mini</strong></h1>
        </div>
        <div className="search">
            <Search />
        </div>
        <div className="info">
            <a className="about">About</a>
            <a className="issue">Issue</a>
        </div>
    </div>
  );
};
