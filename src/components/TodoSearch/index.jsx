import React from 'react';
import './styles.css'

class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.searchFilterList = this.searchFilterList.bind(this);
    }

    searchFilterList() {
        let searchInput;
        searchInput = this.refs.searchInput;
        searchInput = searchInput.value;

        this.props.filterList(searchInput);
    };

    render () {
        return (
            <div className="searchInput__wrapper">
                <input className="searchInput" type="text" ref="searchInput" placeholder="Search" onChange={this.searchFilterList}/>
            </div>
        );
    }
}

export default TodoSearch;
