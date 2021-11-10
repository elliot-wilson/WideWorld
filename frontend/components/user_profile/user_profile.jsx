import React from "react";
import UserDetailsBox from './user_details_box';
import UserLocationsIndex from "./user_locations_index";
import UserLocationsMapBox from "./user_locations_map_box";


class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: this.props.locationVisits,
            selectedHeaderIdx: 0
        }

        this.bindFuncs();
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
            .then(() => this.setState({locations: this.props.locationVisits}));
    }
    
    componentDidUpdate() {
        if (!this.props.user) {
            this.props.fetchUser(this.props.match.params.userId)
                .then(() => this.setState({locations: this.props.locationVisits, selectedHeaderIdx: 0}));
        }
    }

    bindFuncs() {
        this.updateLocationSelection = this.updateLocationSelection.bind(this);
    }

    updateLocationSelection(selection) {

        const headers = ['locationVisits', 'locationWannaVisits', 'locationAdds', 'locationEdits'];
        const idx = headers.indexOf(selection);

        this.setState({locations: this.props[selection], selectedHeaderIdx: idx})
    }

    render() {

        const { 
            user,
            locations,
            locationVisits,
            locationWannaVisits,
            locationAdds,
            locationEdits,
        } = this.props;

        if (!user || locations.length > 0 || !Array.isArray(this.state.locations)) return (<div className="placeholder"></div>);

        return (
            <section className="user-profile-container">
                <div className="user-profile-body">
                    <UserDetailsBox 
                        user={user}
                        locationVisits={locationVisits}
                        locationWannaVisits={locationWannaVisits}
                        locationAdds={locationAdds}
                        locationEdits={locationEdits}
                        updateLocationSelection={this.updateLocationSelection}
                        />
                    <section className="user-locations-box">
                        <UserLocationsMapBox
                            user={user}
                            locations={this.state.locations}
                            selectedHeaderIdx={this.state.selectedHeaderIdx}
                            updateLocationSelection={this.updateLocationSelection}
                        />
                        <UserLocationsIndex
                            locations={this.state.locations}
                        />
                    </section>
                </div>
            </section>
        )
    }

}

export default UserProfile;