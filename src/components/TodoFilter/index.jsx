import React from 'react';
import './style.css'

class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
        this.onClickFilterAll = this.onClickFilterAll.bind(this);
        this.onClickFilterActive = this.onClickFilterActive.bind(this);
        this.onClickFilterComplete = this.onClickFilterComplete.bind(this);
    }

    onClickFilterAll(e) {
        e.preventDefault();
        this.props.filterAll();
    };

    onClickFilterActive(e) {
        e.preventDefault();
        this.props.filterActive();
    };

    onClickFilterComplete(e) {
        e.preventDefault();
        this.props.filterComplete();
    }

    render () {
        return (
            <div className="filter__wrapper">
                <a href="" onClick={this.onClickFilterAll}>All</a>&nbsp;
                <a href="" onClick={this.onClickFilterActive}>Active</a>&nbsp;
                <a href="" onClick={this.onClickFilterComplete}>Complete</a>
            </div>
        );
    }
}

export default TodoFilter;
