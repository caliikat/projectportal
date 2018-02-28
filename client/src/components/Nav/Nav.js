import React from "react";
import "./Nav.css";

const Nav = () =>
  <div className= "navbar">
    <h1>The Project Portal</h1>
    <h3>Handy helpers at work.</h3>
    <div id="nav">
      <button type="button">
        <p>Job Queue</p>
      </button> 
    </div>
  </div>;

export default Nav;