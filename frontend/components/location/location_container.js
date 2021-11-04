import { connect } from "react-redux";
import { fetchLocation } from "../../actions/location_actions";
import { createLocationVisit, deleteLocationVisit } from "../../actions/location_visit_actions";
import Location from "./location";

const mSTP = (state, ownProps) => ({
    location: state.entities.locations[ownProps.match.params.locationId]
});

const mDTP = (dispatch) => ({
    fetchLocation: locationId => dispatch(fetchLocation(locationId)),
    addVisit: locationVisit => dispatch(createLocationVisit(locationVisit)),
    deleteVisit: locationVisitId => dispatch(deleteLocationVisit(locationVisitId))
});

export default connect(mSTP, mDTP)(Location);