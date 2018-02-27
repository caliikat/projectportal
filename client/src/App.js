import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import TodoItem from './components/TodoItem/TodoItem';
import TodoList from './components/TodoList/TodoList';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Wrapper>
          <TodoList

          />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
