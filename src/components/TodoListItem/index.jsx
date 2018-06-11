import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }

    onClickClose() {
        //
    }

    onClickDone() {
        //
    }

    render () {
        return (
            <li className="list-group-item ">
                <div>
                    <span className="check-me" onClick={this.onClickDone}></span>
                    {this.props.item.value}
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}

export default TodoListItem;
