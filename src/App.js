import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    todoItems: []
  };

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
