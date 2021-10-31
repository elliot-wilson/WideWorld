import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

const AuthIndex = (props) => {

    const authIndex = // add a link to View Profile here 
        props.currentUser ?
            (
                <div className="auth-index">
                    <p>VIEW PROFILE</p>
                    <button onClick={props.logout}>LOGOUT</button>
                </div>
            )
            :
            (
                <div className="auth-index">
                    <Link to="/signup">SIGN UP</Link>
                    <Link to="login">LOG IN</Link>
                </div>
            );

    return (
        <div classame="auth-index-container">
            <FontAwesomeIcon icon={faUserAlt}/>
            {authIndex}
        </div>
    )

};

export default AuthIndex;