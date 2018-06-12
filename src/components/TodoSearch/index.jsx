import React from 'react';

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
            <div>
                <input type="text" ref="searchInput" placeholder="Search" onChange={this.searchFilterList}/>
            </div>
        );
    }
}

export default TodoSearch;
