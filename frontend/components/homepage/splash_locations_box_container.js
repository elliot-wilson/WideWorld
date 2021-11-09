import { connect } from "react-redux";
import { fetchRandomLocations, clearLocations } from "../../actions/location_actions";
import SplashLocationsBox from "./splash_locations_box";

const mSTP = (state) => ({
    locations: state.entities.locations
});

const mDTP = (dispatch) => ({
    fetchRandomLocations: () => dispatch(fetchRandomLocations()),
    clearLocations: () => dispatch(clearLocations())
});

export default connect(mSTP, mDTP)(SplashLocationsBox);