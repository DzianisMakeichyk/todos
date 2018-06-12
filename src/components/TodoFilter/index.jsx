import React from 'react';

class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
        this.filterAll = this.filterAll.bind(this);
        this.filterActive = this.filterActive.bind(this);
        this.filterComplete = this.filterComplete.bind(this);
    }

    filterAll(e) {
        e.preventDefault();
    };

    filterActive(e) {
        e.preventDefault();
        let todoItems = this.props.items.slice();

        this.setState({
            todoItems: this.props.items.filter(todoItem => todoItem.done !== 'false')
        });

        console.log(todoItems)
    };

    filterComplete(e) {
        e.preventDefault();
        //
    }

    render () {
        return (
            <div>
                <a href="" onClick={this.filterAll}>All</a>&nbsp;
                <a href="" onClick={this.filterActive}>Active</a>&nbsp;
                <a href="" onClick={this.filterComplete}>Complete</a>
            </div>
        );
    }
}

export default TodoFilter;
