import React from "react";
import { Search } from "../Search/Search";
import './Footer.css';
import reddit from "../../Assets/reddit-logo.png"

export const Footer = () => {
  return (
    <div className="foot">
        <p className="francisco">© 2022 Francisco Matos</p>
        <div className="info-foot">
          <a href="https://github.com/fsmatos/reddit-client" target="_blank" className="about-footer">About</a>
          <a href="https://github.com/fsmatos/reddit-client/issues" target="_blank" className="issue-footer">Issue</a>
        </div>
    </div>
  );
};