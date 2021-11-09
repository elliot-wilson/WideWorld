import { connect } from "react-redux";
import { fetchRandomLocations, clearLocations } from "../../actions/location_actions";
import SplashLocationsBox from "./splash_locations_box";

const mSTP = (state) => ({
    locations: Object.values(state.entities.locations).slice(0, 9)
});

const mDTP = (dispatch) => ({
    fetchRandomLocations: () => dispatch(fetchRandomLocations()),
    clearLocations: () => dispatch(clearLocations())
});

export default connect(mSTP, mDTP)(SplashLocationsBox);