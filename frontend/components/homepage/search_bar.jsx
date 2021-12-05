import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: "",
            resultsReceived: false
        }

        this.bindFuncs();
    }

    bindFuncs() {
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({query: e.currentTarget.value}, this.search);
    }

    search() {
        // if (this.state.query !== "") {
        //     this.props.fetchSearchResults(this.state.query)
        //         .then(() => this.setState({resultsReceived: true}));
        // } else {
        //     this.props.clearSearchResults();
        //     this.setState({resultsReceived: false})
        // }
    }

    render() {


        return (
            <form className="searchbar">
                <input
                    onChange={this.handleChange}
                    type="text"
                    className="searchbar-input"
                    placeholder="Search destinations and more..."
                />
                <button className="searchbar-button"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        )
    }
}

export default SearchBar;