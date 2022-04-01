import React from "react";
import { Search } from "../Search/Search";
import './Footer.css';
import reddit from "../../Assets/reddit-logo.png"

export const Footer = () => {
  return (
    <div className="foot">
        <p className="francisco">© 2022 Francisco Matos</p>
        <div className="info-foot">
            <a className="about">About</a>
            <a className="issue">Issue</a>
        </div>
    </div>
  );
};