import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AuthIndex = (props) => {

    const authIndex = // add a link to View Profile here 
        props.currentUser ?
            (
                <div>
                    <p>VIEW PROFILE</p>
                    <button onClick={props.logout}>LOGOUT</button>
                </div>
            )
            :
            (
                <div>
                    <Link to="/signup">SIGN UP</Link>
                    <Link to="login">LOG IN</Link>
                </div>
            );

    return (
        authIndex
    )

};

export default AuthIndex;