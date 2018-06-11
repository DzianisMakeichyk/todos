import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'

class App extends Component {
  state = {
    todoItems: []
  };

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoForm />
      </div>
    );
  }
}

export default App;
