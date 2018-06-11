import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }

    onClickClose() {
        let index = parseInt(this.props.index);
        this.props.removeItem(index);
    }

    onClickDone() {
        let index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }

    render () {
        return (
            <li className="list-group-item ">
                <div>
                    <button className="check-me" onClick={this.onClickDone}>check</button>
                    {this.props.item.value}
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}

export default TodoListItem;
