import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <li className="list-group-item ">
                <div>
                    <span className="check-me" onClick={this.onClickDone}></span>
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}

export default TodoListItem;
