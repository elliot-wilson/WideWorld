import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

const AuthIndex = (props) => {

    const authIndex = // add a link to View Profile here 
        props.currentUser ?
            (
                <ul className="auth-index">
                    <li><a>VIEW PROFILE</a></li>
                    <li onClick={props.logout}><a>LOGOUT</a></li>
                </ul>
            )
            :
            (
                <ul className="auth-index">
                    <li><Link to="/signup">SIGN UP</Link></li>
                    <li><Link to="login">LOG IN</Link></li>
                </ul>
            );

    return (
        <div className="auth-index-container">
            <FontAwesomeIcon icon={faUserAlt}/>
            {authIndex}
        </div>
    )

};

export default AuthIndex;