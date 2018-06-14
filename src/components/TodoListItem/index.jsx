import React from 'react';
import './styles.css'

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
    }

    onClickClose() {
        let index = this.props.item.index;
        this.props.removeItem(index);
    }

    onClickDone() {
        let index = this.props.item.index;
        this.props.markTodoDone(index);
    }

    onClickEdit() {
        let index = this.props.item.index;
        let newEditToDo = this.props.item.value;

        if(this.props.item.editing) {
            let editToDo = this.refs.editToDo;
            newEditToDo = editToDo.value;

            this.props.editItem({index, newEditToDo});
        } else {
            this.props.editItem({index, newEditToDo});
        }

    }

    render () {
        return (
            <li className="list-group-item">
                <div className="listGroup--left">
                    <button className="check-me" onClick={this.onClickDone}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" width="12px" height="12px">
                            <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/>
                        </svg>
                    </button>
                    {this.props.item.editing ? <input type="text" ref="editToDo" defaultValue={this.props.item.value} /> : <span className={"issue" + (this.props.item.done ? ' is-complete' : '')}>{this.props.item.value}</span> }
                </div>

                <div className="listGroup--right">
                    <button onClick={this.onClickEdit}>
                        {this.props.item.editing ? 'Save' : 'Edit'}
                    </button>
                    <button type="button" className="button--close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}

export default TodoListItem;
