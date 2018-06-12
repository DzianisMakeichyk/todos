import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
        todoItems: [{index: 0, value: "hello", done: false, editing: false}]
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.editItem = this.editItem.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.filterActive = this.filterActive.bind(this);
    this.filterComplete = this.filterComplete.bind(this);
  }

  addItem(todoItem) {
    let todoItems = this.state.todoItems.slice();

    todoItems.push({
        index: this.state.todoItems.length,
        value: todoItem.newItemValue,
        done: false,
        editing: false
    });

    this.setState({
      todoItems
    });
  }

  removeItem (itemIndex) {
    this.setState({
      todoItems: this.state.todoItems.filter(todoItem => todoItem.index !== itemIndex)
    });
  }

  editItem (itemIndex) {
      let todoItem = this.state.todoItems[itemIndex.index];
      let todoItems = this.state.todoItems.slice();

      todoItem.editing = !todoItem.editing;
      todoItem.value = itemIndex.newEditToDo;

      this.setState({
          todoItems
      });
  }

  markTodoDone(itemIndex) {
    let todoItem = this.state.todoItems[itemIndex];
    let todoItems = this.state.todoItems.slice();

    todoItem.done = !todoItem.done;

    this.setState({
        todoItems,
    });
  }

  filterAll() {
    let todoItems = this.state.todoItems.slice();

    console.log(todoItems)

    this.setState({
      todoItems
    });
  };

  filterActive() {
    let todoItems = this.state.todoItems.slice();

    this.setState({
        todoItems: todoItems.filter(todoItem => todoItem.done === true)
    });
  };

  filterComplete() {
    let todoItems = this.state.todoItems.slice();

    this.setState({
      todoItems: todoItems.filter(todoItem => todoItem.done === false)
    });
  }

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoFilter items={this.state.todoItems}
                    filterAll={this.filterAll}
                    filterActive={this.filterActive}
                    filterComplete={this.filterComplete}
        />

        <TodoList items={this.state.todoItems}
                  removeItem={this.removeItem}
                  markTodoDone={this.markTodoDone}
                  editItem={this.editItem}
        />

        <TodoForm  addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
