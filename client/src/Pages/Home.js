import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../App.css';
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

class Home extends Component {


  render() {
    return (
      <div className="App">
        
        <Wrapper>
          {/* login */}
          <p> Hi</p>
        </Wrapper>
        
      </div>
    );
  };
}

export default Home;
