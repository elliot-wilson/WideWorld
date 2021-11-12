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
        const { location } = this.props;

        if (!this.state.fetchComplete) return (<div className="placeholder"></div>)

        return (
            <Redirect
                to={{
                    pathname: `/locations/${location.id}`,
                    state: {
                        randomLocation: location,
                        isRandom: true,
                    }
                }}
            />
        )
    }

}


const mSTP = (state) => ({
    location: state.entities.locations[0]
});

const mDTP = (dispatch) => ({
    fetchRandomLocation: () => dispatch(fetchRandomLocation()),
});

export default withRouter(connect(mSTP, mDTP)(RandomLocation));