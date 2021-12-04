import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

class AuthIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleDemo = this.handleDemo.bind(this);
    }

    handleDemo() {
        this.props.login()
            .then(() => this.props.history.push("/users/1"));
    }

    render() {

        const { currentUser } = this.props;
        let authIndex, authImage;
        let userIcon = (<FontAwesomeIcon icon={faUserAlt} />)
        if (currentUser.id) {
            let icon = currentUser.photoUrl ? 
                (
                    <img className="navbar-photo" src={currentUser.photoUrl}/>
                )
                :
                (
                    userIcon
                );
    
            authImage = (
                <Link to={`/users/${currentUser.id}`}> {icon} </Link>
                 )
            authIndex = (
                <ul className="auth-index">
                    <li>
                        <Link to={`/users/${currentUser.id}`}>
                            {currentUser.username}
                        </Link>
                    </li>
                    <li onClick={this.props.logout}>
                        <a>LOGOUT</a>
                    </li>
                </ul>
            );
        } else {
            authImage = (
                <Link to="/login">{userIcon}</Link>
            )
            authIndex = (
                <ul className="auth-index">
                    <li><Link to="/signup">SIGN UP</Link></li>
                    <li><Link to="/login">LOG IN</Link></li>
                    <li><a onClick={this.handleDemo}>DEMO USER</a></li>
                </ul>
            );
        }
    
        return (
            <div className="auth-index-container">
                {authImage}
                {authIndex}
            </div>
        )
    }
}

export default AuthIndex;