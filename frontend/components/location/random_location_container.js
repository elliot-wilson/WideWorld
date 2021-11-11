import React from "react";
import { connect } from "react-redux";
import { fetchRandomLocation } from "../../actions/location_actions";
import { createLocationVisit, deleteLocationVisit } from "../../actions/location_visit_actions";
import Location from "./location";
import { Redirect, withRouter } from "react-router";


class RandomLocation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fetchComplete: false
        }
    }

    componentDidMount() {
        this.props.fetchRandomLocation()
            .then(() => this.setState({fetchComplete: true}));
    }

    render() {
        const { addVisit, deleteVisit, location, locations } = this.props;

        if (!this.state.fetchComplete) return (<div className="placeholder"></div>)

        return (
            <Redirect
                to={{
                    pathname: `/locations/${location.id}`,
                    state: {
                        randomLocation: location,
                        randomCheck: true,
                        locations,
                        addVisit,
                        deleteVisit
                    }
                }}
            />
        )
    }

}


const mSTP = (state) => ({
    locations: state.entities.locations,
    location: state.entities.locations[0]
});

const mDTP = (dispatch) => ({
    fetchRandomLocation: () => dispatch(fetchRandomLocation()),
    addVisit: locationVisit => dispatch(createLocationVisit(locationVisit)),
    deleteVisit: locationVisitId => dispatch(deleteLocationVisit(locationVisitId))
});

export default withRouter(connect(mSTP, mDTP)(RandomLocation));