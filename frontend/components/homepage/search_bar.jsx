import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faRandom, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: "",
            resultsReceived: false,
            searchClicked: false
        }

        this.liCount = 0;

        this.bindFuncs();
    }

    bindFuncs() {
        this.handleChange = this.handleChange.bind(this);
        this.transformSearch = this.transformSearch.bind(this);
    }

    handleChange(e) {
        this.setState({query: e.currentTarget.value}, this.search);
    }

    generateResults() {

        const { searchResults } = this.props; 

        let resultsDisplay;
        let liCount = 0;

        if (this.state.searchClicked) {

            if (this.state.resultsReceived) {
    
                if (searchResults.length > 0) {
    
                    resultsDisplay = (
                        <ul className="search-results">
                            <p>Search Results</p>
                            {searchResults.map((result, i) => {
                                liCount += 1;
                                    return (
                                        <Link
                                            // onClick={this.props.closeSearch}
                                            id={`results-${liCount}`}
                                            key={`results-${liCount}`}
                                            to={`/locations/${result.id}`}>
                                            <li>
                                                <FontAwesomeIcon icon={faMapMarkedAlt}/>
                                                <p>{result.title}</p>
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
                            <p>Search Results</p>
                            <li>No results found</li>
                        </ul>
                    )
                }
    
            }
    
            this.liCount = liCount;
            return (
                <div className="search-results-display">
                    {resultsDisplay}
                    <div className="search-results-random">
                        <FontAwesomeIcon icon={faRandom}/>
                        <Link to="/locations/random">Random Place</Link>
                    </div>
                </div>
            );
        }
        
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

    transformSearch(e) {
        const background = document.querySelector('.search-modal-background');
        const logo = document.querySelector('.logo');
        if (!this.state.searchClicked) {
            document.querySelector('.searchbar').style.top = "-100px";
            document.querySelector('.searchbar-input').style.width = "700px";
            this.setState({searchClicked: true});
        } else if (e.target === background || e.target === logo) {
            document.querySelector('.searchbar').style.top = "35px";
            document.querySelector('.searchbar-input').style.width = "500px";
            this.setState({searchClicked: false, query: ""})
        }
    }

    render() {

        const klass = this.state.searchClicked ? "clicked" : null;

        return (
            <div className="searchbar" onClick={this.transformSearch}>
                <div className="searchbar-form">
                    <input
                        onChange={this.handleChange}
                        type="text"
                        className="searchbar-input"
                        placeholder="Search destinations and more..."
                        value={this.state.query}
                    />
                    <button className="searchbar-button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                {this.generateResults()}
                <div
                    className={`search-modal-background ${klass}`}
                />
            </div>
        )
    }
}

export default SearchBar;