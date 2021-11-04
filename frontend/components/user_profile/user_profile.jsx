import React from "react";

class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {

        const { user } = this.props;

        if (!user) return null;

        return (
            <div>{user.username}</div>
        )
    }

}

export default UserProfile;