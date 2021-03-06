import React from 'react';
import TodoListItem from '../TodoListItem'
import './styles.css'

class TodoList extends React.Component {
    render () {
        let items = this.props.items.map((item, index) => {
            return (
                <TodoListItem key={index} item={item} index={index}
                              removeItem={this.props.removeItem}
                              markTodoDone={this.props.markTodoDone}
                              editItem={this.props.editItem}
                />
            );
        });
        return (
            <ul className="list-group"> {items} </ul>
        );
    }
}

export default TodoList;
