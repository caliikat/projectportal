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

  addTodo = ( queueTitle, description, dueDate ) => {
    let todos = this.state.todos; 
    todos.push({
      "id": (new Date).getTime(),
      "queueTitle": queueTitle,
      "description": description,
      "dueDate": dueDate,
    })
    this.setState({ todos}); 
    console.log(todos);   
  }

  editTodo = ( queueTitle, description, dueDate ) => {
    let todos = this.state.todos; 
    todos.push({
      "id": (new Date).getTime(),
      "queueTitle": queueTitle,
      "description": description,
      "dueDate": dueDate,
    })
    this.setState({ todos}); 
    console.log(todos);   
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Wrapper>
          {/* <Route path="/" component={Home}/>
          <Route path="/jobQueue" component={TodoList}/> */}

          <TodoForm 
            addTodo= { this.addTodo}
            
          />
          
           <TodoList 
              todo={this.state.todos} 
              updateTodo={ () => {} } 
              removeTodo={ this.removeTodo }
           /> 

        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
