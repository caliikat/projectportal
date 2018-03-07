import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


  render() {
    return (
      <div className="App">
        <Nav />
        <Wrapper>
          {/* login */}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
