import React from "react";
import UserDetailsBox from './user_details_box';
import UserLocationsContainer from './user_locations_container';


class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {

        const { 
            user,
            locationVisits,
            locationWannaVisits,
            locationAdds,
            locationEdits,
        } = this.props;

        if (!user) return null;

        return (
            <section className="user-profile-container">
                <div className="user-profile-body">
                    <UserDetailsBox 
                        user={user}
                        locationVisits={locationVisits}
                        locationWannaVisits={locationWannaVisits}
                        locationAdds={locationAdds}
                        locationEdits={locationEdits}
                        />
                    <UserLocationsContainer
                        locationVisits={locationVisits}
                        locationWannaVisits={locationWannaVisits}
                        locationAdds={locationAdds}
                        locationEdits={locationEdits}
                    />
                </div>
            </section>
        )
    }

}

export default UserProfile;