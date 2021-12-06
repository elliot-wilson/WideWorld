import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: "",
            resultsReceived: false
        }

        this.liCount = 0;

        this.bindFuncs();
    }

    bindFuncs() {
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({query: e.currentTarget.value}, this.search);
    }

    generateResults() {

        const { searchResults } = this.props; 

        let resultsDisplay;
        let liCount = 0;
        
        if (this.state.resultsReceived) {

            if (searchResults.length > 0) {

                resultsDisplay = (
                    <ul className="search-results">
                        {searchResults.map((result, i) => {
                            liCount += 1;
                                return (
                                    <Link
                                        // onClick={this.props.closeSearch}
                                        // onKeyDown={this.handleKeyDown}
                                        id={`results-${liCount}`}
                                        key={`results-${liCount}`}
                                        to={`/locations/${result.id}`}>
                                        <li>
                                            {/* <FontAwesomeIcon icon={faUserAlt}/> */}
                                            {result.title}
                                        </li>
                                    </Link>
                                )                            
                            }
                        )}
                    </ul>
                )
            } else {
                resultsDisplay = (
                    <ul className="search-results">
                        <li>No results found</li>
                    </ul>
                )
            }

        }

        this.liCount = liCount;
        return resultsDisplay;
    }

    search() {
        if (this.state.query !== "") {
            this.props.fetchSearchResults(this.state.query)
                .then(() => this.setState({resultsReceived: true}));
        } else {
            this.props.clearSearchResults();
            this.setState({resultsReceived: false});
        }
    }

    render() {


        return (
            <div className="searchbar">
                <input
                    onChange={this.handleChange}
                    type="text"
                    className="searchbar-input"
                    placeholder="Search destinations and more..."
                />
                <button className="searchbar-button"><FontAwesomeIcon icon={faSearch} /></button>
                {this.generateResults()}
            </div>
        )
    }
}

export default SearchBar;