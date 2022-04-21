import React from "react";
import { Search } from "../Search/Search";
import './Navbar.css';
import reddit from "../../Assets/reddit-logo.png"

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img className="reddit-logo" src={reddit} />
        <h1>Reddit <strong className="mini">Mini</strong></h1>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="info">
        <a href="https://github.com/fsmatos/reddit-client" target="_blank" className="about">About</a>
        <a href="https://github.com/fsmatos/reddit-client/issues" target="_blank" className="issue">Issue</a>
      </div>
    </nav>
  );
};
