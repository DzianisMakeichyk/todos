import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    todoItems: [{index: 1, value: "hello", done: false}]
  };

  render() {
    return (
      <div className="App">
        <TodoHeader />

        <TodoList items={this.state.todoItems}/>

        <TodoForm />
      </div>
    );
  }
}

export default App;
