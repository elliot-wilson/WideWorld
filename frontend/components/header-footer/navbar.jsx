import React from 'react';
import AuthIndexContainer from './auth_index_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchBarContainer from '../homepage/search_bar_container';

const NavBar = (props) => (
    <section className="navbar">
        <div className="logo">
            <div onClick={
                (e) => {
                    e.preventDefault();
                    if (props.location.pathname === '/') {
                        window.location.reload(false);
                    } else {
                        props.history.push('/');
                    }
                }
            }>
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
                    <Link to="/locations/random">RANDOM PLACE</Link>
                </li>
            </ul>
        </div>
        <div className="auth-and-search">
            <AuthIndexContainer />
            <div className="nav-search-container">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
        <SearchBarContainer />
    </section>
)

export default NavBar;