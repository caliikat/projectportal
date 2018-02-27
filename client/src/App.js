import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import TodoItem from './components/TodoItem/TodoItem';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Wrapper>
          <TodoList

          />
        </Wrapper>
      </div>
    );
  }
}

export default App;
