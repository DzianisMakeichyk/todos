import React from 'react';
import TodoListItem from '../TodoListItem'

class TodoList extends React.Component {
    render () {
        console.log(this.props)
        let items = this.props.items.map((item, index) => {
            return (
                <TodoListItem key={index} item={item} index={index}/>
            );
        });
        return (
            <ul className="list-group"> {items} </ul>
        );
    }
}

export default TodoList;
