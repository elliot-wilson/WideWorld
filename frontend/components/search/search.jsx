import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../homepage/search_bar';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            resultsReceived: false,
            query: ""
        }

        this.bindFuncs();
    }

    bindFuncs() {
        this.transformSearch = this.transformSearch.bind(this);
        this.clearSearchBar = this.clearSearchBar.bind(this);
        this.acknowledgeReceipt = this.acknowledgeReceipt.bind(this);
        this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    transformSearch(e) {
        const atHomepage = this.props.location.pathname === "/";
        const searchNotAlreadyClicked = !this.state.clicked;

        if (atHomepage && searchNotAlreadyClicked || this.validTarget(e)) {
            this.props.clearSearchResults();
            this.clearSearchBar();
            this.setState({clicked: !this.state.clicked})
        }

    }

    validTarget(e) {
        const container = document.querySelector('.nav-search-container');
        const icon = document.querySelector('.search-icon');
        const background = document.querySelector('.search-modal-background');

        return [container, icon, background].includes(e.target) || e.target.parentNode === icon;
    }

    clearSearchBar() {
        this.setState({query: "", resultsReceived: false})
    }

    search() {
        if (this.state.query !== "") {
            this.props.fetchSearchResults(this.state.query)
                .then(this.acknowledgeReceipt)
        } else {
            this.props.clearSearchResults();
            this.clearSearchBar();
        }
    }

    acknowledgeReceipt() {
        this.setState({resultsReceived: true})
    }

    handleChange(e) {
        this.setState({query: e.currentTarget.value}, this.search);
    }


    render() {

        const clicked = this.state.clicked;
        const icon = clicked ? faTimes : faSearch;
        const klass = clicked ? "clicked" : null;

        return (
            <div
                className={`nav-search-container ${klass}`}
                onClick={this.transformSearch}
            >
                <FontAwesomeIcon className="search-icon" icon={icon}/>
                <SearchBar
                    searchClicked={this.state.clicked}
                    transformSearch={this.transformSearch}
                    location={this.props.location}
                    resultsReceived={this.state.resultsReceived}
                    query={this.state.query}
                    handleChange={this.handleChange}
                    fetchSearchResults={this.props.fetchSearchResults}
                    searchResults={this.props.searchResults}
                    clearSearchResults={this.props.clearSearchResults}
                    clearSearchBar={this.clearSearchBar}
                    acknowledgeReceipt={this.acknowledgeReceipt}
                />
            </div>
        )
    }


}

export default Search;