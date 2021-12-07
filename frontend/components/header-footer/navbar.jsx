import React from 'react';
import AuthIndexContainer from './auth_index_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchBarContainer from '../homepage/search_bar_container';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchClicked: false,
            resultsReceived: false,
            query: ""
        }
        
        this.bindFuncs();
    }

    bindFuncs() {
        this.closeSearch = this.closeSearch.bind(this);
        this.directHome = this.directHome.bind(this);
    }


    closeSearch() {
        this.setState({searchClicked: false});
    }

    directHome(e) {
        e.preventDefault();
        if (this.props.location.pathname === '/') {
            if (this.state.searchClicked) {
                this.setState({searchClicked: false})
            } else {
                window.location.reload(false);
            }
        } else {
            this.setState({searchClicked: false}, this.props.history.push('/'));
        }
    }

    render() {

        return (
            <section className="navbar">
                <div className="logo">
                    <div onClick={this.directHome}>
                        <img src={window.logoURL} alt="Logo"/>
                    </div>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>
                            <a>PLACES</a>
                        </li>
                        <li>
                            <a>CATEGORIES</a>
                        </li>
                        <li>
                            <a>LISTS</a>
                        </li>
                        <li>
                            <Link
                                to="/locations/random"
                                onClick={this.transformSearch}
                            >RANDOM PLACE</Link>
                        </li>
                    </ul>
                </div>
                <div className="auth-and-search">
                    <AuthIndexContainer />
                    <SearchContainer />
                </div>
            </section>
        )
    }
}

export default NavBar;