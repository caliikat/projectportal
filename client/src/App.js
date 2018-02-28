import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import TodoItem from './components/TodoItem/TodoItem';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Footer from "./components/Footer";

const todos = [
  {
    "id": 1,
    "queueTitle": "Homework #3",
    "description": "Learn bootstrap and create website.",
    "dueDate": "October 1st",
  },
]

class App extends Component {
  state = {
    todos
  };
  
  removeTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos});
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Wrapper>
          {/* <Route path="/" component={Home}/>
          <Route path="/jobQueue" component={TodoList}/> */}

          <TodoForm />
          {this.state.todos.map(todo => (
            <TodoItem
              removeTodo={this.removeTodo}
              id={todo.id}
              key={todo.id}
              queueTitle={todo.queueTitle}
              description={todo.description}
              dueDate={todo.dueDate}
            />
          ))}
          <TodoList/>

        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
