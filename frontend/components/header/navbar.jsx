import React from 'react';
import AuthIndexContainer from './auth_index_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => (
    <section className="navbar">
        <div className="logo">
            <p>WIDE WORLD</p>
        </div>
        <div className="slogan">
            <p><a>Oh, the places you'll go!</a></p>
        </div>
        <div className="auth-and-search">
            <AuthIndexContainer />
            <div className="nav-search-container">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    </section>
)

export default NavBar;