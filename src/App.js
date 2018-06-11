import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
        todoItems: [{index: 1, value: "hello", done: false}]
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
  }

  addItem(todoItem) {
    let todoItems = this.state.todoItems.slice();

    todoItems.push({
        index: this.state.todoItems.length,
        value: todoItem.newItemValue,
        done: false
    });

    this.setState({
      todoItems: todoItems,
    });
  }

  removeItem (itemIndex) {
    this.setState({
      todoItems: this.state.todoItems.filter(todoItem => todoItem.index !== itemIndex)
    });

    console.log('removeItem')

    // this.state.todoItems.splice(itemIndex, 1);
  }

  markTodoDone(itemIndex) {
    // this.setState({
    //     todoItems: this.state.todoItems.filter(todoItem => todoItem)
    // });
    let todoItem = this.state.todoItems[itemIndex];
    let todoItems = this.state.todoItems.slice();

    todoItem.done = !todoItem.done;

    this.setState({
        todoItems: todoItems,
    });

    console.log(this.state.todoItems[itemIndex].done)
  }

  render() {
    return (
      <div className="App">
        <TodoHeader />

        <TodoList items={this.state.todoItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
        />

        <TodoForm  addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
