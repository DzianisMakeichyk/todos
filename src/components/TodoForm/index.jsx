import React from 'react';

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
            input.value = '';
        }
    }
    render () {
        return (
            <form onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref="itemName" className="form-control"
                       placeholder="add a new"/>
                <button type="submit" className="button">Add</button>
            </form>
        );
    }
}

export default TodoForm;
