import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import API from "./utils/API";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import TodoItem from './components/TodoItem/TodoItem';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Todo from "./Pages/Todo";
import Edit from "./Pages/Edit";

class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/edit" component={Edit} />

            {/* <TodoForm 
              addTodo= { this.addTodo}
            />
            <TodoList 
                todo={this.state.todos} 
                updateTodo={ () => {} } 
                removeTodo={ this.removeTodo }
            />  */}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
