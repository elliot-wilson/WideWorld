import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

const AuthIndex = (props) => {
    const { currentUser } = props;
    let authIndex, authLink;
    if (currentUser) {
        authIndex = (
            <ul className="auth-index">
                <li><a>{currentUser.username}</a></li>
                <li onClick={props.logout}><a>LOGOUT</a></li>
            </ul>
        );
        authLink = `/users/${currentUser.id}`
    } else {
        authIndex = (
            <ul className="auth-index">
                <li><Link to="/signup">SIGN UP</Link></li>
                <li><Link to="/login">LOG IN</Link></li>
                <li><a onClick={props.login}>DEMO USER</a></li>
            </ul>
        );
        authLink = '/signin'
    }

    return (
        <div className="auth-index-container">
            <Link to={authLink}><FontAwesomeIcon icon={faUserAlt}/></Link>
            {authIndex}
        </div>
    )

};

export default AuthIndex;