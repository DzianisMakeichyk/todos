import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
    }

    onClickClose() {
        let index = parseInt(this.props.index);
        this.props.removeItem(index);
    }

    onClickDone() {
        let index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }

    onClickEdit() {
        let index = parseInt(this.props.index);

        if(this.props.item.editing) {
            let editToDo = this.refs.editToDo;
            let newEditToDo = editToDo.value;

            if(newEditToDo) {
                this.props.addItem({newEditToDo});
            }
        }

        this.props.editItem(index);
    }

    render () {
        return (
            <li className="list-group-item ">
                <div>
                    <button className="check-me" onClick={this.onClickDone}>check</button>

                    { this.props.item.editing ? <input type="text" ref="editToDo" defaultValue={this.props.item.value}/> : <span>{this.props.item.value}</span> }

                    <button onClick={this.onClickEdit}>
                        {this.props.item.editing ? 'Save' : 'Edit'}
                        </button>
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}

export default TodoListItem;
