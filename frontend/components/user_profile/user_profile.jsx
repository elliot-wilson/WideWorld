import React from "react";
import UserDetailsBox from './user_details_box';
import UserLocationsContainer from './user_locations_container';


class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {

        const { user } = this.props;

        if (!user) return null;

        return (
            <section className="user-profile-container">
                <div className="user-profile-body">
                    <UserDetailsBox user={user}/>
                    <UserLocationsContainer />
                </div>
            </section>
        )
    }

}

export default UserProfile;