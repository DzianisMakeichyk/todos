import React from 'react';
import './styles.css'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        let input = this.refs.itemName;
        let newItemValue = input.value;

        if(newItemValue) {
            this.props.addItem({newItemValue});
            input.value = '';
        }
    }
    render () {
        return (
            <form onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref="itemName" className="form-control"
                       placeholder="Add a new"/>
                <button type="submit" className="button">Add</button>
            </form>
        );
    }
}

export default TodoForm;
