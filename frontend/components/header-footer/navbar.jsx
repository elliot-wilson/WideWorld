import React from 'react';
import AuthIndexContainer from './auth_index_container';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchClicked: false,
        }
        
        this.bindFuncs();
    }

    bindFuncs() {
        this.transformSearch = this.transformSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.directHome = this.directHome.bind(this);
    }


    transformSearch() {

        if (!this.state.searchClicked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        this.setState({searchClicked: !this.state.searchClicked});
    }

    closeSearch() {
        this.setState({searchClicked: false})
    }

    directHome(e) {
        e.preventDefault();
        if (this.props.location.pathname === '/') {
            if (this.state.searchClicked) {
                this.closeSearch();
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
                                onClick={this.closeSearch}
                            >RANDOM PLACE</Link>
                        </li>
                    </ul>
                </div>
                <div className="auth-and-search">
                    <AuthIndexContainer
                        closeSearch={this.closeSearch}
                    />
                    <SearchContainer
                        closeSearch={this.closeSearch}
                        searchClicked={this.state.searchClicked}
                        transformSearch={this.transformSearch}
                    />
                </div>
            </section>
        )
    }
}

export default NavBar;