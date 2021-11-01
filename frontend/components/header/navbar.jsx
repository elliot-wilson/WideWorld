import React from 'react';
import AuthIndexContainer from './auth_index_container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../app/assets/images/logo4.png'

const NavBar = (props) => (
    <section className="navbar">
        <div className="logo">
            <Link to="/"><img src={logo} alt="Logo"/></Link>
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
                    <a>RANDOM PLACE</a>
                </li>
            </ul>
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