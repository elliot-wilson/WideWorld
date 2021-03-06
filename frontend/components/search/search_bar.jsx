import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faRandom, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.liCount = 0;
    }

    generateResults() {

        const { searchResults } = this.props; 

        let resultsDisplay;
        let liCount = 0;

        if (this.props.searchClicked) {

            if (this.props.resultsReceived) {
    
                if (searchResults.length > 0) {
    
                    resultsDisplay = (
                        <ul className="search-results">
                            <p>Search Results</p>
                            {searchResults.map((result) => {
                                liCount += 1;
                                    return (
                                        <Link
                                            id={`results-${liCount}`}
                                            key={`results-${liCount}`}
                                            to={`/locations/${result.id}`}
                                            onClick={this.props.closeSearch}
                                            >
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
                        <Link to="/locations/random" onClick={this.props.closeSearch}>Random Place</Link>
                    </div>
                </div>
            );
        }
        
    }

    render() {

        let klass;
        if (this.props.searchClicked) {
            klass = "clicked";
        } else if (this.props.location.pathname !== "/") {
            return null;
        }

        return (
            <div className="searchbar-positioner">
                <div className={`searchbar ${klass}`} onClick={this.props.transformSearch}>
                    <div className="searchbar-form">
                        <input
                            onChange={this.props.handleChange}
                            type="text"
                            className="searchbar-input"
                            placeholder="Search destinations and more..."
                            value={this.props.query}
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
            </div>
        )
    }
}

export default SearchBar;