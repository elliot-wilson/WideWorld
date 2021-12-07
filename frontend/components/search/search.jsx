import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../homepage/search_bar';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            resultsReceived: false,
            query: ""
        }

        this.bindFuncs();
    }

    componentDidUpdate() {
        if (!this.props.searchClicked && this.state.query !== "") {
            this.setState({query: ""})
        }
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
        const searchNotAlreadyClicked = !this.props.searchClicked;

        if (atHomepage && searchNotAlreadyClicked || this.validTarget(e)) {
            this.props.clearSearchResults();
            this.clearSearchBar();
            this.props.transformSearch();
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

        const clicked = this.props.searchClicked;
        const icon = clicked ? faTimes : faSearch;
        const klass = clicked ? "clicked" : null;

        return (
            <div
                className={`nav-search-container ${klass}`}
                onClick={this.transformSearch}
            >
                <FontAwesomeIcon className="search-icon" icon={icon}/>
                <SearchBar
                    searchClicked={this.props.searchClicked}
                    transformSearch={this.transformSearch}
                    location={this.props.location}
                    resultsReceived={this.state.resultsReceived}
                    query={this.state.query}
                    handleChange={this.handleChange}
                    searchResults={this.props.searchResults}
                    closeSearch={this.props.closeSearch}
                />
            </div>
        )
    }


}

export default Search;