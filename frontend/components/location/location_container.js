import { connect } from "react-redux";
import { clearLocations, fetchLocation } from "../../actions/location_actions";
import { createLocationVisit, deleteLocationVisit } from "../../actions/location_visit_actions";
import Location from "./location";

const mSTP = (state, ownProps) => {

    const location = ownProps.randomLocation || state.entities.locations.find(location => location.id.toString() === ownProps.match.params.locationId)

    return {
        locations: state.entities.locations,
        location,
        isRandom: ownProps.isRandom
    }
};

const mDTP = (dispatch) => ({
    fetchLocation: locationId => dispatch(fetchLocation(locationId)),
    clearLocations: () => dispatch(clearLocations()),
    addVisit: locationVisit => dispatch(createLocationVisit(locationVisit)),
    deleteVisit: locationVisitId => dispatch(deleteLocationVisit(locationVisitId))
});

export default connect(mSTP, mDTP)(Location);