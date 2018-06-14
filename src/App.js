import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import TodoSearch from './components/TodoSearch'

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
        // todoItems: [{index: 0, value: "hello", done: false, editing: false}],
        todoItems: [],
        indexNum: 0
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.editItem = this.editItem.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.filterActive = this.filterActive.bind(this);
    this.filterComplete = this.filterComplete.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  addItem(todoItem) {
      let todoItems = localStorage.length > 0 ? JSON.parse(localStorage.todoItems) : this.state.todoItems.slice();

    todoItems.push({
        index: this.state.indexNum++,
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
      let todoItems = localStorage.length > 0 ? JSON.parse(localStorage.todoItems) : this.state.todoItems.slice();
      let todoItem = localStorage.length > 0 ? JSON.parse(localStorage.todoItems)[itemIndex.index] : this.state.todoItems[itemIndex.index];

      localStorage.length > 0 ? todoItems[itemIndex.index].editing = !todoItems[itemIndex.index].editing : todoItem.editing = !todoItem.editing;

      localStorage.length > 0 ? todoItems[itemIndex.index].value = itemIndex.newEditToDo : todoItem.value = itemIndex.newEditToDo;

      this.setState({
          todoItems
      });
  }

  markTodoDone(itemIndex) {
      let todoItems = localStorage.length > 0 ? JSON.parse(localStorage.todoItems) : this.state.todoItems.slice();
    let todoItem = this.state.todoItems[itemIndex];

    todoItem.done = !todoItem.done;

    this.setState({
        todoItems,
    });
  }

  filterAll() {
      let todoItems = localStorage.length > 0 ? JSON.parse(localStorage.todoItems) : this.state.todoItems.slice();
    this.setState({
      todoItems
    });
  };

  filterActive() {
      let todoItems = localStorage.length > 0 ? JSON.parse(localStorage.todoItems) : this.state.todoItems.slice();
    this.setState({
        todoItems: todoItems.filter(todoItem => todoItem.done === true)
    });
  };

  filterComplete() {
      let todoItems = localStorage.length > 0 ? JSON.parse(localStorage.todoItems) : this.state.todoItems.slice();
    this.setState({
      todoItems: todoItems.filter(todoItem => todoItem.done === false)
    });
  };

  filterList(searchInput) {
      let todoItems = localStorage.length > 0 ? JSON.parse(localStorage.todoItems) : this.state.todoItems.slice();
      todoItems = todoItems.filter(item => item.value.search(searchInput) !== -1);

      this.setState({
          todoItems
      });
  }

  componentWillMount() {
      // let todoItems = this.state.todoItems.slice();
      //
      // localStorage.setItem('todoItems', JSON.stringify(todoItems)) && this.setState({
      //     todoItems: JSON.parse(localStorage.setItem('todoItems', JSON.stringify(todoItems))),
      //     isLoading: false
      // })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('todoItems', JSON.stringify(nextState.todoItems))
  }

  render() {
  let localStorageItems;
      localStorageItems = localStorage.todoItems;

      if(typeof localStorageItems !== 'undefined') {
          localStorageItems = localStorage.length > 0 ? JSON.parse(localStorageItems) : '';
      }

    return (
      <div className="App">
        <TodoHeader />
        <TodoFilter items={this.state.todoItems}
                    filterAll={this.filterAll}
                    filterActive={this.filterActive}
                    filterComplete={this.filterComplete}
        />

        <TodoSearch filterList={this.filterList}/>

        <TodoList items={localStorage.length > 0 ? localStorageItems : this.state.todoItems}
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
